const display = document.getElementById("display");

function getToDisplay(input){
    display.value += input;
}

function calc(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}

function clearDis(){
    display.value = "";
}

function deleteLast(){
    display.value =display.value.slice(0,-1);
}