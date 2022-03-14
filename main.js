const days = document.querySelector('#days');
const minutes = document.querySelector('#minutes');
const hours = document.querySelector('#hours');
const seconds = document.querySelector('#seconds');
const countdown = document.querySelector('#countdown');
const year = document.querySelector('#year');
const loading = document.querySelector('#loading');

const currentYear = new Date().getFullYear();
const newYearTime = new Date(`01-01-${currentYear + 1} 00:00:00`);

year.innerText = currentYear + 1;



//This functiion creates all time variables and pushes them to the DOM to update time counter
const updateCountdown = () =>{
    const currentTime = new Date();
    const diff = newYearTime - currentTime;

    const dayz = Math.floor(diff / 1000 / 60 / 60 / 24);
    const hourz = Math.floor(diff / 1000 / 60 / 60) % 24;
    const minutez = Math.floor(diff / 1000 / 60) % 60;
    const secondz = Math.floor(diff / 1000) % 60;

    days.innerHTML = dayz
    hours.innerHTML = hourz < 10 ? `0${hourz}` : hourz;
    minutes.innerHTML = minutez < 10 ? `0${minutez}` : minutez;
    seconds.innerHTML = secondz < 10 ? `0${secondz}` : secondz;
}

//show loader briefly then remove after 1 second
//the display of the timer then shows by setting display to flex
setTimeout(() => {
    loading.remove();
    countdown.style.display = 'flex';
}, 1000)

//function above runs every second
setInterval(updateCountdown, 1000);