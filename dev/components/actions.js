import Config from './config';
import {animate} from './methods';

class Actions extends Config {
	constructor(props) {
		super(props)
		this.pages = [];
	}

	setActivePage() {
		if(this.next_slide === null) {
			this.pages[this.startAt].childNodes[0].classList.add('pagerActive');
		}
		else {
			this.pages[this.current_slide].childNodes[0].classList.remove('pagerActive');
			this.pages[this.next_slide].childNodes[0].classList.add('pagerActive');
		}
	}

	doAnimation(dir, current_from, next_from, not_complete) {
		// set the active pager.
		// ======================
		let direction = dir ? dir : this.direction;
		let next_slide = null;
		if(not_complete) {

			if(this.direction === 'left') {
				next_slide = this.current_slide - 1 === -1 ? this.slides.length - 1 : this.current_slide -1;
			}

			if(this.direction === 'right') {
				next_slide = this.current_slide + 1 > this.slides.length -1 ? 0 : this.current_slide + 1;
			}

		}
		let slides = {
			current_slide: this.container.children[this.current_slide],
			next_slide: this.container.children[next_slide !== null ? next_slide : this.next_slide]
		};
		const opts = {
			easing: this.easing,
			duration: not_complete ? this.duration / 2 : this.duration
		}

		let not_complete_ = this.direction === 'left' ? 100 - next_from : current_from - 100;
		const keyframes = {
			current_slide: {
				from:{
					transform: `translateX(${current_from ? current_from : 0}%)`,
					zIndex: '2'
				},
				to: {
					transform: `translateX(${not_complete ? 0 : direction === 'left' ? -100 : 100}%)`,
					zIndex: '2'
				}
			},
			next_slide: {
				from: {
					transform: `translateX(${next_from && direction === 'left' ? 100 - next_from : next_from && direction === 'right' ?  current_from - 100 : direction === 'left' && !next_from ? 100 : -100}%)`, //direction === 'left' ? 'translateX(100%)' : 'translateX(-100%)'
					zIndex: `1`
				},
				to: {
					transform: `translateX(${not_complete && direction === 'right' ? -100 : not_complete && direction === 'left' ? 100 : 0}%)`,
					zIndex: '1'
				}
			}
		};
		if(!not_complete) {
			this.swipe_stopped = true;
			this.container.children[this.current_slide].classList.remove('current-slide');
			this.container.children[this.next_slide].classList.add("current-slide");
		}
		let promise = animate(slides, keyframes, opts)

		return promise;
	}

	swipeAnimation(current_pos, next_pos) {
		// if(this.swipe_stopped) {
		// 	return false;
		// }

		// let next_slide = this.next_slide;
		let nr = 100 + next_pos;
		let left = 100 - next_pos;
		let right = -Math.abs(nr);
		this.container.children[this.current_slide].setAttribute('style', `transform: translateX(${current_pos}%); z-index: 2;`);
		this.container.children[this.next_slide].setAttribute('style', `transform: translateX(${this.direction === 'left' ? left : right}%); z-index: 1;`);

	}

	generatePager () {
		const container = this.pager instanceof NodeList ? this.pager[0] : this.pager;
		let i,elements;
		for(i = 0; i <= this.slides.length - 1; i ++) {
			container
			.insertAdjacentHTML('beforeend', `<li><a href="#" id="${i}"></a></li>`)
		}

		elements = container instanceof NodeList ? container[0].childNodes : container.childNodes;

		elements.forEach(e => {
			if(e.nodeName !== '#text') {
				this.pages.push(e);
			}
		})
	}

	generateSlides() {
		const container = this.container;
		let item;

		const forImgSrc = (i) => {
			return `<img src="${this.slides[i].src}" alt="${this.slides[i].alt}"/>`
		}

		const forNode = (i) => {
			return `${this.slides[i].node}`;
		}

		for(let i = 0; i <= this.slides.length - 1; i ++) {
			container
			.insertAdjacentHTML('beforeend', `<div class="tidyCarousel-slide">${this.slides[i].node ? forNode(i) : forImgSrc(i)}</div>`);

			if(i === this.startAt) {
				container.children[i].classList.add('current-slide');
			}
		}
	}
}

export default Actions;
