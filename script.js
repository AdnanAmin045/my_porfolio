const colorModeButton = document.querySelector('.color-mode');
colorModeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});


document.querySelector('.color-mode').addEventListener('click', function () {
    const icon = this.querySelector('i');
    if (icon.classList.contains('ri-moon-line')) {
        icon.className = 'ri-sun-line';
    } else {
        icon.className = 'ri-moon-line';
    }
})



function animateSkills() {
    let circleProgress = document.querySelector('.circle'),
        progressValue = document.querySelector('.percent');
    
    let startValue = 0, endValue = 90, speed = 50;
    
    let progress = setInterval(() => {
        startValue++;
        progressValue.textContent = `${startValue}%`;
        circleProgress.style.background = `conic-gradient(#3b63ff ${startValue * 3.6}deg, white 0deg)`;
        if (startValue == endValue) {
            clearInterval(progress);
        }
    }, speed);

    let circleProgress2 = document.querySelector('.circle2'),
        progressValue2 = document.querySelector('.percent2');
    let startValue2 = 0, endValue2 = 99, speed2 = 50;
    let progress2 = setInterval(() => {
        startValue2++;
        progressValue2.textContent = `${startValue2}%`;
        circleProgress2.style.background = `conic-gradient(#3b63ff ${startValue2 * 3.6}deg, white 0deg)`;
        if (startValue2 == endValue2) {
            clearInterval(progress2);
        }
    }, speed2);

    let circleProgress3 = document.querySelector('.circle3'),
        progressValue3 = document.querySelector('.percent3');
    let startValue3 = 0, endValue3 = 70, speed3 = 50;
    let progress3 = setInterval(() => {
        startValue3++;
        progressValue3.textContent = `${startValue3}%`;
        circleProgress3.style.background = `conic-gradient(#3b63ff ${startValue3 * 3.6}deg, white 0deg)`;
        if (startValue3 == endValue3) {
            clearInterval(progress3);
        }
    }, speed3);
}

document.addEventListener('DOMContentLoaded', () => {
    const skillsSection = document.querySelector('.skills');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkills();
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(skillsSection);
});





// Menu Option for responsive
const menuBtn = document.querySelector('.menu_btn');
const firstPage = document.getElementById('first-page');
menuBtn.addEventListener('click', function () {
    firstPage.classList.toggle('active-class');
});

document.addEventListener('DOMContentLoaded', () => {
    const menu_bar = document.querySelector('.menu-bar');
    const anchors = menu_bar.querySelectorAll('a');
    anchors.forEach(anchor => {
        anchor.addEventListener('click', () => {
            firstPage.classList.remove('active-class');
        });
    });
});


// Form Submission



function clearBoxes() {
    document.getElementById('Subject').value = "";
    document.getElementById('name').value = "";
    document.getElementById('Email').value = "";
    document.getElementById('Message').value = "";
}

function checkEmail() {
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let emailTxt = document.querySelector('.error-text.email');
    let emailInput = document.getElementById('Email');
    let email = emailInput.value;

    if (!email.match(validRegex)) {
        emailInput.parentElement.classList.add('error');
        if (email !== "") {
            emailTxt.innerText = "Enter a valid email";
        } else {
            emailTxt.innerText = "Email can't be blank";
        }
        return false;
    } else {
        emailInput.parentElement.classList.remove('error');
        emailTxt.innerText = ""; // Clear any previous error messages
        return true;
    }
}
function emailCorrection() {
    const validRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let emailInput = document.getElementById('Email');
    let email = emailInput.value;

    if (email.match(validRegex)) {
        return true;
    } else {
        return false;
    }
}

function checkValidation() {
    const items = document.querySelectorAll('.items');
    let valid = true;

    for (const item of items) {
        if (item.value === "") {
            item.parentElement.classList.add('error');
            valid = false;
        } else {
            item.parentElement.classList.remove('error');
        }

        if (item.id === 'Email' && !checkEmail()) {
            valid = false;
        }

        item.addEventListener('keyup', () => {
            if (item.value === "") {
                item.parentElement.classList.add('error');
            } else {
                item.parentElement.classList.remove('error');
            }

            if (item.id === 'Email') {
                checkEmail();
            }
        });
    }

    return valid;
}

function checkEmptyBoxes() {
    let subject = document.getElementById('Subject').value;
    let name = document.getElementById('name').value;
    let email = document.getElementById('Email').value;
    let message = document.getElementById('Message').value;

    return subject === "" || name === "" || email === "" || message === "";
}

function sendEmail() {
    let subject = document.getElementById('Subject').value;
    let username = document.getElementById('name').value;
    let email = document.getElementById('Email').value;
    let message = document.getElementById('Message').value;
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "adnanamin.available@gmail.com",
        Password: "E84E563A3E39CA0CBF2D2DA61231F1522AED",
        To: 'adnanamin.available@gmail.com',
        From: "adnanamin.available@gmail.com",
        Subject: subject,
        Body: "Name: " + username + "<br>Email: " + email + "<br>Description: " + message
    }).then(
        message => {
            if (message === "OK") {
                Swal.fire({
                    title: "Success!",
                    text: "Message sent successfully!",
                    icon: "success"
                });
                clearBoxes();
            } else {
                Swal.fire({
                    title: "Error!",
                    text: "Failed to send message. Please try again later.",
                    icon: "error"
                });
            }
        }
    ).catch(error => {
        console.error("Error sending email:", error);
        Swal.fire({
            title: "Error!",
            text: "Failed to send message. Please try again later.",
            icon: "error"
        });
    });
}

function clearBoxes() {
    document.getElementById('Subject').value = "";
    document.getElementById('name').value = "";
    document.getElementById('Email').value = "";
    document.getElementById('Message').value = "";
}

let form_status = document.querySelector('form');
form_status.addEventListener('submit', (e) => {
    e.preventDefault();
    if (checkValidation() && !checkEmptyBoxes() && emailCorrection()) {
        sendEmail();
    }
});




// Contact Form Validation

