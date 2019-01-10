var MakePSpinDancer = function(top, left, timeBetweenSteps) {
  MakePulseDancer.call(this, top, left, timeBetweenSteps);
};

MakePSpinDancer.prototype = Object.create(MakePulseDancer.prototype);
MakePSpinDancer.prototype.constructor = MakePSpinDancer;

MakePSpinDancer.prototype.oldStep = MakePSpinDancer.prototype.step;

MakePSpinDancer.prototype.step = function() {
  this.oldStep();

  // Placeholder animation
  this.$node.toggle();
};
