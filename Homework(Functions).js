/*1. Напишите функцию, при работе которой определяется, есть ли в массиве элементы,
значения которых совпадают.*/

function randomInteger(min, max) {
  var rand = min + Math.random() * (max - min);
  rand = Math.round(rand);
  return rand;
}

var arr = [];
  for (var i = 0; i<30; i++) {
    arr.push( randomInteger(-10, 50) );
}
console.log(arr);

var digit = prompt( 'Введите целое число!' );
matchValues(arr);

function matchValues(arr){
  var counter = 0;
  for (var i = 0; i < arr.length; i++) {
    if ( arr[i] == digit ){
      counter++;
    }
 }
  alert( 'Число повторяется ' + counter + ' раз(а)');
}


/*2.Написать функцию, которая находит в массиве значения, повторяющиеся два и более
раз, и возвращает их (return resultArray).*/

function randomInteger(min, max) {
  var rand = min + Math.random() * (max - min);
  rand = Math.round(rand);
  return rand;
}

var arr = [];
  for (var i = 0; i<30; i++) {
    arr.push( randomInteger(-10, 50) );
}
console.log(arr);

var count = 0;
var digit = prompt( 'Введите число!' );

repeatValues(arr);

function repeatValues(arr) {
  for (var i = 0; i < arr.length; i++) {
    if ( arr[i] == digit) {
      count++;
    }
  }
  alert( 'Количество элементов = ' + count);
}

/*3. Задан одномерный массив чисел. Напишите сценарий, который определяет число
отрицательных элементов. (return count)*/

function randomInteger(min, max) {
  var rand = min + Math.random() * (max - min);
  rand = Math.round(rand);
  return rand;
}

var arr = [];
  for (var i = 0; i<30; i++) {
    arr.push( randomInteger(-50, 50) );
}
console.log(arr);

countNegative(arr);

function countNegative(arr){
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    if ( arr[i] < 0 ){
      count++;
   }
 }
  alert( 'Количество отрицательных элементов = ' + count );
}


/*4. Задан одномерный массив целых чисел. Напишите сценарий, который определяет
минимальнй элемент. (вернуть его индекс)*/

function randomInteger(min, max) {
  var rand = min + Math.random() * (max - min);
  rand = Math.round(rand);
  return rand;
}

var arr = [];
  for (var i = 0; i<15; i++) {
    arr.push( randomInteger(-50, 50) );
}
console.log(arr);

countMin(arr);

function countMin(arr){
  var index = 0;
  var min = arr[0];
    for (var i = 0; i < arr.length; i++) {
      if ( arr[i] < min ){
      min = arr[i];
      index = i;
   }
 }
  alert( ' Индекс минимального элемента = ' + index);
}


/*5. Задан одномерный массив целых чисел. Напишите сценарий, который определяет
число элементов, кратных 7.*/

function randomInteger(min, max) {
  var rand = min + Math.random() * (max - min);
  rand = Math.round(rand);
  return rand;
}

var arr = [];
  for (var i = 0; i<15; i++) {
    arr.push( randomInteger(-10, 50) );
}
console.log(arr);

countValues(arr);

function countValues(arr){
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    if ( arr[i] % 7 == 0 ){
      count++;
   }
 }
  alert( ' Число элементов кратных 7 = ' + count );
}


/*6. Напишите сценарий, при работе которого определяется число элементов
одномерного массива, совпадающих с заданным массивом. (передаем в ф-цию не искомый элемент а массив искомых элементов, дальше все то же самое как в задании 5)*/

function randomInteger(min, max) {
  var rand = min + Math.random() * (max - min)
  rand = Math.round(rand);
  return rand;
}

var arr = [];
var arr2 = [];
var size = 10;

function fillArray (arr, size) {
  for (var i = 0; i < 10; i++) {
    arr.push( randomInteger(0, 2) );
  }
}

fillArray (arr, size);
console.log(arr);

fillArray (arr2, size);
console.log(arr2);

var count = 0;
function coincidenceValues (arr, arr2, size) {
  for (var i = 0; i < size; i++) {
    for (var j = 0; j < size; j++) {
      if (arr[i] == arr2[j]) {
        count++;
      }
    }
  }
}

alert( 'Count = ' + count);
