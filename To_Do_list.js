// function to add the item in to do list
function add() {
    var elemen = document.getElementById("enter_text").value;

    var Node = document.createElement("input");
    var work_name = document.createElement("label");
    var breaK = document.createElement("br");

    Node.type="checkbox";
    Node.className="tick_mark";
    work_name.appendChild(Node);
    work_name.innerHTML+=elemen;

    var List=document.getElementById("text_entry_display");

    List.appendChild(work_name);
    List.appendChild(breaK);
   document.getElementById("enter_text").value="";
}

// funtion to remove the check item 
function remove() {
    var checkboX = document.querySelectorAll(".tick_mark");

    checkboX.forEach(function (checkboX) {

        if (checkboX.checked) {
            checkboX.parentElement.nextSibling.remove();
            checkboX.parentElement.remove();
        }
    })
}

// keyboard event action
document.addEventListener("keydown",function (event){
    if(event.keyCode===13){
        add();
    }
    if(event.keyCode===46){
        remove();
    }
})