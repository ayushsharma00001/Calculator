let str = "";
let input = document.querySelector(".input1");
let buttons = document.querySelectorAll(".btn");
input.addEventListener("keypress",(event)=>{
    console.log(event);
    
    // console.log(str);
    if(event.key == "Enter"){
        str = eval(str);
        input.value = str;
    }
    else if(event.key == "C" || event.key == "c"){
        str = "";
        input.value = str;
    }
    else{
        str = str+event.key;

    }
    
});
buttons.forEach((btn)=>{
    btn.addEventListener("click" , (event)=>{
        if(event.target.innerHTML == "="){
            str = eval(str);
            input.value = str;
        }
        else if(event.target.innerHTML == "C" || event.target.innerHTML == "AC"){
            str = "";
            input.value = str;
        }
        else{
            str = str + event.target.innerHTML;
            input.value = str;
        }
    });
});

