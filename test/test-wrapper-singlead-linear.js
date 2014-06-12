buster.testCase("Single wrapped ad", {
  prepare: function(done) {
    var that = this;
    queryVAST("./test/assets/vast_wrapper_linear_1.xml", function(ads) {
      that.vast = ads;
      done();
    });
  },

  setUp: function() {
    this.ad = this.vast.getAd();
    this.ad.sentImpression = false;
  },

  "has ad": function() {
    refute.isNull(this.ad);
  },

  "finds linear": function() {
    refute.isNull(this.ad.linear);
  },

  "finds linear click through": function() {
    assert.equals(this.ad.linear.clickThrough, "http://linear.test.com");

  },

  "finds linear media files": function() {
      assert.equals(this.ad.linear.mediaFiles.length, 4);
  },

  "finds linear media files": function() {
      assert.equals(this.ad.linear.duration, 3661);
  },

})
