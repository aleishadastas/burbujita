let total = document.getElementById("total")
let buttonOne = document.getElementById("buttonOne")
let buttonTwo = document.getElementById("buttonTwo")
let buttonThree = document.getElementById("buttonThree")
let buttonBool = false
let numberVar = 0
let numberVar1 = 0
let numberVar2 = 0
let numberVar3 = 0
let entry = document.getElementById("fifthEntry")

// Button 1 Event Listener
buttonOne.addEventListener('click', ()=>{
    console.log('button one pressed')
    numberVar += 1
    numberVar1 += 1
    total.innerHTML = "all of the buttons have been pressed " + numberVar + " time(s) *ੈ✩‧₊˚"
    total.style.textAlign = "center"
    total.style.marginLeft = "0"
    buttonOne.innerHTML = "this button has been pressed " + numberVar1 + " time(s)"
    buttonBool =! buttonBool
    if (buttonBool == true){
    buttonOne.style.fontSize = "2vw"
    document.body.style.backgroundColor = "black"
    document.body.style.color = "white"
    buttonOne.style.color = "white"
    buttonTwo.style.color = "white"
    buttonThree.style.color = "white"
    }else{
    document.body.style.backgroundColor = "white"  
    buttonOne.style.color = "black"
    document.body.style.color = "black"
    buttonTwo.style.color = "black"
    buttonThree.style.color = "black"
    buttonTwo.style.padding = "10px"
    }
})

// Button 2 Event Listener
buttonTwo.addEventListener('click', ()=>{
    console.log('button two pressed')
    numberVar += 1
    numberVar2 += 1
    buttonTwo.innerHTML = "this button has been pressed " + numberVar2 + " time(s)"
    total.innerHTML = "all of the buttons have been pressed " + numberVar + " time(s) *ੈ✩‧₊˚"
    total.style.textAlign = "center"
    total.style.marginLeft = "0"
    buttonBool =! buttonBool
    if (buttonBool == true){
    buttonTwo.style.fontSize = "2vw"
    buttonTwo.style.backgroundColor = "#fa5043"
    buttonTwo.style.height = "24vw"
    buttonTwo.style.width = "500px"
    }else{
        buttonTwo.style.backgroundColor = "#fca451" 
        buttonTwo.style.height = "120px" 
        buttonTwo.style.padding = "10px"
        buttonTwo.style.width = "300px"
        buttonTwo.style.fontSize = "2vw"
    }
})

buttonThree.addEventListener('click', ()=>{
    console.log('button three pressed')
    entry.append("hello there! ")
    entry.style.color = "grey"
    numberVar3 += 1
    numberVar += 1
    buttonThree.innerHTML = "this button has been pressed " + numberVar3 + " time(s)"
    total.innerHTML = "all of the buttons have been pressed " + numberVar + " time(s) *ੈ✩‧₊˚"
    total.style.textAlign = "center"
    total.style.marginLeft = "0"
    buttonThree.style.padding = "10px"
    buttonThree.style.fontSize = "2vw"
    
})

 
