const $ = document.getElementById.bind(document);

const hours = $("hours");
const minutes = $("minutes");
const seconds = $("seconds");

setInterval(() => {
  const date = new Date();

  const hr = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();

  const deg = {
    hr: (hr / 12) * 360 + (min / 60) * 30 + 90,
    min: (min / 60) * 360 + (sec / 60) * 6 + 90,
    sec: (sec / 60) * 360 + 90,
  };

  hours.style.transform = `rotate(${deg.hr}deg)`;
  minutes.style.transform = `rotate(${deg.min}deg)`;
  seconds.style.transform = `rotate(${deg.sec}deg)`;
}, 1000);
