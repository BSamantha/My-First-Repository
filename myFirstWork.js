/*Для трех переменных.
        Найти самую большую переменную. Умножить её значение на 10,
        следующую по величине умножить на 5,
        с наименьшей ничего не делать.
var a = 10;
var b = 30;
var c = 20;
Вывести в консоль исходные и модифицированные значения.*/
var a = 10, b = 30, c = 20;
/*Находим максимальное значение и умножаем его на 10*/
if (a > b && a > c) { 
	a = a*10;
}else if (b > c && b > a) {
	b = b*10;
}else if (c > a && c > b) {
	c = c*10;
};
/*Находим значение следующее по величине и умножаем его на 5*/
if (a > b && a < c) {
	a = a*5;
}else if (b > c && b < a) {
	b = b*5;
}else if (c > a && c < b) {
	c = c*5;
};