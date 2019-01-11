var MakePulseDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
};

MakePulseDancer.prototype = Object.create(MakeDancer.prototype);
MakePulseDancer.prototype.constructor = MakePulseDancer;

MakePulseDancer.prototype.baseStep = MakePulseDancer.prototype.step;

MakePulseDancer.prototype.step = function() {
  // this.baseStep();
  var cssValues = {
    border: 'none'
  };
  this.$node.css(cssValues);

  this.$node = this.addImg('img/fb.png');

  this.animSet('pulse ' + Math.max(this.timeBetweenSteps, 250) / 1000 + 's infinite');
};

MakePulseDancer.prototype.animSet = function (string) {
  //retrieve animation
  //append to our string
  var currentAnim = this.$node.css('animation');
  if (currentAnim && currentAnim !== '') {
    this.$node.css('animation', currentAnim + ', ' + string);
  } else {
    this.$node.css('animation', string);
  }

};

MakePulseDancer.prototype.addImg = function(image) {
  var imgSearch = this.$node.find('img');
  if (imgSearch.length > 0) {
    imgSearch.attr('src', image);
    return this.$node;
  } else {
    var img = $('<img src="' + image + '" alt="bill">');
    return img.wrap(this.$node).parent();
  }
};