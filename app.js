setInterval(setclock , 1000);

const hourhand = document.querySelector("[data-hand-hour]")
const minhand = document.querySelector("[data-hand-minute]")
const sechand = document.querySelector("[data-hand-second]")

function setclock(){
    const currentdate = new Date(); 
    const secRe = currentdate.getSeconds() / 60
    const minRe = (secRe + currentdate.getMinutes()) / 60
    const hoRe = ( minRe + currentdate.getHours() ) / 12

    set(sechand , secRe)
    set(minhand , minRe)
    set(hourhand , hoRe)
}
function set(element , roto){
element.style.setProperty('--rotate' , roto * 360)
}


var time = new Date()
console.log(time)