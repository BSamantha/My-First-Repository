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

var massiv = createArray(size);

console.table( massiv );

var lineLeft = [];

/*Возвращает новый одномерный массив с элементами первого столбца(нулевой индекс) двумерного массива arr

@param {object} Пустой массив
@return {object} Одномерный массив с элементами первого столбца*/
function saveLeft(lineLeft) {
  for (var i = 0; i < massiv.length; i++) {
      lineLeft.push(massiv[i][0]);
  }
return lineLeft;
}
saveLeft(lineLeft);
console.log(lineLeft);

/*Возвращает одномерный массив с элементами последней строки двумерного массива arr. Элементы добавляются в конец массива

@param {object} Заполненный одномерный массив lineLeft
@return {object} Одномерный массив с элементами последней строки, добавленные в конец, исключая первый элемент*/
function saveBottom(lineLeft) {
  for (var i = massiv.length - 1; i < massiv.length; i++) {
    for (var j = 1; j < massiv.length; j++) {
      lineLeft.push(massiv[i][j]);
    }
  }
return lineLeft;
}

saveBottom(lineLeft);
console.log(lineLeft);

/*Возвращает одномерный массив с элементами главной диагонали двумерного массива arr. Элементы добавляются в конец массива

@param {object} Заполненный одномерный массив lineLeft
@return {object} Одномерный массив с элементами главной диагонали, добавленные в конец, исключая элементы с индексом [0,0] и индексом последней строки последнего столбца*/
function saveMainDiagonal(lineLeft) {
  for (var i = massiv.length - 2; i > 0; i--) {
    for (var j = massiv.length - 1; j > 0; j--) {
      if (i == j) {
        lineLeft.push(massiv[i][j]);
      }
    }
  }
return lineLeft;
}

saveMainDiagonal(lineLeft);
console.log(lineLeft);