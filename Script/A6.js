
let flag = false;
function toggleFlag() {
    if(flag) {
        flag = false;
    } else {
        flag = true;
    }
}


function showIncorrectness() {
    let feld = document.getElementById("klammerChecker");
    feld.setAttribute("class", "red");
}


function klammerCheck(opFirst = "(", clFirst = ")", opSec = "[", clSec = "]", 
                      opThird = "{", clThird = "}") {
    let feld  = document.getElementById("klammerChecker");
    feld.setAttribute("class", "ghostwhite");
    
    const opNoKl = opFirst.charCodeAt(0);
    const clNoKl = clFirst.charCodeAt(0);
    const opEcKl = opSec.charCodeAt(0);
    const clEcKl = clSec.charCodeAt(0);
    const opGeKl = opThird.charCodeAt(0);
    const clGeKl = clThird.charCodeAt(0);
    
    const text = document.getElementById("klammerChecker").value;
    
    const splittedText = text.split("");
    
    let expected = [];
    let z = 0;
    
    for (let i = 0; i < splittedText.length; i++) {
        switch (splittedText[i].charCodeAt(0)) {
            case opNoKl:
                expected[z++] = clNoKl;
                break;
                
            case opEcKl:
                expected[z++] = clEcKl;
                break;
                
            case opGeKl:
                expected[z++] = clGeKl;
                break;
                
            case clNoKl:
                if (expected[z-1] === clNoKl) {
                    z--;
                    break;
                } else {
                    showIncorrectness();
                    break;
                }
                
            case clEcKl:
                if (expected[z-1] === clEcKl) {
                    z--;
                    break;
                } else {
                    showIncorrectness();
                    break;
                }
                
            case clGeKl:
                if (expected[z-1] === clGeKl) {
                    z--;
                    break;
                } else {
                    showIncorrectness();
                    break;
                }
        }
    }
    if (z !== 0) {
        showIncorrectness();
    }
}