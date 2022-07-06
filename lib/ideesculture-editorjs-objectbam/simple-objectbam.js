/**
 * Tool for creating image Blocks for Editor.js
 * Made with «Creating a Block Tool» tutorial {@link https://editorjs.io/creating-a-block-tool}
 *
 * @typedef {object} ImageToolData — Input/Output data format for our Tool
 * @property {string} url - image source URL
 * @property {string} caption - image caption
 * @property {boolean} withBorder - flag for adding a border
 * @property {boolean} withBackground - flag for adding a background
 * @property {boolean} floatRight
 * @property {boolean} floatLeft
 * @property {boolean} stretched - flag for stretching image to the full width of content
 *
 * @typedef {object} ImageToolConfig
 * @property {string} placeholder — custom placeholder for URL field
 */
class IdeescultureEditorjsObjectBam{
	/**
	 * Our tool should be placed at the Toolbox, so describe an icon and title
	 */
	static get toolbox() {
		return {
			title: 'Objet Bam',
			icon: '<svg version="1.0" xmlns="http://www.w3.org/2000/svg"  width="799.000000pt" height="1280.000000pt" viewBox="0 0 799.000000 1280.000000"  preserveAspectRatio="xMidYMid meet"> <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none"> <path d="M5565 12794 c-27 -2 -360 -8 -740 -14 -1712 -25 -2711 -41 -2965 -48 -321 -8 -310 -3 -236 -111 147 -216 406 -367 714 -417 85 -14 158 -14 607 -5 281 6 953 15 1495 21 542 5 1032 12 1090 16 204 11 319 39 485 119 187 90 345 223 410 347 51 98 75 92 -401 94 -225 1 -431 0 -459 -2z"/> <path d="M6065 12256 c-49 -13 -141 -40 -203 -61 -106 -34 -117 -40 -172 -95 -76 -76 -131 -158 -206 -310 -105 -212 -189 -466 -182 -553 l3 -40 51 41 c29 23 124 119 212 214 245 263 342 337 494 373 237 56 452 -38 593 -259 105 -164 155 -396 185 -851 35 -542 42 -639 56 -720 30 -188 80 -286 190 -376 38 -32 141 -123 229 -203 88 -80 166 -146 173 -146 9 0 8 9 -4 38 -37 83 -127 334 -159 442 -99 333 -126 517 -145 995 -18 445 -46 662 -111 857 -41 121 -105 259 -159 339 -57 85 -181 205 -261 252 -110 65 -173 80 -344 84 -133 3 -160 0 -240 -21z"/> <path d="M1690 12246 c-117 -33 -227 -94 -382 -213 -156 -120 -252 -249 -331 -448 -98 -246 -138 -497 -157 -990 -12 -323 -18 -413 -36 -590 -21 -206 -36 -255 -186 -570 -91 -191 -146 -330 -135 -342 16 -15 49 18 112 110 81 119 223 263 340 345 44 30 96 69 115 85 128 109 153 238 165 856 13 691 53 883 233 1109 70 87 112 123 189 161 85 42 124 51 268 61 200 14 297 -13 433 -124 76 -61 139 -137 257 -311 91 -134 132 -185 148 -185 15 0 -1 127 -28 230 -28 103 -118 306 -191 431 -68 116 -213 263 -269 273 -22 4 -122 34 -222 67 -193 62 -237 69 -323 45z"/> <path d="M5040 12123 c-1017 -10 -2526 -35 -2533 -42 -6 -6 9 -39 36 -83 108 -174 214 -446 312 -803 79 -286 132 -572 139 -751 5 -110 18 -122 161 -134 278 -23 601 -32 971 -27 409 6 475 10 832 53 28 4 53 15 72 32 28 26 30 34 50 207 74 626 190 1038 396 1407 36 65 63 125 60 133 -4 12 -27 15 -123 13 -65 -2 -233 -4 -373 -5z"/> <path d="M4908 10215 c-230 -32 -435 -36 -1253 -30 -823 7 -988 3 -1172 -29 -88 -16 -196 -55 -195 -71 1 -11 26 -15 257 -44 354 -45 712 -72 1217 -91 473 -18 1160 13 1753 81 312 35 368 44 372 56 9 27 -25 35 -422 103 -255 44 -375 49 -557 25z"/> <path d="M1915 9984 c-473 -219 -673 -335 -937 -546 -122 -96 -281 -247 -400 -380 -95 -105 -113 -131 -168 -245 -34 -70 -75 -146 -90 -168 -48 -70 -77 -136 -124 -285 -140 -444 -181 -725 -193 -1330 -13 -672 100 -1247 386 -1959 271 -674 804 -1688 1206 -2296 121 -182 649 -907 780 -1070 96 -119 242 -281 318 -352 105 -99 345 -198 703 -288 569 -143 1103 -102 1577 123 170 81 250 137 386 267 202 195 357 396 728 945 666 984 905 1399 1203 2079 365 837 621 1765 670 2431 6 85 15 205 20 266 14 159 12 242 -10 489 -30 322 -65 507 -141 741 -104 320 -226 540 -435 783 -204 237 -439 423 -776 612 -200 113 -291 155 -387 180 l-74 19 -241 -30 c-133 -17 -374 -48 -536 -70 -613 -81 -893 -100 -1460 -100 -504 0 -752 14 -1089 61 -240 33 -558 103 -700 153 -70 25 -107 20 -216 -30z"/> <path d="M5261 1265 c-217 -152 -535 -263 -921 -322 -165 -26 -636 -25 -800 0 -265 42 -484 109 -696 213 -71 35 -135 64 -142 64 -17 0 -26 -45 -13 -68 11 -20 131 -82 259 -133 676 -269 1539 -247 2158 55 225 110 289 160 266 211 -16 35 -38 31 -111 -20z"/> <path d="M2530 1211 c-8 -5 -54 -18 -102 -30 -122 -29 -230 -72 -323 -130 -87 -54 -235 -177 -261 -216 -15 -23 -15 -27 6 -70 12 -25 40 -61 63 -81 42 -37 211 -123 277 -142 19 -5 82 -24 140 -40 398 -116 824 -171 1495 -193 359 -12 377 -12 600 10 725 71 1020 122 1350 232 229 76 361 153 392 227 21 51 3 90 -78 166 -54 52 -95 78 -182 120 -124 60 -354 146 -389 146 -13 0 -60 -25 -106 -55 -226 -147 -552 -281 -841 -345 -219 -48 -293 -54 -616 -54 -271 0 -328 3 -452 22 -273 43 -488 109 -698 215 -143 72 -185 117 -185 198 0 27 -3 29 -37 29 -21 0 -45 -5 -53 -9z"/> <path d="M6040 571 c-186 -88 -306 -132 -488 -182 -367 -99 -711 -150 -1217 -180 -226 -13 -1085 -6 -1270 11 -352 33 -661 113 -1037 269 -81 34 -154 61 -163 61 -18 0 -20 -36 -4 -77 6 -15 28 -52 50 -81 46 -61 131 -108 296 -165 205 -72 574 -148 828 -171 267 -25 1113 -62 1205 -53 30 3 129 12 220 21 91 9 239 23 330 32 452 43 763 106 1030 211 240 94 343 162 375 247 17 45 17 118 0 122 -5 2 -75 -28 -155 -65z"/> </g> </svg> '
		};
	}

	/**
	 * Allow render Image Blocks by pasting HTML tags, files and URLs
	 * @see {@link https://editorjs.io/paste-substitutions}
	 * @return {{tags: string[], files: {mimeTypes: string[], extensions: string[]}, patterns: {image: RegExp}}}
	 */
	static get pasteConfig() {
		return {

		}
	}

	/**
	 * Automatic sanitize config
	 * @see {@link https://editorjs.io/sanitize-saved-data}
	 */
	static get sanitize() {
		return {
			url: {},
			caption: {
				b: true,
				a: {
					href: true
				},
				i: true
			}
		}
	}

	/**
	 * Tool class constructor
	 * @param {ImageToolData} data — previously saved data
	 * @param {object} api — Editor.js Core API {@link  https://editorjs.io/api}
	 * @param {ImageToolConfig} config — custom config that we provide to our tool's user
	 */
	constructor({ data, api, config }) {
		this.api = api;
		this.config = config || {};
		this.data = {
			objectId: data.objectId || '',
			
		};

		this.wrapper = undefined;
		this.settings = [

		];
	}

	/**
	 * Return a Tool's UI
	 * @return {HTMLElement}
	 */
	render() {
		this.wrapper = document.createElement('div');
		this.wrapper.classList.add('diapo');
		this.wrapper.classList.add('container');
		if (this.data && this.data.objectId) {
			this._createDiapo(this.data);
			return this.wrapper;
		}

		const input = document.createElement('input');
		input.setAttribute("id", "object_id")
		input.placeholder = "Id de l'objet bam";
		
		this.wrapper.appendChild(input);


		return this.wrapper;
	}

	_createDiapo(data) {
		var titre = "";
		fetch("/ajax/objectInformationById.php?q="+data.objectId).then(function(response){
			return response.json().then(function(json) {

				titre = json.type;
				div2.innerHTML = "<p>(X/X)</p>";
				var h3 = document.createElement("h3");
				h3.innerHTML = titre;
				div2.appendChild(h3);
				
				// Chrono
				var p1 = document.createElement("p");
				p1.innerHTML = json.periode_chrono;
				div2.appendChild(p1);
				// Description
				var p2 = document.createElement("p");
				p2.innerHTML = json.description;
				p2.setAttribute("id", "descri");
				p2.style.setProperty("font-size", "12px", "important");
				p2.style.textAlign = "justify";
				div2.appendChild(p2);

				//Commune
				if (json.commune != ""){
					var h4_1 = document.createElement("h4");
					h4_1.innerHTML = "Commune de découverte";
					div2.appendChild(h4_1);
					var p3 = document.createElement("p");
					p3.innerHTML = json.commune;
					div2.appendChild(p3);
				}

				//Lieudit
				if (json.lieudit != ""){
					var h4_2 = document.createElement("h4");
					h4_2.innerHTML = "Lieu-dit";
					div2.appendChild(h4_2);
					var p4 = document.createElement("p");
					p4.innerHTML = json.lieudit;
					div2.appendChild(p4);
				}

				//Type d'intervention
				if (json.type_intervention != ""){
					var h4_3 = document.createElement("h4");
					h4_3.innerHTML = "Lieu-dit";
					div2.appendChild(h4_3);
					var p5 = document.createElement("p");
					p5.innerHTML = json.type_intervention;
					div2.appendChild(p5);
				}

				//Date de fouille
				if (json.date_fouille != ""){
					var h4_4 = document.createElement("h4");
					h4_4.innerHTML = "Date de fouille";
					div2.appendChild(h4_4);
					var p6 = document.createElement("p");
					p6.innerHTML = json.date_fouille;
					div2.appendChild(p6);
				}

				//Responsable scientifique
				if (json.ro != ""){
					var h4_5 = document.createElement("h4");
					h4_5.innerHTML = "Responsable scientifique";
					div2.appendChild(h4_5);
					var p7 = document.createElement("p");
					p7.innerHTML = json.ro;
					div2.appendChild(p7);
				}

				//Numéro d'inv
				if (json.idno != ""){
					var h4_6 = document.createElement("h4");
					h4_6.innerHTML = "Numéro d'inventaire";
					div2.appendChild(h4_6);
					var p8 = document.createElement("p");
					p8.innerHTML = json.idno;
					div2.appendChild(p8);
				}

				//Domaine
				if (json.domaine != ""){
					var h4_7 = document.createElement("h4");
					h4_7.innerHTML = "Domaine";
					div2.appendChild(h4_7);
					var p9 = document.createElement("p");
					p9.innerHTML = json.domaine;
					div2.appendChild(p9);
				}
				//Matériaux
				if (json.matiere != ""){
					var h4_8 = document.createElement("h4");
					h4_8.innerHTML = "Matière";
					div2.appendChild(h4_8);
					var p10 = document.createElement("p");
					p10.innerHTML = json.matiere;
					div2.appendChild(p10);
				}
				//Dimensions
				if (json.dim != ""){
					var h4_8 = document.createElement("h4");
					h4_8.innerHTML = "Dimensions";
					div2.appendChild(h4_8);
					var p10 = document.createElement("p");
					p10.innerHTML = json.dim;
					div2.appendChild(p10);
				}

				//PeriodeChrono2
				if (json.periode_chrono2 != ""){
					var h4_8 = document.createElement("h4");
					h4_8.innerHTML = "Période Chronologique";
					div2.appendChild(h4_8);
					var p10 = document.createElement("p");
					p10.innerHTML = json.periode_chrono2;
					div2.appendChild(p10);
				}
				//Datation précise
				if (json.datation != ""){
					var h4_8 = document.createElement("h4");
					h4_8.innerHTML = "Datation précise";
					div2.appendChild(h4_8);
					var p10 = document.createElement("p");
					p10.innerHTML = json.datation;
					div2.appendChild(p10);
				}

				//Biblio
				if (json.biblio != ""){
					var h4_8 = document.createElement("h4");
					h4_8.innerHTML = "Bibliographie";
					div2.appendChild(h4_8);
					var p10 = document.createElement("p");
					p10.innerHTML = json.biblio;
					div2.appendChild(p10);
				}
				//Dolia
				if (json.dolia.includes("dolia")){
					var h4_8 = document.createElement("h4");
					h4_8.innerHTML = "Notice du rapport d’opération";
					div2.appendChild(h4_8);
					var p10 = document.createElement("p");
					p10.innerHTML = json.dolia;
					div2.appendChild(p10);
				}
				

			  });
		})
		
		const firstRow = document.createElement("div");
		firstRow.classList.add("row", "objecttext");

		const div1 = document.createElement("div");
		div1.classList.add("col-md-5", "col-md-offset-1", "col-sm-10", "col-sm-offset-1");
		var p1 = document.createElement("p");
		p1.innerHTML = "ID de l'objet bam : ";
		var span1 = document.createElement("span");
		span1.innerHTML = data.objectId;
		span1.contentEditable = true;
		span1.setAttribute("id", "object_id");
		p1.appendChild(span1);
		div1.appendChild(p1);
		// TODO IMAGE ICI

		firstRow.appendChild(div1)

		const div2 = document.createElement("div");
		div2.classList.add("col-md-5", "col-md-offset-1", "col-sm-10", "col-sm-offset-1",  "objecttext");

	

		firstRow.appendChild(div2);

		this.wrapper.innerHTML = '';
		this.wrapper.appendChild(firstRow);


	}

	/**
	 * @private
	 * Create image with caption field
	 * @param {string} url — image source
	 * @param {string} captionText — caption value
	 */
	_createImage(url, captionText) {
		const image = document.createElement('img');
		const legend = document.createElement('div');
		legend.classList.add("legend");
		const containerImage = this.wrapper.querySelector(".leftcol");
		containerImage.innerHTML = '';

		const div = document.createElement("div");
		div.classList.add("copyright");
		div.innerHTML = '<div style="display: inline-block; transform: rotate(90deg)">©</div>';
		legend.contentEditable = true;
		legend.innerHTML = captionText || '';
		div.appendChild(legend);



		image.src = url;

		containerImage.appendChild(div);
		containerImage.appendChild(image);

		this._acceptTuneView();

	}

	/**
	 * Extract data from the UI
	 * @param {HTMLElement} blockContent — element returned by render method
	 * @return {SimpleImageData}
	 */
	save(blockContent) {
		const id = blockContent.querySelector('#object_id');
		var idvalue = "";
		if (id.value == undefined) {
			idvalue = id.innerHTML;
		} else {
			idvalue = id.value;
		}
		
		return Object.assign(this.data, {
			objectId: idvalue,
			
		});
	}

	/**
	 * Skip empty blocks
	 * @see {@link https://editorjs.io/saved-data-validation}
	 * @param {ImageToolConfig} savedData
	 * @return {boolean}
	 */
	validate(savedData) {
		if (!savedData.objectId.trim()) {
			return false;
		}

		return true;
	}

	/**
	 * Making a Block settings: 'add border', 'add background', 'stretch to full width'
	 * @see https://editorjs.io/making-a-block-settings — tutorial
	 * @see https://editorjs.io/tools-api#rendersettings - API method description
	 * @return {HTMLDivElement}
	 */
	renderSettings() {
		const wrapper = document.createElement('div');

		this.settings.forEach(tune => {
			let button = document.createElement('div');

			button.classList.add(this.api.styles.settingsButton);
			button.classList.toggle(this.api.styles.settingsButtonActive, this.data[tune.name]);
			button.innerHTML = tune.icon;
			wrapper.appendChild(button);

			button.addEventListener('click', () => {
				this._toggleTune(tune.name);
				button.classList.toggle(this.api.styles.settingsButtonActive);

			});

		});

		return wrapper;
	}

	/**
	 * @private
	 * Click on the Settings Button
	 * @param {string} tune — tune name from this.settings
	 */
	_toggleTune(tune) {
		this.data[tune] = !this.data[tune];
		this._acceptTuneView();
	}

	/**
	 * Add specified class corresponds with activated tunes
	 * @private
	 */
	_acceptTuneView() {
		this.settings.forEach(tune => {
			this.wrapper.classList.toggle(tune.name, !!this.data[tune.name]);

			if (tune.name === 'stretched') {
				this.api.blocks.stretchBlock(this.api.blocks.getCurrentBlockIndex(), !!this.data.stretched);
			}
		});
	}

	/**
	 * Handle paste event
	 * @see https://editorjs.io/tools-api#onpaste - API description
	 * @param {CustomEvent }event
	 */
	onPaste(event) {
		switch (event.type) {
			case 'tag':
				const imgTag = event.detail.data;
				this._createImage(imgTag.src);
				break;
			case 'file':
				/* We need to read file here as base64 string */
				const file = event.detail.file;
				const reader = new FileReader();

				reader.onload = (loadEvent) => {
					this._createImage(loadEvent.target.result);
				};

				reader.readAsDataURL(file);
				break;
			case 'pattern':
				const src = event.detail.data;

				this._createImage(src);
				break;
		}
	}
}