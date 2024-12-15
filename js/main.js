//아이디가 circle인 요소를 찾아서 저장
const circle = document.querySelector("#circle");
//태그명이 article인 요소를 찾아서 저장
const article = circle.querySelectorAll("article");

//클릭하면 멈추고 다시 클릭하면 진행
circle.addEventListener("click",e=>{
	if (circle.style.animationPlayState === "paused") {
        circle.style.animationPlayState = "running";
    }
	else {
        circle.style.animationPlayState = "paused";
	}
});
	circle.classList.toggle("on"); 





