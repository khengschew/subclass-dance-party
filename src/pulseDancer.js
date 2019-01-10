var MakePulseDancer = function(top, left, timeBetweenSteps) {
  
  MakeDancer.call(this, top, left, timeBetweenSteps);

};

MakePulseDancer.prototype = Object.create(MakeDancer.prototype);
MakePulseDancer.prototype.constructor = MakePulseDancer;

MakePulseDancer.prototype.baseStep = MakePulseDancer.prototype.step;

MakePulseDancer.prototype.step = function() {
  // this.baseStep();
  this.$node.css('animation', 'pulse ' + this.timeBetweenSteps/1000 + 's infinite');
  this.$node.css('border-color', 'blue');

  // Placeholder animation
  // Intended animation is to pulse dancer using @keyframes(?)
  // Or maybe jQuery
  // this.$node.toggle();
};