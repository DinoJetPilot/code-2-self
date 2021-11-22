// =========================================
// Regular expressions ("regex" or "regexp") is something you can use to help match, search, and replace text.

// =========================================
// The test() method returns the Boolean true or false. It searches a string argument for the regular expression (created using the slash without quotes).

const testString = "Testing the waters";
let testRegex = /waters/;
testRegex.test(testString); // Returns true.


