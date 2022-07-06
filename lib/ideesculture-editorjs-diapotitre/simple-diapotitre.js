/**
 * Tool for creating image Blocks for Editor.js
 * Made with «Creating a Block Tool» tutorial {@link https://editorjs.io/creating-a-block-tool}
 *
 * @typedef {object} ImageToolConfig
 * @property {string} placeholder — custom placeholder for URL field
 */
class IdeescultureEditorjsDiapoTitre {
	/**
	 * Our tool should be placed at the Toolbox, so describe an icon and title
	 */
	static get toolbox() {
		return {
			title: 'Diapo-titre',
			icon: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve"<g><g transform="translate(0.000000,417.000000) scale(0.100000,-0.100000)"><path d="M418.4,3053.7c-109.1-40.2-191.5-111.1-252.7-224l-57.4-103.4L102.5-785c-5.8-3888.5-13.4-3631.9,120.6-3787c36.4-44,107.2-99.6,158.9-124.5l90-44H5000h4527.9l90,44c51.7,24.9,122.5,80.4,158.9,124.5c134,155.1,126.3-101.5,120.6,3787l-5.7,3511.3l-57.4,103.4c-61.3,109.1-132.1,174.2-245.1,222.1c-61.3,24.9-572.5,28.7-4583.5,28.7C1283.8,3078.6,477.8,3074.8,418.4,3053.7z M9529.9,2711l46-53.6v-603.1v-601.2H8810h-767.7l-46-47.9l-47.9-45.9V-337v-1696.3l47.9-46l46-47.9H8810h765.8v-1099v-1097.1l-49.8-51.7l-51.7-49.8H5000H525.7l-51.7,47.9l-49.8,46V-3228v1100.9H1190h767.7l45.9,47.9l47.9,46V-337v1696.3l-47.9,45.9l-45.9,47.9H1190H424.2v599.3c0,645.2,1.9,662.4,103.4,702.7c23,9.6,2012.2,15.3,4497.3,13.4l4459-3.8L9529.9,2711z M1741.4-340.8l-5.7-1470.4h-650.9h-651L428-340.8l-3.8,1468.5h660.5h660.5L1741.4-340.8z M9575.8-346.6v-1474.2L8921-1817l-656.7,5.7l-5.7,1470.4l-3.8,1468.5h660.5h660.5V-346.6z"/><path d="M2769.5,1405.2l-47.9-45.9V-337v-1696.3l47.9-46l46-47.9H5000h2184.5l46,47.9l47.9,46v1686.7v1688.7l-55.5,55.5l-55.5,55.5H4990.4H2815.5L2769.5,1405.2z M6951-72.8v-1202.3l-434.6,861.5c-384.8,762-440.4,861.6-488.2,876.9c-109.1,34.5-132.1,9.6-683.5-781.1c-289.1-415.5-534.2-754.4-543.7-756.3c-9.6,0-162.7,118.7-342.7,262.3c-180,143.6-350.4,271.9-377.2,287.2c-97.6,47.9-139.8,11.5-593.5-511.2c-237.4-271.9-436.5-495.9-444.2-495.9c-9.6-1.9-15.3,597.3-15.3,1328.7v1330.6h1962.4h1962.4L6951-72.8z M6407.2-901.8c247-494,449.9-903.7,449.9-909.4c0-5.7-813.7-9.6-1809.3-9.6c-995.6,0-1809.3,5.7-1809.3,11.5c0,21.1,786.9,907.5,806,907.5c9.6,0,178-128.3,375.2-287.2c381-306.3,430.8-331.2,515-252.7c19.1,19.2,256.5,350.4,524.6,737.1c268,384.8,490.1,700.7,492,702.7C5955.4-2,6160.2-405.9,6407.2-901.8z"/><path d="M3600.5,783c-128.3-38.3-227.8-170.4-227.8-306.3c0-90,65.1-212.5,139.8-262.3c187.6-128.3,451.8-21.1,490.1,197.2c28.7,157-30.6,275.7-170.4,348.4C3744.1,804.1,3686.6,809.8,3600.5,783z"/><path d="M4839.2-2841.3c-86.2-47.9-164.7-178-164.7-270c0-88.1,76.6-224,151.3-273.8c47.9-32.6,91.9-44,174.2-44c135.9,0,222.1,51.7,283.4,172.3c53.6,105.3,53.6,176.1,1.9,281.4C5206.8-2812.5,4998.1-2749.4,4839.2-2841.3z"/><path d="M1831.4-2967.6c-55.5-23-84.2-63.2-97.6-132.1c-9.6-49.8-1.9-68.9,45.9-118.7c32.5-30.6,76.6-57.4,97.7-57.4c143.6,0,224,153.2,132.1,256.6C1959.7-2963.8,1888.8-2944.6,1831.4-2967.6z"/><path d="M2802.1-2969.5c-59.3-24.9-105.3-135.9-82.3-199.1c63.2-164.6,308.2-124.4,308.2,51.7C3028-3009.7,2903.6-2927.4,2802.1-2969.5z"/><path d="M3784.3-2973.4c-99.6-53.6-118.7-176.1-38.3-254.6c128.3-128.3,327.4,38.3,239.3,201c-9.6,19.1-45.9,44-78.5,55.5C3834-2946.6,3832.1-2946.6,3784.3-2973.4z"/><path d="M6072.2-2975.3c-183.8-93.8-59.3-361.9,132.1-281.4c97.6,40.2,126.4,158.9,55.5,237.4C6206.2-2960,6135.3-2942.7,6072.2-2975.3z"/><path d="M7048.6-2975.3c-103.4-53.6-116.8-189.5-24.9-262.3c151.2-118.7,338.9,76.6,212.5,218.3C7182.6-2960,7111.8-2942.7,7048.6-2975.3z"/><path d="M8034.6-2971.4c-63.2-36.4-86.2-78.5-86.2-153.2c0-136,162.7-201,258.5-103.4c63.2,61.3,65.1,160.8,5.7,216.3C8157.1-2961.9,8084.4-2944.6,8034.6-2971.4z"/></g></g></svg>'
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
			legend: {
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
			text: {
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
			illustration: data.illustration || ''
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
		input4.setAttribute("id", "color");
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
		if (data.color) {
			firstRow.style.backgroundColor = (data.color.includes("#")) ? data.color : "#" + data.color;
		}
		firstRow.style.color = "white";
		const div1 = document.createElement("div");
		div1.setAttribute("id", "color");
		const titreColor = document.createElement("span");
		titreColor.innerHTML = "Couleur :";
		const div1b = document.createElement("span");
		div1b.setAttribute("id", "colorInput");
		div1b.classList.add("contentEditableWhite");
		div1.classList.add("col-md-1", "col-sm-1", "col-lg-2",);

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
		legend.style.backgroundColor="white";
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
		if (data.subtitle != undefined || data.subtitle != "") {
			const renderedsubtitle = document.createElement("h3");
			renderedsubtitle.setAttribute("id", "subtitle");
			renderedsubtitle.innerHTML = data.subtitle;
			renderedsubtitle.contentEditable = true;
			div3.appendChild(renderedsubtitle);
		}

		firstRow.appendChild(div3);


		const firstBRow = document.createElement("div");
		firstBRow.classList.add("row");
		firstBRow.style.backgroundColor = (data.color.includes("#")) ? data.color : "#" + data.color;
		firstBRow.style.color = "white";
		const divB1 = document.createElement("div");
		divB1.setAttribute("id", "color");
		divB1.classList.add("col-md-12", "col-sm-12", "col-lg-12");


		const imageURLCont1 = document.createElement("div");
		const imageUrlTitre1 = document.createElement("span");
		imageUrlTitre1.innerHTML = "Lien :";
		const imageUrlTxt1 = document.createElement("span");
		imageUrlTxt1.style.color = "black";

		imageUrlTxt1.classList.add("contentEditableWhite", "imageUrl");

		imageUrlTxt1.setAttribute("id", "url1");


		imageUrlTxt1.innerHTML = data.url;

		imageUrlTxt1.contentEditable = true;

		imageURLCont1.appendChild(imageUrlTitre1);
		imageURLCont1.appendChild(imageUrlTxt1);
	

		divB1.appendChild(imageURLCont1);

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
		h3_1.innerHTML =  data.title;
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

		var div3_1 = document.createElement("div");
		div3_1.classList.add("col-sm-10", "col-sm-offset-1");
		var p3_1 = document.createElement("p");
		p3_1.contentEditable = true;
		p3_1.classList.add("columns2");
		p3_1.setAttribute("id", "text");
		if (data.text.length !=0){
			p3_1.innerHTML = data.text;
		}else{
			p3_1.innerHTML = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
		}
		div3_1.appendChild(p3_1);
		
		var p3_2 = document.createElement("p");
		p3_2.classList.add("illustrationContainer");
		var p3_2titre = document.createElement("span");
		var p3_2content = document.createElement("span");
		p3_2content.contentEditable = true;
		p3_2titre.setAttribute("id", "titre");
		p3_2content.setAttribute("id", "illustration");
		p3_2titre.innerHTML = "Illustration : ";

		if (data.illustration.length != 0) {
			p3_2content.innerHTML = data.illustration;
		} else {
			p3_2content.innerHTML = "Illustration : ";
		}
		p3_2.appendChild(p3_2titre);
		p3_2.appendChild(p3_2content);
		div3_1.appendChild(p3_2);
		thirdRow.appendChild(div3_1);
		
		var p3_3 = document.createElement("p");
		
		var fourthRow = document.createElement("div");
		//div4.classList.add("columns2");
		div3_1.appendChild(div4);


		this.wrapper.innerHTML = '';
		this.wrapper.appendChild(firstRow);
		this.wrapper.appendChild(firstBRow);

		this.wrapper.appendChild(secondRow);
		this.wrapper.appendChild(thirdRow);
		this.wrapper.appendChild(fourthRow);



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
		const urls = blockContent.querySelector('p.imageUrl')
		var imagevalue = "";
		if (urls != undefined) {
			imagevalue = urls.innerHTML;
		}else{
			const urls = blockContent.querySelector('.imageUrl');
			imagevalue = urls.innerHTML;
			
		}
		const legend = blockContent.querySelector(".legend");
		var legendvalue = "";
		if (legend != undefined){
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

		return Object.assign(this.data, {
			title: titlevalue,
			subtitle: subvalue,
			url: imagevalue,
			legend: legendvalue,
			color: colorvalue,
			text: textValue,
			illustration: illustrationText

		});
	}

	/**
	 * Skip empty blocks
	 * @see {@link https://editorjs.io/saved-data-validation}
	 * @param {ImageToolConfig} savedData
	 * @return {boolean}
	 */
	validate(savedData) {
		/*if (!savedData.title.trim()) {
			return false;
		}*/

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