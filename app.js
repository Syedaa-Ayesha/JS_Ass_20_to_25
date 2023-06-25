 //--------------------------Chapter String Method-------------------------------
// Question 01

// let userInput_1 = prompt("Enter your first name.");
// let userInput_2 = prompt("Enter your last name.");
// let fullName  = userInput_1.concat(userInput_2);
// console.log("Hello "+ fullName);

// Question 02
// let userInput_1 = prompt("Enter your favourite mobile phone Model.");
// console.log("My favourite Phone is: "+ userInput_1);
// let stringLength = userInput_1.length;
// console.log("The length of String: "+ stringLength);

// Question 03

// let string = " pakistani";
// console.log("The string is "+ string);
// let indexOfchar = string.search("n");
// console.log("The index of 'n' is "+indexOfchar);

// Question 04

// let string  = "Hello World";
// console.log("The string is"+ string);
// let lastIndex = string.lastIndexOf("l");
// console.log("The last index of 'l' is " +lastIndex);

// Question 05

// let string = "Pakistani";
// console.log("String " + string);
// let charIndex = string.charAt(3); 
// console.log("The value at index 3 is: "+charIndex);

// Question 07

// let city  = "Hydrabad";
// let newCity = city.replace("Hyder", "Islam");
// console.log("City: " +city);
// console.log("After Replacement: "+newCity);

// Question 08

// let message = "Ali and Sami are best friends. They play cricket and football together.";
// console.log(message);
// let replaceMsg = message.replaceAll("and" , "&");
// console.log(replaceMsg);

// Question 09

// let string = "472";
// console.log("Value: "+ string + typeof(string));
// let convertString = parseInt(string);
// console.log("Value: "+ string + typeof(convertString));

// Question 10

// let userInput = prompt("Enter a string");
// console.log(userInput);
// let caseChange = userInput.toLocaleUpperCase();
// console.log(caseChange);

// Question 11

// let userInput = prompt("Enter a String");
// let lastName = prompt("Enter Last name");
// console.log(userInput +" "+ lastName);
// let extractFirst = userInput.slice(0,1);
// let otherFirst = userInput.slice(1);

// let caseChange = extractFirst.toUpperCase();
// let caseChangeto  = otherFirst.toLowerCase();

// let extractLast = lastName.slice(0,1);
// let otherLast = lastName.slice(1);

// let caseChangeLast = extractLast.toUpperCase();
// let caseChangetoLast  = otherLast.toLowerCase();

// console.log(caseChange + caseChangeto + " "+ caseChangeLast + caseChangetoLast);

// Question 12

// let num = 35.36;
// let numberToString = num.toString();
// console.log("Number: "+num);
// let  decimalToInteger = numberToString.replace("." , "");
// console.log("Result: "+decimalToInteger);

// Question 13

// var userName = prompt("Enter userName: ");
// var specialSymbols = ['@','.',',','!'];
// var isValid = false;
// if(){
// for (var i = 0; i < specialSymbols.length; i++) {
//     if(userName.includes(specialSymbols[i])) {
        
//         alert("Enter a Valid username with special symbols [@ . , !]");
//         isValid = true;
//         break;
//     }
// }
// }
// if (isValid) {
//     alert("Valid username");
// }
