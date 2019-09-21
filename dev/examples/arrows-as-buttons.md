```js

import TidyCarousel from './components/carousel';

const first_parent = document.querySelector('.tidyCarousel');

const first_config = {
	duration: 500,
	easing: 'ease',
	pauseOnMouseEnter: true,
	delay: 1000,
	auto: true,
	container: first_parent,
	swipe: true,
	drag: true,
	startAt: 0,
	slides: [

		{
			node: '<div class="first"></div>',
			alt: 'My title',
			// beforeAnimation: (idx) => {
			// 	const elem = first_parent.children[idx];
			// 	elem.children[0].innerHTML = '';
			// 	// return new Promise()
			// },
			// afterAnimation: (idx) => {
			// 	const elem = first_parent.children[idx];
			//
			// 	return writeText(elem.children[0], text);
			// }
		},
		{
			node: '<div class="second"></div>',
			alt: 'My title',
		},
		{
			node: '<div class="third"></div>',
			alt: 'My title',
		}
	],
	// pager: {
	// 	container: document.querySelector('ul[carousel-pager="first"]')
	// },
	reset: true,
	controllers:document.querySelectorAll('button[carousel-controller]')// beforeAnimation: (idx) => {
	// 	console.log(idx);
	// },
	// afterAnimation: writeText

}

const first_carousel = new TidyCarousel(first_config);
// TidyCarousel.speak()
```
