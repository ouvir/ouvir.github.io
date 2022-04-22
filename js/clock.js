const clock = document.querySelector("#time");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText=`${hours}:${minutes}:${seconds}`;
}
getClock();
setInterval(getClock,1000);
// setInterval(sayHello,5000);
// 몇초마다 반복
// setTimeout(sayHello,5000);
// 기다렸다가 한번 실행