// UI
const year = document.getElementById('year');
const countdown = document.getElementById('countdown');
const loading = document.getElementById('loading');

const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const currentyear = new Date().getFullYear();

const newyeartime = new Date(`Janauary 01 ${currentyear + 1} 00:00:00`);

function updatecountdown(){
     const currenttime = new Date();
     
     const diff = newyeartime - currenttime;

     const d = Math.floor(diff/1000/60/60/24);
    
    const h = Math.floor(diff/1000/60/60) % 24;

    const m = Math.floor(diff/1000/60) % 60;

    const s = Math.floor(diff/1000) % 60;

    days.textContent = d;
    hours.textContent = h < 10 ? '0'+h : h;
    minutes.textContent = m < 10 ? '0'+m : m;
    seconds.textContent = s < 10 ? '0'+s : s;
};


setTimeout(()=>{
    loading.remove();
    countdown.style.display = "flex";
},1000);

setInterval(updatecountdown,1000);

year.textContent = currentyear + 1;