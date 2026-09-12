var homeButton = document.getElementById("homeButton");

const Disappointment = Object.freeze ({
    UNSET: 'UNSET',
    DISAPPOINTED: 'DISAPPOINTED',
    CRAB: 'CRAB'
});

if (window.location.pathname === '/') {
    setHomePage();
}

if (window.location.pathname === '/choice.html' && localStorage.getItem('userDisappointment') === Disappointment.CRAB) {
    window.location = '/';
}

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
        window.location = '/choice.html';
    }
    else if (localStorage.getItem('userDisappointment') === Disappointment.CRAB) {
        window.location = 'https://www.youtube.com/watch?v=LDU_Txk06tM&t=58s';
    }
}

function returnHome() {
    window.location = '/';
    localStorage.setItem("userDisappointment", Disappointment.DISAPPOINTED);
}

function crabRave() {
    window.location = 'https://www.youtube.com/watch?v=LDU_Txk06tM&t=58s';
    localStorage.setItem("userDisappointment", Disappointment.CRAB);
}