function startSpeaker(personname) {
    stopSpeaker();
    
    for(var z = 0; z < persons.length; z++) {
        if (persons[z].name === personname) {
            currentPerson = persons[z];
            break;
        }
    }
    
    currentTime.hr = currentPerson.hr;
    currentTime.min = currentPerson.min;
    currentTime.sec = currentPerson.sec;
    
    myVar = window.setInterval(Timer, 1000);
    
    var name = currentPerson.name;

    document.getElementById(name + "button").innerHTML = "Stop";
    document.getElementById(name + "button").setAttribute("onclick",
        "stopSpeaker()");
}


function stopSpeaker() {
    clearInterval(myVar);

    currentPerson.hr = currentTime.hr;
    currentPerson.min = currentTime.min;
    currentPerson.sec = currentTime.sec;

    var name = currentPerson.name;
    if(currentPerson.sec < 10 && currentPerson.min < 10) {
        document.getElementById(currentPerson.name + "time").innerHTML = "" + currentPerson.hr + ":0" +
            currentPerson.min + ":0" + currentPerson.sec;
    } else if(currentPerson.sec >= 10 && currentPerson.min < 10) {
        document.getElementById(currentPerson.name + "time").innerHTML = "" + currentPerson.hr + ":0" +
            currentPerson.min + ":" + currentPerson.sec;
    } else if(currentPerson.sec >= 10 && currentPerson.min >= 10) {
        document.getElementById(currentPerson.name + "time").innerHTML = "" + currentPerson.hr + ":" +
            currentPerson.min + ":" + currentPerson.sec;
    }
    document.getElementById(name + "button").innerHTML = "Start";
    document.getElementById(name + "button").setAttribute("onclick",
        "startSpeaker('" + name +"')");
}


function Timer() {
    currentTime.sec++;
    if (currentTime.sec >= 60) {
        currentTime.min++;
        currentTime.sec = 0;
    }
    if (currentTime.min >= 60) {
        currentTime.hour++;
        currentTime.min = 0;
    }

    if(currentTime.sec < 10 && currentTime.min < 10) {
        document.getElementById(currentPerson.name + "time").innerHTML = "" + currentTime.hr + ":0" + 
            currentTime.min + ":0" + currentTime.sec;
    } else if(currentTime.sec >= 10 && currentTime.min < 10) {
        document.getElementById(currentPerson.name + "time").innerHTML = "" + currentTime.hr + ":0" +
            currentTime.min + ":" + currentTime.sec;
    } else if(currentTime.sec >= 10 && currentTime.min >= 10) {
        document.getElementById(currentPerson.name + "time").innerHTML = "" + currentTime.hr + ":" +
            currentTime.min + ":" + currentTime.sec;
    }

}

function person(pname, phr, pmin, psec) {
    return {
        name :  pname,
        hr : phr,
        min : pmin,
        sec : psec
    };
}
var currentTime =  {
        hr: 0,
        min: 0,
        sec: 0
};

var persons = [];
var i = 0;
var myVar;
var currentPerson;

function addRedner() {
    if(currentPerson !== undefined) {
        stopSpeaker();
    }
    var redner = document.getElementById("addRednerInput").value;

    var listitem = document.createElement("li");
    listitem.setAttribute("id", redner + "item");

    var button = document.createElement("button");
    button.setAttribute("id", redner + "button");
    button.setAttribute("type", "button");
    button.setAttribute("onclick", "stopSpeaker()");
    button.innerHTML = "Stop";

    var p = document.createElement("p");
    p.setAttribute("id", redner + "name");
    p.innerHTML = redner;

    listitem.appendChild(p);

    span = document.createElement("span");
    span.setAttribute("id", redner + "time");

    p.appendChild(span);
    p.appendChild(button);

    document.getElementById("speaker").appendChild(listitem);

    persons[i++] = new person(document.getElementById("addRednerInput").value, 0, 0, 0);
    currentPerson = persons[i - 1];
    currentTime.hr = 0;
    currentTime.min = 0;
    currentTime.sec = 0;
    myVar = window.setInterval(Timer, 1000);
}



    var input = document.getElementById("addRednerInput");

    input.addEventListener('keypress', function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            addRedner();
        }
    })

function performanceTest() {
    var t0 = performance.now();
    document.getElementById("inHTML").innerHTML = "Hier";
    var t1 = performance.now();
    
    var t2 = performance.now();
    document.getElementById("intext").innerText = "sind";
    var t3 = performance.now();
    
    var t4 = performance.now();
    document.getElementById("textcon").textContent = "die";
    var t5 = performance.now();
    
    var t6 = performance.now();
    document.getElementById("outHTML").outerHTML = "<h5>Resultate:</h5>";
    var t7 = performance.now();
    
    var table = document.createElement("table");
    var tRowHead = document.createElement("tr");
    var tCellHead1 = document.createElement("th");
    var tCellHead2 = document.createElement("th");
    tCellHead1.innerText = "Dom-Method";
    tCellHead2.innerText = "Time";
    tRowHead.appendChild(tCellHead1);
    tRowHead.appendChild(tCellHead2);
    
    var tRow1 = document.createElement("tr");
    var tCell1 = document.createElement("td");
    var tCell2 = document.createElement("td");
    tCell1.innerText = "innerHTML";
    tCell2.innerText = t1 - t0;
    tRow1.appendChild(tCell1);
    tRow1.appendChild(tCell2);
    
    var tRow2 = document.createElement("tr");
    var tCell3 = document.createElement("td");
    var tCell4 = document.createElement("td");
    tCell3.innerText = "innerText";
    tCell4.innerText = t3 - t2;
    tRow2.appendChild(tCell3);
    tRow2.appendChild(tCell4);
    
    var tRow3 = document.createElement("tr");
    var tCell5 = document.createElement("td");
    var tCell6 = document.createElement("td");
    tCell5.innerText = "textContent";
    tCell6.innerText = t5 - t4;
    tRow3.appendChild(tCell5);
    tRow3.appendChild(tCell6);
    
    var tRow4 = document.createElement("tr");
    var tCell7 = document.createElement("td");
    var tCell8 = document.createElement("td");
    tCell7.innerText = "outerHTML";
    tCell8.innerText = t7 - t6;
    tRow4.appendChild(tCell7);
    tRow4.appendChild(tCell8);
    
    table.appendChild(tRowHead);
    table.appendChild(tRow1);
    table.appendChild(tRow2);
    table.appendChild(tRow3);
    table.appendChild(tRow4);
    
    table.setAttribute("class", "table_borders");
    
    
    document.getElementById("A5.1").appendChild(table);
}