let str = "";
let input = document.querySelector(".input1");
let buttons = document.querySelectorAll(".btn");

buttons.forEach((btn)=>{
    btn.addEventListener("click" , (event)=>{
        if(event.target.innerHTML == "="){
            str = eval(str);
            input.innerText = str;
        }
        else if(event.target.innerHTML == "C" || event.target.innerHTML == "AC"){
            str = "";
            input.innerText = 0;
        }
        else{
            str = str + event.target.innerHTML;
            input.innerText = str;
        }
    });
});

