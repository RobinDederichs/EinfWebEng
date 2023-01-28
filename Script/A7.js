function analyse() {
    let text = document.getElementById("text7.2").innerHTML;
    let stopwords = document.getElementById("stoppworte").innerHTML;
    
    let splitText = text.split(".").join(",").split("1").join(",").split("2").join(",").split(
        "3").join(",").split("4").join(",").split("5").join(",").split("6").join(","
    ).split("7").join(",").split("8").join(",").split("9").join(",").split("0").join(
        ",").split("-").join(",").split("(").join(",").split(")").join(",").split("\""
    ).join(",").split(":").join(",").split("\n").join(",").split(" ").join(",").split(",");
    
    let listStopwords = stopwords.split(" ").join(",").split("\n").join(",").split(",");
    text = splitText.filter(x => !(listStopwords.includes(x)));
    let spectated = [];
    let numbers = [];
    let ind = [];
    text.forEach(val => {
        let i = 0;
        if(!spectated.includes(val)) {
            spectated.push(val);
            text.forEach(x => {
                if(val === x ) {
                    i++;
                }
            })
            numbers.push(i);
            ind.push(text.findIndex(temp => temp === val));
        }
    });
    let winner = [];
    for(let z = 0; z < 3; z++) {
        let value = numbers.reduce((a, b) => Math.max(Number(a), Number(b)));
        let tempindex = numbers.findIndex( val => val === value);
        let index = ind[tempindex];
        let word = text[index];
        winner.push([word, value]);
        numbers.splice(tempindex, 1);
        ind.splice(tempindex, 1);
    }
    let ol = document.createElement("ol");
    for (const element of winner) {
        let li = document.createElement("li");
        li.innerHTML = "\"" + element[0] + "\"" + " Anzahl: " + element[1];
        ol.appendChild(li);
    }
    document.getElementById("div7.2").appendChild(ol);
    
}


function applyf(text) {
    if (text === "add") {
        return addf;
    }
    if (text === "mul") {
        return function(x) {
            let nr1 = x;
            return y => nr1 * y;
        }
    }
}


const br = "</br>";
const sp1 = "<span class='ergebnisse'>";
const sp2 = "</span>";


function identity_function(x) {
    let y = x;
    return function() {
        return y;
    }
}

function addf(x) {
    let nr1 = x;
    return y => Number(x) + Number(y);
}