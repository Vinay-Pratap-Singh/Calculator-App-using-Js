// Accessing the elements from the html
let inputBoxValue = document.getElementById("inputBox");
let outputBoxValue = document.getElementById("outputBox");
let darkModeBtn = document.getElementById("darkModeBtn");
let lightModeBtn = document.getElementById("lightModeBtn");
let colorMode = document.getElementById("colorMode");
let inputOutput = document.getElementById("inputOutput");
let myButtons = document.getElementById("myButtons");
let button = document.getElementsByClassName("button");

// Handling the Dark Mode and Light Mode 
function darkMode(){
    document.body.style.backgroundColor = "black";
    darkModeBtn.style.color = "cyan";
    lightModeBtn.style.color = "gray";
    colorMode.style.backgroundColor = "#161616";
    inputOutput.style.color = "white";
    myButtons.style.color = "white";
    myButtons.style.backgroundColor = "#121212";
    Object.keys(button).map(btnKey=>{
        button[btnKey].style.backgroundColor = "#161616";

    })
}

function lightMode(){
    document.body.style.backgroundColor = "white";
    lightModeBtn.style.color = "cyan";
    darkModeBtn.style.color = "gray";
    colorMode.style.backgroundColor = "#efeeeedc";
    inputOutput.style.color = "black";
    myButtons.style.color = "black";
    myButtons.style.backgroundColor = "#efeeeedc";
    Object.keys(button).map(btnKey=>{
        button[btnKey].style.backgroundColor = "white";

    })
}


// Using time interval for constantly checking and updating of the output result    
setInterval(() => {
    // Checking the height and width of the screen, so that I can adjust the text size of input and ouput box.
    let height = window.innerHeight;
    let width = window.innerWidth;

    // Calculating the user input and displaying that in the output box
    if(inputBoxValue.innerHTML[inputBoxValue.innerHTML.length-1] != " " && inputBoxValue.innerHTML[inputBoxValue.innerHTML.length-1] != "+" && inputBoxValue.innerHTML[inputBoxValue.innerHTML.length-1] != "-" && inputBoxValue.innerHTML[inputBoxValue.innerHTML.length-1] != "*" && inputBoxValue.innerHTML[inputBoxValue.innerHTML.length-1] != "÷" && inputBoxValue.innerHTML[inputBoxValue.innerHTML.length-1] != "%"){
        let expression = inputBoxValue.innerHTML.replace("÷", "/");
        if(expression.length >= 15 && width < 400){
            outputBoxValue.style.fontSize = "20px";
        }
        else{
            outputBoxValue.style.fontSize = "1.875rem";
        }
        if(inputBoxValue.innerHTML.length > 25 && width < 400){
            inputBoxValue.style.fontSize = "10px";
        }
        else{
            inputBoxValue.style.fontSize = "16px";
        }
        outputBoxValue.innerHTML = math.evaluate(expression);
    }
}, ); 

// Function to handle the user input
function clickme(value){
    if(value == "delete"){
        if(inputBoxValue.innerHTML == " " || inputBoxValue.innerHTML == "" || inputBoxValue.innerHTML.length == "1"){
            inputBoxValue.innerHTML = "0";
        }
        else{
            inputBoxValue.innerHTML = inputBoxValue.innerHTML.slice(0, inputBoxValue.innerHTML.length-1);
        }
    }  
    else if(value == "c"){
        inputBoxValue.innerHTML = "0";
    }
    else if(value == "%" && inputBoxValue.innerHTML != "0" && (inputBoxValue.innerHTML[inputBoxValue.innerHTML.length-2] != "%") && (inputBoxValue.innerHTML[inputBoxValue.innerHTML.length-2] != "÷") && (inputBoxValue.innerHTML[inputBoxValue.innerHTML.length-2] != "*") && (inputBoxValue.innerHTML[inputBoxValue.innerHTML.length-2] != "-") && (inputBoxValue.innerHTML[inputBoxValue.innerHTML.length-2] != "+" && (inputBoxValue.innerHTML[inputBoxValue.innerHTML.length-2] != "=") && (inputBoxValue.innerHTML[inputBoxValue.innerHTML.length-2] != "."))){
        inputBoxValue.innerHTML = inputBoxValue.innerHTML + " % ";
    }
    else if(value == "÷" && inputBoxValue.innerHTML != "0" && (inputBoxValue.innerHTML[inputBoxValue.innerHTML.length-2] != "%") && (inputBoxValue.innerHTML[inputBoxValue.innerHTML.length-2] != "÷") && (inputBoxValue.innerHTML[inputBoxValue.innerHTML.length-2] != "*") && (inputBoxValue.innerHTML[inputBoxValue.innerHTML.length-2] != "-") && (inputBoxValue.innerHTML[inputBoxValue.innerHTML.length-2] != "+" && (inputBoxValue.innerHTML[inputBoxValue.innerHTML.length-2] != "=") && (inputBoxValue.innerHTML[inputBoxValue.innerHTML.length-2] != "."))){
        inputBoxValue.innerHTML = inputBoxValue.innerHTML + " ÷ ";
    }
    else if(value == "7"){
        if(inputBoxValue.innerHTML == "0"){
            inputBoxValue.innerHTML = "7";
        }
        else{
            inputBoxValue.innerHTML = inputBoxValue.innerHTML + "7";
        }
    }
    else if(value == "8"){
        if(inputBoxValue.innerHTML == "0"){
            inputBoxValue.innerHTML = "8";
        }
        else{
            inputBoxValue.innerHTML = inputBoxValue.innerHTML + "8";
        }
    }
    else if(value == "9"){
        if(inputBoxValue.innerHTML == "0"){
            inputBoxValue.innerHTML = "9";
        }
        else{
            inputBoxValue.innerHTML = inputBoxValue.innerHTML + "9";
        }
    }
    else if(value == "*" && inputBoxValue.innerHTML != "0" && (inputBoxValue.innerHTML[inputBoxValue.innerHTML.length-2] != "%") && (inputBoxValue.innerHTML[inputBoxValue.innerHTML.length-2] != "÷") && (inputBoxValue.innerHTML[inputBoxValue.innerHTML.length-2] != "*") && (inputBoxValue.innerHTML[inputBoxValue.innerHTML.length-2] != "-") && (inputBoxValue.innerHTML[inputBoxValue.innerHTML.length-2] != "+" && (inputBoxValue.innerHTML[inputBoxValue.innerHTML.length-2] != "=") && (inputBoxValue.innerHTML[inputBoxValue.innerHTML.length-2] != "."))){
        inputBoxValue.innerHTML = inputBoxValue.innerHTML + " * ";
    }
    else if(value == "4"){
        if(inputBoxValue.innerHTML == "0"){
            inputBoxValue.innerHTML = "4";
        }
        else{
            inputBoxValue.innerHTML = inputBoxValue.innerHTML + "4";
        }
    }
    else if(value == "5"){
        if(inputBoxValue.innerHTML == "0"){
            inputBoxValue.innerHTML = "5";
        }
        else{
            inputBoxValue.innerHTML = inputBoxValue.innerHTML + "5";
        }
    }
    else if(value == "6"){
        if(inputBoxValue.innerHTML == "0"){
            inputBoxValue.innerHTML = "6";
        }
        else{
            inputBoxValue.innerHTML = inputBoxValue.innerHTML + "6";
        }
    }
    else if(value == "-" && inputBoxValue.innerHTML != "0" && (inputBoxValue.innerHTML[inputBoxValue.innerHTML.length-2] != "%") && (inputBoxValue.innerHTML[inputBoxValue.innerHTML.length-2] != "÷") && (inputBoxValue.innerHTML[inputBoxValue.innerHTML.length-2] != "*") && (inputBoxValue.innerHTML[inputBoxValue.innerHTML.length-2] != "-") && (inputBoxValue.innerHTML[inputBoxValue.innerHTML.length-2] != "+" && (inputBoxValue.innerHTML[inputBoxValue.innerHTML.length-2] != "=") && (inputBoxValue.innerHTML[inputBoxValue.innerHTML.length-2] != "."))){
        inputBoxValue.innerHTML = inputBoxValue.innerHTML + " - ";
    }
    else if(value == "1"){
        if(inputBoxValue.innerHTML == "0"){
            inputBoxValue.innerHTML = "1";
        }
        else{
            inputBoxValue.innerHTML = inputBoxValue.innerHTML + "1";
        }
    }
    else if(value == "2"){
        if(inputBoxValue.innerHTML == "0"){
            inputBoxValue.innerHTML = "2";
        }
        else{
            inputBoxValue.innerHTML = inputBoxValue.innerHTML + "2";
        }
    }
    else if(value == "3"){
        if(inputBoxValue.innerHTML == "0"){
            inputBoxValue.innerHTML = "3";
        }
        else{
            inputBoxValue.innerHTML = inputBoxValue.innerHTML + "3";
        }
    }
    else if(value == "+" && inputBoxValue.innerHTML != "0" && (inputBoxValue.innerHTML[inputBoxValue.innerHTML.length-2] != "%") && (inputBoxValue.innerHTML[inputBoxValue.innerHTML.length-2] != "÷") && (inputBoxValue.innerHTML[inputBoxValue.innerHTML.length-2] != "*") && (inputBoxValue.innerHTML[inputBoxValue.innerHTML.length-2] != "-") && (inputBoxValue.innerHTML[inputBoxValue.innerHTML.length-2] != "+" && (inputBoxValue.innerHTML[inputBoxValue.innerHTML.length-2] != "=") && (inputBoxValue.innerHTML[inputBoxValue.innerHTML.length-2] != "."))){
        inputBoxValue.innerHTML = inputBoxValue.innerHTML + " + ";
    }
    else if(value == "00" && inputBoxValue != "0"){
        inputBoxValue.innerHTML = inputBoxValue.innerHTML + "00";
    }
    else if(value == "0" && inputBoxValue.innerHTML != "0"){
        inputBoxValue.innerHTML = inputBoxValue.innerHTML + "0";
    }
    else if(value == "." && inputBoxValue.innerHTML != "0" && (inputBoxValue.innerHTML[inputBoxValue.innerHTML.length-2] != "%") && (inputBoxValue.innerHTML[inputBoxValue.innerHTML.length-2] != "÷") && (inputBoxValue.innerHTML[inputBoxValue.innerHTML.length-2] != "*") && (inputBoxValue.innerHTML[inputBoxValue.innerHTML.length-2] != "-") && (inputBoxValue.innerHTML[inputBoxValue.innerHTML.length-2] != "+" && (inputBoxValue.innerHTML[inputBoxValue.innerHTML.length-2] != "=") && (inputBoxValue.innerHTML[inputBoxValue.innerHTML.length-2] != "."))){
        inputBoxValue.innerHTML = inputBoxValue.innerHTML + ".";
    }
    else if(value == "=" && inputBoxValue.innerHTML != "0" && (inputBoxValue.innerHTML[inputBoxValue.innerHTML.length-2] != "%") && (inputBoxValue.innerHTML[inputBoxValue.innerHTML.length-2] != "÷") && (inputBoxValue.innerHTML[inputBoxValue.innerHTML.length-2] != "*") && (inputBoxValue.innerHTML[inputBoxValue.innerHTML.length-2] != "-") && (inputBoxValue.innerHTML[inputBoxValue.innerHTML.length-2] != "+" && (inputBoxValue.innerHTML[inputBoxValue.innerHTML.length-2] != "=") && (inputBoxValue.innerHTML[inputBoxValue.innerHTML.length-2] != "."))){
        // Calculating the user input and displaying that in the output box
        inputBoxValue.innerHTML = outputBoxValue.innerHTML;
    }
}