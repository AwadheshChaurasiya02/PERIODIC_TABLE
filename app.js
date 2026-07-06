
let mainDiv=document.querySelector(".main-div");

for(let i=1; i<=50; i++){
    let div=document.createElement("div");
    div.classList.add("div");
    div.innerText=`element ${i}`;
    div.setAttribute("data-atomic",i);
    mainDiv.appendChild(div);
}


mainDiv.addEventListener("click",(event)=>{
    if(event.target.classList.contains("div")){
        let atomic=event.target.getAttribute("data-atomic");
        alert(`atomic number : ${atomic} \nElement name : ${event.target.innerText}`);
    }
});