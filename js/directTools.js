const iconSpans = document.getElementsByClassName('tool-icons');
const yearsSpan= document.getElementById('years');
const monthSpan = document.getElementById('months');
const daysSpan = document.getElementById('days')
const minutesSpan = document.getElementById('minutes')
const hoursSpan = document.getElementById('hours');
const secondsSpan = document.getElementById('seconds');


for(let i = 0; i < iconSpans.length; i++){
    iconSpans[i].addEventListener('click', (event)=>{
        redirect(iconSpans[i].id);
    });
}

function downloadResume(){
    window.open('./Resume.pdf', '_blank');
}

function redirect(id){
    switch (id) {
        case 'javascript-icon':
            window.open("https://developer.mozilla.org/en-US/docs/Web/JavaScript", '_blank')
            break;
        case 'react-icon':
            window.open("https://react.dev/", '_blank')
            break;
        case 'java-icon':
            window.open("https://docs.oracle.com/en/java/", '_blank')
            break;
        case 'python-icon':
            window.open("https://docs.python.org/3/", '_blank')
            break;
        case 'firebase-icon':
            window.open("https://firebase.google.com/", '_blank')
            break;
        case 'mongo-icon':
            window.open("https://www.mongodb.com/", '_blank')
            break;

        default:
            break;
    }
}

function dateDifference(date1, date2) {
    let diff = Math.abs(date2 - date1);
    
    let years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
    diff -= years * 1000 * 60 * 60 * 24 * 365.25;
  
    let months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30.44));
    diff -= months * 1000 * 60 * 60 * 24 * 30.44;
  
    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    diff -= days * 1000 * 60 * 60 * 24;
  
    let hours = Math.floor(diff / (1000 * 60 * 60));
    diff -= hours * 1000 * 60 * 60;
  
    let minutes = Math.floor(diff / (1000 * 60));
    diff -= minutes * 1000 * 60;
  
    let seconds = Math.floor(diff / 1000);
    

    return {
        years,
        months,
        days,
        hours,
        minutes,
        seconds
    };
  }
  

const startedDate = new Date('2020-09-05T12:00:00');

setInterval(()=>{
    let date = new Date();
    let difference = dateDifference(startedDate, date);
    yearsSpan.innerText = difference.years;
    monthSpan.innerText = difference.months;
    daysSpan.innerText = difference.days;
    hoursSpan.innerText = difference.hours;
    minutesSpan.innerText = difference.minutes;
    secondsSpan.innerText= difference.seconds;
},1000)

