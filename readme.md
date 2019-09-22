# ****Tidy carousel****
I've built this carousel as a tanks giving to the open-source community, felt like was missing this type of carousel. This carousel works in clean order without manipulating parent's margin/translateX. It transforms the X axis of the current and the chosen slide from the stack using the built in Animate API.

## ****Installation****

> `npm install` TidyCarousel <br/>
> `yarn add` TidyCarousel

## ****Links of content.****

* [Setting up dynamic slides.]('https://github.com/dorultan/TidyCarousel/examples/')
* [Setting up a pager for the carousel.]('https://github.com/dorultan/TidyCarousel/examples/')
* [Setting up arrows as buttons for carousel.](('https://github.com/dorultan/TidyCarousel/examples/'))
* [Setting infinite sliding.](('https://github.com/dorultan/TidyCarousel/examples/'))
* [Setting up async animation after the slide occurs with dynamic slides .](('https://github.com/dorultan/TidyCarousel/examples/'))
* [Setting up async animation after the slide occurs with static html.](('https://github.com/dorultan/TidyCarousel/examples/'))

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

## Basic Usage.

### Html
```html
<main class="carousel">
 <div class="carousel-slider">
   <div class="carousel-slider"
 </div>
 <div class="carousel-controlls">
  <a href="#" id="carousel-controller" carousel-controller="left">Slide left</a>
  <a href="#" id="carousel-controller" carousel-controller="right">Slide right</a>
 </div>
 <div class="multiple-controlls">
<ul class="multiple__controlls-list" carousel-pager>
</ul>
 </div>
</main>
```
### Javascript.
-----------------
```js
 import Carousel from 'carousel';

 const opts = {}; // your options.
 const carousel = new Carousel(opts);
```

# Contribution.

# License.
