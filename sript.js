function colorgenerator(){
    let colour = "#";
  let choices = "0123456789ABCDEF";

  for (let i = 0; i < 6; i++) {
    colour +=  choices[ Math.floor(Math.random() * 16)]  ;

  }

  return colour;
}



let start = document.querySelector('.start')
let stop = document.querySelector('.stop')

start.addEventListener('click', startchanging);

stop.addEventListener('click', stopchanging);

let intervalId;
function startchanging(){
    if(!intervalId){
        intervalId = setInterval(changecolor, 1000);
    }
    

    function changecolor(){
      document.body.style.backgroundColor = colorgenerator();
    }
    
}


function stopchanging(){
    clearInterval(intervalId);
    intervalId = null;
}