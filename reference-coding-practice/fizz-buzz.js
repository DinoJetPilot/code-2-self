const arrayNums = [];
const arrayList = document.querySelector("#arrayList");

arrayList.style.width = "85%";
arrayList.style.background = "lightgray";
arrayList.style.padding = "0.5rem";
arrayList.style.margin = "0.5rem auto";

// Filling the empty array from 1-100
//for (i = 1; i <= 100; i++) {
function fillArray(e) {
    if (e % 3 === 0 && e % 5 === 0) {
        arrayNums.push("FIZZBUZZ");
        return isItFB = 35;
    } else if (e % 3 === 0) {
        arrayNums.push("Fizz");
        return isItFB = 3;
    } else if (e % 5 === 0) {
        arrayNums.push("Buzz");
        return isItFB = 5;
    } else {
        arrayNums.push(e);
        return isItFB = 0;
    }
}
//}

// Looping to separate each array number
for (i = 0; i < 100; i++) {
    let isItFB = fillArray(i + 1);
    console.log(isItFB);

    let tag = document.createElement("p");
    let text = document.createTextNode(arrayNums[i]);
    tag.appendChild(text);
    let element = document.getElementById("arrayList");
    element.appendChild(tag);
    element.lastChild.style.display = "inline-block";
    element.lastChild.style.color = "white";
    element.lastChild.style.padding = "1px 10px";

    if (isItFB === 35) {
        element.lastChild.style.background = "purple";
        console.log(`${i + 1} is purple`);
    } else if (isItFB === 3) {
        element.lastChild.style.background = "red";
        console.log(`${i + 1} is red`);
    } else if (isItFB === 5) {
        element.lastChild.style.background = "blue";
        console.log(`${i + 1} is blue`);
    } else {
        element.lastChild.style.color = "black";
        console.log(`${i + 1} is boringly normal`);
    }


    // Spacing out the array

    // tag.appendChild(document.createTextNode(" . . ."));
    let tag2 = document.createElement("p");
    let elipses = document.createTextNode(" ... ");
    tag2.appendChild(elipses);

    let newE = document.getElementById("arrayList");
    newE.appendChild(tag2);
    newE.lastChild.style.display = "inline-block";
    newE.lastChild.style.margin = "1px";
    // newE.lastChild.style.background = "none";

}
