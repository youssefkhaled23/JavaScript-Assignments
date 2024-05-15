// Task-1
/*
document.getElementById("h1").style.color = 'blue';
document.getElementById("h1").style.fontSize = '80px';
document.getElementById("h1").style.fontWeight = 'bold';
document.getElementById("h1").style.textAlign = 'center';
document.getElementById("h1").style.fontFamily = 'Arial';
*/

// Task-2
/*
console.log("%cElzero %cWeb %cSchool",
"color:red; font-size:40px;",
"color:green; font-weight:bold; font-size:40px;",
"background-color:blue; font-size:40px;");
*/

// Task-3
/*
console.group("Group One");
console.log("Message One");
console.log("Message Two");
console.group("Child Group");
console.log("Message One");
console.log("Message Two");
console.group("Grand Child Group");
console.log("Message One");
console.log("Message Two");
console.groupEnd();
console.groupEnd();
console.groupEnd();
console.group("Group Two");
console.log("Message One");
console.log("Message Two");
*/

// Task-4
/*
console.table(["Elzero","Ahmed","sameh","Gamal","Aya"]);
*/

// Task-5
/*
// The First Way To Unrunning This Code Put This Code In A Comment.
console.log("Iam In Console");
document.write("Iam In Page");
// The Sacond Way is Make A multeline Commen To This Code.
*/

// Task-6
/*
let Tilte = "Elzero",
  Description = "Elzero Wep School",
  Date = "25/10";

let Conatines = `
<div class="Parent">
    <h3>Hello ${Tilte}</h3>
    <p>${Description}</p>
    <span>${Date}</span>
</div>
`;
document.write(`${Conatines.repeat(4)}`);
// document.write(`${Conatines}`);
// document.write(`${Conatines}`);
// document.write(`${Conatines}`);
*/

// Task-7
/*
let numberOne = 10; // Type is Number.
let numberTwo = 20; // Type Is Number.
console.log(typeof numberOne); // => Number
console.log(typeof numberTwo); // => Number
console.log(numberOne  + "" + numberTwo); // Normal Concatenation
console.log(typeof( numberOne  + "" + numberTwo)) // String
console.log(`${numberOne}${numberTwo}`); // Template Literals
console.log(typeof `${numberOne}${numberTwo}`); // String
console.log(numberTwo + "\n" + numberOne); // 20 New Line 10
console.log(`${numberTwo}
${numberOne}`); // 20 New Line 10 
*/

// Task-8
/*
console.log(elzero.innerHTML); // object html elemnt Content
console.log(typeof (elzero)); // object Type of html elemnt Content 
*/

// Task-9
/*
console.log(
  '\'I\'m In \n \\\\ \n ++ With ++ \n\\"""\\""" \n ""JavaScrpit""`` '
);
*/

// Task-10
/*
let a = 21;
let b = 20;
console.log("_" + a + "_" + b + "_" + `${b}${a}_`.repeat(3) + b + "_"); // _21_2021_2021_2021_20_
console.log(`_${a}_${b}_${b}${a}_${b}${a}_${b}${a}_${b}_`); // _21_2021_2021_2021_20_
console.log(
  "_" + a + "_" + b + "_" + b + a + "_" + b + a + "_" + b + a + "_" + b + "_"
);
*/

//Task-11
// Challenge 1
/*
let a = 10;
let b = "20";
let c = 80;
console.log(++a + +b++ + +c++ - +a++); // 100
console.log(++a + -b + +c++ - -a++ + +a); // 100
console.log(--c + +b + --a * +b++ - +b * a + --a - +true); // 100
*/
/*
  [++a] [+]
  [++a]
  - Value: 11 
  - Explain: Pre Increment To A variable 
  [+]
  - Explain: Arthmatic Opertaor  
  [+b++] [+]
  [+b++]
  - Value: 20 
  - Explain: Unry Plus And Post InCrement
  [+]
  - Explain: Arthmatic Opertaor  
  [+c++] [-]
  [+c++]
  - Value: 80
  - Explain: Unry Plus And Post InCrement
  [-]
  - Explain: Arthmaitic Operator
  [+a++] [-]
  [+a++]
  - Value: 11
  - Explain: Unry Plus And Post InCrement
*/
/* 
  [++a] [+]
  [++a]
  - Value: 11 
  - Explain: Pre Increment To A variable 
  [+]
  - Explain: Arthmatic Opertaor 
  [-b] [+]
  [-b]
  - Value: -20 
  - Explain: unry Nagation Number 
  [+]
  - Explain: Arthmatic Opertaor 
  [+c++] [-]
  [+c++]
  - Value: -20 
  - Explain: unry Plus And Pre Increment
  [-]
  - Explain: Arthmatic Opertaor 
  [-a++] [+]
  [-a++]
  - Value: -10
  - Explain: unry Nagation And Post Increment
  [+]
  - Explain: Arthmatic Opertaor 
  [+a]
  [+a]
  - Value: 10
  - Explain: unry Plus 
*/
/*
  [--c] [+]
  [--c]
  - Value: 79
  - Explain: Pre Decrement 
  [+]
  - Explain: Arthmatic Opertaor 
  [+b] [+]
  [+b]
  - Value: 20
  - Explain: Unry Plus
  [+]
  - Explain: Arthmatic Opertaor 
  [--a] [*]
  [--a]
  - Value: 20
  - Explain: Pre Decrement 
  [*]
  - Explain: Arthmatic Opertaor 
  [+b++] [-]
  [+b++]
  - Value: 20
  - Explain: Unry Plus And Post Decrement 
  [-]
  - Explain: Arthmatic Opertaor 
  [+b] [*]
  [+b]
  - Value: 20
  - Explain: Unry Plus 
  [*]
  - Explain: Arthmatic Opertaor 
  [a] [+]
  [a]
  - Value: 10
  - Explain: A Normal Number
  [*]
  - Explain: Arthmatic Opertaor 
  [--a] [-]
  [--a]
  - Value: 10
  - Explain: Pre Decrement 
  [-]
  - Explain: Arthmatic Opertaor 
  [+true]
  [+true]
  - Value: 1
  - Explain: Unry Plus
*/

// Challenge 2
/*
let d = "-100";
let e = "20";
let f = 30;
let g = true;
// Only Use Variables Value
// Do Not Use Variable Twice
console.log(-d * +e); // 2000
console.log(++e * ++g + ++f + -d); // 173
*/

// Task-12
/*
// Replace ? With Arithmetic Operators
console.log(10 * 20 * 15 % 3 * ( 190 + 10 + 400)); // 0
*/

// Task-13

/*
// let num = 3;
// Solution One
console.log(num * 2); // 6

// Solution Two
console.log(num + num); // 6

// Soultion Three
console.log((num * num) - num); // 6

// Soultion Four
console.log((num * 6 ) / 3); // 6

// Solution Five
console.log((num * 4 ) - 6); // 6

// Solution Six
console.log((num + 9 ) - 6); // 6
*/

// Task-14
/*
let num = "10";
// Solution One
console.log(+num + +num); // 20
// Solution Two
console.log(+num * 2); // 20
// Solution Three
console.log((+num * 3 ) - +num); // 20
// Solution Four
console.log((+num * 4 ) - 20); // 20
*/

// Task-15
/*
let points = 10;
// Write Your Code Here

console.log(points + 3); // 13

// Write Your Code Here

console.log(points - 2); // 8;
*/

// Task-16
/*
  Number Challenge
*/
/*
let a = 100;
let b = 2_00.5; // 200.5
let c = 1e2; // 100
let d = 2.4;
// Find Smallest Number In All Variables And Return Integer
console.log(Math.min(Number.isInteger(a , b, c, d))); // 1 
// Use Variables a + d One Time To Get The Needed Output // 100 , 2.4
console.log(Math.pow(a , 2)); // 10000
// Get Integer "2" From d Variable With 4 Methods
console.log(Math.floor(d));
console.log(Math.round(d));
console.log(Math.trunc(d));
console.log(parseInt(d));
// Use Variables b + d To Get This Valus // 200.5 , 2.4 * 10 =
console.log((Math.floor(b) / Math.ceil(d)).toFixed(2)); // 66.67 => String 
console.log(Math.ceil((Math.floor(b) / Math.ceil(d)))); // 67 => Number
*/

// Task-17
/*
// Examples
// console.log(100_000); // 100000
// console.log(100000); // 100000
// console.log(5e4 + 5e4); // 100000

// Your Solutions
console.log(100000); // 100_000
console.log(100_000); // 100_000
console.log(1e5); // 100_000
console.log(5e4 + 5e4); // 100000
console.log(50_000 + 50_000); // 100000
console.log(6e4 + 4e4); // 100000
console.log(7e4 + 3e4); // 100000
console.log(1e2 * 1e3); // 100000
console.log(1e6 / 10); // 100000
console.log(2e5 / 2); // 100000
*/

// Task-18
/*
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
*/

// Task-19
/*
console.log((Number.MAX_SAFE_INTEGER).toString().length); // 16
console.log(typeof ((Number.MAX_SAFE_INTEGER).toString().length)) //Number 
*/

// Task-20
/*
let myVar = "100.56789 Views";
console.log(Math.floor(Number.parseInt(myVar))); // 100
console.log(typeof (Math.floor(Number.parseInt(myVar)))) //Number
console.log(Number((Number.parseFloat(myVar).toFixed(2)))); // 100.57
console.log(typeof (Number((Number.parseFloat(myVar).toFixed(2))))) // Number
*/

// Task-21
/*
let num = 10;
console.log(Number(Number.isInteger(num)) + Number(Number.isInteger(num))); // 2
*/

// Task-22
/*
let flt = 10.4;
console.log(Math.floor(flt)); // 10
console.log(Math.trunc(flt)); // 10
console.log(Math.round(flt)); // 10
console.log(Number(flt.toFixed(0))); // 10
console.log(Number.parseInt(flt)); // 10
*/

// Task-23
/*
console.log(Number.parseInt(Math.random() * 4) + 1); // 0 || 1 || 2 || 3 || 4
*/

/*
  String Challenge
  All Solutions Must Be In One Chain
  You Can Use Concatenate
*/
/*
let a = "Elzero Web School";
console.log(a.length)
// Include This Method In Your Solution [slice, charAt]
console.log(a.charAt(2).toUpperCase() + a.slice(3 , 6)); // Zero 
// 8 H
console.log(a.charAt(13).toUpperCase().repeat(8)); // HHHHHHHH
// Return Array
console.log(a.split(" " , 1)); // ["Elzero"]
// Use Only "substr" Method + Template Literals In Your Solution
console.log(a.substr(0 , 7) + a.substr(11)); // Elzero School
// Solution Must Be Dynamic Because String May Changes
console.log(a.charAt(0).toLowerCase() + a.slice(1,16).toUpperCase() + a.charAt(16).toLowerCase()); // eLZERO WEB SCHOOl
*/

/*
//Task-24 
let userName = "Elzero";
console.log(userName.length)
console.log(userName.charAt(0).toLowerCase()); // e
console.log(userName[0].toLowerCase()); // e
console.log(userName.substring(0 ,1).toLowerCase()); // e
console.log(userName.substr(0,1).toLowerCase()); // e
console.log(userName.slice(0,1).toLowerCase()); // e
console.log(userName.slice(-6,-5).toLowerCase().repeat(3)); // eee
*/

//Task-25
/*
let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";
console.log(word.includes(letterZ)); // True
console.log(word.toLowerCase().startsWith(letterE)); // True
console.log(word.toUpperCase().endsWith(letterO)); // True
*/

// Task-26
/*
console.log(100 == "100"); // true
console.log(100 != 1000); // true
console.log(110 > 100 > 10 < 20); // true
console.log(-10 == "-10"); // true
console.log(!-50 >= +"-40"); // true
console.log(!10 <= -"-40"); // true
console.log(!"10" ==  !10); // true
console.log(!20 == false); // true 
*/

// Task-27
/*
let num1 = 10;
let num2 = 20;
console.log(num1 < num2); // true
console.log(num1 != num2); // true
console.log(num1 !== num2); // true
console.log(!num1 < num2); // true
console.log(num1 > !num2); // true
console.log(num2 > num1); // true
*/

// Task-28
/*
let a = 20;
let b = 30;
let c = 10;
console.log(a < b && a > c || a < b); // true
console.log(a < b || a < c); // true
console.log(!(a > b) && !(a > b) && !(a < c) && !(a < c)); // true
*/

/*
  If Condition Challenge
*/
/*
let a = 10;
if (a < 10) {
  console.log(10);
} else if (a >= 10 && a <= 40) {
  console.log("10 To 40");
} else if (a > 40) {
  console.log("> 40");
} else {
  console.log("Unknown");
}
// if shorthand
a < 10
  ? console.log(10)
  : a >= 10 && a <= 40
  ? console.log("10 To 40")
  : a > 40
  ? console.log("> 40")
  : console.log("Unknown");
// Write Previous Condition With Ternary If Syntax
let st = "Elzero Web School";
// W Position May Change
if ( st.charAt(st.indexOf("W")).toLowerCase() === "w") {
  console.log("Good");
}
if (st !== "string") {
  console.log("Good");
}
console.log(typeof st.length)
console.log(st.length)
console.log("number".length)

if ( st.slice(0,6).repeat(2) === "ElzeroElzero") {
  console.log("Good");
}
*/

// Task-29
// Test Case 1
/*
let num1 = 9; // "009"
if (num1 < 10 ) {
  console.log(`00${num1}`)
}
// Test Case 2
let num2 = 20; // "020"
if(num2 > 10 && num2 < 100 ) {
  console.log(`0${num2}`)
}
// Test Case 3
let num3 = 110; // "110"
if (num3 >= 100) {
  console.log(`${num3}`)
}
*/

// Task-30
/*
let num1 = 9;
let str = "9";
let str2 = "20";
if(num1 == str) {
  console.log("{num1} Is The Same Value As {str}")
} 
else if (num1 !== str) {
  console.log("{num1} Is The Same Value As {str} But Not The Same Type");
}
else if (num1 !== str2) {
  console.log("{num1} Is Not The Same Value Or The Same Type As {str2}")
}
else if (str !== str2) {
  console.log("{str} Is The Same Type As {str2} But Not The Same Value")
}
// Output
// "{num1} Is The Same Value As {str}"
// "{num1} Is The Same Value As {str} But Not The Same Type"
// "{num1} Is Not The Same Value Or The Same Type As {str2}"
// "{str} Is The Same Type As {str2} But Not The Same Value"
*/
/*
// Task-31
let num1 = 10;
let num2 = 30;
let num3 = "30";
if (num3 > num1 && num3 == num2) {
  console.log(
    "30 Is Larger Than 10 And Type string Not The Same Type As number"
  );
} else if (num3 > num1 && num3 == num2) {
  console.log(
    "30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number"
  );
} else if (num3 != num1 && num3 !== num2) {
  console.log(
    "{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}"
  );
}
// if shorthand
num3 > num1 && num3 == num2
  ? console.log(
      "30 Is Larger Than 10 And Type string Not The Same Type As number"
    )
  : num3 > num1 && num3 == num2
  ? console.log(
      "30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number"
    )
  : num3 != num1 && num3 !== num2
  ? console.log(
      "{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}"
    )
  : false;
// Needed Output
// "30 Is Larger Than 10 And Type string Not The Same Type As number"
// "30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number"
// "{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}"
*/

// Task-32

// Edit What You Want Here
/*
let num1 = 10;
let num2 = 1;
let num3 = 10;
let num4 = 40;

  // Do Not Edit Below This Line
  // Needed Output
  // True 7 Times

// Condition 1
if (num1 > num2) {
  console.log("True");
} else {
  console.log("False");
}
// Condition 2
if (num1 > num2 && num1 < num4) {
  console.log("True");
} else {
  console.log("False");
}
// Condition 3
if (num1 > num2 && num1 === num3) {
  console.log("True");
} else {
  console.log("False");
}
// Condition 4
if ((num1 + num2) < num4) {
  console.log("True");
} else {
  console.log("False");
}
// Condition 5
if ((num1 + num3) < num4) {
  console.log("True");
} else {
  console.log("False");
}
// Condition 6
if ((num1 + num2 + num3) < num4) { 
  console.log("True"); // ( 12 + 10 + 12 )  < num4
} else {
  console.log("False");
}
// Condition 7
if (num4 - (num1 + num3) + num2 === 21) {
  console.log("True");
} else {
  console.log("False");
}
*/

/*
  Switch Challenge
*/
/*
let job = "Support";
let salary = 0;
if (job === "Manager") {
  salary = 8000;
  console.log(salary);
} else if (job === "IT" || job === "Support") {
  salary = 6000;
  console.log(salary);
} else if (job === "Developer" || job === "Designer") {
  salary = 7000;
  console.log(salary);
} else {
  salary = 4000;
  console.log(salary);
}

switch (job) {
  case "Manager":
    salary = 8000;
    console.log(salary);
    break;
  case "IT":
  case "Support":
    salary = 6000;
    console.log(salary);
    break;
  case "Developer":
  case "Designer":
    salary = 7000;
    console.log(salary);
    break;
  default:
    salary = 4000;
    console.log(salary);
}
*/
/*
  If Challenge
*/
/*
let holidays = 0;
let money = 0;
switch (holidays) {
  case 0:
    money = 5000;
    console.log(`My Money is ${money}`);
    break;
  case 1:
  case 2:
    money = 3000;
    console.log(`My Money is ${money}`);
    break;
  case 3:
    money = 2000;
    console.log(`My Money is ${money}`);
    break;
  case 4:
    money = 1000;
    console.log(`My Money is ${money}`);
    break;
  case 5:
    money = 0;
    console.log(`My Money is ${money}`);
    break;
  default:
    money = 0;
    console.log(`My Money is ${money}`);
}
if (holidays == 0) {
  money = 5000;
  console.log(`My Money is ${money}`);
}
else if (holidays == 1 || holidays == 2) {
  money = 3000;
  console.log(`My Money is ${money}`);
}
else if (holidays == 3) {
  money = 2000;
  console.log(`My Money is ${money}`);
}
else if (holidays == 4) {
  money = 1000;
  console.log(`My Money is ${money}`);
}
else if (holidays == 5) {
  money = 0;
  console.log(`My Money is ${money}`);
} 
else {
  money = 0;
  console.log(`My Money is ${money}`);
}
*/

// Task-33
/*
let day = "   monday  ";
day = day.trim().charAt(0).toUpperCase() + day.trim().slice(1);
switch (day) {
  case "Friday":
  case "Saturday":
  case "Sunday":
    console.log("No Appointments Available");
    break;
  case "Monday":
  case "Thursday":
    console.log("From 10:00 AM To 5:00 PM");
    break;
  case "Tuesday":
    console.log("From 10:00 AM To 6:00 PM");
  case "Wednesday":
    console.log("From 10:00 AM To 7:00 PM");
  default:
    console.log("Its Not A Valid Day");
}
*/

/*
  Array Challenge
*/
/*
let zero = 0;
let counter = 3;
let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];
// Write Code Here
my.splice(++counter , --counter)
console.log(my.reverse()); // ["Osama", "Elham", "Mazero", "Ahmed"];
console.log(my.slice(++zero,counter).reverse()); // ["Elham", "Mazero"]
my.push("Elzero")
console.log(my.splice(6).join()); // "Elzero"
console.log(my[1][4]+my[1][5].toUpperCase()); // "rO"
*/
/*
// Task -34 
let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;
// Method 1
myFriends.pop()
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];
// Method 2
myFriends.length = num
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];
*/

// Task-35
/*
let friends = ["Ahmed", "Eman", "Osama", "Gamal"];
// Write Your Code Here
friends.shift()
friends.pop()
console.log(friends); // ["Eman", "Osama"]
*/

// Task-36
/*
let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = arrOne.concat(arrTwo).sort().reverse();
// Write One Single Line Of Code
console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]
*/

// Task-37
/*
let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];
console.log(words[website.length][words.length - words.length].slice(website.length).toUpperCase()); // ZERO
*/

// Task-38
/*
let needle = "JS";
let haystack = ["PHP", "JS", "Python"];
// Write 3 Solutions
// If Solution
if (needle == haystack[0] || needle == haystack[1] || needle == haystack[2]) {
  console.log("Found");
} else {
  console.log("Not Found");
}
if(haystack.includes(needle)){
  console.log("Found")
}
else {
  console.log("Not Found")
}
if (haystack.indexOf(needle)){
  console.log("Found")
}
else {
  console.log("Not Found")
}
// Switch Solution
switch (needle) {
  case haystack[0]:
    console.log("Found");
    break;
  case haystack[1]:
    console.log("Found");
    break;
  case haystack[2]:
    console.log("Found");
    break;
  default:
    console.log("Not Found");
}
*/

// Task-39
/*
let arr1 = ["A", "C", "X"]; // 3
let arr2 = ["D", "E", "F", "Y"]; // 4
let allArrs = arr1.concat(arr2);
// Your Code Here
allArrs.sort()
console.log(allArrs)
console.log(allArrs.slice (allArrs.length - arr1.length).join("").toLowerCase()); // fxy
console.log(allArrs.length)
*/

/*
  Loop Challenge
*/
/*
let myAdmins = ["Ahmed", "Osama", "Sayed","Stop", "Samera"];
let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia", "Anwar"];
// document.write(`<div>We Have X Admins</div>`);
document.write(`<div>We Have ${myAdmins.length} Admins</div>`);
document.write(`<hr>`)
for (let i = 0 ; i < myAdmins.length ; i++) {
  if(myAdmins[i] === "Stop") {
    break;
  }
  document.write(`<h4>The Admin For Team ${i + 1} is ${myAdmins[i]}</h4>`)
  document.write(`<h5>Team Members Is</h5>`)
  for(let j = 0 ; j < myEmployees.length ; j++) {
    if(myEmployees[j].charAt(0) === myAdmins[i].charAt(0))
    document.write(`<p>${myEmployees[j]}</p>`)
}
document.write(`<hr>`)
}
*/

// Task-40
/*
let All_Arrays = [
  1,
  2,
  4,
  "Youssf",
  "Mohamed",
  "Ahmed",
  10,
  12,
  "Khaled",
  true,
  "Hayat",
];
let New_Array = [];
for (let i = 0; i < All_Arrays.length; i++) {
  if (typeof All_Arrays[i] === "string") {
    New_Array.push(All_Arrays[i]);
  }
}
console.log(New_Array);
*/

// Task-41
/*
let Products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitoe", "Iphone"];
let colors = ["Red" , "Green" ,"White" ,"Blue"];
let Show_Count = 2; 
document.write(`<h1>Show ${Show_Count} Products </h1>`)
for (let i = 0 ; i < Show_Count ; i++) {
  document.write(`<div>`)
  document.write(`<h2>[${i + 1}] ${Products[i]}</h2>`)
  for(let j =0 ; j < colors.length ; j++) {
  }
  document.write(`</div>`)
  let New = colors.join(" | ")
  document.write(`<p> - ${New}</p>`)  
}
*/

// Task-42
/*
let start = 10;
let end = 100;
let exclude = 40;
for (let i = start; i <= end; i+=start) {
  if (i == exclude) {
    continue;
  }
  console.log(i);
}
*/

// Task-43
/*
let start = 10;
let end = 0;
let stop = 3;
for (let i = start ; i > end ; i--) {
  if(i < start ) {
    console.log(0 + `${i}`)
  }
  else {
    console.log(`${i}`)
  }
  if(i == stop) {
    break;
  }
}
*/

// Task-44
/*
let start = 1;
let end = 6;
let breaker = 2;
for(let i = start ; i <= end ; i++) {
  console.log(`${i}`)
  for (let j = breaker ; j <= (end - breaker) ; j+=2) {
    console.log(`-- ${j}`)
  }
}
*/

// Task-45
/*
let index = 10;
let jump = 2;
for (;;) {
  console.log(index)
  index-=jump 
  if(index <= jump) {
    break;
  }
}
*/

// Task-46
/*
let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
for(let i =(friends.length - friends.length) ; i < friends.length ; i++ ) {
  if(friends[i].startsWith(letter.toUpperCase())) {
    continue
  }
  console.log(`"${i + letter.length} => ${friends[i]}"`)
}
*/

// Task-47
/*
let start = 0;
let swappedName = "elZerO";
let result = "";
for(let i = start ; i < swappedName.length ;i++) {
  console.log(swappedName[i])
  if(swappedName[i] == swappedName[i].toLowerCase()){
    result += swappedName[i].toUpperCase()
  }
  else if (swappedName[i] == swappedName[i].toUpperCase()){
    result+= swappedName[i].toLowerCase()
  }
}
console.log(result);
*/

// Task-48
/*
let start = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];
for(let i = ++start ; i < mix.length;i++) {
  if(typeof mix[i] === 'string') {
    continue;
  }
  console.log(mix[i]);
}
*/

// Task-49
/*
let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;
while (index < friends.length) {
  if (typeof friends[index] === "number") {
    index++;
    continue;
  }
  if (friends[index].charAt(0) === "A") {
    index++;
    continue;
  }
  console.log(`${++counter} => ${friends[index]}`);
  index++;
}
*/

// Task-50
/*
function showInfo(
  userName = "UnKnown",
  Age = "UnKnown",
  Rate = 0,
  Show = "Yes",
  ...skills
) {
  document.write(`<div>`);
  document.write(`<h2>Welcome, ${userName}</h2>`);
  document.write(`<p>Youe Age is: ${Age}</p>`);
  document.write(`<p>Your Rate is: ${Rate}</p>`);
  if (Show === "Yes") {
    if (skills.length > 0) {
      document.write(`Your Skills is: ${skills.join(", ")}`);
    } else {
      document.write(`You Don't Have Skills To Show`);
    }
  } else {
    if (skills.length == 0) {
      document.write(`<p>You Don't Have A Skills To Show</p>`);
    } else {
      document.write(`<p>Skills Is Hidden</p>`);
    }
  }
  document.write(`</div>`);
}
showInfo("Youssef", 20, 2000, "Yes", "Html", "Css", "Js");
*/

// Task-51
/*
  Function - Random Argument Challenge
  ====================================
  Create Function showDetails
  Function Accept 3 Parameters [a, b, c]
  Data Types For Info Is
  - String => Name
  - Number => Age
  - Boolean => Status
  Argument Is Random
  Data Is Not Sorted Output Depend On Data Types
  - Use Ternary Conditional Operator
*/
// First Way
/*
function showDetails(a, b, c) {
  let Typeof = [a, b, c];
  Typeof.sort();
  let temp = Typeof[0];
  Typeof[0] = Typeof[1];
  Typeof[1] = temp;
  Typeof.join(" | ")
  for (let i = 0; i < Typeof.length; i++) {
    typeof Typeof[i] === "string"
      ? console.log(`Hello, ${Typeof[i]}`)
      : typeof Typeof[i] === "number"
      ? console.log(`Your Age is ${Typeof[i]}`)
      : Typeof[i] === true
      ? console.log(`You Are Available For Hire`)
      : console.log(`You Are Not Available For Hire`);
  }r
  console.log(`===============================`);
}
showDetails("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
showDetails(true, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
*/

// Task-52
/*
function sayHello(theName, theGender) {
  if (theGender === "Male") {
    console.log(`"Hello Mr ${theName}"`);
  } else if (theGender === "Female") {
    console.log(`"Hello Miss ${theName}"`);
  } else {
    console.log(`"Hello ${theName}"`);
  }
}
// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"
*/

// Task-52
/*
function calculate(firstNum, secondNum, operation) {
  if (firstNum === undefined || secondNum === undefined) {
    console.log("The Secand Number Is Undefined");
  } else {
    if (operation === "add") {
      console.log(firstNum + secondNum);
    } else if (operation === "multiply") {
      console.log(firstNum * secondNum);
    } else if (operation === "subtract") {
      console.log(firstNum - secondNum);
    } else {
      console.log(firstNum + secondNum);
    }
  }
}
// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, "add"); // 50
calculate(20, 30, "subtract"); // -10
calculate(20, 30, "multiply"); // 600
*/

// Task-53
/*
function ageInTime(theAge) {
  let Monthes = 1;
  let Weeks = 1;
  let Days = 1;
  let Hours = 1;
  let Min = 1;
  let secand = 1;
  if (theAge > 10 && theAge < 100) {
    Monthes = theAge  *12;
    console.log(`Months = ${Monthes}`);
    Weeks = Monthes * 4;
    console.log(`Weeks = ${Weeks}`);
    Days = Weeks * 7;
    console.log(`Days = ${Days}`);
    Hours = Days * 24;
    console.log(`Hours = ${Hours}`);
    Min = Hours * 60;
    console.log(`Minuts = ${Min}`);
    secand = Min * 60;
    console.log(`Secand = ${secand}`);
  } else {
    console.log(`This Age Is Not Correct`);
  }
}
// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months
*/

// Task-54
/*
function createSelectBox(startYear, endYear) {
  document.write(`<select>`);
  for (let i = startYear; i <= endYear; i++) {
    document.write(`<option>`);
    document.write(i);
    document.write(`</option>`);
  }
  document.write(`</select>`);
}
createSelectBox(2000, 2021);
*/

// Task-55
/*
function multiply (...Number) {
  console.log(Number);
  let Result = 1;
  // console.log(Number[i])
  for(let i = 0 ; i < Number.length ; i++) {
    if(typeof Number[i] === "string") {
      continue;
    }
    else {
      Result *= parseInt(Number[i])
    }
  }
  console.log(`${Result}`)  
}
multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000
*/

/*
  Function Arrow Challenges
*/

// Challange One

/*
// [1] One Statement In Function
// [2] Convert To Arrow Function
// [3] Print The Output [Arguments May Change]
let RegularFunction = function (...Names) {
  return `Hello [${Names.join("], [")}] => Done !`;
};
let ArrowFunction = (...Names) => `Hello [${Names.join("], [")}] => Done !`;
console.log(ArrowFunction("Osama", "Mohamed", "Ali", "Ibrahim"));
console.log(RegularFunction("Osama", "Mohamed", "Ali", "Ibrahim"));
// String [Osama], [Mohamed], [Ali], [Ibrahim] => Done !
*/

// Challange Two

/*
// [1] Replace ??? In Return Statement To Get The Output
// [2] Create The Same Function With Regular Syntax
// [3] Use Array Inside The Arguments To Get The Output
let myNumbers = [20, 50, 10, 60];
let calcArrow = (one, two, ...nums) => one + two + nums[0];
let calc = function (one , two , ...nums) {
  return one + two + nums[0];
}
console.log(calc(10,myNumbers[0], myNumbers[1])); // 80
console.log(calcArrow(10,myNumbers[0], myNumbers[1])); // 80
*/

// Task-56
/*
function Regular() {
  return `Iam A Normal Function`;
}
let ArroW = () =>  `Iam A Arrow Function`;
console.log(Regular()); // Iam A Normal Function
console.log(ArroW()); // Iam A Normal Function
*/

// Task-57
/*
function urlCreate(protocol, web, tld) {
  return `${protocol}://www.${web}.${tld}`;
}
let urlCreate_Arrow = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;
console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org
console.log(urlCreate_Arrow("https", "elzero", "org")); // https://www.elzero.org
*/

// Task-58
/*
function checker(zName) {
  return function (status) {
    return function (salary) {
      return status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
    };
  };
}
console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble
let Checker = (zName , status, salary) => status === "Available" ? `${zName} , My Salary Is ${salary}` : `Iam Not Avaialble`
console.log(Checker("Osama" , "Available" ,4000 ))
console.log(Checker("Ahmed","Not Available")); // Iam Not Avaialble
*/

// Task-59
/*
function specialMix(...data) {
  let Result = 0 ;
  for (let i = 0 ; i < data.length ; i++) {
    if ((isNaN(parseInt(data[i])) === false )) {
      Result += parseInt(data[i]);
    }
  }
  if( Result === 0) {
    return `All Is Strings`
  }
  return Result;
}
console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings
*/

// Task-60
/*
function getDetails(zName, zAge, zCountry) {
  function namePattern() {
    // Write Your Code Here
    // Osama Mohamed => Osama M.
    // Ahmed ali => Ahmed A.
    return `${zName.slice(0, zName.indexOf(" "))}${zName.substr(
      zName.indexOf(" "),
      2
    ).toUpperCase()}`;
  }
  namePattern();
  function ageWithMessage() {
    // Write Your Code Here
    // 38 Is My Age => Your Age Is 38
    // 32 Is The Age => Your Age Is 32
    return `Your Age Is ${parseInt(zAge)}`;
  }
  ageWithMessage();
  function countryTwoLetters() {
    // Write Your Code Here
    // Egypt => You Live In EG
    // Syria => You Live In SY
    return `You Live In ${zCountry.toUpperCase().slice(0, 2)}`;
  }
  countryTwoLetters();
  function fullDetails() {
    // Write Your Code Here
    return `Hello ${namePattern()}, ${ageWithMessage()} , ${countryTwoLetters()}`
  }
  return fullDetails(); // Do Not Edit This
}
console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG
console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY
*/

// Map Tasks In Videos
/*
let arrayNames = [1, 2, 3, 4, 5, 6];
console.log(arrayNames);
let resultArray = [];
for (let i = 0; i < arrayNames.length; i++) {
  resultArray.push(arrayNames[i] + arrayNames[i]);
}
console.log(resultArray);
let mapWay = arrayNames.map((element) => element + element); // Map With Arrow Function
console.log(mapWay);
function add(element) {
  return element + element;
}
let mapfunction = arrayNames.map(add)
console.log(mapfunction);
let swappingCase = "elZERo";
let sw = swappingCase
  .split("")
  .map(function (element) {
    return element === element.toUpperCase()
      ? element.toLowerCase()
      : element.toUpperCase();
  })
  .join("");
console.log(sw);
let invertedNumber = [1, -10, -20, 15, 100, -30];
let iN = invertedNumber.map(function (element) {
  return element > 0 ? element * -1 : element * -1;
});
console.log((iN));
let ingnoreNumbers = "Elz123er4o";
let igN = ingnoreNumbers
.split("")
.map(function (element) {
  return isNaN(parseInt(element)) ? element : "";
  })
  .join("");
  console.log(igN);
  let mix = "A13BS2ZX";
  let filterString = mix
    .split("")
    .filter(function (element) {
      return !isNaN(parseInt(element));
    })
    .map(function (element) {
      return parseInt(element) ? element * element : "";
    }).join(" | ");
  console.log(filterString)
let theBiggest = ["Bla", "Propaganda", "Other", "AAA", "Battery", "Test"];
let check = theBiggest.reduce(function(acc , current ,index) {
  console.log(`acc => ${acc}`);
  console.log(`Current Element => ${current}`);
  console.log(`Current Element index => ${index}`);
  console.log(acc.length > current.length ? acc : current );
  console.log(`====================================`);
  return acc.length > current.length ? acc : current ;
})
console.log(check);
let removeChars = ["E", "@", "@", "L", "Z", "@", "@", "E", "R", "@", "O"];
let filterChars = removeChars
  .filter(function (element) {
    return !element.startsWith("@");
  })
  .reduce(function (acc, current) {
    return `${acc}${current}`;
  });
console.log(filterChars);

let Lis = document.querySelectorAll("ul li");
let Divs = document.querySelectorAll(".content div");
Lis.forEach(function (element) {
  element.onclick = function () {
    // Remove The Active Class
    Lis.forEach(function (element) {
      element.classList.remove("active");
    });
    // Add The active Class
    element.classList.add("active");
    // Give The Element In Content Display None When Click On The li.
    Divs.forEach(function (element) {
      element.style.display = "none";
    });
  };
});
*/

/*
  Higher Order Functions Challenges
  You Can Use
  - ,
  - _
  - Space
  - True => 1 => One Time Only In The Code
  You Cannot Use
  - Numbers
  - Letters
  - You Must Use [Filter + Map + Reduce + Your Knowledge]
  - Order Is Not Important
  - All In One Chain
*/
/*
let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";
let solution = myString
  .split("")
  .map(function (element) {
    return element === "," ? "" : element;
  })
  .filter(function (element) {
    return isNaN(parseInt(element)) ? element : "";
  }).reduce(function(acc , current) {
    return `${acc}${current}`
  }).slice(true , -true).replaceAll("_"," ")
console.log(solution); // Elzero Web School
*/

// Task-61
/*
let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];
let result = mix
  .map(function (element) {
    return isNaN(parseInt(element)) ? element : "";
  })
  .reduce(function (acc, current) {
    return `${acc}${current}`;
  });
console.log(result);
// Elzero
*/

// Task-62
/*
let myString = "EElllzzzzzzzeroo";
let removeRepeat = myString
  .split("")
  .filter(function (element, index) {
    return myString.indexOf(element) === index ? element:"";
  })
  .reduce(function (acc, current) {
    return `${acc}${current}`;
  });
console.log(removeRepeat);
// Elzero
*/

// Task-63
/*
let myArray = ["E", "l", "z", ["e", "r"], "o"];
let result = myArray.map(function(element){
  return typeof element === "object" ? element.reduce(function(acc,current){
    return`${acc}${current}`
  }) : element 
}).reduce(function(acc,current){
  return `${acc}${current}`
})
console.log(result);
// Elzero
*/

// Task-64
/*
let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];
let result = numsAndStrings
  .filter(function (element) {
    return !isNaN(parseInt(element));
  })
  .map(function (element) {
    return -element;
  });
console.log(result);
// [-1, -10, 10, 20, -5, -3]
*/

// Task-65
/*
let nums = [2, 12, 11, 5, 10, 1, 99];
let result = nums.reduce(function (acc, current) {
  return current % 2 === 0 ? acc * current : acc + current;
}, 1);
console.log(result);
// 500
*/
// Task-67
/*
let infoUser = {
  name: "Youssef",
  age: 20,
  skills: ["HTML", "Css", "Js", "Bootstrap FramWork", "React"],
  available: true,
  addresses: {
    KSA: "Riyadh",
    EGYPT: {
      adressOne: "Minya Elqamh",
      adressTwo: "Cairo",
    },
  },
  check: function () {
    if (infoUser.available === true) {
      return `Free For Work`;
    } else {
      return `Not Free`;
    }
  },
};
console.log(infoUser.name);
console.log(infoUser.age);
console.log(infoUser.skills[4]);
console.log(infoUser.addresses.EGYPT.adressTwo);
console.log(infoUser["addresses"]["KSA"]);
console.log(infoUser.check());
*/

// Task-68
/*
// Create Your Object Here
let member = {
  name: "Elzero",
  age : 38,
  country : "Egypt",
  fullDetails : function(){
    return `My Name ${member.name}, My Age Is ${member.age}, I Live in ${member.country}`
  }
}
console.log(member.name); // Elzero
console.log(member.age); // 38
console.log(member.country); // Egypt
console.log(member.fullDetails());
// My Name Is Elzero, My Age Is 38, I Live in Egypt
*/

// Task-69
/*
// Method One
// Create Your Object Here
let objMethodOne = {
  property: "Value of property",
};
console.log(objMethodOne.property); // "Method One"
// Method Two
// Create Your Object Here
let objMethodTwo = new Object({
  property: "value of property",
});
console.log(objMethodTwo.property); // "Method Two"
// Method Three
// Create Your Object Here
let objMethodThree = Object.create(objMethodOne)
console.log(objMethodThree.property); // "Method Three"
// Method Four
// Create Your Object Here
let objMethodFour = Object.assign({},objMethodOne)
console.log(objMethodFour.property); // "Method Four"
*/

// Task-70
/*
let a = 1;
let threeNums = {
  b: 2,
  c: 3,
  d: 4,
};
let twoNums = {
  e: 5,
  f: 6,
};
// Create Your Object Here in One Line
let finalObject = Object.assign({a} , threeNums , twoNums)
console.log(finalObject);
*/

// Task-71
/*
// The Object To Work With
let myFavGames = {
  "Trinity Universe": {
    publisher: "NIS America",
    price: 40,
  },
  "Titan Quest": {
    publisher: "THQ",
    bestThree: {
      one: "Immortal Throne",
      two: "Ragnarök",
      three: "Atlantis",
    },
    price: 50,
  },
  YS: {
    publisher: "Falcom",
    bestThree: {
      one: "Oath in Felghana",
      two: "Ark Of Napishtim",
      three: "origin",
    },
    price: 40,
  },
};
// Code One => How To Get Object Length ?
let objectLength = Object.keys(myFavGames).length
for (let i = 0; i < objectLength; i++) {
  console.log(`The Game Name Is ${Object.keys(myFavGames)[i]}`);
  console.log(`The Publisher Is ${Object.values(myFavGames)[i].publisher}`);
  console.log(`The Price Is ${Object.values(myFavGames)[i].price}`);
  // Check If Nested Object Has Property (bestThree)
  if (Object.values(myFavGames)[i].bestThree != undefined) {
    console.log("- Game Has Releases");
    console.log(`First => ${Object.values(myFavGames)[i].bestThree.one}`);
    console.log(`Second => ${Object.values(myFavGames)[i].bestThree.two}`);
    console.log(`Third => ${Object.values(myFavGames)[i].bestThree.three}`);
  }
  console.log("#".repeat(20));
}
*/

// Task-72
/*
for(let i = 0 ; i <= 100 ; i++) {
  let myDiv = document.createElement("div");
  let myH3 = document.createElement("h3");
  let myP = document.createElement("p");
  myDiv.className = "Product";
  myH3.innerText = "Product One";
  myP.innerText = "Prodcut Info";
  let myAtrr = document.createAttribute("data-progress");
  myDiv.setAttributeNode(myAtrr);
  myDiv.appendChild(myH3)
  myDiv.appendChild(myP)
  document.body.appendChild(myDiv);
}
*/

// Task-73
/*
let userInput = document.querySelector("[name=userName]");
let ageInput = document.querySelector("[name=userAge]");
document.forms[0].onsubmit = function (e) {
  userVaild = false;
  ageVaild = false;
  if (userInput.value !== "" && userInput.value.length <= 10) {
    userVaild = true;
  }
  if (ageInput.value !== "") {
    ageVaild = true;
  }
  if (userVaild === false || ageVaild === false) {
    e.preventDefault();
  }
};
*/

// Task-74
/*
console.log(document.getElementById("elzero"));
console.log(document.getElementsByClassName("element"));
console.log(document.getElementsByTagName("div"));
console.log(document.querySelector(".element"));
console.log(document.querySelector("[name=js]"));
console.log(document.querySelector("div"));
console.log(document.querySelector("body div"));
console.log(document.querySelectorAll(".element"));
console.log(document.querySelectorAll("body div"));
console.log(document.querySelectorAll("[name=js"));
console.log(document.querySelectorAll("div"));
console.log(document.body.children[0]);
console.log(document.body.firstElementChild);
console.log(document.body.querySelector("div"));
console.log(document.body.getElementsByClassName("element"));
*/

// Task-75
// let imgLength = document.images.length
// // console.log(img.getAttribute("src"));
// let img = document.querySelectorAll("img")
// console.log(img);
// for (let i = 0 ; i < imgLength ; i++) {
//   img[i].src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png"
//   img[i].alt = "Elzero Logo"
// }

// Task-76
/*
let divOne = document.querySelector(".one")
let divTwo = document.querySelector(".two")
console.log(divOne);
console.log(divTwo);
divOne.title = divOne.className
divTwo.title = divTwo.className
divOne.textContent = divOne.className
divTwo.textContent = `${divTwo.className} ${divOne.attributes.length}`
*/

// Task-77
/*
let img = document.querySelectorAll("img");
let imgLength = document.images.length;
for (let i = 0; i < imgLength; i++) {
  if (img[i].hasAttribute("alt")) {
    img[i].alt = "Old";
  } else {
    img[i].alt = "Elzero New";
  }
}
*/

// Task-78
/*
let input = document.querySelector("input");
let result = document.getElementsByClassName("result")[0]
input.oninput = function() {
  result.innerHTML = `${input.value} USD Dollar = ${(input.value * 15.6).toFixed(2)} Egyptian Pound`
}
*/

// Task-79
/*
let numElements = document.getElementsByName("elements")[0]; // Num Of Elements To Create
let elementText = document.querySelector(".speical");
let form = document.forms[0];
let result = document.querySelector(".results");
let elementType = document.querySelector("select");

form.onsubmit = function (e) {
  e.preventDefault(); // To  Stop Page Refresh 
  document.querySelectorAll(".box").forEach((e) => e.remove()); // To Delet The Old Elements
  for (let i = 1; i <= numElements.value; i++) {
    let box = document.createElement(elementType.value);
    let textBox = document.createTextNode(elementText.value);
    box.className = "box";
    box.title = "Element";
    box.id = `id-${i}`;
    box.style.display = "inline-block";
    box.style.width = "200px";
    box.style.height = "50px";
    box.style.backgroundColor = "blue";
    box.style.color = "white";
    box.style.borderRadius = "0.5rem";
    box.style.textAlign = "center";
    box.style.padding = "10px";
    box.style.margin = "20px";
    box.appendChild(textBox);
    result.appendChild(box);
  }
};
let input = document.querySelectorAll(".input");
let submit = document.getElementsByName("create")
let box = document.querySelector(".box");
console.log(input);
for(let i = 0 ; i < input.length ; i++) {
  input[i].style.display = "block"
  input[i].style.width = "250px"
  input[i].style.padding = "10px"
  input[i].style.margin = "15px auto"
  input[i].style.backgroundColor = "white"
  input[i].style.border = "1px solid black"
  input[i].style.borderRadius = "0.2rem"
}
submit[0].style.display = "block"
submit[0].style.margin = " 15px auto"
submit[0].style.width = "250px"
submit[0].style.display = "block"
submit[0].style.padding = "10px"
submit[0].style.padding = "gray"
submit[0].style.border = "1px solid white"
submit[0].style.borderRadius = "0.2rem"
submit[0].style.backgroundColor = "green"
submit[0].style.color = "white"
*/

// Dom Challange
/*
// Loop to Create Li
// Create Header
let header = document.createElement("header");
let logo = document.createElement("logo");
let nav = document.createElement("nav");
let ul = document.createElement("ul");
let logoText = document.createTextNode("Youssef");
logo.appendChild(logoText);
logo.style.color = "green";
logo.style.fontSize = "2rem";
header.style.width = "95%";
header.style.margin = "15px auto";
header.style.display = "flex";
header.style.justifyContent = "space-between";
header.style.alignItems = "center";
let navLinks = [
  // Make a Array Of li To Make A loop On it
  { name: "Home" },
  { name: "Services" },
  { name: "About" },
  { name: "Contact" },
];
navLinks.forEach((e) => {
  // loop in the array and Create element for each item in it
  let li = document.createElement("li");
  li.style.listStyle = "none";
  li.textContent = e.name;
  nav.appendChild(li);
});
nav.style.display = "flex";
nav.style.gap = "20px";
nav.style.fontSize = "20px";
header.appendChild(logo);
header.appendChild(nav);
document.body.appendChild(header);
// Create Bage-Content
let content = document.createElement("div");
content.className = "content";
content.style.backgroundColor = "#EEE";
content.style.display = "block";
content.style.width = "95%";
content.style.margin = " 20px auto";
content.style.display = "flex";
content.style.flexWrap = "wrap";
content.style.gap = "20px";
content.style.padding = "20px";
content.style.overflow = "hidden";
for (let i = 1; i <= 15; i++) {
  let contain = document.createElement("div");
  contain.className = "contain";
  contain.style.padding = "30px";
  contain.style.width = "28%";
  contain.style.margin = "auto";
  contain.style.height = "50px";
  contain.style.backgroundColor = "white";
  contain.style.textAlign = "center";
  contain.style.fontSize = "20px";
  contain.style.fontWeight = "bolder";
  let span = document.createElement("span");
  let pOne = document.createElement("p");
  pOne.style.marginTop = "0";
  pOne.style.marginBottom = "0";
  let num = document.createTextNode([i]);
  let p = document.createTextNode("Product");
  span.appendChild(num);
  contain.appendChild(span);
  pOne.appendChild(p);
  contain.appendChild(pOne);
  content.appendChild(contain);
}
document.body.appendChild(content);
// Create Footer
let footer = document.createElement("div");
footer.className = "footer";
let Footerp = document.createElement("p");
Footerp.textContent = "CobyRight 2021";
Footerp.style.display = "flex";
Footerp.style.height = "100%";
Footerp.style.justifyContent = "center";
Footerp.style.alignItems = "center";
footer.style.textAlign = "center";
footer.style.backgroundColor = "green";
footer.style.color = "white";
footer.style.height = "87px";
footer.appendChild(Footerp);
document.body.appendChild(footer);
*/

// Task-80
/*
let ourElement = document.querySelector(".our-element");
let start = document.createElement("div");
let end = document.createElement("div");
start.className = "start";
start.setAttribute("data-value", "Start");
start.setAttribute("title", "Start Element");
ourElement.before(start);
start.textContent = "Start";
end.className = "end";
end.setAttribute("data-value", "End");
end.setAttribute("title", "End Element");
ourElement.before(start);
end.textContent = "End";
ourElement.after(end);
let par = document.querySelector("p");
par.remove();
*/

// Task-81
/*
[...document.body.children].forEach(el => el.onclick = function(){
  console.log(`This Is ${el.localName}`);
})
*/

// Task-82
/*
let btn = document.querySelector("button");
window.onscroll = function () {
  if (window.scrollY >= 600) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

btn.onclick = function () {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};
*/

// Task-83
/*
let msg = window.prompt("Print Number From-To" , "Example: 5-20")
let msgNum = msg.split("-").sort((a,b) => a - b)
for(let i = msgNum[0] ; i <= msgNum[1] ; i++) {
  let div = document.createElement("div")
  div.innerHTML = i
  document.body.appendChild(div)
}
*/

// Task-84
/*
let div = document.createElement("div")
let h3 = document.createElement("h3")
let p = document.createElement("p")
let button = document.createElement("button")
let h3Text = document.createTextNode("Welcome")
let pText = document.createTextNode("Welcome To ELzero WebSchool")
let btnText = document.createTextNode("Close")
h3.appendChild(h3Text)
p.appendChild(pText)
button.appendChild(btnText)
div.appendChild(h3)
div.appendChild(p)
div.appendChild(button)
document.body.appendChild(div)

setTimeout(function(){
  div.style.display = "block"
},5000)

button.onclick = function () {
  div.style.display = "none"
}
*/

// Task-85
/*
let div = document.querySelector("div");
function increment() {
  div.innerHTML -= 1;
  if(div.innerHTML == "0") {
    clearInterval(interval)
  }
}
let interval =  setInterval(increment ,1000 )
*/

// Task-86
/*
let div = document.querySelector("div");
function increment() {
  div.innerHTML -= 1;
  if (div.innerHTML == "0") {
    window.open("https://elzero.org");
    clearInterval(interval);
  }
}
let interval = setInterval(increment, 1000);
*/

// Task-87
/*
let div = document.querySelector("div");
function increment() {
  div.innerHTML -= 1;
  if(div.innerHTML == "5") {
    window.open("https://elzero.org" , "" , "width=500 , height=300")
    clearInterval(interval);
  }
}
let interval = setInterval(increment, 1000);
*/

// Task-88
/*
let lis = document.querySelectorAll("ul li");
let div = document.getElementById("change");
if (window.localStorage.getItem("color")) {
  // Set The Local Storage Color
  div.style.backgroundColor = window.localStorage.getItem("color");
  // Remove Active Class
  lis.forEach((el) => {
    // Remove Active Class
    el.classList.remove("active");
  });
  // Add Class Active
  document
    .querySelector(`[data-color=${window.localStorage.getItem("color")}`)
    .classList.add("active");
}
lis.forEach((el) => {
  el.addEventListener("click", (el) => {
    lis.forEach((el) => {
      // Remove Active Class
      el.classList.remove("active");
    });
    // Add Class Active
    el.currentTarget.classList.add("active");
    // Add Current Color To Local Storage
    window.localStorage.setItem("color", el.currentTarget.dataset.color);
    // Add Current Color to the Div
    div.style.backgroundColor = el.currentTarget.dataset.color;
  });
});
*/

// Task-89
/*
let fontFamily = document.querySelector("#font-family");
let fontColor = document.querySelector("#font-color");
let fontSize = document.querySelector("#font-size");

fontFamily.onchange = function () {
  window.localStorage.setItem("fontFamily", fontFamily.value);
  document.body.style.fontFamily = fontFamily.value;
};
fontColor.onchange = function () {
  window.localStorage.setItem("fontColor", fontColor.value);
  document.body.style.color = fontColor.value;
};
fontSize.onchange = function () {
  window.localStorage.setItem("fontSize", fontSize.value);
  document.body.style.fontSize = `${fontSize.value}px`;
};
fontFamily.value = window.localStorage.getItem("fontFamily");
fontColor.value = window.localStorage.getItem("fontColor");
fontSize.value = window.localStorage.getItem("fontSize");
document.body.style.fontFamily = window.localStorage.getItem("fontFamily");
document.body.style.color = window.localStorage.getItem("fontColor");
document.body.style.fontSize = `${window.localStorage.getItem("fontSize")}px`;
*/

// Task-90
/*
let inputOne = document.querySelector(".input-one");
let inputTwo = document.querySelector(".input-two");
let inputThree = document.querySelector(".input-three");
let selectBox = document.querySelector("#select");
let btn = document.querySelector("button");
btn.onclick = function () {
  window.sessionStorage.setItem("input-one", inputOne.value);
  window.sessionStorage.setItem("input-two", inputTwo.value);
  window.sessionStorage.setItem("input-three", inputThree.value);
  window.sessionStorage.setItem("select-box", selectBox.value);
};

inputOne.value = window.sessionStorage.getItem("input-one");
inputTwo.value = window.sessionStorage.getItem("input-two");
inputThree.value = window.sessionStorage.getItem("input-three");
selectBox.value = window.sessionStorage.getItem("select-box");
*/

// Bom Challange
// let input = document.querySelector("input");
// let btn = document.querySelector("button");
// let task = document.querySelector(".task");

// // When Click On The Btn The Value Of Input print In consol
// btn.addEventListener("click", function (e) {
//   e.preventDefault(); // To Stop Form Submit
//   for (let i = 1; i <= input.value.split(" ").join("").split(" ").length; i++) {
//     let result = document.createElement("div");
//     result.className = "result";
//     task.appendChild(result);
//     result.style.display = "flex";
//     result.style.justifyContent = "space-between";
//     result.style.alignItems = "center";
//     result.style.backgroundColor = "#EEE";
//     result.style.padding = "10px";
//     result.style.borderRadius = "10px";
//     let span = document.createElement("span");
//     let spanText = document.createTextNode(input.value);
//     let deletBtn = document.createElement("button");
//     let deletBtnText = document.createTextNode("Delet");
//     deletBtn.style.backgroundColor = "red";
//     deletBtn.style.color = "white";
//     deletBtn.style.border = "none";
//     deletBtn.style.padding = "5px";
//     deletBtn.style.borderRadius = "5px";
//     deletBtn.style.cursor = "pointer";
//     span.appendChild(spanText);
//     deletBtn.appendChild(deletBtnText);
//     result.appendChild(span);
//     result.appendChild(deletBtn);
//     deletBtn.onclick = function () {
//     result.style.display = "none"
//     window.localStorage.clear()
//     }
//   }
// });
// window.localStorage.clear()

// Task-91
/*
let myNumbers = [1, 2, 3, 4, 5];

// Write Your Destructuring Assignment Here
let [a , , , , e] = myNumbers

console.log(a * e); // 5
*/

// Task-92
/*
let mySkills = [
  "HTML",
  "CSS",
  "JavaScript",
  ["PHP", "Python", ["Django", "Laravel"]],
];

// Write Your Destructuring Assignment Here

let [a, b, c, [d, e, [f, g]]] = mySkills;

console.log(`My Skills: ${a}, ${b}, ${c}, ${d}, ${e}, ${f}, ${g}`);

// My Skills: HTML, CSS, JavaScript, PHP, Python, Django, Laravel
*/

// Task-93
/*
let arr1 = ["Ahmed", "Sameh", "Sayed"];
let arr2 = ["Mohamed", "Gamal", "Amir"];
let arr3 = ["Haytham", "Shady", "Mahmoud"];

// Play With Arrays To Prepare For Destructuring
arr1.concat(arr2 )
let mergArray = arr1.concat(arr2,arr3).reverse()
console.log(mergArray);
// Write Your Destructuring Assignment Here
let [b , a , , , , , , ,c] = mergArray
console.log(`My Best Friends: ${a}, ${b}, ${c}`);

// My Best Friends: Shady, Mahmoud, Ahmed
*/

// Task-94
/*
const member = {
  age: 30,
  working: false,
  country: "Egypt",
  hobbies: ["Reading", "Swimming", "Programming"],
};

// Write Your Destructuring Assignment Here
let {age : a , working : w , country : c , hobbies : [h1 , , h3]} = member;
console.log(`My Age Is ${a} And Iam ${w ? "" : "Not"} Working`);
// My Age Is 30 And Iam Not Working

console.log(`I Live in ${c}`);
// I Live in Egypt

console.log(`My Hobbies: ${h1} And ${h3}`);
// My Hobbies: Reading And Programming
*/

// Task-95
/*
const game = {
  title: "YS",
  developer: "Falcom",
  releases: {
    "Oath In Felghana": ["USA", "Japan"],
    "Ark Of Napishtim": {
      US: "20 USD",
      JAP: "10 USD",
    },
    Origin: "30 USD",
  },
};

// Write Your Destructuring Assignment/s Here

let { title: t, developer: d } = game;
let [o, a] = Object.keys(game.releases);
let [[u, j], { US: u_price, JAP: j_price }, or] = Object.values(game.releases);

console.log(`My Favourite Games Style Is ${t} Style`);
// My Favourite Games Style Is YS Style

console.log(`And I Love ${d} Games`);
// And I Love Falcom Games

console.log(`My Best Release Is ${o} It Released in ${u} & ${j}`);
// My Best Release Is Oath In Felghana It Released in USA & Japan

console.log(`Although I Love ${a}`);
// Although I Love Ark Of Napishtim

console.log(`${a} Price in USA Is ${u_price}`);
// Ark Of Napishtim Price in USA Is 20 USD

console.log(`${a} Price in Japan Is ${j_price}`);
// Ark Of Napishtim Price in Japan Is 10 USD

console.log(`Origin Price Is ${or}`);
// Origin Price Is 30 USD
*/

// Task-96
/*
let chosen = 3;
let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];
// Write Your Code Here
let [
  {
    title: t,
    age: a,
    available: av,
    skills: [b, c],
  },
  {
    title: t2,
    age: a2,
    available: av2,
    skills: [d, e],
  },
  {
    title: t3,
    age: a3,
    available: av3,
    skills: [f, g],
  },
] = myFriends;
// // If chosen === 1
if (chosen === 1) {
  console.log(`"${t}"`);
  console.log(`${a}`);
  console.log(`${av ? "Available" : "Not Available"}`);
  console.log(c);
}
// "Osama"
// 39
// "Available"
// "CSS"

// // If chosen === 2
if (chosen === 2) {
  console.log(`"${t2}"`);
  console.log(`${a2}`);
  console.log(`${av2 ? "Available" : "Not Available"}`);
  console.log(e);
}
// "Ahmed"
// 25
// "Not Available"
// "Django"

// // If chosen === 3
if (chosen === 3) {
  console.log(`"${t3}"`);
  console.log(`${a3}`);
  console.log(`${av3 ? "Available" : "Not Available"}`);
  console.log(g);
}
// "Sayed"
// 33
// "Available"
// "Laravel"
*/

// Task-97
/*
let setOfNumbers = new Set().add(10);
setOfNumbers.add(20).add(setOfNumbers.size); // 10 , 20 , 2
console.log(setOfNumbers);
console.log(setOfNumbers.size - 1);
*/

// Task-98
/*
let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];
myFriends.sort();
let mySet = new Set(myFriends);
console.log(mySet);
*/

// Task-99
/*
let myInfo = {
  username: "Osama",
  role: "Admin",
  country: "Egypt",
};
let myMap = new Map()
  .set("username", myInfo.username)
  .set("role", myInfo.role)
  .set("country", myInfo.country);
console.log(myMap);
console.log(myMap.size);
console.log(myMap.has("role"));
*/

// Task-100
/*
let theNumber = 100020003000;
console.log(+[...new Set(theNumber.toString())].sort().splice(true).join(""));
*/

// Task-101
/*
let theName = "Elzero";
let set = new Set(theName) // 1
console.log([...set]);
console.log(theName.split('')); // 2
console.log(Array.from(theName)); // 3 
console.log([...theName]); // 4
console.log(Object.assign([] , theName)); //5
*/

// Task-102
/*
let chars = ["A", "B", "C", "D", "E", 10, 15, 6];
console.log(chars.copyWithin(3));
let chars = ["A", "B", "C", 20, "D", "E", 10, 15, 6];
console.log(chars.copyWithin(3, 4).copyWithin(4));
let chars = ["Z", "Y", "A", "D", "E", 10, 1];
console.log(chars.copyWithin(2));
let chars = ["A", "B", "C", "D", "E", 10, 15, 6].sort();
console.log(chars); // [10, 15, 6, 'A', 'B', 'C', 'D', 'E']
console.log(chars.copyWithin(0, 3).copyWithin(3)); // ['A', 'B', 'C', 'A', 'B', 'C', 'D', 'E']
*/

// Task-103
/*
let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];
let mArray = [...numsOne, ...numsTwo]; // 1
let mArray2 = numsOne.concat(numsTwo); // 2
numsOne.push(...numsTwo); // 3
*/

// Task-104
/*
let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];
console.log(Math.max(...n1) * [... n1 , ...n2].length);
*/

// Regular Ex

/*
  Regular Expression
  - Challenge
*/
/*
let url1 = 'elzero.org';
let url2 = 'http://elzero.org';
let url3 = 'https://elzero.org';
let url4 = 'https://www.elzero.org';
let url5 = 'https://www.elzero.org:8080/articles.php?id=100&cat=topics';

let re = /(https?:\/\/)?(\w+.)?\w+.\w+(:\d+\/\w+.\w+\?\w+=\d+&\w+=\w+)?/;

console.log(url1.match(re));
console.log(url2.match(re));
console.log(url3.match(re));
console.log(url4.match(re));
console.log(url5.match(re));
*/

// Task-105
/*
let ip = "2001:db8:3333:4444:5555:6666:7777:8888";
let regx = /\d+:\w+:\d+:\d+:\d+:\d+:\d+:\d+/gi
console.log(ip.match(regx));
*/

// Task-106
/*
let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";
let regx = /Os(\d+)?O/gi 
console.log(specialNames.match(regx));
// Output
// ['Os10O', 'OsO', 'Os100O']
*/

// Task-107
/*
let phone = "+(995)-123 (4567)";
let regx = /\+\(\d+\)-\d+\s\(\d+\)/gi
console.log((phone.match(regx)));
*/

// Task-108
// let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;
// https? => this optional can found or not
//:\/\/ => to show ://
// (?:[-\w]+\.)? to show => ?:word. and can find or not
// ([-\w]+) => to show -word
// \.\w+ => to show .word
//(?:\.\w+)? => this can find or not ?.word
// \/?.* => to show ?. one or zero

// Task-109
/*
let date1 = "25/10/1982";
let date2 = "25 - 10 - 1982";
let date3 = "25 10 1982";
let date4 = "25 10 82";
let re = /\d+\/?\s?\d+\s?-?\s?\d+\s?\/?-?\s?\d+/gi
console.log(date1.match(re)); // "25/10/1982"
console.log(date2.match(re)); // "25 - 10 - 1982"
console.log(date3.match(re)); // "25 10 1982"
console.log(date4.match(re)); // "25 10 82"
*/

// Oop
// Task-110
/*
// function Car(name, model, price) {
//   this.n = name;
//   this.m = model;
//   this.p = price;
// }

class Car {
  constructor(name, model, price) {
    // Propertise
    this.n = name;
    this.m = model;
    this.p = price;
  }
  // Methods
  run() {
    return `Car is running now`;
  }
  stop() {
    return `Car is stoped`;
  }
}

const carOne = new Car("BMW" , 2022 , 20000)
const carTwo = new Car("Merceds" , 2023 , 25000)
const carThree = new Car("KIA" , 2020 , 10000)

// Needed Output
console.log(`Car One Name is ${carOne.n} And Model is ${carOne.m} And Price Is ${carOne.p}`);
console.log(carOne.run());
*/

// Task-111
/*
class Phone {
  constructor(name, serial, price) {
    this.name = name;
    this.serial = serial;
    this.price = price;
  }
}

// Write Tablet Class Here
class Tablet extends Phone {
  constructor(name, serial, price, size) {
    super(name, serial, price);
    this.size = size || "Unknown";
  }
  fullDetails() {
    return `${this.name} serial is ${this.serial} And Size is ${this.size}`;
  }
}

let TabletOne = new Tablet("iPad", 100200300, 1500, 12.9);
let TabletTwo = new Tablet("Nokia", 350450650, 800, 10.5);
let TabletThree = new Tablet("LG", 250450650, 650);

console.log(`${TabletOne.fullDetails()}`);
// iPad Serial is 100200300 And Size Is 12.9

console.log(`${TabletTwo.fullDetails()}`);
// Nokia Serial is 350450650 And Size Is 10.5

console.log(`${TabletThree.fullDetails()}`);
// LG Serial is 250450650 And Size Is Unknown
*/

// Task-112
/*
// Write Your Code Here
String.prototype.addLove = function(val) {
  return `I Love ${this} Web School`
}

// Do Not Edit Below
let myStr = "Elzero";
console.log(myStr.addLove()); // I Love Elzero Web School
*/

// Task-113
/*
const myObj = {
  username: "Elzero",
  id: 100,
  score: 1000,
  country: "Egypt",
};

// Write Your Code Here
Object.defineProperties(myObj, {
  score: {
    writable: false,
  },
  id: {
    enumerable: false,
  }
});
delete myObj.country
myObj.score = 500;

for (let prop in myObj) {
  console.log(`${prop} => ${myObj[prop]}`);
}

console.log(myObj);

// Needed Output

// "username => Elzero"
// "score => 1000"
// {username: 'Elzero', score: 1000, id: 100}
*/

// Task-114
/*
// Edit The Class
class User {
  #c;
  constructor(username, card) {
    this.u = username;
    this.#c = card;
  }
  data() {
    return this.#c.toString().match(/\d{4}/g).join("-");
  }
  get showData() {
    return `Hello ${this.u} Your Credit Card Number Is ${this.data()}`;
  }
}

// Do Not Edit Anything Below

let userOne = new User("Osama", "1234-5678-1234-5678");
let userTwo = new User("Ahmed", "1234567812345678");
let userThree = new User("Ghareeb", 1234567812345678);

console.log(userOne.showData);
// Hello Osama Your Credit Card Number Is 1234-5678-1234-5678

console.log(userTwo.showData);
// Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678

console.log(userThree.showData);
// Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678

console.log(userOne.c); // Prevent Accessing To Card Property Here
// Undefined
*/

// Task-115
/*
let dateNow = new Date();

let myBirthDay = new Date("Aug 1 2004")

let diff = dateNow - myBirthDay

console.log(`${(diff / 1000).toFixed(0)} Seconds`);
console.log(`${(diff / 1000 /60).toFixed(0)} Minutes`);
console.log(`${(diff / 1000 / 60 / 60).toFixed(0)} Hours`);
console.log(`${(diff / 1000 / 60 /60 / 24).toFixed(0)} Days`);
console.log(`${(diff / 1000 / 60 /60 / 24 / 30).toFixed(0)} Months`);
console.log(`${(diff / 1000 / 60 /60 / 24 / 365).toFixed(0)} Years`);
*/

// Task-116
/*
let date = new Date("jan 1 1970")
date.setFullYear(date.getFullYear() + 10)
date.setSeconds(1)
console.log(date);
*/

// Task-117
/*
let date = new Date()
date.setDate(0)
console.log(date);
console.log(`Previous Month Is ${date.getMonth() + 1} And Last Day Is ${date.getDate()}`);
*/

// Task-118
/*
let birthDay = new Date("Aug 1 2004")
console.log(birthDay);

let birthDay = new Date()
birthDay.setFullYear(2004 , 7 , 1)
console.log(birthDay);

let birthDay = new Date("1/8/2004")
console.log(birthDay);
*/

// Task-119
/*
let start = new Date()
for (let i = 0 ; i < 99999 ; i++) {
  console.log(i);
}
let end = new Date()
console.log(`You Loop Takse ${end - start} Times`);
*/

// Task-120
/*
function* genNumbers() {
  yield* [1, 2, 2, 2, 3, 4, 5];
}
function* genLetters() {
  yield* ["A", "B", "B", "B", "C", "D"];
}

// Write Your Generator Function Here

function* genAll() {
  yield* new Set(genNumbers())
  yield* genLetters()
}

let generator = genAll();

console.log(generator.next()); // {value: 1, done: false}
console.log(generator.next()); // {value: 2, done: false}
console.log(generator.next()); // {value: 3, done: false}
console.log(generator.next()); // {value: 4, done: false}
console.log(generator.next()); // {value: 5, done: false}
console.log(generator.next()); // {value: "A", done: false}
console.log(generator.next()); // {value: "B", done: false}
console.log(generator.next()); // {value: "C", done: false}
console.log(generator.next()); // {value: "D", done: false}
*/

// Task-121
/*
// Write Your Generator Function Here

function* gen() {
  let i = 14 
  let n= 140
  let sum = i + n
  while(true){
    yield sum
    sum += n += 200
  }
}

let generator = gen();

console.log(generator.next()); // {value: 154, done: false}
console.log(generator.next()); // {value: 14, done: false}
console.log(generator.next()); // {value: 494, done: false}
console.log(generator.next()); // {value: 1034, done: false}
console.log(generator.next()); // {value: 1774, done: false}
console.log(generator.next()); // {value: 2714, done: false}
console.log(generator.next()); // {value: 3854, done: false}
console.log(generator.next()); // {value: 5194, done: false}
console.log(generator.next()); // {value: 6734, done: false}
*/