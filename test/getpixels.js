var getPixels = require('../'),
    assert = require('assert'),
    expect = require('expect.js');

describe('getPixels', function(done) {
    it('parses the fiddler', function(done) {
        getPixels(__dirname + '/fiddler.jpg', function(err, pixels) {
            expect(err).to.eql(null);
            expect(pixels.shape.join(',')).to.eql('601,685,4');
            done();
        });
    });
    it('parses lena', function(done) {
        getPixels(__dirname + '/lena.png', function(err, pixels) {
            expect(err).to.eql(null);
            expect(pixels.shape.join(',')).to.eql('512,512,4');
            done();
        });
    });
    it('parses the test pattern', function(done) {
        getPixels(__dirname + '/test_pattern.png', function(err, pixels) {
            expect(err).to.eql(null);
            var img = pixels.transpose(1, 0, 2);
            assert.equal(img.shape[0], 16);
            assert.equal(img.shape[1], 8);
            assert.equal(img.get(0, 0, 0), 0);
            assert.equal(img.get(0, 0, 1), 0);
            assert.equal(img.get(0, 0, 2), 0);
            assert.equal(img.get(1, 0, 0), 0xff);
            assert.equal(img.get(1, 0, 1), 0);
            assert.equal(img.get(1, 0, 2), 0);
            assert.equal(img.get(2, 0, 0), 0xff);
            assert.equal(img.get(2, 0, 1), 0xff);
            assert.equal(img.get(2, 0, 2), 0);
            assert.equal(img.get(3, 0, 0), 0xff);
            assert.equal(img.get(3, 0, 1), 0);
            assert.equal(img.get(3, 0, 2), 0xff);
            assert.equal(img.get(0, 1, 0), 0);
            assert.equal(img.get(0, 1, 1), 0xff);
            assert.equal(img.get(0, 1, 2), 0);
            assert.equal(img.get(1, 1, 0), 0);
            assert.equal(img.get(1, 1, 1), 0xff);
            assert.equal(img.get(1, 1, 2), 0xff);
            assert.equal(img.get(0, 2, 0), 0);
            assert.equal(img.get(0, 2, 1), 0);
            assert.equal(img.get(0, 2, 2), 0xff);
            for(var i=4; i<8; ++i) {
              for(var j=0; j<16; ++j) {
                assert.equal(img.get(j, i, 0), 0xff);
                assert.equal(img.get(j, i, 1), 0xff);
                assert.equal(img.get(j, i, 2), 0xff);
              }
            }
            done();
        });
    });
});
