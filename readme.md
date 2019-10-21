# ****Tidy carousel**** [![Build Status](https://travis-ci.com/dorultan/tidy-carousel.svg?branch=master)](https://travis-ci.com/dorultan/tidy-carousel)

This is a simple UI widget mobile-friendly, responsive built in vanilla javascript (es2015+). Tidy carousel is inspired by a card deck as multiple slides stack together and based on an event an element is picked transforming its x-axis using percentage. Tidy carousel is also highly
configurable (See [config](http://localhost:8080/documentation/configuration))
having features such as [mouse drag](http://localhost:8080/documentation/configuration),
 [swipe](http://localhost:8080/documentation/configuration),
[pager](http://localhost:8080/documentation/configuration),
[infinite sliding](http://localhost:8080/documentation/configuration)
and [more](http://localhost:8080/documentation/configuration).


## ****Installation****
Using npm:

`> npm install tidy-carousel`

Using yarn:

`> yarn add tidy-carousel`

Using unpkg:

`<script type="text/javascript" src="unpkg.com/tidy-carousel/tidy-carousel.min.js"></script>`

## ****Configuration.****

| ****Option****     | ****Type**** | ****Default****    | ****Description****    |
| :------------- | :------------- | :------| :------|
| duration   | `Number` | 500     | The duration of the slide.|
| name| `String`| undefined | This option should be used when intializing multiple instances. **** *Note:**** The name given must match with the attr(s) used for instance's controller/pager (data-for={name}) and also for the container (data-name={name}).|
| easing   | `String` |'ease'    |The rate of the animation's change over time. Accepts the pre-defined values "linear", "ease", "ease-in", "ease-out", and "ease-in-out", or a custom "cubic-bezier" value like "cubic-bezier(0.42, 0, 0.58, 1)"|
| container  | `String`/`Node` | '.tidy__carousel' | This is the wrapper of the slides, witch can be neither the node element or a selector as a string.|
| delay   | `Number` |500     | This is the delay in between each slide. Useful if auto is set to true.|
| auto   | `Boolean` | false     | This makes the carousel loop without an event.|
|auto.direction|`String`| 'left'| This opts specifies in wich direction the carousel should slide. The only possible values can be 'right' or 'left' |
| swipe | `Boolean` | true | This option (if true) will enable touch event for mobile devices.|
| drag | `Boolean` | true | This option (if true) will enable the user to drag the slide. |
| startAt | `Number` | 0 | This option is the index of the first slide.  |
| slides | `Array` | [] | It should be an array of objects representing the slides.|
| slides[i].html | `String` |  | It should be a html element as a string e.g: `<div class="my_slide">Content</div>`. The element will be inserted into the DOM using ` element.insertadjacentelement` method.|
| slides[i].src | `String` |  | It should be the source of the image. <br/> *****Note:**** This option is an alternative for `slides[i].node`. |
| slides[i].alt | `String` | [] | It should be the alternative for the image. <br/> ****Note:**** This option will only work if you set `slides[i].src`.|
| slides[i].beforeAnimation(element, index) | `Function` |  | A function that is invoked before the slide occurs.|
| slides[i].afterAnimation(element, index) | `Function` |  | A function that is invoked After the slide occurs. If present, it must return a promise e.g: `afterAnimation: (element, index) => { return new Promise((success, reject) => { setTimeout(() => { doSomething(); success()}, 500)})}`|
| pager | `Boolean` | false | This option if `true`, the carousel will look for an `<ul></ul>` element with attr `data-carousel-pager`and will generate a pager at the bottom of the carousel. **** Note:**** If name opts is set, add the attribute data-for={name} to the ul[data-carousel-pager].|
| infinite | `Boolean` | true | If set to true, the carousel will loop infinitely. |
| controllers | `String`/`DOM node` | '[data-carousel-controller]'| Can be set to a node element or a selector as a string. Each controller must have the attribute data-carousel-controller="left or right".  **** Note:**** If name opts is set, add the attribute data-for={name} to each controller. |
| beforeAnimation(elem, index) | `Function` |  | A function that is invoked before the slide occurs.|
| afterAnimation(elem, index) | `Function` |  | A function that is invoked After the slide occurs. If present, it must return a promise e.g: `afterAnimation: (element, index) => { return new Promise((success, reject) => { setTimeout(() => { doSomething(); success()}, 500)})}`<br/> ****Note:**** This function is only invoked if the `slides` is not set to an array of slides.|

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
## Issues

For any issues please [open a new issue](https://github.com/dorultan/tidy-carousel/issues) with an appropriate label, write a simple headline and a comment containing the following:
- Your browser (e.g: Chrome v.54)
- Your installation method (e.g: yarn v.1.19.1)
- Details (Such as your markup or any useful info.)

## Contribution

Any contribution to this project ****is very appreciated****.
In order to contribute to this project, [make a pull request](https://github./com/dorultan/tidy-carousel/pulls) using development branch.

## License

This work is licensed under [MIT License](https://github.com/dorultan/tidy-carousel/blob/master/LICENSE) .
