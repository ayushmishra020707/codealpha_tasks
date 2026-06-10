const display = document.getElementById("display");

function appendValue(value){
    display.value += value;
}

function clearDisplay(){
    display.value = "";
}

function deleteLast(){
    display.value = display.value.slice(0, -1);
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch{
        display.value = "Error";
    }
}

// Keyboard Support
document.addEventListener("keydown", (e) => {
    const key = e.key;

    if("0123456789+-*/.".includes(key)){
        appendValue(key);
    }
    else if(key === "Enter"){
        calculate();
    }
    else if(key === "Backspace"){
        deleteLast();
    }
    else if(key === "Escape"){
        clearDisplay();
    }
});