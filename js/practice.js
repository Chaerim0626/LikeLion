document.getElementsByTagName("li")[0].style.color = "red";
document.getElementsByClassName("animal")[1].style.color = "red";
document.querySelectorAll(".animal")[0].style.color = "red";

//DOM조작 : 새로운 노드 추가 및 삭제
const animals = document.getElementById("animals");
animals.innerHTML += "<li class='animal'>Cat</li>";

document.querySelectorAll(".box")[0].classList.add("purple");
document.querySelectorAll(".box")[0].classList.remove("purple");

document.querySelectorAll(".box")[0].classList.toggle("yellow");