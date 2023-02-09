const h1 = document.getElementById("adviceParagraph");
const p = document.getElementById("noAdvice");
function display(){
    randomNUmber = Math.floor(Math.random()*201);
    fetch('https://api.adviceslip.com/advice/'+randomNUmber)
    .then(response => response.json())
    .then(data => {
    
    h1.innerHTML = data.slip.advice;
    p.innerHTML = "ADVICE # " + data.slip.id;
    });
}

