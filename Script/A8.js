const pathToA = "../txt/A.txt";
const pathToB = "../txt/B.txt";
let resultP = document.getElementById("A8.1");

let splittedA;
let splittedB;

let w = 0;
let i = 0;

fetch (pathToA)
.then(pathA => pathA.text())
.then(textA => splittedA = textA.split("\n"))
    .then(rowArrayA => {resultP.innerHTML = resultP.innerHTML + splittedA[w] + "\n"; w++;})
    .then(rowArrayA => {resultP.innerHTML = resultP.innerHTML + splittedA[w] + "\n"; w++;})
    .then(rowArrayA => {resultP.innerHTML = resultP.innerHTML + splittedA[w] + "\n"; w++;})
    .then(rowArrayA => {resultP.innerHTML = resultP.innerHTML + splittedA[w] + "\n"; w++;})
    .then(rowArrayA => {resultP.innerHTML = resultP.innerHTML + splittedA[w] + "\n"; w++;})
    .then(rowArrayA => {resultP.innerHTML = resultP.innerHTML + splittedA[w] + "\n"; w++;})
    .then(rowArrayA => {resultP.innerHTML = resultP.innerHTML + splittedA[w] + "\n"; w++;})
    .then(rowArrayA => {resultP.innerHTML = resultP.innerHTML + splittedA[w] + "\n"; w++;})
    .then(rowArrayA => {resultP.innerHTML = resultP.innerHTML + splittedA[w] + "\n"; w++;})
    .then(rowArrayA => {resultP.innerHTML = resultP.innerHTML + splittedA[w] + "\n"; w++;})
    .then(rowArrayA => {resultP.innerHTML = resultP.innerHTML + splittedA[w] + "\n"; w++;});

fetch (pathToB)
.then(pathB => pathB.text())
    .then(textB => splittedB = textB.split("\n"))
    .then(rowArrayB => {resultP.innerHTML = resultP.innerHTML + splittedB[i] + "\n"; i++;})
    .then(rowArrayB => {resultP.innerHTML = resultP.innerHTML + splittedB[i] + "\n"; i++;})
    .then(rowArrayB => {resultP.innerHTML = resultP.innerHTML + splittedB[i] + "\n"; i++;})
    .then(rowArrayB => {resultP.innerHTML = resultP.innerHTML + splittedB[i] + "\n"; i++;})
    .then(rowArrayB => {resultP.innerHTML = resultP.innerHTML + splittedB[i] + "\n"; i++;})
    .then(rowArrayB => {resultP.innerHTML = resultP.innerHTML + splittedB[i] + "\n"; i++;})
    .then(rowArrayB => {resultP.innerHTML = resultP.innerHTML + splittedB[i] + "\n"; i++;})
    .then(rowArrayB => {resultP.innerHTML = resultP.innerHTML + splittedB[i] + "\n"; i++;})
    .then(rowArrayB => {resultP.innerHTML = resultP.innerHTML + splittedB[i] + "\n"; i++;})
    .then(rowArrayB => {resultP.innerHTML = resultP.innerHTML + splittedB[i] + "\n"; i++;})
    .then(rowArrayB => {resultP.innerHTML = resultP.innerHTML + splittedB[i] + "\n"; i++;});



