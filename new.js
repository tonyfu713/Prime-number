const title1 = document.getElementById("title1");
const title = document.getElementById("title");
const title4 = document.getElementById("title4");
const title3 = document.getElementById("title3");
const buttom = document.querySelector("#btn");
const input = document.querySelector("#input");


// let amount = 0;
let ans = 50;
let min = 1;
let max = 100;
buttom.addEventListener("click",function(){

    const num = input.value;
    input.value = null;

    // if(num<min ||num>max){
    //     title.innerHTML = "XX";
    //     title4.innerHTML = "XX";
        
    // }

    if(num<ans&&num>min){
        min = num;
        title1.innerText = min;
    }if(num>ans&&num<max){
        max = num
        title3.innerText = max;
    }if(num === ans){
        title.innerHTML = "答對了!";
        title4.innerHTML = "恭喜"
    }

}
);

