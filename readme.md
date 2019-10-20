# ****Tidy carousel**** [![Build Status](https://travis-ci.com/dorultan/tidy-carousel.svg?branch=master)](https://travis-ci.com/dorultan/tidy-carousel)

This is a simple UI widget built in vanilla javascript (es2015+)
with mobile and responsive in mind. Tidy carousel can be highly
configurable (See all available [config](http://localhost:8080/documentation/configuration))
having features such as [mouse drag](http://localhost:8080/documentation/configuration),
 [swipe](http://localhost:8080/documentation/configuration),
[pager](http://localhost:8080/documentation/configuration),
[infinite sliding](http://localhost:8080/documentation/configuration)
and [more](http://localhost:8080/documentation/configuration).
Tidy carousel is inspired by card deck, the mecanism beyond the
seems is two numbers (current_slide and next_slide) changing based
 on events and those are used to select the children
 (e.g: \`<div class="tidy__carousel-slide"></div>\`) of its parent
  (e.g: \` <div class="tidy__carousel">{...childrens}</div\`).


## ****Installation****
> `npm install` tidy-carousel </br>
> `yarn add` tidy-carousel

## ****Configuration.****

| ****Option****     | ****Type**** | ****Default****    | ****Description****    |
| :------------- | :------------- | :------| :------|
| duration   | `Number` | 500     | The duration of the slide.|
| easing   | `String` |'ease'    |The rate of the animation's change over time. Accepts the pre-defined values "linear", "ease", "ease-in", "ease-out", and "ease-in-out", or a custom "cubic-bezier" value like "cubic-bezier(0.42, 0, 0.58, 1)"|
| container  | `String`/`Node` | '.carousel-slider' | This should be the wrapper of the slides, witch can be neither the node element or a selector as a string.|
| delay   | `Number` |500     | This is the delay in between each slide. Useful if auto is set to true.|
| auto   | `Boolean` | false     | This makes the carousel loop without an event.|
| swipe | `Boolean` | true | This option (if true) will enable touch event for mobile devices.|
| drag | `Boolean` | true | This option (if true) will enable the user to drag the slide. |
| startAt | `Number` | 0 | This option is the index of the first slide.  |
| slides | `Array` | [] | It should be an array of objects representing the slides.|
| slides[i].html | `String` |  | It should be a html element as a string e.g: `<div class="my_slide">Content</div>`. The element will be inserted into the DOM using ` element.insertadjacentelement` method.|
| slides[i].src | `String` |  | It should be the source of the image. <br/> *****Note:**** This option is an alternative for `slides[i].node`. |
| slides[i].alt | `String` | [] | It should be the alternative for the image. <br/> ****Note:**** This option will only work if you set `slides[i].src`.|
| slides[i].beforeAnimation | `Function` |  | A function that is invoked before the slide occurs.|
| slides[i].afterAnimation | `Function` |  | A function that is invoked After the slide occurs. If present, it must return a promise e.g: `afterAnimation: (element, index) => { return new Promise((success, reject) => { setTimeout(() => { doSomething(); success()}, 500)})}`|
| pager | `Boolean` | false | This option if `true` will generate a pager at the bottom of the carousel.|
| reset | `Boolean` | true | If set to true, the carousel will loop infinitely. |
| controllers | `String`/`DOM node` | '[carousel-controller]'| Can be set to a node element or a selector as a string. Each controller must have the attribute carousel-controller="left or right" |
| beforeAnimation | `Function` |  | A function that is invoked before the slide occurs.|
| afterAnimation | `Function` |  | A function that is invoked After the slide occurs. If present, it must return a promise e.g: `afterAnimation: (element, index) => { return new Promise((success, reject) => { setTimeout(() => { doSomething(); success()}, 500)})}`<br/> ****Note:**** This function is only invoked if the `slides` is not set to an array of slides.|

## Usage.
For more examples visit http://tidy-carousel.com/documentation/examples.
### Html
```html

<div class="tidyCarousel">
  <!-- Here goes all the slides -->
  <div class="tidyCarousel-slide"><div class="first"></div></div>
  <div class="tidyCarousel-slide"><div class="second"></div></div>
  <div class="tidyCarousel-slide"><div class="third"></div></div>

</div>
<button type="button" carousel-controller="left">
  <
</button>
<button type="button" carousel-controller="right">
  >
</button>
<ul class="tidyCarousel-pager" carousel-pager>
</ul>
```
### Javascript.
-----------------
```js
 import TidyCarousel from 'tidy-carousel';

 const config = {}; // See: https://github.com/dorultan/tidy-carousel#configuration.
 const carousel = new Carousel(config);
```
