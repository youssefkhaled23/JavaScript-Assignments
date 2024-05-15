// Start the The First Videos Notes
// You Can Put The File Of Java Script In The Head Title Put The Pest Practise Put it Before The Closing Tag Of Body
// Single Line Commment with (//)
// Mutyple Line Comment With (/**/) make a comment Form (Ctrl + /)
/*
The Object is (Window)
The Prop is (alert) => apper Message To User To alert User
The Object (document)
The Prop is (Write) => To write A element In The Page Put Not Used
console.log("Hello World") => To Print Message In Console
*/
/*
console.log("Hello World");
window.alert("Hello From The Js File");
document.write("<h1>Hello From Js File</h1>");
console.error("Error"); This Message Apper An erorr In console
console.table(["Youssef","Khaled","Elsayer"]); The Prop Table Is to Make A table With Array in console 
console.log("Hello %cFrom JS %cFile" ,"color:red; font-size:40px;","color:black; font-size:40px;" ); The prop To styling The Message In console and (%c) is a Directive put before The Message You need To styling

ES6 Ecma Scrpit  
var myname = "Youssef"; Def The Variable.
console.log("Hello " + myname); This is Print message Without Es
console.log(`Hello ${myname}`); This Is Print Message With Es6
*/
// End the The First Videos Notes

// Start The Next Videos Notes.
// Data Type With Example In JavaScrpit
/*
console.log("Youssef Khaled"); // Message Print In Console
console.log(typeof "Youssef Khaled"); // => Data Type String.
console.log(typeof 5000); // => Data Type Number.
console.log(typeof 55.5); // => Data Type Number.
console.log(typeof [50 ,60 ,70]); // Data Type Object = Array
console.log(typeof {name:"Youssef" , age: 20 , country: "Egypt"}); // Data Type object = Array
console.log(typeof true); // Data Type Boolaen
console.log(typeof false); // Data Type Boolaen
console.log(typeof undefined) // data Type Undefined
console.log(typeof null) // Data Type Object.

Varibles
Syntax (Key word (Var) | Var Name | Assigment Operator (=) | Var value)
The Java Scrpit Is a Lossly Typed
Id => in html Is A Glopal var
You Can Declar Many Var In The Same Line with (,) After Every Var

Make a Var in Es6

Compare Between Var , Let , Const
Redecaler() OF Var : You Can Decalare It Again And Agin
Redecaler() of Let And Const : You Can't Decalare it Again This is A error
Access Before Decaler of Var => undfined
Access Before Decalare Of let And Const => Error
Variable Scope Drama of Var > Add To window 
Variable Scope Drama of Let And Const > Don't Add To window 
Block Or function Scope
Concatunation The Normal Operator is (+) The  Template Literals Way operator in Es6 is ${}.
*/

//Start The Next Videos Notes
/* 
Arthmatic Operator + , - , * , / , % , ** , ++ (InCrement (Pre , Post)) , -- (Decrement (Pre , Post))
Unry Plus + {Return Number If Not A Number}
Unry Negation - {Return Number If Not A Number And Make A Number A Nagation}
console.log(+100) // 100
console.log(+"100") // 100 = console.log(Number("100"))
console.log(-100) // -100
console.log(-"100") // -100 
*/

// Start A Number Videos Notes
/*
Number Method
=> tostring => Convert Number To String
=> toFixed => Approximate number Ex(100.2343) => (100.2343.tofixed(2)) => "100.23"
=> parseint => Convert String To Number
=> paresfloat => Convert String To Float Number
=> isInteger => Check If The Num Is Intger or No output(True or false)
=> isNaN => Check The State Ment output Number Or Not A Number
Math Object 
=> round => Approximate number Ex if The Num Go up 0.5 Else Go Down
=> floor => Approximate number to down
=> ceil => Approximate number to up
=> Min => Get The Min Number
=> Max => Get The Max Number
=> Pow => Rase the Pase To power
=> random => Get The Random Number Every Reload
=> Tranc [ES6] => Approximate number to down Every Time
*/

//  Start The Next Videos Notes
/*
String Method 
=> length => Get The Number Of Var Length
=> trim => Remove The WhiteSpace From String
=> Touppercase => Convert String From LowerCase To UpperCase
=> Tolowercase => Convert String From UpperCase To LowerCase
=> Indexof => To Know The Pos Of the Char In The String (Start [Mand] , End [Opt])
=> LastIndexof => To Know The Pos Of the Char In The String (Value [Mand] , Start [Opt])
=> Slice => Cut The String From.. To.. (Start [Mand] , End [Opt])
=> repeat => Retpeat The Method 
=> Split => (Sep [opt] , limit[opt]) cut The String To The Sep For Limit time.
=> Subtring => Same A Slice But Without Sep (Start [Mand] , End [opt] Not Including The End)
=> Substr => Same The Substring But Without Write The Next Arrgument It Will Take As The End Value
=> Includes => If The String Iclude Or Not (True Or False)
=> StartsWith => If The String StartWith This String Or Not (True Or False)
=> EndsWith => If The String EndWith This String Or Not (True Or False)
 */

//  Start The Next Videos Notes
/*
Comparsion Operatior
== > Compare The Value Only 
=== > Identical Compare The Value And The Type
"!=" => not Equal 
"!==" => Not Identical.
Logical Operator 
&& => And 
|| => Or 
"!" => Not 
*/

/* 
Short condition
the condtion ? if true : if false.
Switch Condition.
syntax (var) {
    case 1 :
        The Statement You Want To Do.
        break; => Must Have a break To stop The Case And Do Not Go Away
    case 2: 
    case 3: 
    This Is A multy Case So When We Reach One Of Them The Statment Will Apper.
    break;
    defult : => If You Put The defult In The Last Condtion of Seitch You Don't Need To put A break This Deful When The Cases Are False.
}
*/

// Array Notes

/*
unshift => Add Elemnt in the First Of array
push => Add Element Un the Last Of Array
shift => Remove The Element From Array First 
pop => Remove the Element From Array Last.
indexof => Search In Array From Beginning to Find The index For The Elemnt
lastindexof => Search In Array From The Last Element to Find The index For The Elemnt
sort => Sort The Array 
reverse => Reverse The Array
slice => slice The Array (start [opt] , end[opt]) => Make A New Array 
splice => (start[Mand] , The Number Of Elements to Remove[opt] , The Item You Want to Add To The Array) => Don't Make A New Array
concat => Make A Addition For Many Arrays (array, array , item , .....)
join => Convert The Array To String And Cut Between Items With Seperator (Seperator , defult sep",)
*/

// Function Notes
/* 
(...Numbers) => Rest Parameter + must Be The Final Parameter In Function Declration 
Arrow Function Syntax 
let (Function Name) = {Parmeters} => (Function BLock Of Code).
*/

// Higer Order Function
/*
Map => Creat A New Array And Push The New elemnt In This Array.
Filter => Filter  An Array And Creat A New Array With Only The Element Give true
Reduce => Function (Acc (The Element Will Add To Current Element) , Current Element (The Next Element Will Add To Acc) , index (The Index Of (Current Element) , arr),(Init The First Element You Would Like To Start With This)
Foreach => Make A loop On Each Element in the Array
*/

// Dom Notes => Docoument Object Model

/*
PreventDefault => Stop OnSupmit event
*/

// Bom Browser Object Model 
/*
setTimeOut => (function , timeout , additional Params for the Function) => Wait Time Out And Start The Function
clearTimeOut => (identifier of The timeout => Number) => Stop The Time Out
setInterval => (function , MillSecounds , Additions params For The Function) => Repeat The Function For MillSecounds
ClearInteval => (Identifier Of The SetInterval ) => Stop The Interval 
location object
*/

// Set Data Type 
/*
clear the repeat Values 
can't acess on the set value with index 
add => add value 
delet => delet value you need 
clear => delet all values 
has => give a boolean value if the value is exsit in set or not 
set vs weakset
set => take any data , has a size pro , can get the keys and values , can use foreach 
weakset => take object data only , not have a size pro , can't use foreach 
*/

// Regular Expression
/*
The ModiFires : 
i => Get The First Element === The match State => case insensitive 
g => Get Any Element That === The Matc State search in global pattern
m => get the Whole Word That === the match state
syntaxt of Regular Expression
new RegExp("pattern"  , "Modifires")
*/