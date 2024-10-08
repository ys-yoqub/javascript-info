//1. A variable is a “named storage” for data. We can use variables to store goodies, visitors, and other data.
let message;
message = 'Hello'; // store the string 'Hello' in the variable named 'message'

//2. The string is now saved into the memory area associated with the variable. We can access it using the variable name:
alert(message);

//3. To be concise, we can combine the variable declaration and assignment into a single line:
let anotherMessage = 'Hello!'; // define the variable and assign the value

//4. We can also declare multiple variables in one line:
let user = 'John', age = 25, message = 'Hello';
// or
let user = 'John';
let age = 25;
let message = 'Hello';

//5. changing values of variables
let message;

message = 'Hello!';
message = 'World!'; // value changed

alert(message);

//6. When the name contains multiple words, camelCase is commonly used.
// That is: words go one after another, each word except first starting with a capital letter: myVeryLongName.

let $ = 1
let _ = 0
console.log($ + _)

//7. To declare a constant (unchanging) variable, use const instead of let:
const myBirthday = '18.04.1982';

const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";