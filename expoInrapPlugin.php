<?php
/* ----------------------------------------------------------------------
 * mediaImportPlugin.php :
 * ----------------------------------------------------------------------
 * CollectiveAccess
 * Open-source collections management software
 * ----------------------------------------------------------------------
 *
 * Software by Whirl-i-Gig (http://www.whirl-i-gig.com)
 * Copyright 2010 Whirl-i-Gig
 *
 * For more information visit http://www.CollectiveAccess.org
 *
 * This program is free software; you may redistribute it and/or modify it under
 * the terms of the provided license as published by Whirl-i-Gig
 *
 * CollectiveAccess is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTIES whatsoever, including any implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 *
 * This source code is free and modifiable under the terms of
 * GNU General Public License. (http://www.gnu.org/copyleft/gpl.html). See
 * the "license.txt" file for details, or visit the CollectiveAccess web site at
 * http://www.CollectiveAccess.org
 *
 * ----------------------------------------------------------------------
 */

	class expoInrapPlugin extends BaseApplicationPlugin {
		# -------------------------------------------------------
		protected $description = 'CA : expoInrapPlugin';
		# -------------------------------------------------------
			private $opo_config;
			private $ops_plugin_path;
		# -------------------------------------------------------
		public function __construct($ps_plugin_path) {
			$this->ops_plugin_path = $ps_plugin_path;
			$this->description = "expoInrapPlugin";
			parent::__construct();
			$this->opo_config = Configuration::load($ps_plugin_path.'/conf/expoInrap.conf');
		}
		
		/**
		 * Override checkStatus() to return true - the providencePluginUserMenuPlugin always initializes ok... (part to complete)
		 */
		public function checkStatus() {
			return array(
				'description' => $this->getDescription(),
				'errors' => array(),
				'warnings' => array(),
				'available' => 1 //((bool)$this->opo_config->get('enabled'))
			);
		}

		# -------------------------------------------------------
		/**
		 * Add plugin user actions
		 */
		static function getRoleActionList() {
			return array(
			);		
		}
		
		# -------------------------------------------------------
		/**
		 * Add plugin user actions
		 */
		public function hookGetRoleActionList($pa_role_list) {
		
			return $pa_role_list;
		}

		 /**
		 * Insert activity menu
		 */
		public function hookRenderMenuBar($pa_menu_bar) {
			if ($o_req = $this->getRequest()) {

				$default_menu_action = array(
					'displayName' => _t('Expositions'),
					"default" => array(
						'module' => 'expoInrap',
						'controller' => 'Exposition',
						'action' => 'IndexExpo'
					),
					'navigation' => array(
						"Home" => array(
                            "displayName" => "Page d'accueil Galerie Muséale",
                            "default" => array(
                                'module' => 'expoInrap',
                                'controller' => 'Home',
                                'action' => 'Index'
                            )
							),
						"Jeunesse"=> array(
							'displayName' => "Exposition jeunesse",
							"default" => array(
								'module' => 'expoInrap',
								'controller' => 'Jeunesse',
								'action' => 'Index'

							)
                        ),
                        "Expo" => array(
                            "displayName" => "Exposition adulte",
                            "default" => array(
                                'module' => 'expoInrap',
                                'controller' => 'Exposition',
                                'action' => 'Index'
                            )
                        ),
                        "Partenaire" => array(
                            "displayName" => "Exposition partenaire",
                            "default" => array(
                                'module' => 'expoInrap',
                                'controller' => 'Partenaire',
                                'action' => 'Index'
                            )
                        )
						

					)
				);
				$pa_menu_bar['expo_menu'] =
					$default_menu_action
				;
			}

			return $pa_menu_bar;
		}

	}
