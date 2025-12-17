// GSAP Slide Animation
gsap.from(".sub-heading", {
    x: -100,
    opacity: 0,
    duration: 1
});
gsap.from(".main-heading", {
    x: -150,
    opacity: 0,
    duration: 1.2,
    delay: 0.3
});
gsap.from(".stat-box", {
    y: 50,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    stagger: 0.2
});
gsap.from(".form-box", {
    x: 200,
    opacity: 0,
    duration: 1,
    delay: 0.6
});

// Counter Animation
const counters = document.querySelectorAll(".num");

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;
        const speed = 50;

        if (count < target) {
            counter.innerText = count + Math.ceil(target / 200);
            setTimeout(updateCount, speed);
        } else {
            counter.innerText = target;
        }
    };

    updateCount();
});
