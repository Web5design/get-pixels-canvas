[![Build Status](https://travis-ci.org/tmcw/get-pixels-canvas.png)](https://travis-ci.org/tmcw/get-pixels-canvas)

## get-pixels

Like [get-pixels](https://github.com/mikolalysenko/get-pixels), but uses
[node-canvas](https://github.com/learnboost/node-canvas) instead of
[pngparse](https://github.com/darkskyapp/pngparse) to parse images. That means
that it's faster (in theory) and inherits image format support, but
requires native dependencies (including Cairo).

The API and output is identical to `get-pixels`

Given a URL/path, grab all the pixels in an image and return the result
as an [ndarray](https://github.com/mikolalysenko/ndarray).

## Example

```javascript
var getPixels = require("get-pixels")

getPixels("lena.png", function(err, pixels) {
  if(err) {
    console.log("Bad image path")
    return
  }
  console.log("got pixels", pixels.shape)
})
```

## Install

    npm install get-pixels-canvas

### `require("get-pixels-canvas")(url, cb(err, pixels))`
Reads all the pixels from url into an ndarray.

* `url` is the path to the file
* `cb(err, pixels)` is a callback which gets triggered once the image is loaded.

**Returns** An ndarray of pixels in raster order having shape equal to `[rows, columns, channels]`.

## Credits

Obviously heavily based off of `get-pixels` by Mikola Lysenko, and similarly
under his MIT license, despite being a 'clean room' implementation.
