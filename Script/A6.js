function topIter(text) {
    class Vorrang {
        constructor(arr) {
            this.arr = arr;
        }
        getelementsNoDependecies() {
            let result = [];
            let currentElement;
            for (let i = 0; i < this.arr.length; i++) {
                for (let z = 0; z < this.arr[i].length; z++) {
                    currentElement = this.arr[i][z];
                    let found = false;
                    for (let j = 0; j < this.arr.length; j++) {
                        if (currentElement === this.arr[j][1]) {
                            found = true;
                            break;
                        }
                    }
                    if (!found) {
                        result.push(currentElement);
                    }
                }
            }
            return result;
        }
        [Symbol.iterator]() {
            let ergebnisse = this.getelementsNoDependecies();
            
            return {
                next() {

                }
            }
        }
    }
    const topSortFirstSplit = text.split(";");
    const topSortSecondSplit = [];
    let z = 0;
    for (let i = 0; i < topSortFirstSplit; i++) {
        let temp = topSortFirstSplit.split("\'");
        let tempArray = [];
        tempArray[0] = temp[1];
        tempArray[1] = temp[3];
        topSortSecondSplit[z++] = tempArray;
    }
    const topSort = new Vorrang(topSortSecondSplit);
    
    for (const next of topSort) {
        console.log(next);
    }
}


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
    
    console.assert(opNoKl !== clNoKl, "Eingaben nicht einzigartig");
    console.assert(opNoKl !== opGeKl, "Eingaben nicht einzigartig");
    console.assert(opNoKl !== clGeKl, "Eingaben nicht einzigartig");
    console.assert(opNoKl !== opEcKl, "Eingaben nicht einzigartig");
    console.assert(opNoKl !== clEcKl, "Eingaben nicht einzigartig");

    console.assert(clNoKl !== opGeKl, "Eingaben nicht einzigartig");
    console.assert(clNoKl !== clGeKl, "Eingaben nicht einzigartig");
    console.assert(clNoKl !== opEcKl, "Eingaben nicht einzigartig");
    console.assert(clNoKl !== clEcKl, "Eingaben nicht einzigartig");

    console.assert(opGeKl !== clGeKl, "Eingaben nicht einzigartig");
    console.assert(opGeKl !== opEcKl, "Eingaben nicht einzigartig");
    console.assert(opGeKl !== clEcKl, "Eingaben nicht einzigartig");

    console.assert(clGeKl !== opEcKl, "Eingaben nicht einzigartig");
    console.assert(clGeKl !== clEcKl, "Eingaben nicht einzigartig");

    console.assert(opEcKl !== clEcKl, "Eingaben nicht einzigartig");
    
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