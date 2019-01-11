var MakePSpinDancer = function(top, left, timeBetweenSteps) {
  MakePulseDancer.call(this, top, left, timeBetweenSteps);
};

MakePSpinDancer.prototype = Object.create(MakePulseDancer.prototype);
MakePSpinDancer.prototype.constructor = MakePSpinDancer;

MakePSpinDancer.prototype.pulseStep = MakePSpinDancer.prototype.step;

MakePSpinDancer.prototype.step = function() {
  this.pulseStep();
  
  this.$node = this.addImg('img/bill.png');

  this.animSet('rotate ' + Math.max(this.timeBetweenSteps, 250) * 2 / 1000 + 's linear infinite');
};
