let num = '', removedItem = '', quitOut = false;
const todoList = ['Item A', 'Item B'];
let todoCommand = prompt('What would you like to do today?');


function listItems() {
    for (let i = 0; i < todoList.length; i++) {
        console.log(`${i}: ${todoList[i]}`);
    }
}

function checkNum() {
    while (Number.isNaN(num) || num >= todoList.length || num < 0) {
        num = parseInt(prompt('Invalid index. Which item NUMBER do you want to delete FOREVER?'));
    }
}

function checkQuit() {
    if (todoCommand === "quit" || todoCommand === "q") {
        quitOut = true;
        return quitOut;
    }
}

function annoyingQuestion() {
    while (todoCommand !== 'quit' && todoCommand !== 'q') {
        if (todoCommand === 'list') {
            console.log('   MY TO-DO LIST:   ');
            console.log('====================');
            // console.log(todoList);
            listItems();
            console.log('====================');
        } else if (todoCommand === 'add') {
            todoCommand = prompt('What would you like to add?');
            checkQuit();
            if (quitOut === true) {
                return;
            } else {
                todoList.push(todoCommand);
                console.log(`${todoCommand} added to the list!`);
            }
        } else if (todoCommand === 'delete') {
            listItems();
            todoCommand = prompt('Which item number do you want to delete FOREVER?');
            checkQuit();
            if (quitOut === true) {
                return;
            } else {
                checkNum();
                removedItem = todoList.splice(num, 1);
                console.log(`Permanently removed "${removedItem}" from index[${num}] on your list!`);
            }
        }
        todoCommand = prompt('What would you like to do now?');
    }
}

annoyingQuestion();

console.log(`To-Do List Closed. You had ${todoList.length} item(s) remaining:`);
listItems();

