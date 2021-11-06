let todoCommand = prompt('What would you like to do today?');
let num = '', removedItem = '';
const todoList = ['Item A', 'Item B'];

while (todoCommand !== 'quit' && todoCommand !== 'q') {
    if (todoCommand === 'list') {
        console.log('   MY TO-DO LIST:   ');
        console.log('====================');
        // console.log(todoList);
        listItems();
        console.log('====================');
    } else if (todoCommand === 'add') {
        todoCommand = prompt('What would you like to add?');
        todoList.push(todoCommand);
        console.log(`${todoCommand} added to the list!`);
    } else if (todoCommand === 'delete') {
        listItems();
        num = parseInt(prompt('Which item number do you want to delete FOREVER?'));
        checkNum();
        removedItem = todoList.splice(num, 1);
        console.log(`Permanently removed "${removedItem}" from index[${num}] on your list!`);
    }
    todoCommand = prompt('What would you like to do now?');
}

console.log(`To-Do List Closed. You had ${todoList.length} item(s) remaining:`);
listItems();

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
