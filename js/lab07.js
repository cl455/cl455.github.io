let A;
let B;
let C;


function submitFunction() {
    let madlib = document.getElementById("madlib");
    A = document.getElementById("noun1").value;
    console.log(A);
    B = document.getElementById("adj1").value;
    console.log(B);
    C = document.getElementById("adj2").value;
    console.log(C);

    madlib_text = "<h1>If you're going to challenge a " + A + " to a " + B + " fight, make sure they're more " + C + " than you.</h1>";
    madlib_target = document.getElementById("madlib");
    madlib_target.innerHTML = madlib_text;
}