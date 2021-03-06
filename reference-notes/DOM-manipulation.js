// =========================================
// =========================================
// DOM manipulation is editing the HTML/CSS elements on the page by altering them or their properties via JS on the fly.

// The properties are important, but not necessarily crucial to memorize, just be familiar with what options are out there.

// NOTE: Many of the NEWER syntaxes are not supported in Internet Explorer, so unless you specifically needs IE compatability, stick with the newer (and easier) methods.

// =========================================
// (Still using the "manipulating" files in section 24)

// Some of the most important properties and methods:
// classList, getAttribute(), setAttribute(), append(). appendChild(), prepend(), removeChild(), remove(), createElement, innerText, textContent, innerHTML, value, style, parentElement, children, nextSibling, previousSibling, insertAdjacentElement()

// =========================================
// =========================================
// innerText vs. textContent vs. innerHTML

document.querySelector("p").innerText;
// This returns the text of an object relative to what's currently showing in the browser. For example, if an element within this text is set to "display:none;" if will not show here.

document.querySelector("p").textContent;
// This returns the text of the object that is included in the markup, regardless of display status or visibility.

const allLinks = document.querySelectorAll("a");

for (let link of allLinks) {
    link.innerText = "I am a link!"
}
// This finds all links and replace them with the same clickable text.

document.querySelector("h1").innerText = "I am <i>not</i> italic text."
// This HTML tag will be treated as text, not HTML.

document.querySelector("h1").innerHTML = "I <i>am</i> italic text."
// With "innerHTML", the markup will be selected and replaced, not just text. If we view the innerHTML, then we will see the text and any additional markup tags within that element.

document.querySelector("h1").innerHTML += " I'm added to the <b>end</b> of the text already in the markup."

document.querySelector("h1").innerHTML = "This text is added <i>before</i> what was there: " + document.querySelector("h1").innerText

// =========================================
// getAttribute() vs. setAttribute()

document.querySelector("a")
// returns the first anchor tag on that page:
// <a href=???"/???wiki/???List_of_chicken_breeds" title=???"List of chicken breeds" style=???"color:??? rgb(0, 108, 134)???;??? text-decoration-color:??? magenta;??? text-decoration-style:??? wavy;???">???breed???</a>???

// Attributes on this object are: "title", "style", "text-decoration-color", text-decoration-style".

const firstLink = document.querySelector("a");
firstLink.href // returns "file:///wiki/List_of_chicken_breeds"
firstLink.getAttribute("href") // returns "/wiki/List_of_chicken_breeds"

// getAttribute returns the value within that attributes quotes, while just accessing the attribute with dot notation (like with ".href"), it returns the JavaScript computed value (so in the example above, it account for the href location, since it was saved on a local comupter).

// If there is no attribute, the function returns "null"

firstLink.setAttribute("href", "http://www.google.com")
// setAttribute replaces or adds the attribute value. It requires two arguments - the first is the attribute, and the second is the value to add/replace.

// =========================================
// =========================================
// Selecting individual elements/properties via DOM: 

const h1 = document.querySelectorAll("h1");
// Accessing CSS style elements is only for inline styles on the HTML markup, and it doesn't look at external stylesheets. Note: multi word text is not hyphenated, but camelCased. 
// For example, "text-decoration" needs to be "textDecoration"

h1.style.color // returns "" (and empty string) because it has no inline styles. 

// When assigning values this way, you must assign it as a string (even for numerical values), because JS doesn't see it this way the same as CSS.
h1.style.color = "green"
package.style.border = "2px solid red"

// This way is not ideal, because it's specifically assigns styles to individual elements one at a time. The better way is to use CSS classes.

window.getComputedStyle(h1).fontSize // returns something like "32px"
h1.style.color // returns "" if there's no inline style

// getComputedStyle() returns a "CSS declaration" (kind of like an array), with indexes for each property.

// =========================================
// (The better way) Selecting elements using classes via the DOM:

const h2 = document.querySelector("h2"); // Stores the first h2 element i a variable.

h2.getAttribute("class"); // Returns "null" if no class.
h2.setAttribute("class", "purple");
// Adds the "purple" class to the element. Bt you can only add one, and any others you add just overwrite the previous one.

// The better option is classList
h2.classList // Returns a "DOMTokenList with "" if there are no classes.

// Syntax is: "h2.classList.method" where "method" is a real mehod like "add", "remove", etc.
h2.classList.add("border"); // Adds the class "border". 
h2.classList.contains("border") // Returns a Boolean if there is a class with this name.
h2.classList.toggle("border") // Toggles the class "border" on or off (depending on whatever state it was in before), and returns a Boolen.

// =========================================
// =========================================
// Family selectors - parentElement, children, nextSibling, nextElementSibling, previousSibling, perviousElementSibling

const firstBold = document.querySelector("b");
// Every element has a single direct parent. It can have grandparents, great grandparents, etc., but still only has one parent element.

firstBold.parentElement // Returns the <p> element (the parent of the <b> tag)
firstBold.parentElement.parentElement // Returns the <body>
firstBold.parentElement.parentElement.parentElement // Returns the root <html>

const paragraphOfFirstBold = firstBold.parentElement;
// On the other hand, and element can have multipe child elements.

paragraphOfFirstBold.children // Returns the HTML collection (and array-like object) of all children of that element. Listd in the same order found in that element.

// Note: HTML elements cannot use array methods, but have indecies and can be iterated over.
paragraphOfFirstBold.children[0] // Returns that first bold tag again.

// =========================================
// Sibling selectors:

const firstSquareImg = document.querySelector(".square"); // Returns the first image with the class "square".

firstSquareImg.parent // returns the <body> unless it's contained in a <div> or <span>.

firstSquareImg.nextSibling
firstSquareImg.previousSibling
// Both return the next or previous node. Not as commonly used as having "element" option (see next example).
// A node can be things like "#text" and can represent white space or a return line break.

firstSquareImg.nextElementSibling
firstSquareImg.previousElementSibling
// In the example webpage, this syntax returns the image that follows the first one, or the <p> tag before it.

// =========================================
// =========================================
// Creating elements in the DOM with appendChild() or append()

// Example 1 (with an image):
const newImg = document.createElement("img"); // This creates and empty image tag in a variable, nothing more.

console.dir(newImg); // Returns an empty <img> object.
// Being stored in a variable, you can add elements to it:
newImg.src = "www.website.com/image.jpg";

// Similar elements can still be added, like usual:
newImage.classList.add("square"); // Adds the "square" class to the element. 

// But the image element still needs to be added to the page somehow. Using the appendChild() method, you can do it like this:
document.body.appendChild(newImg); // Appends it as the last child of the <body> element.

// Example 2 (with a heading):
const newH3 = document.createElement("h3"); // Returns an empty <h3> element.

newH3.innerText = "I am a new heading." // Adds this text to the element.
document.body.appendChild(newH3); // Appends the <h3> to end of the <body> element.

// =========================================
// The newer append() method allows multiple attributes to be set at once, and it also allows you to pass things like text without first creating the node (using appendChild()), then updating the attributes (with .innerText, etc.)

const p = document.querySelector("p");
p.append("I am text appended to the end of the text. ", "And I can add multiple attributes.")
// If you try this method with p.appendChild("I am text..."), it will return an error because it's not a "node" tyope.

// =========================================
// The prepend() method is the other way to add something to the beginning of a selected element.

const newBold = document.createElement("b");

// Two ways to add text to the newly created node:
newBold.append("Add this text.");
newBold.innerText("Add this text.");

p.prepend(newBold); // Adds the next text to the beginning of the <p> tag.

// =========================================
// The insertAdjacentElement() method is another way to insert elements, but you must specify two arguments:
// exampleElement.insertAdjacentElement(position, element)
// position can be: beforebegin, afterbegin, beforeend, afterend

const h2 = document.createElement("h2");

h2.append("A sub-heading goes here!"); // Or can add text using .innerText

const h1 = document.querySelector("h1");
h1.insertAdjacentElement("afterend", h2);

// =========================================
// The after() and before() methods insert something directly after or before the selected element.

const h3 = document.createElement("h3");
h3.append("A new sub-heading here.") // Or you can use .innerText instead of append

h3.after("h1");

// =========================================
// =========================================
// Removing elements can be done with the older syntax, removeChild(), or the newer one, remove().

// The removeChild() method requires selecting the parent of the element you want to remove. For example: 
const firstLi = document.querySelector("li"); //Selects the first <li> 

const ulExample = firstLi.parentElement; // Selects the <ul> of the <li>
ulExample.removeChild(firstLi); // Removes the element
// To do this in one line:
firstLi.parentElement.removeChild(firstLi);


// The newer remove syntax is used on the actual element to be removed.
const delImg = document.querySelector("img");
delImg.remove();
