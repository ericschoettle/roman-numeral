var romanNumeralsTable = [];
romanNumeralsTable[0] = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
romanNumeralsTable[1] = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
romanNumeralsTable[2] = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
romanNumeralsTable[3] = ["", "M", "MM", "MMM"];

function digitToRomanNumeral(number) {
  if (Number.isInteger(parseFloat(number)) && parseFloat(number) < 4000 && parseFloat(number) > 0) {
    var digitArray = number.split("");
    reversedDigits = digitArray.reverse();
    var reversedRomanNumeralArray = [];
    for (var i=0; i<reversedDigits.length; i++) {
      reversedRomanNumeralArray.push(romanNumeralsTable[i][reversedDigits[i]]);
      console.log(reversedRomanNumeralArray);
    }
    romanNumeralArray = reversedRomanNumeralArray.reverse();
    romanNumeralArray = romanNumeralArray.join("");
    return romanNumeralArray;
  } else {
    alert("Romans don't know how to deal with this");
  }
}

console.log(digitToRomanNumeral("101"))
// $(document).ready(function() {
//   $("form").submit(function(event) {
//     var number = $("#number").val();
//     var romanNumeral = digitToRomanNumeral(number)
//     event.preventDefault();
//   });
// });
