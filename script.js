var array = [1, 2, 3, 4, 5, 6];
document.getElementById("display").innerHTML = array;

function reverseArray() {
    var display = document.getElementById("display");
    array = array.reverse();
    display.innerHTML = array;
}