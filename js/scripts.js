// business logic
function capitalize(words) {
  let capfront = words.charAt(0).toUpperCase();
  let capback = words.charAt(words.length - 1).toUpperCase();
  console.log(capfront);
  let newstring = words.replace(words.charAt(0), capfront);
  newstring.replace(newstring.charAt(words.length - 1), capback);
  console.log(newstring);
  return newstring;
}


// user interface logic 
let words = prompt("what do you want to cyphier");
alert(words + " is what you entered");
newalert = capitalize(words);
alert(newalert);