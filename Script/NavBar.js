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

    var link = [];
    link[0] = "../index.html";
    link[1] = "Aufgabe1.html";
    link[2] = "Aufgabe2.html";
    link[3] = "Aufgabe3.html";
    link[4] = "Aufgabe4.html";
    link[5] = "Aufgabe5.html";

    var text = [];
    text[0] = "Home";
    text[1] = "Aufgabe1";
    text[2] = "Aufgabe2";
    text[3] = "Aufgabe3";
    text[4] = "Aufgabe4";
    text[5] = "Aufgabe5";


    for (var i = 0; i < 6; i++) {
        var a = document.createElement("a");
        a.setAttribute("title", title[i]);
        a.setAttribute("href", link[i]);
        a.innerHTML = text[i];
        var li = document.createElement("li");
        li.setAttribute("class", "navZeLi");
        li.appendChild(a);
        ul.appendChild(li);
    }

    var header = document.getElementById("headPic");
    document.body.insertBefore(ul, header);
}