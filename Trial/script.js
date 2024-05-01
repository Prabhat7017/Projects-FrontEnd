const heading= document.querySelector("h3");
const para= document.querySelector("p");
const button= document.querySelector("button");
let data;
// async function getJoke(){
//     const response= await fetch ("https://official-joke-api.appspot.com/random_joke");
//      data= await response.json();

//      heading.innerText=data.setup;
//      para.innerText= data.punchline;

//      console.log(data);
// }

// button.addEventListener("click", getJoke);


// function jokeGet(){
//     fetch("https://official-joke-api.appspot.com/random_joke").then(res=>{
//     res.json().then((data)=>{
//         heading.innerText=data.setup;
//         para.innerText= data.punchline;
//     });
// })
// }

// button.addEventListener("click", jokeGet);


// function greet(name){
//     console.log(`Hey there ${name} ! Have a Nice day`);
// }

// greet("Prabhat");

// function createCounter(str){
//     let obj={};

//     for(ch of str){
//         obj[ch]= 0;
//     }
//     for(ch of str){
//         obj[ch]++;
//     }
//     return obj;
// }


// let arr=["Love", "Dove", "Prabhat", "Ansh", "dhshsf"];


// function strings(arr){
//     let newArr=[];
//     for(ele of arr){
//         if(ele.length>5)
//            newArr.push(ele);
//     }

//     return newArr;
// }

const obj={
    name: "Prabhat",
    Branch: "CSE",
    StdNo: "2210016D",
    Language: "C++"
};

function returnArray(obj){
    let arr=[];
    for(key in obj){
        arr.push(key);
    }

    return arr;
}