// This function clear all the values ths clears all the values which are currently present in he text box
function clearScreen() {
document.getElementById("result").value = "";
    }
    
    // This function display values it displays the values and opertions with result on the secreen
    function display(value) {
    document.getElementById("result").value += value;
    }
    // This function evaluates the expression and returns result
    function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
    }