let displayNum = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    //count = count + 1
    //count += 1
    //countEl.innerText = count

    countEl.innerText = count += 1

}

function save() {

    let countNum = "  " + count + " - "
    displayNum.innerText += countNum

      countEl.innerText = 0
      count = 0
    console.log(count)
}




/*let userName = "mike"
let greeting = "Hello" + " " + userName + "!"
 console.log(greeting)*/
