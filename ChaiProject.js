//  console.log("Vishal ");
const buttons = document.querySelectorAll('.button');
const body = document.querySelector(body);
buttons.forEach(function (button) {
  console.log(button);
  buttons.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target)
    if (e.target == 'grey') {
      body.style.backgroudColor = e.target.id;
    }
     if (e.target == 'white') {
      body.style.backgroudColor = e.target.id;
    }
     if (e.target == 'yellow') {
      body.style.backgroudColor = e.id;
    }
    if(e.target=='blu') {
      body.style.backgroudColor = e.id;
    }
  })
});
