wh// PLEASE STAY FOCUSED THIS TIME

// document.getElementById("count").innerText = 5

// let count = 0
// console.log(count)

// let myAge = 19
// console.log(myAge)

// let myAge = 19;
// let ratio = 7;

// let myD = myAge*ratio
// console.log(myD)

// let count = 50
// count = count +50
// console.log(count)
// count = count - 75
// console.log(count)
// count = count + 45
// console.log(count)

let countPeeps = document.getElementById("countP")
// countP id is added where 0 is displayed initially and then rest numbers are added
let saveEl = document.getElementById("prev")
// prev is id for html element showing previous entries
let count = 0

function increment(){
    count += 1
    // just as the user clicks on increment button, the number will increase
    countPeeps.innerText = count
    // innertext now displays the count of people too, at the place where 0 was displayed.
}

function save(){
    // save id is used for save button
    let keep = count + " -  "
    saveEl.textContent += keep
    // saveEl is a varible to hold document id of prev attached to prev numbers display
    //innerText only gives 'human-readable' elements
    // it focuses more on styling part not on 'hidden' details and is computattionally expensive
    // textContent focuses more on intricate details
    // and returns every element in the node
    console.log(count)
    countPeeps.innerText = 0
    count = 0
}



