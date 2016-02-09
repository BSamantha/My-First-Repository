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

var perimeterBack = [];

/*Возвращает одномерный массив с элементами первого столбца из двумерного массива arr.

@param {object} Пустой массив perimeterBack
@return {object} Одномерный массив с элементами первого столбца */
function saveLeft(left) {
  for(var i = 0; i < totalArray.length; i++) {
    for(var j = 0; j < 1; j++) {
      perimeterBack.push(totalArray[i][j]);
    }
  }
return perimeterBack;
}

saveLeft(perimeterBack);

/*Возвращает одномерный массив с элементами последней строки из двумерного массива arr. Элементы добавляются в конец массива

@param {object} Заполненный одномерный массив perimeterBack
@return {object} Одномерный массив с элементами последней строки, добавленные в конец*/
function saveBottom(bottom) {
  for(var i = totalArray.length - 1; i < totalArray.length; i++) {
    for(var j = 1; j < totalArray.length; j++) {
      perimeterBack.push(totalArray[i][j]);
    }
  }
return perimeterBack;
}

saveBottom(perimeterBack);

/*Возвращает одномерный массив с добавленными элементами последнего столбца из двумерного массива arr. Элементы добавляются в конец массива

@param {object} Заполненный одномерный массив perimeterBack
@return {object} Одномерный массив с добавленными элементами последнего столбца*/
function saveRight(right) {
  for(var i = totalArray.length - 2; i >= 0; i--) {
    for(var j = totalArray.length - 1; j < totalArray.length; j++) {
      perimeterBack.push(totalArray[i][j]);
    }
  }
return perimeterBack;
}

saveRight(perimeterBack);

/*Возвращает новый одномерный массив с элементами первой строки из двумерного массива arr

@param {object} Заполненный одномерный массив perimeterBack
@return {object} Одномерный массив с добавленными элементами первой строки*/
function savePerimeter(Top) {
  for (var i = 0; i < 1; i++) {
    for (var j = totalArray.length - 2; j > 0; j--) {
      perimeterBack.push(totalArray[i][j]);
    }
  }
return perimeterBack;
}
savePerimeter(perimeterBack);
console.log(perimeterBack);