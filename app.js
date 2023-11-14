const addingTogether = document["adding"]
addingTogether.addEventListener("submit", function(event){
    event.preventDefault()
const num1 = addingTogether["number1"].value
const num2 = addingTogether.number2.value
console.log(num2)
addingTogether.number1.value = ""
addingTogether.number2.value = ""
const sum = +num1 + +num2


const h1 = document.createElement('h1')
h1.textContent = sum
document.getElementsByTagName("body")[0].append(h1)
})

const subtracting = document["subtraction"]
subtracting.addEventListener("submit", function(event){
    event.preventDefault()
const subtract1 = subtracting.subtract1.value
const subtract2 = subtracting.subtract2.value
subtracting.subtract1.value = ""
subtracting.subtract2.value = ""
const sub = +subtract1 - +subtract2


const h1 = document.createElement('h1')
h1.textContent = sub
document.getElementsByTagName("body")[0].append(h1)
})

const multiply = document["multiplication"]
multiply.addEventListener("submit", function(event){
    event.preventDefault()
const multiple1 = multiply.multiple1.value
const multiple2 = multiply.multiple2.value
multiply.multiple1.value = ""
multiply.multiple2.value = ""
const product = +multiple1 * +multiple2


const h1 = document.createElement('h1')
h1.textContent = product
document.getElementsByTagName("body")[0].append(h1)
})
