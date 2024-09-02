/*const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

function removeTodo(event) {
    event.target,parentNode.remove();
}

function addTodo() {
    const todo = document.createElement('div');//creat div
    todo.classList.add('todo');//add div
    const h3 = document.createElement('h3');//creat h3
    h3.innerHTML = todoInput.Value;//show value input
    const btn = document.createElement('button');//creat btn
    btn.type = 'button';//fix type btn
    btn.classList.add('remove-todo');//add class remove
    btn.innerHTML = 'Delete'//add massage in html
    btn.addEventListener('click',removeTodo);//add event
    todo.append(h3,btn);//show last
    todoList.prepend(todo);//show first
}
todoButton.addEventListener('click',addTodo);

const lyricBox = document.querySelector('lyric-box');

function lyricPromise(lyric) {
    
    new Promise((resolve,reject) => {
        setTimeout(() => {
            const lyricElement = document.createElement('h3');
            lyricElement.innerHTML = lyric;
            lyricBox.append(lyricElement);
            resolve();
        },3000);
    })
}*/

const avatarImg = document.querySelector('.avatar');
const fullnameText = document.querySelector('.fullname');
const emailText = document.querySelector('.email');

async function getUser() {
    try {
        const result = await fetch('https://reqres.in/api/users/1')
        const json = await result.json();
        const user = json.data;
    avatarImg.src = user.avatar;
    fullnameText.innerHTML = user.first_name + ' ' + user.last_name;
    emailText.innerHTML = user.email;
    }
    catch(error) {
        console.log(error.massage);
    }
}
getUser();