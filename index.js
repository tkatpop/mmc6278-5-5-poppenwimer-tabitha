var form = document.getElementById("add-todo")
var todoList = document.getElementById("todo-list")

//function to submit todo
form.onsubmit = function (e){
    //prevents form from constant resubmit
    e.preventDefault()

    //accesses the input text from form
    var inputText = document.querySelector('input').value


    //check for all spaces

    var spaceCount = []

    for (var i = 0; i < inputText.length; i++){
        if(inputText[i] == " "){
            spaceCount++
        }
    }

    //if input is empty or has spaces
    if (inputText.length == 0 || spaceCount == inputText.length){
        return
    }

    //creates a li of input data
    var liEl = document.createElement('li');

    todoList.appendChild(liEl);

    //creates the button for li
    var buttonEl = document.createElement('button');

    var newLiText = document.createTextNode(inputText);

    buttonEl.appendChild(newLiText);

    liEl.appendChild(buttonEl);

}