// tom lay cac phan tu can thiet thong qua id
const taskInput = document.getElementById("task-input");
const addButton = document.getElementById("add-button");
const taskList = document.getElementById("task-list");

// ham them cong viec khi click vao nut "Add"
addButton.addEventListener("click", function () {
  const taskText = taskInput.value;
  if (taskText === "") {
    alert("Vui lòng nhập công việc!");
    return;
  }
  const listItem = document.createElement("li");
  listItem.innerHTML = `
    <span class="task-text">${taskText}</span>
    <button class="delete-button">Xoa</button>
    `;
  taskList.appendChild(listItem);
  taskInput.value = "";
  // them su kien xoa cong viec khi click vao nut "Xoa"
  const deleteButton = listItem.querySelector(".delete-button");
  deleteButton.addEventListener("click", function () {
    taskList.removeChild(listItem);
  });
  const textSpan = listItem.querySelector(".task-text");
  textSpan.addEventListener("click", function () {
    textSpan.classList.toggle("completed");
  });
});
