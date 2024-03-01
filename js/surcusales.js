document.addEventListener("DOMContentLoaded", function () {
    const progressValue = document.getElementById('progressValue');
    let percent = 0;

    const intervalId = setInterval(() => {
        percent += 5;
        if (percent <= 80) {
            progressValue.textContent = `${percent}%`;
        } else {
            clearInterval(intervalId);
        }
    }, 500);
});