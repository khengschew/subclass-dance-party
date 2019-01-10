var MakePSpinDancer = function(top, left, timeBetweenSteps) {
  MakePulseDancer.call(this, top, left, timeBetweenSteps);
};

MakePSpinDancer.prototype = Object.create(MakePulseDancer.prototype);
MakePSpinDancer.prototype.constructor = MakePSpinDancer;

MakePSpinDancer.prototype.pulseStep = MakePSpinDancer.prototype.step;

MakePSpinDancer.prototype.step = function() {
  this.pulseStep();
  this.$node.css('border-color', 'green');
  this.$node.css('border-radius', '0px');

  // Placeholder animation
  // this.$node.toggle();
};
