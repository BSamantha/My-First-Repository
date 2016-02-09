/*Возвращает случайно сгенерированное число

@param {number} min. Число начала диапозона
@param {number} max. Число конца диапозона, не включая
@return {number} rand. Сгенерированное число*/
function randomInteger(min, max) {
  var rand = min + Math.random() * (max - min)
  rand = Math.round(rand);
  return rand;
}

var size = 10;

/*Возвращает двумерный массив

@param {number} size. Размер массива
@return {object} Двумерный массив размером size*/
function createArray(size){
  var arr = [];
  for (var i = 0; i < size; i++) {
  arr[i] = [];
    for (var j = 0; j < size; j++) {
      arr[i][j] = randomInteger(0, 50);
    }
  }
  return arr;
}

var totalArray = createArray(size);

console.table( totalArray );

var lineRight = [];

/*Возвращает новый одномерный массив с элементами последнего столбца двумерного массива arr

@param {object} Пустой массив
@return {object} Одномерный массив с элементами последнего столбца*/
function saveRight(lineRight) {
  for (var i = 0; i < totalArray.length; i++) {
    for (var j = totalArray.length - 1; j > totalArray.length - 2; j--) {
      lineRight.push(totalArray[i][j]);
    }
  }
return lineRight;
}
saveRight(lineRight);
console.log(lineRight);

/*Возвращает одномерный массив с элементами последней строки двумерного массива arr. Элементы добавляются в конец массива

@param {object} Заполненный одномерный массив lineLeft
@return {object} Одномерный массив с элементами последней строки, добавленные в конец, исключая последний элемент*/
function saveLineBottom(lineRight) {
  for (var i = totalArray.length - 1; i > totalArray.length - 2; i--) {
    for (var j = totalArray.length - 2; j >= 0; j --) {
      lineRight.push(totalArray[i][j]);
    }
  }
return lineRight;
}

saveLineBottom(lineRight);
console.log(lineRight);

/*Возвращает одномерный массив с элементами побочной диагонали двумерного массива arr. Элементы добавляются в конец массива

@param {object} Заполненный одномерный массив lineLeft
@return {object} Одномерный массив с элементами побочной диагонали, добавленные в конец */
function saveSecondaryDiagonal(lineRight) {
  for (var i = totalArray.length - 2; i > 0; i--) {
    for (var j = 1; j < totalArray.length - i; j+=totalArray.length ) {
        lineRight.push(totalArray[i][totalArray.length - 1 - i]);
    }
  }
return lineRight;
}

saveSecondaryDiagonal(lineRight);
console.log(lineRight);