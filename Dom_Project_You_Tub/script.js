 const card= document.querySelector('#card')
 const containar=document.querySelector('.containar');
 const remov=document.querySelector('#remov');
 const add=document.querySelector('#add');
 const hf=document.querySelector('h5');
 const ho=document.querySelector('hh1');
 var condition=0;
 add.addEventListener("click",function(){
    if(condition==0){
    hf.innerHTML=" Add Friends"
    hf.style.color =" green"
    condition=1;
    }
    else{
        hf.innerHTML="Remove"
        hf.style.color="black"
         condition=0;
    }
 })
//  remov.addEventListener("click",function(){
//     hf.innerHTML="Remove Friends"
//     hf.style.color="black"
//     // hf.style.color=""
//  })
