// business logic
function capitalize(words) {
  let capfront = words.charAt(0).toUpperCase();
  let capback = words.charAt(words.length - 1).toUpperCase();
  console.log(capfront);
  let newstring = capfront + capback
  console.log(newstring);
  return newstring;
}

function scramble(newstring) {
  let newfront = newstring.charAt(newstring.length - 1);
  let newback = newstring.charAt(0);
  let fliped = newfront + newback;
  return fliped;
}

function count(words) {
  let num = words.length / 2;
  num2 = Math.floor(num);
  let letter = words.charAt(num2);
  let output = letter + words;
  return output;
}


// user interface logic 
function main() {
  let words =prompt("what do you want to cyphier");
  alert(words + " is what you entered");
  let newstring = capitalize(words);
  alert(newstring);
  let fliped = scramble(newstring);
  alert(fliped);
  let output = count(words);
  alert(output + fliped);
}

main();