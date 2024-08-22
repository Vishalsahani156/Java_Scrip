const randam = parseInt(Math.random() * 100 + 1)
const submit = document.querySelector('subt');
const userInpute = document.querySelector('gusseFilde')
const gusses = document.querySelector('.gusses');
const remainig = document.querySelector('.lastRemainig')
const low = document.querySelector('.lowOrhi')
const startOver = document.querySelector('.result')

const p = document.createElement('p');
let prevaGess = 1;
let numberGess = 1;
let playgeam = 1;

// First is cheak the user play geam or not cheak the condition
if(playgeam){
  submit.addEventListener('click',function(e){
    e.preventDefault()
     const gusse= parseInt(userInpute.value)
    console.log(gusse);
     validationGusse(gusse)
    //  console.log(gusse);
     
  })
}

function validationGusse(gusse) {
  //
  if(isNaN(gusse)){
    aler('plese valid number ')
  }
  else if(gusse>100){
    alert('plese enter the valide nuber ')
  }
  else{
    prevaGess.push(gusse)
    if(numberGess===11){
      DisplayMessage(gusse)
    //  DisplayMessage{ 'geam over random number puss ${randomNumber}'}
     EndGeam()
    }else{
      DisplayGusse(gusse)
      cheakGusse(gusse)
    }
  }
}


function cheakGusse(gusse) {
  if(gusse==randamNumber ){
  //  displayMessage{'you gusse the right '}
   EndGeam()
  }
x
}

function DisplayGusse(gusses) {
//


}

function DisplayMessage(message) {
//

}
function NewGeam(){
  //
}
function EndGeam(){
  // 
}
