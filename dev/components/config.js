// TODO:
// - Check slides if they have the minimum css, such as position: absolute.
// - Add the option to accept a start slide index.
// - Make sure the carousel can receive slides as an array of objects with image url/alt and title.


class Config {
	constructor(opts) {
		this.opts = opts || {};

		for(let prop in this.opts) {
			if(prop) {
				// preset each option given
				this[prop] = this.opts[prop];
			}
		}
	}

	get container () {
		const {opts: {container}} = this;

		switch (typeof container) {
			case 'string':
				return document.querySelector(container);
			case 'object':
				return container;
			default:
				return document.querySelector('.tidyCarousel');
		}
	}

	set container(value) {
		let container;
		switch (typeof value) {
			case 'string':
					container = document.querySelector(value);

					if(container === null) {
						throw new TypeError(`Could not find any maching element for [${value}]. Make sure the element is loaded before initializing.`)
					}
					return container;

			case 'object':
				if(value === null) {
					throw new TypeError(`Please make sure the container element is loaded before initialization.`);
				}

				if(!value instanceof HTMLElement) {
					throw new TypeError(`'container' should be a instance of an html element, but received instead other type of object.`);
				}

				if(!value.children > 2) {
					throw new Error(`The container should have at least two children elements but it has instead ${value.length}`);
				}

				return value;

			default:

				throw new TypeError(`'"container" should be a string (pseudo selector) or boolean, received instead ${typeof value}'`);

		}
	}

	get slides () {

		if(!this.opts.slides) {
			if(!this.container.children.length) {
				throw new Error("Can't find any slides");
			}
		}

		return this.opts.slides ? this.opts.slides : this.container.children;
	}

	set slides(v) {
		if(!Array.isArray(v)) {
			throw new TypeError(`The slides it should be an array. Received instead ${typeof v}`);
		}

		return v;
	}

	get controllers () {
		const {opts:{controllers}} = this;
		let nodes;
		switch (typeof controllers) {
			case 'boolean':
				nodes = document.querySelectorAll('[carousel-controller]');

				return controllers ? nodes : false;

			case 'string':
				nodes = document.querySelectorAll(`${controllers}`);
				return nodes;

			case 'object':

				if(controllers instanceof HTMLCollection) {
					return Array.from(controllers);
				}
				else {
					return controllers;
				}
			case "undefined":
				nodes = document.querySelectorAll('[carousel-controller]');
				nodes = nodes !== null ? Array.from(nodes) : false
				return nodes;

			default:
				throw new TypeError(`controllers can only have the following types: string, array/Nodelist`);
		}
	}

	set controllers(value) {
		const {opts: {controllers}} = this;
		let nodes;

		switch (typeof value) {
			case 'boolean':
				nodes = document.querySelectorAll('[carousel-controller]');

				if(value && !nodes.length) {
					throw new TypeError(`Could not find any element containing the attribute of carousel-controller. Bind this attribute [carousel-controller] to an element specify the value lef/right.`)
				}

				return value && nodes ? nodes : false;

			case 'string':
				nodes = document.querySelectorAll(`${controllers}`);
				if(!nodes.length) {
					throw new TypeError(`Could not find any element containing the attribute of carousel-controller. Bind this attribute [carousel-controller] to an element specify the value lef/right.`)
				}

				else {
					nodes.forEach(n => {
						if(!n.hasAttribute('carousel-controller')) {
							throw new TypeError(`The controllers selected doesn't have the attribute 'carousel-controller'. Set this attribute to a string left/right`)
						}
						if(n.hasAttribute('carousel-controller')) {
							if(n.attributes['carousel-controller'].value === '') {
								throw new TypeError(`The controllers selected doesn't have the attribute 'carousel-controller'. Set this attribute to a string left/right`)
							}

						}
					})
					return nodes;
				}

			case 'object':
				if(value instanceof NodeList || Array.isArray(value)) {
					return value;
				}

				if(value instanceof HTMLCollection) {
					return Array.from(value);
				}
				else {
					throw new TypeError(`controllers can only have the following types: string, array/Nodelist`);
				}

			default:
				throw new TypeError(`controllers can only have the following types: string, array/Nodelist`);
		}
	}

	get easing() {
		if(this.opts.easing) {
			return this.opts.easing;
		}

		return 'ease';
	}

	set easing(v) {

		if(typeof v !== 'string') {
			throw new TypeError(`'easing' should be a string, received instead ${typeof v}`);
		}

		return v;
	}

	get duration () {
		if(this.opts.duration) {
			return this.opts.duration;
		}

		return 500;
	}

	set duration(value) {

		if(typeof value !== 'number') {

			throw new Error(`Type error: "duration" should be a number instead of ${typeof value}`);
		}
		else if(value < 0 ) {

			throw new Error(`Value error: "duration" should be a number > 0, but received instead ${value}`);
		}

		return value;
	}

	get delay () {
		if(this.opts.delay) {
			return this.opts.delay;
		}

		return 500;
	}

	set delay(value) {

		if(typeof value !== 'number') {

			throw new Error(`Type error: "duration" should be a number instead of ${typeof value}`);
		}

		else if( value < this.duration || value < 0) {

			throw new Error(`Value error: "duration" should be a number > ${this.duration}, but received instead ${value}`);
		}

		return value;
	}

	get reset() {

		if(this.opts.reset === undefined) {
			return true;
		}

		return this.opts.reset;
	}

	set reset(v) {

		if(typeof v !== 'boolean') {
			throw new TypeError(`reset option should be a boolean instead of ${typeof v}`);
		}

		return v;
	}

	get auto () {
		if(this.opts.auto !== undefined) {
			return this.opts.auto;
		}

		return true;
	}
	set auto(value) {

		if(typeof value === 'object') {

			if(value.direction) {
				this.autoDirection = value.direction;
				return value;
			}

			return value;
		}
		else if (typeof value === 'boolean') {

			if(value === true) {
				this.autoDirection = 'left';

				return {
					direction: 'left'
				}
			}
			else {
				this.autoDirection = null;
				return {direction: null}
			}
		}
		else {
			throw new Error(`Type error: "auto" should be a boolean or an object containing direction instead of ${typeof value}`);
		}

	}

	get autoDirection() {

		if(typeof this.auto === 'object') {
			return this.auto.direction;
		}

		if(typeof this.auto === 'boolean') {

			if(this.auto === true) {
				return 'left';
			}
			else {
				return null;
			}
		}
	}

	set autoDirection(value) {

		if(value === null) { return false}

		if(typeof value !== 'string') {
			throw new TypeError(`Direction should be a string, received ${typeof  value}`)
		}

		if(!(value.toLowerCase().includes('left') || value.toLowerCase().includes('right'))) {
			throw new Error(`Value error: "direction" can be 'left' or 'right', received instead: ${value}`);
		}


	}

	get startAt() {
		if(this.opts.startAt) {
			return this.opts.startAt;
		}
		return this.container.children.length -1;
	}

	set startAt(v) {

		if(typeof v !== 'number') {
			throw new TypeError(`'startAt' should be a number, received instead. ${typeof v}`);
		}

		return v;
	}

	get pager() {
		// If the opts.pager is a boolean and is true, try document.querySelector(ul[carousel-pager])
		const {opts} = this;

		switch (typeof opts.pager) {
			case 'boolean':
				const pager = document.querySelector('ul[carousel-pager]');
				return opts.pager && pager ? pager : false;

			case 'object':
				let container = opts.pager.container;

				if(container instanceof HTMLElement) {
					return container ? container : false;
				}

				if(typeof container === 'object') {
					throw new TypeError(`Container should be a html element, but received instead an object`);
				}
				else if(typeof container === 'string') {
					container = document.querySelector(container);

					if(container !== null) {return container;}
					else {throw new TypeError(`${container} wasn't found in the document. Make sure the element is available in the DOM before you give me the selector.`)}
				}

			default:
				return opts.pager;
		}
	}

	set pager(v) {
		const {opts} = this;
		switch (typeof v) {
			case 'boolean':

				const pager = document.querySelector('ul[carousel-pager]');
				return opts.pager && pager ? pager : false;

				return false;
			case 'object':
				if(v.container) {
					const container = v.container;

					return container instanceof NodeList && container.length > 0 || container instanceof HTMLElement ? container : false;
				}
				throw new TypeError(`Pager should be an object containing the container or a string, received instead ${typeof v}.`);

			default:

				throw new TypeError(`Pager should be an object containing the container or a string, received instead ${typeof v}.`);

		}

	}

	get pauseOnMouseEnter () {
		if(typeof this.opts.pauseOnMouseEnter === 'boolean') {
			return this.opts.pauseOnMouseEnter;
		}

		return true;
	}

	set pauseOnMouseEnter(value) {

		if(typeof value !== 'boolean') {
			throw new Error("Value error: warns can only be false or true");
		}
		return value;
	}

	get swipe() {
		if(this.opts.swipe) {
			 return this.opts.swipe;
		}

		return false;
	}

	set swipe(v) {

		if(typeof v !== 'boolean') {
			throw new TypeError(`'swipe' should be a boolean, received instead ${typeof v}`);
		}
		return v;
	}

	get drag() {
		if(this.opts.drag) {
			return this.opts.drag;
		}

		return false;
	}

	set drag(v) {
		if(typeof v !== 'boolean') {
			throw new TypeError(`'drag' should be a boolean instead of ${typeof v}`);
		}

		return v;
	}

}

export default Config;
