function responsiveTopnav() {
    var x = document.getElementById("siteTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
};

let slideIndex = 0;
const slides = document.getElementsByClassName('slide');
const indicators = document.querySelector('.indicators');

document.getElementById('prevBtn').addEventListener('click', () => {
    slideIndex--;
    updateSlides();
});

document.getElementById('nextBtn').addEventListener('click', () => {
    slideIndex++;
    updateSlides();
});

// Create indicators
for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dot.addEventListener('click', () => {
        slideIndex = i;
        updateSlides();
    });
    indicators.appendChild(dot);
};

indicators.children[0].classList.add('active');

function updateSlides() {
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    } else if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
        indicators.children[i].classList.remove('active');
    }
    slides[slideIndex].style.display = 'block';
    indicators.children[slideIndex].classList.add('active');
};

const sleep = async (milliseconds) => {
    await new Promise(resolve => {
        return setTimeout(resolve, milliseconds)
    });
};

let playSlideLoop = true;

const slideLoop = async () => {
    while (true) {
        await sleep(5000);
        if (playSlideLoop) {
            slideIndex++;
            updateSlides();
        }
    };
}

function pauseSlides() {
    playSlideLoop = false;
    var x = document.getElementById("pauseBtn");
    x.className += " paused";
    var x = document.getElementById("playBtn");
    x.className += " paused";
}

function playSlides() {
    playSlideLoop = true;
    var x = document.getElementById("pauseBtn");
    x.className = "pause_button";
    var x = document.getElementById("playBtn");
    x.className = "play_button";
}

slideLoop();