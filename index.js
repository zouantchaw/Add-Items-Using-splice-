// htmlColorNames should use splice() to
// remove the firt two elements of the array and
// add 'DarkSalmon' and 'BlanchedAlmond' in thier respective places

function htmlColorNames(arr) {
  arr.splice(0, 2, 'DarkSalmon', 'BlanchedAlmond')


  return arr;
}

console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));