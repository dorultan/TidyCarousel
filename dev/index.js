import polyfills from './scripts/polyfills';
import Controllers from './scripts/controllers';
import './scss/styles.scss';
polyfills();
// Options provided:
// - slider_container: # It should be a element wich contains slides. Otherwise it will look for an element with the attribute named data-carousel="name"
// - controllers: # It should be an array of two elements with the attribute data-carousel-controller="left or right"
// - Duration: # It should be an integer.
// - Delay: # It should be an integer.
// - Auto: # It should be a boolean. (Optional) {Defaults to false}
// - Reset: # It should be a boolean. This option indicates if the carousel should continute sliding when it reach the last slide.(optional)
// - Warns: # It should be a boolean.
// - Direction: # It should be a string. E.g: 'left' or right. This is only required if auto is set to true.
// - pauseOnMouseEnter: # It should be a boolean. This is only required if auto is set to true.
// - pager: # It can be a boolean or an Object.
 			// - If is a boolean, carousel will lookup for an element in the dom with the attribute data-carousel-pager.
 			// - If is an Object carousel will use this element as the container of the indicators, wich will be generated.

class TidyCarousel extends Controllers {
	constructor(opts) {
		super(opts);
	}
}


// new TidyCarousel({pager: true, swipe: true, drag: true, infinite: true, auto: {direction: 'left'}});
export default TidyCarousel;
