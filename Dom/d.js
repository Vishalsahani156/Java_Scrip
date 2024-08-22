const x=document.querySelector("#blub");
const y=document.querySelector("button");
var flag=0;
y.addEventListener("click",function(){
    if(flag==0){
    x.style.backgroundColor="green"
    x.style.Color="orange";
    flag=1;
    }
    else{
        x.style.backgroundColor="transparent";
        flag=0;
    }
})  
var h=document.querySelectorAll('h1')
h.innerHTML="HELLO";
// h.forEach(element => {
//     console.log(element);
    
// });
// select the element of the box and the id 
const boxstor=document.getElementsByClassName('div')
console.log(boxstor);




