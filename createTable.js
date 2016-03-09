var parentElem = document.body;

/* The function returns a random value

@param {number} min. A number of start range
@param {number} max. A number of end of the range
@return {number} rand. Generated number*/
function randomInteger(min, max) {
  var rand = min + Math.random() * (max - min)
  rand = Math.round(rand);
  return rand;
}

var tableElem = document.createElement('table');
parentElem.appendChild(tableElem);
var size = 10;
/* The function returns a table. The table is filled in a random value
@param {number} size. Table size.
@param {parent document element} parentElem. The point of entry into document.
@param {parent table element} tableElem. The point of entry into table.
*/
function createTable(size, parentElem, tableElem){
	var sizeTable = size;
	var parent = parentElem;
	var table1 = tableElem;
	parent.appendChild(table1);

	for (var i = 0; i < sizeTable; i++) {
		var tr = document.createElement('tr');
		for (var j = 0; j < sizeTable; j++) {
			var td = document.createElement('td');
			table1.appendChild(tr);
			tr.appendChild(td);
			td.innerHTML = randomInteger(1, 50);
		}
	}
	return table1;
}

var resultTable = createTable(size, parentElem, tableElem);

