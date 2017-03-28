if (Error.prepareStackTrace) {
  Error.prepareStackTrace = (function(prepare) {
    return function(error, stack) {
      return prepare(error, stack).split('\n').filter(function(line) {
        return line.indexOf('node_modules/') === -1
      }).join('\n')
    }
  })(Error.prepareStackTrace)
} else {
  Error.prepareStackTrace = function(error, stack) {
    return error + stack.filter(function(frame) {
      return frame.getFileName().indexOf('node_modules/') === -1
    }).map(function(frame) {
      return '\n    at ' + frame
    })
  }
}
