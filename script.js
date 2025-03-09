function addTask() {
    let input = document.getElementById("taskInput").value;
    if (input.trim() === "") return;
    
    let li = document.createElement("li");
    li.textContent = input;
    
    let removeBtn = document.createElement("button");
    removeBtn.textContent = "❌";
    removeBtn.onclick = () => li.remove();
    
    li.appendChild(removeBtn);
    document.getElementById("taskList").appendChild(li);
    
    document.getElementById("taskInput").value = "";
}