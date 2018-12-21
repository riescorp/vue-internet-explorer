# Steps to reproduce

## Common steps 

1. `npm i @feathersjs/feathers`
2. import feathers: `import feathers from '@feathersjs/feathers'` (in `store.js`)
3. create `vue.config.js`

## Error 1: won't work in IE 11

Use this `vue.config.js` file:

```js
// vue.config.js
module.exports = {
  baseUrl: '/'
}
```

In IE 11 you'll get an error like this: `SCRIPT1010: Expected identifier`

The details:

```js
eval("const { hooks } = __webpack_require__(/*! @feathersjs/commons */ \"./node_modules/@feathersjs/commons/lib/index.js\");\nconst Proto = __webpack_require__(/*! uberproto */ \"./node_modules/uberproto/lib/proto.js\");\nconst Application = __webpack_require__(/*! ./application */ \"./node_modules/@feathersjs/feathers/lib/application.js\");\nconst version = __webpack_require__(/*! ./version */ \"./node_modules/@feathersjs/feathers/lib/version.js\");\nconst { ACTIVATE_HOOKS, activateHooks } = __webpack_require__(/*! ./hooks */ \"./node_modules/@feathersjs/feathers/lib/hooks/index.js\");\n\nfunction createApplication () {\n  const app = {};\n\n  // Mix in the base application\n  Proto.mixin(Application, app);\n\n  app.init();\n\n  return app;\n}\n\ncreateApplication.version = version;\ncreateApplication.SKIP = hooks.SKIP;\ncreateApplication.ACTIVATE_HOOKS = ACTIVATE_HOOKS;\ncreateApplication.activateHooks = activateHooks;\n\nmodule.exports = createApplication;\n\n// For better ES module (TypeScript) compatibility\nmodule.exports.default = createApplication;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQGZlYXRoZXJzanMvZmVhdGhlcnMvbGliL2luZGV4LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BmZWF0aGVyc2pzL2ZlYXRoZXJzL2xpYi9pbmRleC5qcz9iNDYyIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgaG9va3MgfSA9IHJlcXVpcmUoJ0BmZWF0aGVyc2pzL2NvbW1vbnMnKTtcbmNvbnN0IFByb3RvID0gcmVxdWlyZSgndWJlcnByb3RvJyk7XG5jb25zdCBBcHBsaWNhdGlvbiA9IHJlcXVpcmUoJy4vYXBwbGljYXRpb24nKTtcbmNvbnN0IHZlcnNpb24gPSByZXF1aXJlKCcuL3ZlcnNpb24nKTtcbmNvbnN0IHsgQUNUSVZBVEVfSE9PS1MsIGFjdGl2YXRlSG9va3MgfSA9IHJlcXVpcmUoJy4vaG9va3MnKTtcblxuZnVuY3Rpb24gY3JlYXRlQXBwbGljYXRpb24gKCkge1xuICBjb25zdCBhcHAgPSB7fTtcblxuICAvLyBNaXggaW4gdGhlIGJhc2UgYXBwbGljYXRpb25cbiAgUHJvdG8ubWl4aW4oQXBwbGljYXRpb24sIGFwcCk7XG5cbiAgYXBwLmluaXQoKTtcblxuICByZXR1cm4gYXBwO1xufVxuXG5jcmVhdGVBcHBsaWNhdGlvbi52ZXJzaW9uID0gdmVyc2lvbjtcbmNyZWF0ZUFwcGxpY2F0aW9uLlNLSVAgPSBob29rcy5TS0lQO1xuY3JlYXRlQXBwbGljYXRpb24uQUNUSVZBVEVfSE9PS1MgPSBBQ1RJVkFURV9IT09LUztcbmNyZWF0ZUFwcGxpY2F0aW9uLmFjdGl2YXRlSG9va3MgPSBhY3RpdmF0ZUhvb2tzO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZUFwcGxpY2F0aW9uO1xuXG4vLyBGb3IgYmV0dGVyIEVTIG1vZHVsZSAoVHlwZVNjcmlwdCkgY29tcGF0aWJpbGl0eVxubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGNyZWF0ZUFwcGxpY2F0aW9uO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/@feathersjs/feathers/lib/index.js\n");
```


## Error 2: won't work at all

When trying to transpile the code for `@feathers/*` it won't even work in chrome.

```js
// vue.config.js
module.exports = {
  baseUrl: '/',
  transpileDependencies: [
    '@feathers/commons',
    '@feathers/errors',
    '@feathers/feathers',
    'debug'
  ]
}
```

An error will occur: `Uncaught ReferenceError: exports is not defined`

## Conclusion

Feathers is not being transpiled correctly, probably some extra configuration is needed.

