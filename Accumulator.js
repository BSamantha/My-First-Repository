/*Function-constructor creates the object Accumulator, takes startingValue and adds to it the digit entered by an user.

@param {number} takes startingValue
@return {number} returns sum of values*/

function Accumulator(startingValue) {
  var value = startingValue;
  this.read = function() {
     var p = +prompt('Input a digit!', 0);
     if ( isNaN(p) ) {
        p = +prompt('It\'s not a number. Input a digit!', 0);
        this.read();
     } else {
         value += p;
     }
   }
  this.getValue = function() {
    return value;
  }
}

var accum = new Accumulator(5);
accum.read();
accum.read();
accum.getValue();