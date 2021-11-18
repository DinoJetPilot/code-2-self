// =========================================
// DOM manipulation is editing the HTML/CSS elements on the page by altering them or their properties via JS on the fly.

// The properties are important, but not necessarily crucial to memorize, just be familiar with what options are out there.

// =========================================
// (Still using the "manipulating" files in section 24)

// Some of the most important properties and methods:
// classList, getAttribute(), setAttribute(), append(). appendChild(), prepend(), removeChild(), remove(), createElement, innerText, textContent, innerHTML, value, style, parentElement, children, nextSibling, previousSibling

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
// <a href=​"/​wiki/​List_of_chicken_breeds" title=​"List of chicken breeds" style=​"color:​ rgb(0, 108, 134)​;​ text-decoration-color:​ magenta;​ text-decoration-style:​ wavy;​">​breed​</a>​

// Attributes on this object are: "title", "style", "text-decoration-color", text-decoration-style".

const firstLink = document.querySelector("a");
firstLink.href // returns "file:///wiki/List_of_chicken_breeds"
firstLink.getAttribute("href") // returns "/wiki/List_of_chicken_breeds"

// getAttribute returns the value within that attributes quotes, while just accessing the attribute with dot notation (like with ".href"), it returns the JavaScript computed value (so in the example above, it account for the href location, since it was saved on a local comupter).

// If there is no attribute, the function returns "null"

firstLink.setAttribute("href", "http://www.google.com")
// setAttribute replaces or adds the attribute value. It requires two arguments - the first is the attribute, and the second is the value to add/replace.

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

