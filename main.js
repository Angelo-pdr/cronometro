const clock = document.querySelector(".clock")
let time;
let seconds = 0;

function createHours(seconds){
    hours = new Date(seconds * 1000)
    return hours.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'utc'
    })
}

const startClock = () => {
    return time = setInterval(function(){
        seconds++
        clock.innerHTML = createHours(seconds)
    },1000)
}

document.addEventListener('click', function(e){
    const element = e.target

    if (element.classList.contains('start')){
        clearInterval(time)
        startClock()
    }

    if (element.classList.contains('stop')){
        clearInterval(time)
    }

    if (element.classList.contains('restart')){
        seconds = 0
        clearInterval(time)
        clock.innerHTML = "00:00:00"
    }
})