// @animate: {
// 	- Write  a wrap of the method animate provided by the browser. That will loop over an array of
// 	elements.
// 	- The second param should be the callback for each iteration,
// 	- @calback should be a function that needs to know when the animation finishes or the animation starts.
// 	-
// }

export const animate = (elems, keyframes, opts) => {
	// Validate:
	// Check if elems is an instance of a Set obj
	// Check if keyframes is an array
	// Check if opts is an object
	// ====================================================

	let promise = new Promise((resolve, reject) => {
		for (let key in elems) {

			if(elems[key].animate !== undefined) {
				const animation = elems[key].animate([
					keyframes[key].from,
					keyframes[key].to
				], opts)

				animation.onfinish = (e) => {
					resolve(e)
				}

				animation.onCancel = (e) => {
					reject(e);
				}
			}

			else {
				setTimeout(() => {
					resolve()
				}, opts.duration)
			}
		}


			// Reject is the possibile way of validating this code.

	})

	return promise;

	// #Return a promise
}
