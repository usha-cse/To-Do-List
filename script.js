function addToDo(){
    const input=document.getElementById('todoinput');
    const task= input.value.trim();
    if(task===""){
        alert("Please Enter The Task");
        return;
    }
    const li=document.createElement("li");

    li.innerHTML = `<span onclick="completeTodo(this)">${task}</span>
    <button onclick="deleteTodo(this)">Delete</button>`;

    document.getElementById('todolist').appendChild(li);
    input.value="";
}    
function completeTodo(element){
        element.parentElement.classList.toggle("completed");        
}
function deleteTodo(button){
        button.parentElement.remove();
}
