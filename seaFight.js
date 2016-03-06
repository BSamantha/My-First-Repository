function SeaFight() {
  this.arr = [];
  this.size = 10;
  this.chip = false;
  this.opened = false;
  this.msg = "Промазал!";

  this.createField = function() {
    for(var i = 0; i < this.size; i++){
      this.arr[i] = [];
      for(var j = 0; j < this.size; j++) {
        this.arr[i][j] = {
          chip: false,
          opened: false,
          msg: 'Промазал!'
        }
      }
    }
   return this.arr;
  };

  this.putChip = function(x, y) {
    if(x < 0 || x > 9 || y < 0 || y > 9){
      console.log("Вы ввели неправильные координаты. Введите от 0 до 9")
    }
    for(var i = 0; i < this.arr.length; i++) {
      for (var j = 0; j < this.arr.length; j++) {
        if(i == x && j == y) {
         this.arr[i][j].chip = true;
        }
      }
    }
  };

  this.setMsg = function(x, y, msg) {
    console.log(x + ' ' + y + ' ' + msg);
  };

  this.hit = function(x, y) {
        if( this.arr[x][y].chip == true ) {
        this.arr[x][y].opened = true;
        this.arr[x][y].msg = 'Попал!';
        this.setMsg(x, y, 'Попал!');
        } else {
            this.setMsg(x, y, 'Промазал!');
        }
  };

  this.hasChips = function() {
    for (var i = 0; i < this.arr.length; i++) {
      for (var j = 0; j < this.arr.length; j++) {
        if (this.arr[i][j].chip == true &&
            this.arr[i][j].opened == false) {
             return false;
        } else if(this.arr[i][j].chip == false &&
                   this.arr[i][j].opened == false ||
                   this.arr[i][j].opened == true) {
                   return true;
                }
      }
    }
  }

};

var seaFight = new SeaFight();
console.log(seaFight.createField());
seaFight.putChip(0, 0);
seaFight.putChip(5, 7);
seaFight.putChip(3, 4);
seaFight.putChip(10, 11);


seaFight.hit(0, 0);
seaFight.hit(5, 7);
seaFight.hit(2, 4);
seaFight.hit(3, 4);

seaFight.hasChips();

