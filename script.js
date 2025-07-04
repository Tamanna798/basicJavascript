let modeBtn=document.querySelector("#mode");
let curmode="light";
let body =document.querySelector("body")

modeBtn.addEventListener("click",()=>{
    if(curmode==="light"){
        curmode="dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }else{
        curmode="light"
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log( curmode);
});
