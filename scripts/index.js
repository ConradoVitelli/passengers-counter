let countElement = document.getElementById("id-counter")
let count = 0
let savedElement = document.getElementById("id-save")

function increment() {
    count += 1 
    //ESTO ES LO MISMO QUE HACER count = count + 1 !!!!!!!!!!!!
    countElement.innerText = count
}

function decrement() {
    count += -1
    countElement.innerText = count
}

function save() {
    let printedElement = count + " -"
    savedElement.innerText += " " + printedElement  
}






