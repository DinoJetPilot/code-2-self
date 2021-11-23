// =========================================
// =========================================
// Selecting chracters in regular expressions:

// The wildcard character (the period) will accept any character in that place.
let wildcardRegex = /.at/; // Could be tested and found true for "cat", "hat", "pat", "sat", etc.

// Character classes can also be used, where any caracter within the brackets would return true/extracts (if the remaining expression is true).
let classRegex = /h[aou]t/; // Returns true/extracts for "hat", "hut", or "hot".

// Finding a range of letters or numbers by using the hyphen character between a range.
let rangeRegex1 = /[a-f]un/; // Returns true/extracts for "bun" to "fun", but false for "gun", "sun", etc.
let rangeRegex2 = /[a-h0-5]/gi; // Returns true/extracts for any string with only the letters "a" through "h" and the numbers 0 - 5.

// You can also negate characters but using the caret character. These characters are excluded as one you do not want to find.
let negateRegex1 = /[^~!@#$%^&*()]/gi; // Excludes these non-letter/number characters, but it searches the beginning of the string.
let negateRegex2 = /[^0-9a-z]/gi; // Excludes all letters and numbers.

// You can select characters thaat occur once or more times in a row with the plus.
let plusRegex = /a+/g; // Finds/extracts "aa" when found.
let rangePlusRegex = /[a+]/g; // Finds/extracts "a" regardless of if it's "aa".
let moreRegex = /wo*/; // Finds/extracts "w" from "what", "wo" from "wow", or "woo" from "woow".

// =========================================

// Matching string patterns at the end of a string:
let endingString = /day$/;
let endingRegex1 = "Wonderful day"; // Returns true.
let endingRegex2 = "Day in day out"; // Returns false.

let allRegex1 = /[A-Za-z0-9_]/g; // Selecting all letters and numbers, including underscores.
let allRegex2 = /\w/g; // Uses a lowercase "w". Shorthand to the above.

let nonRegex1 = /[^A-Za-z0-9_]/g; // Selecting all non-letters/numbers.
let nonRegex2 = /\W/g; // Uses a capital "W". Shorthand to the above.

let numsRegex1 = /[0-9]/g; // Selecting only numbers.
let numsRegex2 = /\d/g; // Shorthand to the above.

let numsRegex1 = /[^0-9]/g; // Selecting only non-numbers.
let numsRegex2 = /\D/g; // Shorthand to the above.

let whitespaceRegex = /\s/; // To search for whitespace.
let nonwhitespaceRegex = /\S/; // To search for non-whitespace.
// This pattern above will not match whitespace, carriage return, tab, form feed, and new line characters. You can think of it being similar to the character class [^ \r\t\f\n\v].

let upperLowerRegex = /e{3,6}k/; // Returns true/extracts a the srting with characters between 2-6 "e" ending with a "k".
let scare1 = "eek"; //Returns false.
let scare2 = "eeek"; // Returns true.
let scare3 = "eeeeeek"; //Returns true.
let scare4 = "eeeeeeeeeeeeeeeeeeeek"; // Returns false.

let lowerRegex = /hi{3,}/; // Specifies only a minimum value for 3 or more "i". 
let exactRegex = /hi{4}/; // Specifies an exact value for 4 "i". 

let maybeRegex = /colou?r/; // Checks for zero or more "u" characters.

// =========================================
// Capture groups look for groupings of characters. This example will capture a word consisting of alphanumeric characters so the capture group
let capGroupRegex = /(\w+)/;

// The substring matched by the group is saved to a temporary "variable", which can be accessed within the same regex using a backslash and the number of the capture group (e.g. \1). Capture groups are automatically numbered by the position of their opening parentheses (left to right), starting at 1.

let repeatRegex = /(\w+) \1 \1/;
repeatRegex.test(repeatStr); // Returns true
repeatStr.match(repeatRegex); // Returns ["row row row", "row"]

// =========================================
// =========================================
// Side notes and miscellaneous tips:

// FreeCodeCamp example of using .length with .match()
let whiteSpace = "Whitespace. Whitespace everywhere!"
let nonSpaceRegex = /\S/g;
whiteSpace.match(nonSpaceRegex).length; // Returns 32.

// Two options for checking if a username is valid:
// starts with at least 2 letter characters, ends with none or more numbers
let userCheck1 = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;
let userCheck2 = /^[a-z]([0-9]{2,}|[a-z]+\d*)$/i;

// A basic password checker. It looks for between 3 and 6 characters and at least one number:
let checkPass = /(?=\w{3,6})(?=\D*\d)/;

// Use parentheses to check for a specific group of characters.
let testStr = "Pumpkin";
let testRegex = /P(engu|umpk)in/; // Uses either "engu" or "umpk" when checking.
