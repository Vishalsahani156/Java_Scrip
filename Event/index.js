const randamcolor = function () {
    const hex = "0123456789ABCDEF";
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};
let stor;
const datasetint = function () {
    if(stor==null){
    stor = setInterval(changeColorBg, 1000);
    }
    function changeColorBg() {
        // console.log("hello 1")
        document.querySelector('#start');
        document.body.style.backgroundColor = randamcolor();
    }

};
document.getElementById('start').addEventListener('click', function () {
    datasetint();
})
document.querySelector('#stop1').addEventListener('click', function () {
    // console.log("Hello  vishal sahani");
    clearInterval(stor);
    stor=null;
    //  console.log(stor)
})





