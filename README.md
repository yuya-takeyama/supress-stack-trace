# supress-stack-stace

Supress stack trace of Node.js

Just hide stack frames from files in `node_modules` directory.

## Usage

Just load it.

```js
require('supress-stack-trace')
```

## Example

### Before 🙄

```
     Error: error
      at app/components/foo/Foo.jsx:18:11
      at Object.LinkedValueUtils.executeOnChange (node_modules/react-dom/lib/LinkedValueUtils.js:129:1)
      at ReactDOMComponent._handleChange (node_modules/react-dom/lib/ReactDOMInput.js:232:1)
      at Object.invokeGuardedCallback [as invokeGuardedCallbackWithCatch] (node_modules/react-dom/lib/ReactErrorUtils.js:26:1)
      at executeDispatch (node_modules/react-dom/lib/EventPluginUtils.js:83:1)
      at Object.executeDispatchesInOrder (node_modules/react-dom/lib/EventPluginUtils.js:108:1)
      at executeDispatchesAndRelease (node_modules/react-dom/lib/EventPluginHub.js:43:1)
      at executeDispatchesAndReleaseSimulated (node_modules/react-dom/lib/EventPluginHub.js:51:1)
      at forEachAccumulated (node_modules/react-dom/lib/forEachAccumulated.js:26:1)
      at Object.EventPluginHub.processEventQueue (node_modules/react-dom/lib/EventPluginHub.js:255:1)
      at node_modules/react-dom/lib/ReactTestUtils.js:340:1
      at ReactDefaultBatchingStrategyTransaction.TransactionImpl.perform (node_modules/react-dom/lib/Transaction.js:140:1)
      at Object.ReactDefaultBatchingStrategy.batchedUpdates (node_modules/react-dom/lib/ReactDefaultBatchingStrategy.js:62:1)
      at Object.batchedUpdates (node_modules/react-dom/lib/ReactUpdates.js:97:1)
      at node_modules/react-dom/lib/ReactTestUtils.js:338:1
      at ReactWrapper.<anonymous> (node_modules/enzyme/build/ReactWrapper.js:776:1)
      at ReactWrapper.single (node_modules/enzyme/build/ReactWrapper.js:1421:1)
      at ReactWrapper.simulate (node_modules/enzyme/build/ReactWrapper.js:769:1)
      at Context.<anonymous> (test/components/foo/Foo-test.js:168:20)
```

### After 🎉

```
     Error: error
      at app/components/foo/Foo.jsx:18:11
      at Context.<anonymous> (test/components/foo/Foo-test.js:168:20)
```

## License

The MIT License

## Author

Yuya Takeyama
