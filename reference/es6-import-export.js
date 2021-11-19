

// Functions can be exported/imported from external JS files using the "script" tag in HTML:

<script type="module" src="./file_name.js"></script>

// =========================================
// Exporting individually selected scripts:

// Option 1 (exporting into the declared variale):
export const multiply = (x, y) => {
    return x * y;
}

// Option 2 (exporting after declaring the variable):
const divide = (x, y) => {
    return x / y;
}

export { divide };

// Or with multiple exports:
const add = (x, y) => {
    return x + y;
}

const subtract = (x, y) => {
    return x - y;
}

export { add, subtract, multiply };

// =========================================
// Exporting a default (fallback) script. This is usually only done if one value is being exported from a script file.
// You cannnot use it with "var", "const", or "let".

export default function add(x, y) {
    return x + y;
}

// =========================================
// Importing a default (fallback) script:

import add from "./file_name.js";
// It differs from the regular import because it doesn't use braces.

// =========================================
// Importing individually selected scripts:

import { add } from "./file_name/js";

// You can also import multiple functions, just like you would export multiple ones.
import { subtract, multiply, divide } from "./file_name.js";

// =========================================
// Importing all scripts:

import * as myModuleName from "./file_name.js"

// Then you reference the functions using dot notation.
myModuleName.add(2, 3);
myModuleName.divide(10, 2);