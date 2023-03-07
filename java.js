//Variables
let total = document.getElementById("total") //Total button press counter
let buttonOne = document.getElementById("buttonOne") //First button variable
let buttonTwo = document.getElementById("buttonTwo") //Second button variable
let buttonThree = document.getElementById("buttonThree") //Third button variable
let buttonBool = false //Value
let numberVar = 0 //Number Variable for Total
let numberVar1 = 0 //Number Variable for first button
let numberVar2 = 0 //Number Variable for second button
let numberVar3 = 0 //Number Variable for third button
// let total = 0 //
// counterTotal = counterOne + counterTwo + counterThree add to each eventListener
let entry = document.getElementById("fifthEntry") //Variable for third button spawned text

// Button 1 Event Listener
buttonOne.addEventListener('click', ()=>{ //condition, anonymous function//
    console.log('button one pressed')
    numberVar += 1 //or numberVar ++
    numberVar1 += 1 
    //Total count manipulations
    total.innerHTML = "all of the buttons have been pressed " + numberVar + " time(s) *ੈ✩‧₊˚"
    total.style.textAlign = "center"
    total.style.marginLeft = "0"
    buttonOne.innerHTML = "this button has been pressed " + numberVar1 + " time(s)"
    buttonBool =! buttonBool
    //If-then statement for button 1 styles + functions
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
    //Total count manipulations
    total.innerHTML = "all of the buttons have been pressed " + numberVar + " time(s) *ੈ✩‧₊˚"
    total.style.textAlign = "center"
    total.style.marginLeft = "0"
    //If-then statement for button 2 styles + functions//
    buttonBool =! buttonBool
    if (buttonBool == true){ // with boolean statements you can just use bool variable. ! used for false (not bool)//
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

buttonThree.addEventListener('click', ()=>{ //Functions and styles for button 3
    console.log('button three pressed')
    entry.append("hello there! ")
    entry.style.color = "grey"
    numberVar3 += 1
    numberVar += 1
    buttonThree.innerHTML = "this button has been pressed " + numberVar3 + " time(s)"
    total.innerHTML = "all of the buttons have been pressed " + numberVar + " time(s) *ੈ✩‧₊˚"
    total.style.textAlign = "center" //Total count manipulation
    total.style.marginLeft = "0" //Total count manipulation
    buttonThree.style.padding = "10px"
    buttonThree.style.fontSize = "2vw"
    
})

 
//solution to total: add all id's in function ot generalize in arrays
//function addtotal = counterThree + counterTwo + counterOne