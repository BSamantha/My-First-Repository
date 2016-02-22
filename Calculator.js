/*Function-constructor creates the object Calculator. It asks two digits and returns their sum and multiplication.

@param {}
@return {number} The object returns sum and multiplication*/

function Calculator() {

  this.read = function() {
    this.a = +prompt('a?');
    this.b = +prompt('b?');
  };

  this.sum = function(a, b) {
    return this.a + this.b;
  };
  this.mul = function(a, b) {
    return this.a * this.b;
  }
}

var calculator = new Calculator();
calculator.read();

alert( "Сумма=" + calculator.sum() );
alert( "Произведение=" + calculator.mul() );