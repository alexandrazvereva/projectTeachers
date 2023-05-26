const endDate = new Date("June 14, 2023 12:00:00").getTime();
let timer = setInterval(function () {
    let now = new Date().getTime();
    let t = endDate - now;
    if (t >= 0) {

        let days = Math.floor(t / (1000 * 60 * 60 * 24));
        let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        let secs = Math.floor((t % (1000 * 60)) / 1000);

        document.getElementById("timer-days").innerHTML = days +
            "<span class='label'>days</span>";

        document.getElementById("timer-hours").innerHTML = ("0" + hours).slice(-2) +
            "<span class='label'>hours</span>";

        document.getElementById("timer-mins").innerHTML = ("0" + mins).slice(-2) +
            "<span class='label'>minutes</span>";

        document.getElementById("timer-secs").innerHTML = ("0" + secs).slice(-2) +
            "<span class='label'>seconds</span>";

    } else {
        document.getElementById("timer").innerHTML = "The countdown is over!";

    }

}, 1000);
