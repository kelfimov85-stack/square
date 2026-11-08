const names = ["Tom", "Joe", "Jack", "Tim"]
const list = document.querySelector(".list")

names.forEach((name) => {
  const li = document.createElement("li")
  const deleteBtn = document.createElement("button")
  li.textContent = name
  deleteBtn.textContent = "delete"
  deleteBtn.classList = "del"
  li.appendChild(deleteBtn)
  list.appendChild(li)
})

const addName = document.querySelector(".btn")

addName.addEventListener('click', () => {
  const add = document.createElement("li")
  const deleteBtn = document.createElement("button")
  add.textContent = "Bob"
  deleteBtn.textContent = "delete"
  deleteBtn.classList = "del"
  add.appendChild(deleteBtn)
  list.appendChild(add)
})

list.addEventListener("click", (event) => {
  const delBtn = event.target.closest('.del')
  const li = delBtn.closest('li')
  if (delBtn){
    li.remove()
  }
})