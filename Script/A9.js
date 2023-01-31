const feld = [document.getElementById("kasten1"), document.getElementById("kasten2"),
    document.getElementById("kasten3"),
    document.getElementById("kasten4"), document.getElementById("kasten5"),
    document.getElementById("kasten6"),
    document.getElementById("kasten7"), document.getElementById("kasten8"),
    document.getElementById("kasten9")];

const kreise = [document.getElementById("kreis1"), document.getElementById("kreis2"),
    document.getElementById("kreis3"), document.getElementById("kreis4"),
    document.getElementById("kreis5"), document.getElementById("kreis6"),
    document.getElementById("kreis7"), document.getElementById("kreis8"),
    document.getElementById("kreis9")];

const kreuze = [document.getElementById("kreuz1"), document.getElementById("kreuz2"),
    document.getElementById("kreuz3"), document.getElementById("kreuz4"),
    document.getElementById("kreuz5"), document.getElementById("kreuz6"),
    document.getElementById("kreuz7"), document.getElementById("kreuz8"),
    document.getElementById("kreuz9")];

for (let i = 0; i < feld.length; i++) {
    feld[i].addEventListener("click", _ => mark(feld[i].getAttribute("id")));
}


let turn = "x";
let filled = [false, false, false, false, false, false, false, false, false];

function mark(id) {
    if(!filled[feld.indexOf(document.getElementById(id))]) {
        if (turn === "x") {
            kreuze[feld.indexOf(document.getElementById(id))].classList.toggle("disable");
            turn = "o";
            filled[feld.indexOf(document.getElementById(id))] = true;
        } else if (turn === "o") {
            kreise[feld.indexOf(document.getElementById(id))].classList.toggle("disable");
            turn = "x";
            filled[feld.indexOf(document.getElementById(id))] = true;
        }
    }
}

function reload() {
    location.reload();
}