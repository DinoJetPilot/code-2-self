// =========================================
// Regular expressions ("regex" or "regexp") is something you can use to help match, search, and replace text.

// =========================================
// The test() method returns the Boolean true or false. It searches a string argument for the regular expression (created using the slash without quotes).

const testString1 = "Testing the waters";
const testString2 = "Testing the Waters";

// Looking for a pattern is case sensetive.
let testRegex1 = /waters/;
// But, if you use the "or" opperator, you can search for more.
let testRegex2 = /waters|lava|tornado/;

testRegex1.test(testString1); // Returns true.
testRegex1.test(testString2); // Returns false.

testRegex2.test(testString1); // Returns true.
testRegex2.test(testString2); // Returns false.


testRegex3 = /waters/i; // You can ignore case sensetivity by adding the "i" flag to the end of the regular expression.
testRegex3.test(testString1); // Returns true.
testRegex3.test(testString2); // Returns true.

// =========================================
// The match() method looks for the regular expression provided and extracts it from the string. The syntax is flipped for this compared to test(), because the string (including quotes) is first, then the regular expression is after the match syntax.
"string".match(/regex/);

let extractString = "Take out this word here!"
let matchRegex = /here/;
let noMatchRegex = /nope/;

extractString.match(matchRegex); // Returns ["here"].
extractString.match(noMatchRegex); //Returns "null".

let multiString = "This is really, really, really interesting.";
let testRegex4 = /really/g; // You can extract every pattern using the global or "g" flag. You can also have multiple flags on your regular expression:
let testRegex4 = /Really/gi; // Will extract all instances of "really", "Really", "REALLY", etc. using the ignore case sensetivity or "i" flag.

multiString.match(testRegex4); // Returns ["really", "really", "really"].

// =========================================
// In regular expressions, a "greedy" match finds the longest possible part of a string that fits the regex pattern and returns it as a match. The alternative is called a "lazy" match, which finds the smallest possible part of the string that satisfies the regex pattern.

// Regular expression by default are greedy and will find the longest possible pattern to match.
//Exmaple 1:
let greedyRegex = /u[a-z]*u/; // Returns "unsuccessfu" from "unsuccessfully".
let lazyRegex = /u[a-z]*?u/; // Returns "unsu" from "unsuccessfully".

// Exmaple 2:
let textHTML = "<h1>Winter is coming</h1>";
let tagRegex1 = /<.*?>/; // Returns "<h1>".
let tagRegex2 = /<.*>/; // Returns "<h1>Winter is coming</h1>".

// =========================================
// Using the replace() method allows your to search and replace text in a string.

let replaceRegex = /cold/;
let stringTemp = "Today's weather will be cold.";
stringTemp.replace(replaceRegex, "hot")

// You can also capture groups, then assign them with the dollar sign.
"Yes No".replace(/(\w+)\s(\w+)/, '$2 $1'); // Returns "No Yes".

// =========================================
// Lookahead patterns for finding patterns further along in the string.

// Positive lookahead looks for the element in the seacr pattern, but won't match it.
let posRegex = /(sh?=ot)/; // Looks for "shot".
// Negative lookahead looks to see if the element is not there. 
let negRegex = /(sh?!ut)/; // Looks for "sh" and something, but not "ot".

// Testing for a password that is greater than 5 characters long, and have two consecutive digits:
let pwRegex = /(?=\w{6,})(?=\w*\d{2,})/i;
