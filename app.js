const hourHand = document.querySelector('.hour')
const minuteHand = document.querySelector('.minute')
const secondHand = document.querySelector('.second')
const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')
const toggle = document.querySelector('.toggle')
const times = document.querySelector('.time')

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];


toggle.addEventListener('click', function (e) {
    const html = document.querySelector('html');
    html.classList.toggle('dark');
    if (html.classList.contains('dark')) {
        e.target.innerText = 'Light Mode'
    } else {
        e.target.innerText = 'Dark Mode'
    }
});

function setTime() {
    const time = new Date();
    const month = time.getMonth();
    const day = time.getDay();
    const hours = time.getHours();
    const clockHours = hours % 12;
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    hourHand.style.transform = `translate(-50%, -100%) rotate(${scale(clockHours, 0, 12, 0, 360)}deg)`;
    minuteHand.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 60, 0, 360)}deg)`;
    secondHand.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 60, 0, 360)}deg)`;
}

function clock() {
    const time = new Date();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    console.log(minutes.toString.length)
    const seconds = time.getSeconds();
    if (minutes.toString.length > 0) {
        times.innerHTML = hours + ":" + minutes + "." + seconds
    }
    else {
        times.innerHTML =  hours + ":" + "0" + minutes + "." + seconds
    }
}

// below is a useful utility function called the scale function...allows us to map a range of numbers to another range of numbers...
// In this case, it will be mapped with 0-12 and 0 - 360 as the ranges, to set the moving degrees of a clock...

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
};

// setTime();
setInterval(setTime, 300)
setInterval(clock, 300)