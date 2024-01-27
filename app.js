const feedbackArea = document.querySelector("#feedback")
const rockBtn = document.querySelector("#rock")
const paperBtn = document.querySelector("#paper")
const scissorsBtn = document.querySelector("#scissors")
const replayBtn = document.querySelector("#replay")

// 0 - Rock
// 1 - Paper
// 2 - Scissors

rockBtn.addEventListener("click", () => {
    //console.log("hi")
    replayBtn.style.display = "inline-block"

    rockBtn.style.backgroundColor = "#ABD883"

    const compChoice = Math.floor(Math.random() * 3)
    //console.log(compChoice)
    switch(compChoice) {
        case 0:
            //console.log("tie")
            feedbackArea.innerHTML = "It's a tie"
            rockBtn.style.backgroundColor = "#fcd15b"
            break
        case 1:
            //console.log("lose")
            feedbackArea.innerHTML = "You lose!"
            paperBtn.style.backgroundColor = "#F07A6A"
            break
        case 2:
            //console.log("win")
            feedbackArea.innerHTML = "You win!"
            scissorsBtn.style.backgroundColor = "#F07A6A"
            break
    }

    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
})

paperBtn.addEventListener("click", () => {
    //console.log("hi2")
    replayBtn.style.display = "inline-block"

    paperBtn.style.backgroundColor = "#ABD883"

    const compChoice = Math.floor(Math.random() * 3)
    //console.log(compChoice)
    switch(compChoice) {
        case 0:
            //console.log("win")
            feedbackArea.innerHTML = "You win!"
            rockBtn.style.backgroundColor = "#F07A6A"
            break
        case 1:
            //console.log("tie")
            feedbackArea.innerHTML = "It's a tie"
            paperBtn.style.backgroundColor = "#fcd15b"
            break
        case 2:
            //console.log("lose")
            feedbackArea.innerHTML = "You lose!"
            scissorsBtn.style.backgroundColor = "#F07A6A"
            break
    }

    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
})

scissorsBtn.addEventListener("click", () => {
    //console.log("hi3")
    replayBtn.style.display = "inline-block"
    
    scissorsBtn.style.backgroundColor = "#ABD883"

    const compChoice = Math.floor(Math.random() * 3)
    //console.log(compChoice)
    switch(compChoice) {
        case 0:
            //console.log("lose")
            feedbackArea.innerHTML = "You lose!"
            rockBtn.style.backgroundColor = "#F07A6A"
            break
        case 1:
            //console.log("win")
            feedbackArea.innerHTML = "You win!"
            paperBtn.style.backgroundColor = "#F07A6A"
            break
        case 2:
            //console.log("tie")
            feedbackArea.innerHTML = "It's a tie"
            scissorsBtn.style.backgroundColor = "#fcd15b"
            break
    }

    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
})

replayBtn.addEventListener("click", () => {
    replayBtn.style.display = "none"

    rockBtn.style.backgroundColor = "#F4FAEF"
    paperBtn.style.backgroundColor = "#F4FAEF"
    scissorsBtn.style.backgroundColor = "#F4FAEF"

    feedbackArea.innerHTML = "Make your choice..."

    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorsBtn.disabled = false;
})