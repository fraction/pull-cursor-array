const pullCursor = require('pull-cursor')

module.exports = (array, since) => {
  since.set(array.length - 1)

  return pullCursor(
    since,
    (offset, useCache, cb) => {
      if (offset < 0 || offset >= array.length) {
        return cb(new Error('out of bounds:' + offset))
      }

      cb(null, array[offset], offset - 1, offset + 1)
    })
}
