const inputTask = document.getElementById("input-list");
const taskList = document.getElementById("task-list");
const btn = document.querySelector(".btn");

function addTask() {
  let taskValue = inputTask.value;
  if (!taskValue) {
    alert("You must add a value");
  } else {
    let li = document.createElement("li");
    let span = document.createElement("span");

    li.innerHTML = taskValue;
    taskList.appendChild(li);

    span.innerHTML = "&times";
    li.appendChild(span);
  }

  inputTask.value = "";
  setTask();
}

btn.addEventListener("click", addTask);

taskList.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    setTask();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    setTask();
  }
});

inputTask.addEventListener("keydown"  , function(e){
    if(e.key ==="Enter"){
        addTask();
    }
})

function setTask(){
    localStorage.setItem("lists" , inputTask.innerHTML)
}

function loadTask(){
    inputTask.innerHTML = localStorage.getItem("lists")
}