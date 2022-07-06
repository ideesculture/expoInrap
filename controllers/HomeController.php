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


 	class HomeController extends ActionController {
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
           
			$blocks = $this->GetHomeContent2();

            $this->view->setVar("numberOfRow", $blocks["numberOfRow"]);
            $this->view->setVar("content", $blocks["rows"]);

            $this->render("home/index_html.php");
 		}

        public function SaveBlock(){
            $json = $this->request->getParameter("jsonTable", pString);
            file_put_contents($this->dir."/homeData/blocks.json", $json);

			$blocks = $this->GetHomeContent2();

            $this->view->setVar("numberOfRow", $blocks["numberOfRow"]);
            $this->view->setVar("content", $blocks["rows"]);
            $this->render("home/index_html.php");
        }

		

		public function Save2(){
			$vn_zone = $this->request->getParameter("zone", pInteger);
            $image = $this->request->getParameter("image", pString);
			if($this->request->getRequestMethod() == "POST") {
                // Get posted data 
               $vn_id = $this->request->getParameter("id", pInteger);
               $vn_type = $this->request->getParameter("type", pInteger);
               if($image) {
                    $vb_result = $this->SaveHomeContent2Image($vn_zone,$image);
                    $this->getView()->setVar("content", $this->GetHomeContent2());
                    $this->render('home/index_html.php');
               } else {
                    $vb_result = $this->SaveHomeContent2($vn_zone,$vn_type,$vn_id);
                    if(!$vb_result) {
                        // Not saved, redirect to home
                        $this->redirect(caNavUrl($this->request, '*', '*','Index'));
                    } else {

						$blocks = $this->GetHomeContent2();

						$this->view->setVar("numberOfRow", $blocks["numberOfRow"]);
						$this->view->setVar("content", $blocks["rows"]);
                        $this->render('home/index_html.php');
                    }
               }
               
           } else {
                // No posted data, get back to Index
               $this->redirect(caNavUrl($this->request, '*', '*','Index'));
           }
		}

		private function SaveHomeContent2($zone, $type, $value) {
			$o_data = new Db();
			$query = "SELECT *
			FROM plugin_cms_home
			where cell_id = ${zone}";
			$result = $o_data->query($query);
			$result = $result->getAllRows();
			if (empty($result)){
				// Si pas de donnée dans la case, on ajoute
				if ($type != 4){
					$query = "INSERT INTO plugin_cms_home (`type`, `cell_id`, `value_id`) VALUE (${type}, ${zone}, ${value})";
				}else{
					$query = "INSERT INTO plugin_cms_home (`type`, `cell_id`, `text_content`) VALUE (${type}, ${zone}, ${value})";
				}
				return $o_data->query($query);

			}else{
				if ($type != 4){
					$query = "REPLACE INTO plugin_cms_home (`type`, `cell_id`, `value_id`) VALUE (${type}, ${zone}, ${value})";
				}else{
					$query = "REPLACE INTO plugin_cms_home (`type`, `cell_id`, `text_content`) VALUE (${type}, ${zone}, ${value})";
				}
				return $o_data->query($query);
			}


		}

		public function searchExhibitionJeunesseJson() {
            $vs_search = $this->request->getParameter("search", pString);
		    $o_data = new Db();
		    $qr_result = $o_data->query("
			    SELECT * 
			    FROM ca_site_pages WHERE template_id = 5
                AND deleted = 0 
			    AND title like '%".$vs_search."%'
			    ORDER BY title ASC
			 ");

            $exhibitions =  $qr_result->getAllRows();
            foreach($exhibitions as $exhibition) {
				$exhibition_id = $exhibition["page_id"];
				$page = new ca_site_pages($exhibition_id);
				$content = $page->get("content");
	            $picture =json_decode($content["blocs"], true)["blocks"][0]["data"]["url"];
				
                print "<div data-id='".$exhibition_id
                ."' data-representation-url='".$picture
                ."' data-label=\""
                .str_replace('"','\"',$exhibition["title"])
                ."\" style='line-height:24px;height:24px;'>"
                ." ".($picture ? "<img src='".$picture."' style='height:50px;width:80px;object-fit:cover;'>" : "")." ".$exhibition["title"]
                ."</div>\n";
            }
            die();
        }

		public function searchExhibitionPartenaireJson() {
            $vs_search = $this->request->getParameter("search", pString);
		    $o_data = new Db();
		    $qr_result = $o_data->query("
			    SELECT * 
			    FROM ca_site_pages WHERE template_id = 4
                AND deleted = 0 
			    AND title like '%".$vs_search."%'
			    ORDER BY title ASC
			 ");

            $exhibitions =  $qr_result->getAllRows();
            foreach($exhibitions as $exhibition) {
				$exhibition_id = $exhibition["page_id"];
				$page = new ca_site_pages($exhibition_id);
				$content = $page->get("content");
	            $picture =json_decode($content["blocs"], true)["blocks"][0]["data"]["url"];
				
                print "<div data-id='".$exhibition_id
                ."' data-representation-url='".$picture
                ."' data-label=\""
                .str_replace('"','\"',$exhibition["title"])
                ."\" style='line-height:24px;height:24px;'>"
                ." ".($picture ? "<img src='".$picture."' style='height:50px;width:80px;object-fit:cover;'>" : "")." ".$exhibition["title"]
                ."</div>\n";
            }
            die();
        }
		public function searchExhibitionAdulteJson() {
            $vs_search = $this->request->getParameter("search", pString);
		    $o_data = new Db();
		    $qr_result = $o_data->query("
			    SELECT * 
			    FROM ca_site_pages WHERE template_id = 3
                AND deleted = 0 
			    AND title like '%".$vs_search."%'
			    ORDER BY title ASC
			 ");

            $exhibitions =  $qr_result->getAllRows();
            foreach($exhibitions as $exhibition) {
				$exhibition_id = $exhibition["page_id"];
				$page = new ca_site_pages($exhibition_id);
				$content = $page->get("content");
	            $picture =json_decode($content["blocs"], true)["blocks"][0]["data"]["url"];
				
                print "<div data-id='".$exhibition_id
                ."' data-representation-url='".$picture
                ."' data-label=\""
                .str_replace('"','\"',$exhibition["title"])
                ."\" style='line-height:24px;height:24px;'>"
                ." ".($picture ? "<img src='".$picture."' style='height:50px;width:80px;object-fit:cover;'>" : "")." ".$exhibition["title"]
                ."</div>\n";
            }
            die();
        }

		public function GetHomeContent2(){
			$blocks = file_get_contents($this->dir."/homeData/blocks.json");
            $blocks = json_decode($blocks, true);

			return $blocks;
		}
 		
 		
 	}
