let addToDoButton = document.getElementById('addTodo')
let removeTodo = document.getElementById('removeTodo')
let toDoContainer = document.getElementById('toDoContainer')
let paragraph = document.createElement('p')
let inputField = document.getElementById('inputField')

addToDoButton.addEventListener('click', function(){
    paragraph.innerText = inputField.value    
    toDoContainer.appendChild(paragraph)
    inputField.value = ""
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = 'line-through'        
    })
})

removeTodo.addEventListener('click', function(){
    toDoContainer.removeChild(paragraph)
})




/*
We need to make a todo list that takes an input, displays it in a container below and wipes input field after display
clicking on already displayed input strikes the task out
clicking on delete task removes it totally

first we do the html/css yadayada
then we declare a variable that creates a new paragraph once the button is clicked
then we set the paragraph's value to whatever was in the input field
then we append the value of paragraph to the container
then we set the value of the input to empty, it is important to do this once the value has been appended
then we use the add event listener function on the paragraph to change the text decoration value of the paragraph to strikethrough
we do the same as above except we double click and we use the remove child function this time around

Since all this is something you want to happen when you click the plus button they have to be inside the function 

Made a few mistakes while creating:

First i wrote the element id wrong--- easy fix
second although i wrote the remove button task correct, i forgot that the variable was declared as a local one, fix was declaring it as a global variable
let is written as small letters do not write it with capital


let addToDoButton = document.getElementById('addTodo')
let toDoContainer = document.getElementById('toDoContainer')
let inputField = document.getElementById('inputField')
let removeToDoButton = document.getElementById('removeTodo')
let paragraph = document.createElement('p')

addToDoButton.addEventListener('click', function() {
    paragraph.innerText = inputField.value
    toDoContainer.appendChild(paragraph)
    inputField.value = ""
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through"
    })
})

removeToDoButton.addEventListener('click', function(){
    toDoContainer.removeChild(paragraph)
})*/