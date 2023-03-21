    
    
    
// ALL String Methods 21 TO 25
    
    
    // var firstName = prompt("Enter Your First");
// var lastName = prompt("Enter Your Last Name");
//  var fullName = firstName + " " +  lastName; 
//  document.write( "Hello" + fullName)


 // Question Num #2\
 

// var  favMobile = prompt("What is Your Favourate Mobile Phone Model");
// var mobileLength = favMobile.length;
// document.write ("My favourate Mobile is :" + favMobile )
// document.write (mobileLength);



 // Question Num #3\

// var letter = "Pakistani";
// var letterIndex = letter.indexOf("n") ;
// document.write ( "String:" + letter + "</br>" )
// document.write ( "Index of 'n': " + letterIndex )


 // Question Num #4\

 // var letter = "Hello World";
// var lastIndex = letter.indexOf("l") ;
// document.write ( "String:" + letter + "</br>" )
// document.write ( "Index of 'l': " + letterIndex )


//   Question Num #5\
//   var charcater = "Pakistani";
//   var findcharacter = charcater.charAt ("3");
//   document.write("string" + charcater +"</br>")
//    document.write(  "3rd index in the pakistani " + findcharacter);


//   Question Num #6\


// var firstName = prompt("Enter Your First");
// var lastName = prompt("Enter Your Last Name");
//  var fullName = firstName + " " +  lastName; 
//  document.write( fullName)

//   Question Num #7\

// var cityName = "Hyderabad";
// document.write("City: " + cityName + "<br/>");

// cityName = cityName.replace("Hyder","Islam");
// document.write(cityName);


//   Question Num #8\

// var message = "Ali and Sami are best friends. They play cricket and football together." ;
// message = message.replace("and" , "&") 
// document.write(message)


//   Question Num #9\

// var firstPart = "472";
// var secondPart = parseInt(a)
// document.write("Value: " + firstpart + "<br/>");
// document.write("Type: " + typeof firstpart + "<br/>")
// document.write("Value: " + secondPart + "<br/>");
// document.write("Type: " + typeof secondPart);


//   Question Num #10\

// var x = prompt("Type Anything");
// document.write("User input:;;; " + x + "<br/>");
// document.write("Upper case:;;;; " + a.toUpperCase());

//   Question Num #11\


//  var a = prompt("Type Anything");
//  var b = a[0].toUpperCase() + a.slice(1)

// document.write(b)

// /   Question Num #12\

// var num = 33.36 ;
//  var numString = num.toString().replace("." ,"");
//  document.write("Result: " + numString);

// /   Question Num #13\

//  var X = ["cake", "apple pie", "cookie", "chips", "patties"];

//  var userInput = prompt("Enter an item to search:");


// var matchfound = false;
// for (var i=0 ; X.length; i++ ){

// if (X[i].toLowerCase()=== userInput.lowercase){
// found = true;
// break;
// }


// }


// /   Question Num #14\

//  var password = prompt("Enter Password");

//  if(password.length < 6){
//      document.write("Password should be at least 6 charaters long. Enter a valid password.")
//  }else if(*&^%&$%^%#^&^& */.test(password)){
//      password = prompt("Password Should contain contain alphabets and numbers , Please enter a valid Password.")}
//  else{
//      alert(" Please Enters Valid Password!!")
//  }


// /   Question Num #15\

// var university = "University of Karachi" ;

// var convertAtt = university.split("");
// for(var i = 0 ; i < convertAtt.length; i++){
//      document.write(convertAtt[i] + "<br/>")
// }

// /   Question Num #16\

//  var string = "The quick brown fox jumps over the lazy dog";
//  var allWords = string.split("");
// var countings = 0 ;

// for(var i = 0 ; i < words.length; i++){
//     if(allWords[i].toLowerCase() === "the"){
//         count++
//     }
// }
// document.write("There are " + countings + "  word 'the')


// Math Methods 26 TO 30

// /   Question Num #1\


// var number = prompt("Enter a positive integar")

// var numBer = parseInt(num)
// document.write("number:;;;;;; " + num + "<br/>");
// var roundOff = Math.round(num)
// document.write("round off value:L;;;;;; " + roundOff + "<br/>");
// var floor = Math.floor(num)
// document.write("floor value:;;;;; " + floor + "<br/>");
// var celiValue = Math.ceil(num)
// document.write("celi value:;;;;;; " + celiValue + "<br/>");


// /   Question Num #2\

// var numer = prompt("Enter a negative floating point")
// var numBer = parseInt(num)
// var roundOff = Math.round(num)
// var floor = Math.floor(num)
// var celiValue = Math.ceil(num)
// document.write("number: " + num + "<br/>");
// document.write("round off value: " + roundOff + "<br/>");
// document.write("floor value: " + floor + "<br/>");
// document.write("celi value: " + celiValue + "<br/>");
 
// /   Question Num #3\

// var number = +prompt("Write a number");
// var absValue = Math.abs(number);
// document.write("Absolute value " + num + " is " + absValue)

 
// /   Question Num #4


//  var Coin = Math.random() *1+1 ;
//  var RoundNumber = Math.round(Coin);
//  var results =("");
//  if(RoundNumber === 1){
//      results = "Heads"
//  }else{
//      results = "Tails"
//  }

//  document.write(Coin + "<br/>")
//  document.write(RoundNumber")


// /   Question Num #5

//  var randomNumber = Math.random() *100;
//  var roundNumber = Math.round(randomNumber);
//  document.write("random number btw 1 and 100: " + roundNumber)

// /   Question Num #6

// var wght = prompt("Enter your wght in kilograms");
// wght = parseInt(weight.replace(WGHT , ""));
// document.write("Wght is: " + Wght + " kG")

// /   Question Num #7

// var secretNumber = +prompt("Write a Number");
// var randomNumber = Math.random() *10 +1;
// var roundOff = Math.round(randomNumber)
// if(secretNumber === roundOff){
//     document.write("Congrats You've got it ")
/




// Math Methods 31 TO 34

// Question #1

// var time = new Date();
// document.write(time)


// Question #2

// var Months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var Date = new Date();
// var month = months[date.getMonth()];




// Question 3

// var Dayss = ["Sun" , "Mon" , "Tue" , "Wed" , "Thu" , "Fri" , "Sat"];
// var nd = new Date();
// var day = Dayss[nd.getDay()];
// document.write("Today is " + Dayss)

// Question #4


// var Dayss = ["Sunday" , "Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday"];
// var nd = new Date();
// var Dayss = Dayss[nd.getDay()];
// if(Dayss === "Saturday" || "Sunday"){
//     document.write("It's Fun Day")


// Question 5

// var d = new Date();
// var days = d.getDate();
// if(days <=15){
//     document.write("First Fifteen Days of the month");

