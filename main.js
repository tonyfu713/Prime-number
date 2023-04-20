// let sum = 0;
// for(let i = 0 ; i <= 1000 ; i++){
//     if(i % 2 == 0){
//         sum += i

//     }

// }
// console.log(sum);

// function aa(){
//     console.log("我是誰~")
// };

let arr = [20,40,60,80,100,]

arr.forEach(
    function(i){
        console.log(i)
    }
);
const filterArr = arr.filter(function(i){
    return i % 20 == 0
});
console.log("filterArr :");
console.log(filterArr);

const mapArr = arr.map(function(i){
    return i+1
});
console.log("mapArr :");
console.log(mapArr);


let array = [];
let array2 = []
let mix = 0
for(let i = 0 ; i <= 1000 ; i++){
    array.push(i)
    mix =+ i 
};

const filter = array.filter(function(j){
    return j % 2 == 0
    
});
const map = array.map(function(k){
    if(k % 2 != 0){
        return null;
    }
    array2.push(k)
    return array2
    
});
console.log("filter :");
console.log(filter);
console.log("map :");
console.log(array2);
console.log("mix :");
console.log(mix);


