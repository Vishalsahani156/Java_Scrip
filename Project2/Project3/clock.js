const clock=document.getElementById('clock')
setInterval(function(){
    let date=new date();
    clock.innerHTML=date.toLocaleTimeString();

},1000)