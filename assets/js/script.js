//var everyCha = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "!", "#", "$", "%", "&", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@"]
var nums = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var lowerletters=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperletters=[ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var special =[ "!", "#", "$", "%", "&", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@"]
var charactersInPass =[]
function start(){ //function start runs when the user clicks on the button generate button
  var length = prompt('How many characters would you like your password. Must be between 8 and 128 characters') // asks user for how long the user wants there password and stores it to variable (length)
  length = parseInt(length)// convert user input from a string 
  console.log(length)
  if (length<8 || length > 128){//checks if user input is between 8 and 128 and if it is not runs function start again
    alert('Has to be between 8 and 128 characters')
    start() 
  }
  else if(isNaN(length) ){ //checks if user input is a number and if its not runs function start
    alert('Please input a number')
    start()
  }
  else{// if meets validation start character function 
    characters(length)
  }
}
function characters(length){//generates an array of array based on user input 
  charactersInPass =[] // setup variable to hold arrays of characters user wants
  if(confirm('Do you want numbers?')){// asks if user wants numbers and if true pushes numbers array into characters In Pass
    charactersInPass.push(nums)
  }
  if(confirm('Do you want special characters?')){// asks if user wants special characters and if true pushes special characters array into characters In Pass
    charactersInPass.push(special)
  }
  if(confirm('Do you want lower case letters?')){// asks if user wants lowercase characters and if true pushes lowercase letters array into characters In Pass
    charactersInPass.push(lowerletters)
  }
  if(confirm('Do you want upper case letters?')){//asks if user wants upper case characters and if true pushes upper case characters array into characters In Pass
    charactersInPass.push(upperletters)
  }

  if(charactersInPass.length < 2){ //confirming that the user has selected two character types
    alert("You must select two character types.")// if not it will alert and run the function characters again
    characters(length)
  }
  else{ // if validation passes runs generate and passes it the length of password the user wants (based on the last if)
    generate(length)
  }
}

function generate(passLength){ // creates a random password based on array of arrays
    console.log(passLength, charactersInPass)
    var password ="" // creates a variable to hold random characters generated in for loop
  for (var l = 0; l < passLength; l++) { // loops for how long user wants password
    var whatArray =Math.floor(Math.random()*charactersInPass.length)// generates random number between 0 and the number of type of charachters they want
    password += charactersInPass[whatArray][Math.floor(Math.random()*charactersInPass[whatArray].length)] // selects a random character in array of arrays
  }
  console.log(password)
  document.getElementById('password').value =password // displays password in textarea
}
