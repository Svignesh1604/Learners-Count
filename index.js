// Counter Animation
const counters = document.querySelectorAll('.stat-box h3');
const speed = 200;

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        const increment = target / speed;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCount, 10);
        } else {
            counter.innerText = target;
        }
    };

    updateCount();
});

// Progress Circle Animation
const progressCircles = document.querySelectorAll('.progress-circle');

progressCircles.forEach(circle => {
    const progress = +circle.getAttribute('data-progress');
    let currentProgress = 0;
    const speed = 20; // The higher the slower

    const updateProgress = () => {
        if (currentProgress < progress) {
            currentProgress++;
            circle.style.background = `conic-gradient(#28a745 ${currentProgress * 3.6}deg, #f1f1f1 ${currentProgress * 3.6}deg)`;
            circle.innerHTML = currentProgress + '%';
            setTimeout(updateProgress, speed);
        } else {
            circle.innerHTML = progress + '%';
        }
    };

    updateProgress();
});
