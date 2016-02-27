function Horse(mileage) {
  this.mileage = mileage;
  this.alreadyRun = 0;
  this.tiredness = 0;

  this.run = function(jog) {
    for (var i = 0; i < jog; i++) {
       this.tiredness++;
       this.alreadyRun++;
       if (this.tiredness == 10) {
         this.leftToRun = this.mileage - this.alreadyRun;
         this.rest( this.run, this.leftToRun );
       };
     }
    return this.alreadyRun;
   }

this.rest = function(run, leftToRun) {
    var timerId = setTimeout(function() {
      this.tiredness = 0;
      alert( 'Horse is resting' );
    }, 1000);
  }
}

var h = new Horse(12);
h.run(12);