// HURUF

function huruf (str) {
    if ((str===null) || (str===''))
       return false;
 else
   str = str.toString();
  
var isiTulisan = /[^A-Z\a-z]/g;
  
  return str.replace(isiTulisan, '');
}
console.log(huruf('A%6&Z#7Ca7j8k'));

//ANGKA

function angka (int) {
    if ((int===null) || (int===''))
       return false;
 else
   int = int.toString();
  
var isiTulisan = /[^0-9]/g;
  
  return int.replace(isiTulisan, '');
}
console.log(angka('A%6&Z#7Ca7j8k'));