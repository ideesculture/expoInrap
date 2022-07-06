<?php
/* Exhibition Creator plugin for CollectiveAccess
 *
 * Plugin by idéesculture – Gautier MICHELIN
 *
 * This source code is free and modifiable under the terms of
 * GNU General Public License v3. (http://www.gnu.org/copyleft/gpl.html). See
 * the "license.txt" file for details, or visit the CollectiveAccess web site at
 * http://www.CollectiveAccess.org
 *
 * ----------------------------------------------------------------------
 */

    require_once(__CA_MODELS_DIR__.'/ca_site_pages.php');


 	class PartenaireController extends ActionController {
 		# -------------------------------------------------------
  		protected $opo_config;		// plugin configuration file
 		protected $opa_locales;
	    protected $path;
	    protected $dir;

 		# -------------------------------------------------------
 		# Constructor
 		# -------------------------------------------------------

 		public function __construct(&$po_request, &$po_response, $pa_view_paths=null) {
 			global $allowed_universes;
 			
 			parent::__construct($po_request, $po_response, $pa_view_paths);
 			
// 			if (!$this->request->user->canDoAction('can_use_exhibition_editor_plugin')) {
// 				$this->response->setRedirect($this->request->config->get('error_display_url').'/n/3000?r='.urlencode($this->request->getFullUrlPath()));
// 				return;
// 			}

		    // We need the entire full path for PDF rendering
		    $this->path = "http://".__CA_SITE_HOSTNAME__.__CA_URL_ROOT__."/app/plugins/expoInrap/";
		    $this->dir = __CA_BASE_DIR__."/app/plugins/expoInrap/";

		    $this->opo_config = Configuration::load($this->dir.'conf/expoInrap.conf');

 		}

 		# -------------------------------------------------------
 		# Local functions
 		# -------------------------------------------------------


 		# -------------------------------------------------------
 		# Functions to render views
 		# -------------------------------------------------------
 		public function Index($type="") {
            $allExpos = ca_site_pages::getPageList();
            $allExpos = array_reverse($allExpos);
            $expos = [];
            foreach ($allExpos as $expo) {
                if ($expo["template_title"]=="partenaire") {
                    $expos[$expo["page_id"]] = [$expo["title"], $expo["access"]];
                }
            }

            $this->view->setVar("expos", $expos);

            $this->render("adulte/index_html.php");
            

 		}

 		public function editForm() {
            $expo_id = $this->request->getParameter("expo_id", pInteger);
            $page = new ca_site_pages($expo_id);
            $content = $page->get("content");
            $this->view->setVar("expo_id", $expo_id);
            $this->view->setVar("content", $content);

            $this->render("adulte/editor_html.php");
	    }

        public function SaveExpoJson() {
            $id= $this->request->getParameter("id", pInteger);
            // TODO Redirect if no ID
            $page = new ca_site_pages($id);
            $page->setMode(ACCESS_WRITE);
            $article = $page->get("content");
            $article["blocs"]=json_encode($_POST);
            $article["blocs"]=str_replace('"false"',"false",$article["blocs"]);
            $article["blocs"]=str_replace('"true"',"true",$article["blocs"]);
            $page->set("content", $article);
            $page->update();
            if($page->numErrors()) {
                print json_encode(["result"=>"ko", "errors"=>json_encode($page->getErrors())]);
            } else {
                print json_encode(["result"=>"ok", "id"=>$id]);
            }
        }
 		
 	}
 ?>
