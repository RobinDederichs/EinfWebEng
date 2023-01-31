function createNavBar() {
    var ul = document.createElement("ul");
    ul.setAttribute("class", "navZeUl");

    var title = [];
    title[0] = "Klicken um zur Startseite zu kommen";
    title[1] = "Klicken um zur ersten Aufgabe zu kommen";
    title[2] = "Klicken um zur zweiten Aufgabe zu kommen";
    title[3] = "Klicken um zur dritten Aufgabe zu kommen";
    title[4] = "Klicken um zur vierte Aufgabe zu kommen";
    title[5] = "Klicken um zur fünfte Aufgabe zu kommen";
    title[6] = "Klicken um zur sechste Aufgabe zu kommen";
    title[7] = "Klicken um zur siebten Aufgabe zu kommen";
    title[8] = "Klicken um zur achten Aufgabe zu kommen";
    title[9] = "Klicken um zur neunen Aufgabe zu kommen";
    title[10] = "Klicken um zur zehnten Aufgabe zu kommen";

    var link = [];
    link[0] = "../index.html";
    link[1] = "Aufgabe1.html";
    link[2] = "Aufgabe2.html";
    link[3] = "Aufgabe3.html";
    link[4] = "Aufgabe4.html";
    link[5] = "Aufgabe5.html";
    link[6] = "Aufgabe6.html";
    link[7] = "Aufgabe7.html";
    link[8] = "Aufgabe8.html";
    link[9] = "Aufgabe9.html";
    link[10] = "Aufgabe10.html";

    var text = [];
    text[0] = "Home";
    text[1] = "Aufgabe1";
    text[2] = "Aufgabe2";
    text[3] = "Aufgabe3";
    text[4] = "Aufgabe4";
    text[5] = "Aufgabe5";
    text[6] = "Aufgabe6";
    text[7] = "Aufgabe7";
    text[8] = "Aufgabe8";
    text[9] = "Aufgabe9";
    text[10] = "Aufgabe10";

    var a = document.createElement("a");
    a.setAttribute("title", "Navigation");
    let span = document.createElement("span");
    span.setAttribute("id", "reiter");
    a.appendChild(span);
    span.innerHTML = "Navigation &nabla;";
    var li = document.createElement("li");
    li.setAttribute("class", "navZeLi");
    li.setAttribute("id", "lireiter");
    li.appendChild(a);
    ul.appendChild(li);

    for (var i = 0; i < link.length; i++) {
        var a = document.createElement("a");
        a.setAttribute("title", title[i]);
        a.setAttribute("href", link[i]);
        a.innerHTML = text[i];
        var li = document.createElement("li");
        li.setAttribute("class", "navZeLi inner toggleable");
        li.appendChild(a);
        ul.appendChild(li);
    }

    var header = document.getElementById("headPic");
    document.body.insertBefore(ul, header);

    document.getElementById("lireiter").addEventListener("click", function(){
        toggleShowNavbar();
    });
    
}

let toggleFlag = false;
function toggleShowNavbar() {
    if(toggleFlag) {
        hideNavbar()
    } else {
        showNavbar()
    }
}

function showNavbar() {
    let inner = document.querySelectorAll('.inner');
    for(let li of inner) {
        li.classList.toggle("toggleable");
    }
    document.getElementById("reiter").innerHTML = "Schließen &#9587;";
    toggleFlag = true;
}

function hideNavbar() {
    let inner = document.querySelectorAll('.inner');
    for(let li of inner) {
        li.classList.toggle("toggleable");
    }
    document.getElementById("reiter").innerHTML = "Navigation &nabla;";
    toggleFlag = false;
}