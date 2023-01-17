function Timer(person) {
    var d = Date();
     var time = {
         hours: 0,
         minutes: 0,
         seconds: 0
     };
     time.hours = d.getHours() - starttime.hr + person.hr;
     time.minutes = d.getMinutes() - starttime.min + person.min;
     time.seconds = d.getSeconds() - starttime.sec + person.min;

     document.getElementById(person.name + "time").innerHTML = "" + time.hours + ":" + time.minutes + ":" + time.seconds;
}

function person(pname, phr, pmin, psec) {
    return {
        name :  pname,
        hr : phr,
        min : pmin,
        sec : psec
    };
}
var starttime =  {
        hr: 0,
        min: 0,
        sec: 0
}
var persons = [];
var i = 0;
var myVar;

function addRedner() {
    var redner = document.getElementById("addRedner").value;

    var listitem = document.createElement("li");
    listitem.setAttribute("id", redner);

    var nobr = document.createElement("nobr");
    nobr.setAttribute(id, redner + "nobr");

    var p = document.createElement("p");
    p.setAttribute("id", redner + "name");
    p.innerHTML = redner;

    nobr.appendChild(p);

    p = document.createElement("p");
    p.setAttribute("id", redner + "time");

    nobr.appendChild(p);

    listitem.appendChild(nobr);
    document.getElementById("speaker").appendChild(listitem);

    persons[i++] = new person(document.getElementById("addRedner").value, 0, 0, 0);
    var d = Date();
    starttime.hr = d.getHours();
    starttime.min = d.getMinutes();
    starttime.sec = d.getSeconds();
    myVar = window.setInterval(Timer(persons[i-1]), 1000);
}


var input = document.getElementById('addRedner');

input.addEventListener('keypress', function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        addRedner();}
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