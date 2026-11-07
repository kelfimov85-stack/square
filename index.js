let btn = document.getElementById('btnT')
let newDiv = document.createElement('div')

newDiv.classList.add('square')
newDiv.id = 'square'

btn.addEventListener('click', () => {
  document.body.append(newDiv)
  console.log("Click!")

  newDiv.addEventListener('click', () => {
    newDiv.style.backgroundColor = 'red'
})
})
