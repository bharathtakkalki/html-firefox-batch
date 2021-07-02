console.log("Im linked to basic Html");
console.log(document);
var elementsByTagName = document.getElementsByTagName("h1");
console.log(elementsByTagName);
var firstElement = elementsByTagName[0];
console.log(firstElement);
firstElement.style.color = "#4C4C6D";

console.log("By Tagname", document.getElementsByTagName("h2"));
console.log("By ID", document.getElementById("specific-heading"));
console.log("By ClassName", document.getElementsByClassName("sub-heading"));
console.log(
  "By ClassName",
  document.getElementsByClassName("tertiary-heading")
);

var testDiv = document.getElementById("test-div");
var testPara = document.getElementById("test-para");

testDiv.innerText = "Example Manipulation";
testPara.innerText =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";


function addParaInContainer(){
    var container = document.getElementById("container")
    var newPara = document.createElement("p")
    newPara.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
    container.appendChild(newPara)
}

function showAlert(){
    window.alert("You have clicked alert");
}

console.log("BOM",window)