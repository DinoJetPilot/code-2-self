// =========================================
// In this case, the Document Object Model (DOM) is a JavaScript representation of a webpage, much like a "window" to see the contents of your webpage using many interacting objects in JS.

// The document object is what takes the HTML and cSS and creates JavaScript objects to be rendered on the page.
<body>
    <h1>Hello World!</h1>
    <ul>
        <li>Listing something.</li>
        <li>List something else.</li>
    </ul>
</body>

// JS builds these elements as objects in a tree structure representing their heirarchy relative to parent elements, etc.
//
//    DOCUMENT
//       |
//     BODY
//    /   \
//   H1    UL
//        / \
//      LI  LI

// The "document" is much the same as the "window". The document is the top-level object in the data structure of the page.
document // In the console, shows a representation of some HTML on the page.
console.dir(document) // Shows all the elements on the document.

// Element (with a capital "E") is JavaScript's way of defining that HTML element as a JS objec with all those usable properties.


// =========================================
// 3 methods for selecting elements in the document: 
// getElementById, getElementsByTagName, getElementsByClassName
// Elements are selected by the attribute - id, tag (<p>, <h1>), or class

// =========================================
// getElementById() 
//
// There should only be one element with this id, that's why it's singluar while the tag and class is plural.

// Using the "selecting" index.html file from section 24:
document.getElementById("banner") // Returns the representation (not the HTML):
// <img id="banner" src="https://images.unsplash.com/photo-1563281577-a7be47e20db9?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2550&amp;q=80" alt="">

const banner = document.getElementById("banner");
console.log(banner);
// returns the object, not just the HTML code. We can see all the properties on it (including many "null" values for properties not used).

// =========================================
// getElementsByTagName()
//
// Returns an array-like representation "HTMLcollection(num)" where "num" is the amount of elements in the array-like object (it's not an array).
//
// Some array functions will work, like access indecies, length, for...of loops, etc. (but not things like map).


// Using the previous example:
const allImages = document.getElementsByTagName("img");
// returns this HTMLcollection:
//
// HTMLCollection(4) [img#banner, img.square, img.square, img.square, banner: img#banner]
//    0: img#banner
//    1: img.square
//    2: img.square
//    3: img.square
//    banner: img#banner
//    length: 4
//    [[Prototype]]: HTMLCollection
//
// All elements in each index had a dropdown showing all the properties for each element.

// Using a for..of loop to iterate over the source to find each image's source:
for (let image of allImages) {
    console.log(image.src)
}

// Coming soon, you could replace each image source with the same image:
for (let image of allImages) {
    image.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/A_fuzzy_baby_chicken_and_its_mom.jpg/330px-A_fuzzy_baby_chicken_and_its_mom.jpg"
}

// =========================================
// getElementsByClassName()

const squareImages = document.getElementsByClassName("square");
for (let img of squareImages) {
    img.hidden = true;
}
// All elements with the class "square" will update the "hidden" property to the Boolean true, rendering them invisible.

// =========================================
// querySelector() and querySelectorAll() is the newer, more efficient way to select a single element (id, tag, class, attribute, etc.) using the same syntax.
// =========================================

// querySelector() will only select the FIRST element of that type on the page.
document.querySelector("p"); // Only selects the first paragraph element
document.querySelector("#banner"); // Selects the element with the id "banner"
document.querySelector(".square"); // Only selects the first element with the class "square".
// You can also use CSS style selectors:
document.querySelector(".square:nth-of-type(2)"); // Selects the second element using the class "square".
document.querySelector("a[title='Java']") // Selects the anchor tag with the title "Java".

// =========================================
// querySelectorAll() is just like querySelector, but returns a collection of the mathcing elements.

document.querySelectorAll("a"); // returns a collection of all anchor tags.
document.querySelectorAll("p a"); // returns a collection of all anchor tags that are somewhere in a paragraph.

const links = document.querySelectorAll("p a");

for (let link of links) {
    console.log(link.href);
}
// Logs href urls to all links within paragraphs.