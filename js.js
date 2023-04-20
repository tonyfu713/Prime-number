const input = document.querySelector("#input");
const buttom = document.querySelector("#btn");
const ans = document.querySelector("#ans");

buttom.addEventListener("click",function(){
let num = input.value;
// console.log(123)


let arr = []
for(let i = 2 ;i <= num ; i++){
    // console.log(num);
    for(let j = 2 ; j < i ; j++){
        if(i % j ===0 && i !== j){
            break;
        }else if (j === i-1 || j === 1 ){
            arr.push(i);

            
        }
    }

    ans.innerHTML = arr
}



});