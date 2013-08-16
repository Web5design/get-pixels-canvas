var fs = require('fs'),
    Canvas = require('canvas'),
    ndarray = require('ndarray'),
    Image = Canvas.Image;

module.exports = function getPixels(url, cb) {
    fs.readFile(url, function(err, data) {
        if (err) throw err;
        var img = new Image();
        img.src = data;

        var canvas = new Canvas(img.width, img.height),
            ctx = canvas.getContext('2d');

        ctx.drawImage(img, 0, 0);
        var pixels = ctx.getImageData(0, 0, img.width, img.height);

        cb(null, ndarray(new Uint8Array(pixels.data),
           [img.height, img.width,  4],
           [4 * img.width, 4, 1], 0));
    });
};
