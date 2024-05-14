function addTask(){
    var taskInput = document.getElementById("taskInput");

    if(taskInput.value===""){
        alert("Please enter a task!");
    }
    else{
    var li = document.createElement("li");
    li.textContent=taskInput.value;

    var taskList = document.getElementById("taskList");
    taskList.appendChild(li);}
    taskInput.value = "";
}