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


 	class JeunesseController extends ActionController {
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
                if ($expo["template_title"]=="jeunesse") {
                    $expos[$expo["page_id"]] = [$expo["title"], $expo["access"]];
                }
            }

            $this->view->setVar("expos", $expos);

            $this->render("jeunesse/index_html.php");
            

 		}

 		public function editForm() {
            $expo_id = $this->request->getParameter("expo_id", pInteger);
            $page = new ca_site_pages($expo_id);
            $content = $page->get("content");
            $this->view->setVar("expo_id", $expo_id);
            $this->view->setVar("content", $content);
            $o_data = new Db();
            $qr_result = $o_data->query("SELECT version FROM ca_site_pages_versions WHERE page_id='".$expo_id."'");
            $this->view->setVar("versions", $qr_result->getAllRows());
            $this->view->setVar("is_version", false);
            $this->render("jeunesse/editor_html.php");
	    }

        public function editFormFromVersion() {
            $expo_id = $this->request->getParameter("expo_id", pInteger);
            $version = $this->request->getParameter("version", pInteger);
            $page = new ca_site_pages($expo_id);

            $o_data = new Db();
            $qr_result = $o_data->query("SELECT content FROM ca_site_pages_versions WHERE page_id='".$expo_id."' AND version=".$version);
            $b64 = $qr_result->getAllRows()[0]["content"];
            $vars = base64_decode($b64);
            $content = unserialize($vars);
            //$content = $page->get("content");

            // Decoder content : base64 à décoder, puis déserialisation
            $this->view->setVar("expo_id", $expo_id);
            $this->view->setVar("content", $content);
            $o_data = new Db();
            $qr_result = $o_data->query("SELECT version FROM ca_site_pages_versions WHERE page_id='".$expo_id."'");
            $this->view->setVar("versions", $qr_result->getAllRows());
            $this->view->setVar("is_version", true);
            $this->render("jeunesse/editor_html.php");
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

            // VERSIONS
            // Compute last version saved inside ca_site_pages_versions
            $o_data = new Db();
            $qr_result = $o_data->query("SELECT max(version) as max FROM ca_site_pages_versions WHERE page_id='".$id."'");
            $max_version = $qr_result->getAllRows()[0]["max"];
            $next_version = $max_version+1;
            $query = "SELECT * FROM ca_site_pages WHERE page_id='".$id."'";
            $qr_values = $o_data->query($query);
            $values = $qr_values->getAllRows()[0];

            // CLONE INSIDE VERSION BUT WITH +1
            $request = "INSERT INTO ca_site_pages_versions (page_id, template_id, title, description, path, content, keywords, access, deleted, view_count, version) VALUES (".
            $id.", \"".$values["template_id"]."\", \"".$values["title"]."\", \"".$values["description"]."\", \"".
            $values["path"]."\", \"".$values["content"]."\", \"".$values["keywords"]."\", \"".$values["access"]."\", \"".$values["deleted"]."\", \"".$values["view_count"]."\", \"".
            ($max_version+1)."\")";
            //print $request;die();
            //var_dump($values);die();
            $qr_result = $o_data->query($request);
            //var_dump($qr_result);die();

            $page->update();
            if($page->numErrors()) {
                print json_encode(["result"=>"ko", "errors"=>json_encode($page->getErrors())]);
            } else {
                print json_encode(["result"=>"ok", "id"=>$id]);
            }
        }
 		
 	}
 ?>
