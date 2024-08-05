const from=document.querySelector('from')
from.addEventListener('submit',function(e){
  e.preventDefault();
    const hight= parseInt(document.querySelector('#hight').value);
    const weight=parseInt(document.querySelector('#weight').value);
    const result=document.querySelector('#result');
    if(hight==""||hight<0|| isNaN(hight)){
        result.innerHTML="plese give valide inpute";
    }
    else if(weight===''||weight<0||isNaN(weight)){
        result.innerHTML="plese give the valide inpute ";
    }
    else{
     conts =bmi=(weight/((hight*hight)/10000)).toFixed(2);
  result.innerHTML='<sppn>${"bmi"}</sppn>';
  

    }
});