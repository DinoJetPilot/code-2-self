const form = document.querySelector("#avail");
const input = document.querySelector("#res");
const ul = document.querySelector("#resources");

form.addEventListener("submit", function (e) {
    // This method prevents the default behavior of the element (a form, in this case)
    e.preventDefault();
    // Storing the form input as a variable.
    const newValue = input.value;

    // Creating blank list elements, then updating the text with the form data.
    const newLi = document.createElement("li");
    newLi.innerText = newValue;
    // Adding the list element to the page, then clearing the form.
    ul.append(newLi);
    input.value = "";
});

// Trying multiple form elements:

const formBuilds = document.querySelector("#builds");
const inputBuild = document.querySelector("#build");
const name = document.querySelector("#name");
const difficulty = document.querySelector("#difficulty");
const list = document.querySelector("#suggestions");

function convertDifficulty(e) {
    switch (e) {
        case "1": return "newbie"; break;
        case "2": return "easy"; break;
        case "3": return "medium"; break;
        case "4": return "hard"; break;
        case "5": return "pro"; break;
        default: return "unknown";
    }
};

formBuilds.addEventListener("submit", function (e) {
    e.preventDefault();
    const valueBuild = inputBuild.value;
    const valueDiff = difficulty.value;
    const valueName = name.value;

    const convertDiff = convertDifficulty(valueDiff);

    const newLi = document.createElement("li");
    newLi.innerText = `Build: ${valueBuild}, ${convertDiff} difficulty by ${valueName}.`;
    list.append(newLi);

    inputBuild.value = "";
    difficulty.value = "3";
    name.value = "";
});

// Mock Tweet example:

const tweetTest = document.querySelector("#tweetTest");
const user = document.querySelector("#username");
const tweet = document.querySelector("#tweet");
const comments = document.querySelector("#comments");


tweetTest.addEventListener("submit", function (e) {
    e.preventDefault();
    const u = user.value;
    // const u = tweetTest.elements.username.value 
    // Forms have a collection of elements stored like an array, and if you name them (always a good idea), then you can call it like:
    // [form].elements.[name].value (This gives you the value of that input)
    const t = tweet.value;
    const newPost = document.createElement("li");
    console.log(newPost);
    newPost.innerHTML = `<b>${u}</b> posted: "${t}"`;
    comments.append(newPost);
    user.value = "";
    tweet.value = "";
});

