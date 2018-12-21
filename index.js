const pullCursor = require('pull-cursor')

const getMeta = (array) => (offset, useCache, cb) => {
  if (offset < 0 || offset >= array.length) {
    return cb(new Error('out of bounds:' + offset))
  }

  cb(null, array[offset], offset - 1, offset + 1)
}

module.exports = (array, since) => 
  pullCursor(since, getMeta(array))
