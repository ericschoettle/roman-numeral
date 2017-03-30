var romanNumeralsTable = [];
romanNumeralsTable[0] = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
romanNumeralsTable[1] = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
romanNumeralsTable[2] = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
romanNumeralsTable[3] = ["", "M", "MM", "MMM"];
console.log(romanNumeralsTable)

var numeralsTable = []
var numerals = ["I", "V", "X", "L", "C", "D", "M"]
var template = ["", "One", "OneOne", "OneOneOne", "OneFive", "Five", "FiveOne", "FiveOneOne", "FiveOneOneOne", "OneTen"];
var templateString = template.toString();
// make rows for each digit
for (var i = 1; i < numerals.length; i += 2) {
  var numeralsString = templateString.replace(/One/g, numerals[i-1]).replace(/Five/g, numerals[i]).replace(/Ten/g, numerals[i+1]);
  numeralsTable.push(numeralsString.split(","));
}
shortTemplate = template.slice(0,4).toString();
var numeralsString = shortTemplate.replace(/One/g, numerals[numerals.length - 1]);
numeralsTable.push(numeralsString.split(","))

console.log(numeralsTable)
// function digitToRomanNumeral(number) {
//   if (Number.isInteger(parseFloat(number)) && parseFloat(number) < 4000 && parseFloat(number) > 0) {
//     var digitArray = number.split("");
//     reversedDigits = digitArray.reverse();
//     var reversedRomanNumeralArray = [];
//     for (var i=0; i<reversedDigits.length; i++) {
//       reversedRomanNumeralArray.push(romanNumeralsTable[i][reversedDigits[i]]);
//     }
//     romanNumeralArray = reversedRomanNumeralArray.reverse();
//     romanNumeralArray = romanNumeralArray.join("");
//     return romanNumeralArray;
//   } else {
//     alert("Romans don't know how to deal with this - please enter an integer between zero and 4000");
//   }
// }
//
// console.log(digitToRomanNumeral("101"))
// $(document).ready(function() {
//   $("form").submit(function(event) {
//     var number = $("#number").val();
//     var romanNumeral = digitToRomanNumeral(number)
//     event.preventDefault();
//   });
// });
