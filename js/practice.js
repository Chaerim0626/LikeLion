document.getElementsByTagName("li")[0].style.color = "red";
document.getElementsByClassName("animal")[1].style.color = "red";
document.querySelectorAll(".animal")[0].style.color = "red";

//DOM조작 : 새로운 노드 추가 및 삭제
const animals = document.getElementById("animals");
animals.innerHTML += "<li class='animal'>Cat</li>";

//document.querySelectorAll(".box")[0].classList.add("purple");
//document.querySelectorAll(".box")[0].classList.remove("purple");
//document.querySelectorAll(".box")[0].classList.toggle("yellow");


//이벤트
document.querySelector('.bar').addEventListener("click", function (){
    document.querySelector(".bar").innerHTML = "눌렸어";
    document.querySelector(".newBar").classList.toggle("show");
});


//탭 이벤트
document.querySelectorAll('.list')[0].addEventListener("click", function(e){
    tabBtn(e.target.dataset.id);
});

function tabBtn(a){
    document.querySelectorAll('.tab-button')[a].addEventListener("click", function() {
        for (let i =0; i < document.querySelectorAll(".tab-button").length; i++){
            document.querySelectorAll(".tab-button")[i].classList.remove("here");
            document.querySelectorAll(".tab-button")[i].classList.remove("show");
        }
        document.querySelectorAll(".tab-button")[a].classList.add("here");
        document.querySelectorAll(".tab-content")[a].classList.add("show");
    });
}



