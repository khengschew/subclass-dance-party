var MakePSpinDancer = function(top, left, timeBetweenSteps) {
  MakePulseDancer.call(this, top, left, timeBetweenSteps);

  // Loop over window.dancers
  //   Find closest football
  //   Set closest football using setPosition, to bill's top and left
  var closest;
  for (var dancer of window.dancers) {
    if (dancer.constructor.name === 'MakePulseDancer') {
      if (!closest) {
        closest = dancer;
      } else {
        if (dancer.getDistance(top, left) < closest.getDistance(top, left)) {
          closest = dancer;
        }
      }
    }
  }

  if (closest) {
    closest.setPosition(top, left);
  }
};

MakePSpinDancer.prototype = Object.create(MakePulseDancer.prototype);
MakePSpinDancer.prototype.constructor = MakePSpinDancer;

MakePSpinDancer.prototype.pulseStep = MakePSpinDancer.prototype.step;

MakePSpinDancer.prototype.step = function() {
  this.pulseStep();
  
  this.$node.removeClass('football');
  this.$node.addClass('bill');

  this.$node = this.addImg('img/bill.png');

  this.animSet('rotate ' + Math.max(this.timeBetweenSteps, 250) * 2 / 1000 + 's linear infinite');
};
