var homeButton = document.getElementById("homeButton");

const Disappointment = Object.freeze ({
    UNSET: 'UNSET',
    DISAPPOINTED: 'DISAPPOINTED',
    CRAB: 'CRAB'
});


const URL = (location.hostname === "localhost" || location.hostname === "127.0.0.1") ? "http://localhost:5500" : "https://penrose-programmer.github.io/Simple-Website"

if (window.location.href === `${URL}/`) {
    setHomePage();
}

if (window.location.pathname === '/choice.html' && localStorage.getItem('userDisappointment') === Disappointment.CRAB) {
    window.location = `${URL}/`;
}

document.addEventListener('DOMContentLoaded', () => {
    if (!localStorage.getItem("hasVisited")) {
        localStorage.setItem("userDisappointment", Disappointment.UNSET)
    }

    localStorage.setItem("hasVisited", "true")
});

function setHomePage() {
    if (localStorage.getItem('userDisappointment') === Disappointment.UNSET) {
        homeButton.textContent = "Wanna see somethin' cool? 😎"
    }
    else if (localStorage.getItem('userDisappointment') === Disappointment.DISAPPOINTED) {
        homeButton.textContent = "You were disappointed... 😔"
    }
    else if (localStorage.getItem('userDisappointment') === Disappointment.CRAB) {
        homeButton.textContent = "CRAB RAVE! 🦀"
    }
    console.log(localStorage.getItem('userDisappointment'))
}

function playGame() {
    if (localStorage.getItem('userDisappointment') === Disappointment.UNSET || localStorage.getItem('userDisappointment') === Disappointment.DISAPPOINTED) {
        window.location = `${URL}/choice.html`;
    }
    else if (localStorage.getItem('userDisappointment') === Disappointment.CRAB) {
        window.location = 'https://www.youtube.com/watch?v=LDU_Txk06tM&t=58s';
    }
}

function returnHome() {
    window.location = `${URL}/`;
    localStorage.setItem("userDisappointment", Disappointment.DISAPPOINTED);
}

function crabRave() {
    window.location = 'https://www.youtube.com/watch?v=LDU_Txk06tM&t=58s';
    localStorage.setItem("userDisappointment", Disappointment.CRAB);
}