var counts = document.getElementById("counts");


function add() {
    var counter = parseInt(counts.innerHTML);
    var inc = ++counter;
    counts.innerHTML = inc;
    if (counts.innerHTML % 2 == 0) {
        counts.style.color = "green"
    } else counts.style.color = "red"
}
function sub() {
    var counter = parseInt(counts.innerHTML);
    var inc = --counter;
    counts.innerHTML = inc;
    if (inc <= 0) counts.innerHTML = "0";
    if (counts.innerHTML % 2 == 0) {
        counts.style.color = "green"
    } else counts.style.color = "red"

}
function reset() {
    counts.innerHTML = "0";
    counts.style.color = "white"

}
