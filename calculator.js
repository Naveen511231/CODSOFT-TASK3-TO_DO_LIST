// clear the display
function clear_display(){
document.getElementById("display").value=""
}

// make backspace key
function backspace(){
var a=document.getElementById("display").value;
a=a.slice(0,-1);
document.getElementById("display").value=a;
}

// change value in display
function display(value){
    document.getElementById("display").value+=value;
}

// to perform operation
function calculate(){
var x=document.getElementById("display").value;
var y=eval(x);
document.getElementById("display").value=y;
}

// keyboard key access
document.addEventListener("keydown",function (event){
    if(event.keyCode===13){
        calculate();
    }
    if(event.keyCode===46){
        clear_display();
    }
})