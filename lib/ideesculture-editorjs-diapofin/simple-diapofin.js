/**
 * Tool for creating image Blocks for Editor.js
 * Made with «Creating a Block Tool» tutorial {@link https://editorjs.io/creating-a-block-tool}
 *
 * @typedef {object} ImageToolData — Input/Output data format for our Tool
 * @property {string} title
 * @property {string} subtitle
 * @property {string} url
 * @property {string} legend
 * @property {string} text
 * @property {string} color
 * @property {string} illustration
 *
 * @typedef {object} ImageToolConfig
 * @property {string} placeholder — custom placeholder for URL field
 */
class IdeescultureEditorjsDiapoFin {
	/**
		 * Our tool should be placed at the Toolbox, so describe an icon and title
		 */
	static get toolbox() {
		return {
			title: 'Diapo de fin',
			icon: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve"><g><g transform="translate(0.000000,511.000000) scale(0.100000,-0.100000)"><path d="M2273,3572v-181.1h3632.4h3632.4V845v-2545.9h181.1H9900v2727v2727H6086.5H2273V3572z"/><path d="M1548.7,2837v-191.7h3632.4h3632.4V110v-2535.2h181.1h181.1v2727v2727H5362.2H1548.7V2837z"/><path d="M824.3,2102v-181.1h3632.4h3632.4V-625v-2545.9h181.1h181.1v2727v2727H4637.8H824.3V2102z"/><path d="M100-987.2V-3533h3813.5H7727v2545.9v2545.9H3913.5H100V-987.2z M7364.8-987.2v-2183.7H3913.5H462.2v2183.7v2183.7h3451.3h3451.3V-987.2z"/><path d="M4738,840.7c-247.1-411.2-2081.4-3608.9-2081.4-3626c0-17,662.6-23.4,2162.4-23.4c1188.8,0,2162.4,4.3,2162.4,10.6c0,10.7-2147.5,3738.9-2162.4,3756C4814.6,962.2,4778.4,908.9,4738,840.7z"/><path d="M1235.5-1952.3c-249.3-430.4-458-798.9-466.6-818.1c-12.8-36.2,40.5-38.3,918.2-38.3s931,2.1,922.5,38.3c-10.7,34.1-879.9,1553.1-909.7,1585C1693.6-1176.8,1484.8-1521.9,1235.5-1952.3z"/></g></g></svg>'
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
			text: {
				b: true,
				a: {
					href: true
				},
				i: true,
				br: true
			},
			illustration: {
				b: true,
				a: {
					href: true
				},
				i: true,
				br: true
			},
			legend: {
				b: true,
				a: {
					href: true
				},
				i: true,
				br: true
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
			title: data.title || '',
			subtitle: data.subtitle || '',
			url: data.url || '',
			legend: data.legend || '',
			text: data.text || '',
			color: data.color || '',
			illustration: data.illustration || '',
			subUrl1: data.subUrl1 || '',
			subUrl2: data.subUrl2 || '',
			subUrl3: data.subUrl3 || '',
			subUrl4: data.subUrl4 || '',
			subUrl5: data.subUrl5 || ''

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
		if (this.data && this.data.title) {
			this._createDiapo(this.data);
			return this.wrapper;
		}

		const input = document.createElement('input');
		input.setAttribute("id", "Title")
		input.placeholder = "Titre";
		const input2 = document.createElement('input');
		input2.setAttribute("id", "subtitle");
		input2.placeholder = "Sous titre";

		const input3 = document.createElement('input');
		input3.classList.add("add-image-diapo");
		input3.placeholder = "URL - Image";
		input3.addEventListener('paste', (event) => {
			this._createImage(event.clipboardData.getData('text'));
		});

		const input4 = document.createElement("input");
		input4.setAttribute("id", "colorInput");
		input4.placeholder = "Couleur #fff";
		input4.addEventListener('paste', (event) => {
			this._changeBackgroundColor(event.clipboardData.getData('text'));

		});


		const firstRow = document.createElement("div");
		firstRow.classList.add("row");
		const div1 = document.createElement("div");
		div1.classList.add("col-md-1", "col-sm-1", "col-lg-2");
		div1.appendChild(input4);
		firstRow.appendChild(div1)
		const div2 = document.createElement("div");
		div2.classList.add("col-md-5", "col-sm-10", "col-lg-4", "leftcol");
		div2.appendChild(input3);
		firstRow.appendChild(div2);
		const div3 = document.createElement("div");
		div3.classList.add("col-md-5", "col-md-offset-0", "col-sm-10", "col-sm-offset-1", "col-lg-4", "rightcol");
		div3.style.padding = "20px 30px";
		div3.appendChild(input);
		div3.appendChild(input2);

		firstRow.appendChild(div3);

		this.wrapper.appendChild(firstRow);


		return this.wrapper;
	}

	_changeBackgroundColor(hex) {

		this.wrapper.style.backgroundColor = (hex.includes("#")) ? hex : "#" + hex;
	}

	_createDiapo(data) {

		const firstRow = document.createElement("div");
		firstRow.classList.add("row");
		firstRow.style.backgroundColor = (data.color.includes("#")) ? data.color : "#" + data.color;
		firstRow.style.color = "white";
		const div1 = document.createElement("div");
		div1.setAttribute("id", "color");
		const titreColor = document.createElement("span");
		titreColor.innerHTML = "Couleur :";
		const div1b = document.createElement("span");
		div1b.setAttribute("id", "colorInput");
		div1b.classList.add("contentEditableWhite");
		div1.classList.add("col-md-12", "col-sm-12", "col-lg-12");

		div1b.contentEditable = true;
		div1b.innerHTML = data.color;
		div1.appendChild(titreColor);
		div1.appendChild(div1b);
		firstRow.appendChild(div1);

		const div2 = document.createElement("div");
		div2.classList.add("col-md-5", "col-sm-10", "col-lg-4", "leftcol");

		const copydiv = document.createElement("div");
		const legend = document.createElement('span');
		legend.classList.add("legend");
		const symb_c = document.createElement('span');
		symb_c.classList.add("symbole");
		const div4 = document.createElement("span");
		div4.classList.add("copyright");
		//div4.classList.add("legend");
		//div4.contentEditable = true;
		div4.innerHTML = '';
		legend.contentEditable = true;
		legend.style.backgroundColor = "white";
		symb_c.innerHTML = "© ";
		legend.innerHTML = data.legend || '';
		copydiv.appendChild(symb_c);
		copydiv.appendChild(legend);
		div4.appendChild(copydiv);

		if (data.url) {
			const image = document.createElement('img');
			image.src = data.url;
			div2.appendChild(image);
		}


		//ICI IMAGE NORMALEMENT DANS DIV1
		firstRow.appendChild(div2);
		const div3 = document.createElement("div");
		div3.classList.add("col-md-5", "col-md-offset-0", "col-sm-10", "col-sm-offset-1", "col-lg-4", "rightcol");
		div3.style.padding = "20px 30px";

		//TITRE
		const renderedtitle = document.createElement("h2");
		renderedtitle.setAttribute("id", "Title");
		renderedtitle.innerHTML = data.title;
		renderedtitle.contentEditable = true;
		div3.appendChild(renderedtitle);

		//SOUS TITRE
		const renderedsubtitle = document.createElement("h3");
		renderedsubtitle.setAttribute("id", "subtitle");
		renderedsubtitle.innerHTML = data.subtitle;
		renderedsubtitle.contentEditable = true;
		div3.appendChild(renderedsubtitle);

		firstRow.appendChild(div3);

		const firstBRow = document.createElement("div");
		firstBRow.classList.add("row");
		firstBRow.style.backgroundColor = (data.color.includes("#")) ? data.color : "#" + data.color;
		firstBRow.style.color = "white";
		const divB1 = document.createElement("div");
		divB1.setAttribute("id", "color");
		divB1.classList.add("col-md-12", "col-sm-12", "col-lg-12");
		//TITRE
		const imageUrlTxt = document.createElement("p");
		imageUrlTxt.setAttribute("class", "imageUrl");
		imageUrlTxt.innerHTML = data.url;
		imageUrlTxt.contentEditable = true;
		divB1.appendChild(imageUrlTxt);
		firstBRow.appendChild(divB1);

		var secondRow = document.createElement("div");
		secondRow.classList.add("row");
		secondRow.style.margin = "O auto";
		secondRow.style.padding = "20px 30px";
		var div2_1 = document.createElement("div");
		div2_1.classList.add("col-sm-5", "col-sm-offset-1");
		var h3_1 = document.createElement("h3");
		h3_1.style.padding = 0;
		h3_1.style.margin = 0;
		h3_1.innerHTML = data.title;
		if (data.color) {
			h3_1.style.color = (data.color.includes("#")) ? data.color : "#" + data.color;
		}
		div2_1.appendChild(h3_1);
		var h4_1 = document.createElement('h4');
		h4_1.innerHTML = data.subtitle;
		h4_1.style.padding = 0;
		h4_1.style.margin = 0;
		h4_1.style.color = "grey";
		div2_1.appendChild(h4_1);
		secondRow.appendChild(div2_1);

		var thirdRow = document.createElement("div");
		thirdRow.classList.add("row");
		thirdRow.style.margin = "O auto";
		thirdRow.style.padding = "0 30px 40px 30px";
		//thirdRow.style.minHeight = "268px";

		var div3_1 = document.createElement("div");
		div3_1.classList.add("col-sm-12");
		var p3_1 = document.createElement("p");
		p3_1.contentEditable = true;
		p3_1.classList.add("columns2");
		p3_1.setAttribute("id", "text");
		if (data.text.length != 0) {
			p3_1.innerHTML = data.text;
		} else {
			p3_1.innerHTML = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
		}
		div3_1.appendChild(p3_1);
		var p3_2 = document.createElement("p");
		p3_2.classList.add("illustrationContainer");
		var p3_2titre = document.createElement("span");
		var p3_2content = document.createElement("span");
		p3_2content.contentEditable = true;
		//p3_2content.classList.add("columns2");
		p3_2titre.setAttribute("id", "titre");
		p3_2content.setAttribute("id", "illustration");
		p3_2titre.innerHTML = "Illustration : ";
		if (data.illustration.length != 0) {

			p3_2content.innerHTML = data.illustration;
		} else {
			p3_2content.innerHTML = "";
		}
		p3_2.appendChild(p3_2titre);
		p3_2.appendChild(p3_2content);
		div3_1.appendChild(p3_2);
		div3_1.appendChild(div4);
		thirdRow.appendChild(div3_1);


		//TOUS LES URLS DES LOGOS
		const fourthRow = document.createElement("div");
		fourthRow.style.padding = "0 30px 40px 30px";
		fourthRow.classList.add("row");
		fourthRow.style.textAlign = "right";

		const urlContainer1 = document.createElement("div");
		const urlTitre1 = document.createElement("span");
		urlTitre1.innerHTML = "URL Logo 1 : ";
		const urlContent1 = document.createElement("span");
		urlContent1.setAttribute("id", "logo1");
		urlContent1.classList.add("contentEditableWhite");
		urlContent1.innerHTML = data.subUrl1;
		urlContent1.contentEditable = true;

		urlContainer1.appendChild(urlTitre1);
		urlContainer1.appendChild(urlContent1);
		fourthRow.appendChild(urlContainer1);

		const urlContainer2 = document.createElement("div");
		const urlTitre2 = document.createElement("span");
		urlTitre2.innerHTML = "URL Logo 2 : ";
		const urlContent2 = document.createElement("span");
		urlContent2.setAttribute("id", "logo2");
		urlContent2.classList.add("contentEditableWhite");
		urlContent2.innerHTML = data.subUrl2;
		urlContent2.contentEditable = true;

		urlContainer2.appendChild(urlTitre2);
		urlContainer2.appendChild(urlContent2);
		fourthRow.appendChild(urlContainer2);

		const urlContainer3 = document.createElement("div");
		const urlTitre3 = document.createElement("span");
		urlTitre3.innerHTML = "URL Logo 3 : ";
		const urlContent3 = document.createElement("span");
		urlContent3.setAttribute("id", "logo3");
		urlContent3.classList.add("contentEditableWhite");
		urlContent3.innerHTML = data.subUrl3;
		urlContent3.contentEditable = true;

		urlContainer3.appendChild(urlTitre3);
		urlContainer3.appendChild(urlContent3);
		fourthRow.appendChild(urlContainer3);

		const urlContainer4 = document.createElement("div");
		const urlTitre4 = document.createElement("span");
		urlTitre4.innerHTML = "URL Logo 4 : ";
		const urlContent4 = document.createElement("span");
		urlContent4.setAttribute("id", "logo4");
		urlContent4.classList.add("contentEditableWhite");
		urlContent4.innerHTML = data.subUrl4;
		urlContent4.contentEditable = true;

		urlContainer4.appendChild(urlTitre4);
		urlContainer4.appendChild(urlContent4);
		fourthRow.appendChild(urlContainer4);

		const urlContainer5 = document.createElement("div");
		const urlTitre5 = document.createElement("span");
		urlTitre5.innerHTML = "URL Logo 5 : ";
		const urlContent5 = document.createElement("span");
		urlContent5.setAttribute("id", "logo5");
		urlContent5.classList.add("contentEditableWhite");
		urlContent5.innerHTML = data.subUrl5;
		urlContent5.contentEditable = true;

		urlContainer5.appendChild(urlTitre5);
		urlContainer5.appendChild(urlContent5);
		fourthRow.appendChild(urlContainer5);

		//TOUTES LES IMAGES DES LOGOS
		const fifthRow = document.createElement("div");
		fifthRow.style.padding = "0 30px 40px 30px";
		fifthRow.classList.add("row", "logosRow");
		fifthRow.style.textAlign = "right";

		if (data.subUrl1) {
			const logo1 = document.createElement("img");
			logo1.src = data.subUrl1;
			logo1.style.marginLeft = "10px";
			fifthRow.appendChild(logo1);
		}
		if (data.subUrl2) {
			const logo2 = document.createElement("img");
			logo2.src = data.subUrl2;
			logo2.style.marginLeft = "10px";
			fifthRow.appendChild(logo2);
		}
		if (data.subUrl3) {
			const logo3 = document.createElement("img");
			logo3.src = data.subUrl3;
			logo3.style.marginLeft = "10px";
			fifthRow.appendChild(logo3);
		}
		if (data.subUrl4) {
			const logo4 = document.createElement("img");
			logo4.src = data.subUrl4;
			logo4.style.marginLeft = "10px";
			fifthRow.appendChild(logo4);
		}
		if (data.subUrl5) {
			const logo5 = document.createElement("img");
			logo5.src = data.subUrl5;
			logo5.style.marginLeft = "10px";
			fifthRow.appendChild(logo5);
		}


		this.wrapper.innerHTML = '';
		this.wrapper.appendChild(firstRow);
		this.wrapper.appendChild(firstBRow);
		this.wrapper.appendChild(secondRow);
		this.wrapper.appendChild(thirdRow);
		this.wrapper.appendChild(fourthRow);
		this.wrapper.appendChild(fifthRow);



	}

	/**
	 * @private
	 * Create image with caption field
	 * @param {string} url — image source
	 * @param {string} captionText — caption value
	 */
	_createImage(url, captionText) {
		const image = document.createElement('img');
		/*const legend = document.createElement('div');
		legend.classList.add("legend");*/
		const containerImage = this.wrapper.querySelector(".leftcol");
		containerImage.innerHTML = '';
		image.setAttribute("id", "diapoFirstImage");

		/*const div = document.createElement("div");
		div.classList.add("copyright");
		div.innerHTML = '<div style="display: inline-block; transform: rotate(90deg)">©</div>';
		legend.contentEditable = true;
		legend.innerHTML = captionText || '';
		div.appendChild(legend);*/

		image.src = url;

		//containerImage.appendChild(div);
		containerImage.appendChild(image);

		this._acceptTuneView();

	}

	/**
	 * Extract data from the UI
	 * @param {HTMLElement} blockContent — element returned by render method
	 * @return {SimpleImageData}
	 */
	save(blockContent) {
		const title = blockContent.querySelector('#Title');
		var titlevalue = "";
		if (title.value == undefined) {
			titlevalue = title.innerHTML;
		} else {
			titlevalue = title.value;
		}
		const subtitle = blockContent.querySelector('#subtitle');
		var subvalue = "";
		if (subtitle.value == undefined) {
			subvalue = subtitle.innerHTML;
		} else {
			subvalue = subtitle.value;
		}
		const color = blockContent.querySelector('#colorInput');
		var colorvalue = "";
		if (color.value == undefined) {
			colorvalue = color.innerHTML;
		} else {
			colorvalue = color.value;
		}
		const urls = blockContent.querySelector('p.imageUrl');
		var imagevalue = "";
		if (urls != undefined) {
			// Taking img.src
			imagevalue = urls.innerHTML;
		} else {
			const images = blockContent.querySelector('#diapoFirstImage')
			if (images != undefined) {
				imagevalue = images.src;
			} else {
				imagevalue = "";
			}
		}
		const legend = blockContent.querySelector(".legend");
		var legendvalue = "";
		if (legend != undefined) {
			legendvalue = legend.innerHTML;
		}

		const text = blockContent.querySelector('#text');
		var textValue = "";
		if (text != undefined) {
			textValue = text.innerHTML;
		}
		const illustration = blockContent.querySelector('#illustration');
		var illustrationText = "";
		if (illustration != undefined) {
			illustrationText = illustration.innerHTML;
		}

		const subUrl1 = blockContent.querySelector('#logo1');
		var subUrl1Value = "";
		if (subUrl1 != undefined) {
			subUrl1Value = subUrl1.innerHTML;
		}

		const subUrl2 = blockContent.querySelector('#logo2');
		var subUrl2Value = "";
		if (subUrl2 != undefined) {
			subUrl2Value = subUrl2.innerHTML;
		}

		const subUrl3 = blockContent.querySelector('#logo3');
		var subUrl3Value = "";
		if (subUrl3 != undefined) {
			subUrl3Value = subUrl3.innerHTML;
		}

		const subUrl4 = blockContent.querySelector('#logo4');
		var subUrl4Value = "";
		if (subUrl4 != undefined) {
			subUrl4Value = subUrl4.innerHTML;
		}
		const subUrl5 = blockContent.querySelector('#logo5');
		var subUrl5Value = "";
		if (subUrl5 != undefined) {
			subUrl5Value = subUrl5.innerHTML;
		}


		return Object.assign(this.data, {
			title: titlevalue,
			subtitle: subvalue,
			url: imagevalue,
			legend: legendvalue,
			color: colorvalue,
			text: textValue,
			illustration: illustrationText,
			subUrl1: subUrl1Value,
			subUrl2: subUrl2Value,
			subUrl3: subUrl3Value,
			subUrl4: subUrl4Value,
			subUrl5: subUrl5Value
		});
	}

	/**
	 * Skip empty blocks
	 * @see {@link https://editorjs.io/saved-data-validation}
	 * @param {ImageToolConfig} savedData
	 * @return {boolean}
	 */
	validate(savedData) {
		if (!savedData.title.trim()) {
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