# Derive Type

POC of npm package [derive-type](https://www.npmjs.com/package/derive-type) as a real-world example of painless Javascript type annotations once your done developing a new component/function.

## How to use

1. Create a function or component.

2. import it the function. Besure that it is excessiable to the root of the application. In this example `App.js`

3. Paste the following command into the function.
```js
export default function myFunc(x, y) {
  require('derive-type')(...arguments) // paste this function
  return x + y;
}
```

4. If the component or function is mounted on load, run the *binary command* to generate the `@type`. If not, create a function call `myFunc(1, 5)`.

** If function call is required, delete after the `@type` is generated.

6. That's it!

## Binary command
`npx derive-type npm test`

