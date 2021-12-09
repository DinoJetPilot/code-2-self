// =========================================
// Making Strings
let color = "purple";

// Single quotes work too:
let city = 'Tokyo';

//Strings have a length:
city.length; //5

//We can access specific characters using their index:
city[0]; //'T'
city[3]; //'y'

// String methods:
'hello'.toUpperCase(); // "HELLO";
'LOL'.toLowerCase(); // "lol"
'    omg  '.trim(); // "omg"

// =========================================
// String methods with arguments:

//indexOf returns the index where the character is found (or -1 if not found)
'spider'.indexOf('i'); //2
'vesuvius'.indexOf('u'); //3 - only returns FIRST matching index
'cactus'.indexOf('z'); //-1 not found

// slice - returns a "slice" of a string
"pancake".slice(3); //"cake" - slice from index 3 onwards
"pancake".slice(0, 3); //"pan" - slice from index 0 up to index 3

// replace - returns a new string, with the FIRST match replaced
"pump".replace("p", "b"); //"bump" - only replaces first "p"

// String Template Literals
// Use backtick characters, NOT SINGLE QUOTES!
// =========================================
const color = "olive green";
const msg = `My favorite color is: ${color}` //"My favorite color is: olive green"

const str = `There are ${60 * 60 * 24} seconds in a day`//"There are 86400 seconds in a day"

// =========================================
// =========================================
// The split() method divides a string into an ordered list of sub strings.

const strExample = "Hello"

strExample.split() // Returns "Hello"
strExample.split("") // Returns ["H", "e", "l", "l", "o"]

const strPhrase = "Hello World"
strExample.split(" ") // Returns ["Hello", "World"]


// =========================================
// The reverse() method reverses an array (but useful when converting a string to an array). When combined with join(), the string returns reversed.

strReverse = strExample.reverse(); // Returns ["o", "l", "l", "e", "H"]
strJoined = strReverse.join(""); // Returns olleH

// This all can be combined as:
strExample.split("").reverse.join(""); // Takes "Hello" and returns "olleH"

// =========================================
// Sorting elements using the array method to find the longest word: 

function findLongestWord(str) {
    let strSp = str.split(" ");
    let longest = strSp.sort(function (a, b) {
        return b.length - a.length;
    })
    return longest[0].length; // Returns 6
    // return longest[0]; // Returns the word "jumped"

}

findLongestWord("The quick brown fox jumped over the lazy dog");

