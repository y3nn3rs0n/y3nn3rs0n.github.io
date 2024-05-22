/*Toogle icon bar*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

/*Scroll active link*/
let selections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    selections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    });

/* Navbar sticky */

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

/* remove toggle icon and navbar when click navbar link */

   menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};

/* Variables */

const form = document.querySelector('form');
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phone");
const subject = document.getElementById("subject");
const message = document.getElementById("message");


/*Function for send email */

function sendEmail() {
    /* const bodyMessage =
    `Full Name: ${fullName.value}<br>
     Email: ${email.value}<br>
     Phone: ${phone.value}<br>
     Message: ${message.value}
    `;

    Email.send({
        SecureToken : "11e52655-fa38-4719-bd98-0e61f6f48a51",
        To : 'yennerson.olivo@gmail.com',
        From : "yennerson.olivo@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
      message => {
        if (message == "OK") { */
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Your message has been sent successfully",
            showConfirmButton: false,
            timer: 2000
          });
     /*    }
      } 
    );*/
}

email.addEventListener("keyup", () => isValidEmail(email.value));
fullName.addEventListener("keyup", () => isValidName(fullName.value));
phoneNumber.addEventListener("keyup", () => isValidPhone(phoneNumber.value));
subject.addEventListener("keyup", () => isValidSubject(subject.value));
message.addEventListener("keyup", () => isValidMessage(message.value));

/* Function for check all inputs*/
function checkInputs() {
    const items = document.querySelectorAll(".item");

    // Remove event listener
    items.forEach(item => {
        item.removeEventListener("keyup", handleKeyUp);
    });

    // Add new event listener
    items.forEach(item => {
        item.addEventListener("keyup", handleKeyUp);
    });

    function handleKeyUp() {
        if (this.value.trim() !== "") {
            this.classList.add("error");
            this.parentElement.classList.add("error");
        } else {
            this.classList.remove("error");
            this.parentElement.classList.remove("error");
        }
    }

    let isFormValid = true;

    if (!isValidName(fullName.value)) {
        isFormValid = false;
    }

    if (!isValidEmail(email.value)) {
        isFormValid = false;
    }

    if (!isValidPhone(phoneNumber.value)) {
        isFormValid = false;
    }

    if (!isValidSubject(subject.value)) {
        isFormValid = false;
    }

    if (!isValidMessage(message.value)) {
        isFormValid = false;
    }

    return isFormValid;
}


// Function for check phone
function isValidPhone(phone) {
    const isPhoneValid = /^\d+$/.test(phone);
    const errorTxtPhone = document.querySelector(".text-error.phone");
    console.log(`phone ingresado: ${phone}, Resultado de validación: ${isPhoneValid}`);

    if (!isPhoneValid) {
        phoneNumber.classList.add("error");
        phoneNumber.parentElement.classList.add("error");
        errorTxtPhone.innerText = "Enter a valid phone number";
        return false;
    } else {
        phoneNumber.classList.remove("error");
        phoneNumber.parentElement.classList.remove("error");
        errorTxtPhone.innerText = "";
        return true;
    }

}


//Function for check email
function isValidEmail(emailAddress) {
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress);
    console.log(`Email ingresado: ${emailAddress}, Resultado de validación: ${isEmailValid}`);
    const errorTxtEmail = document.querySelector(".text-error.email");
    

    if (!isEmailValid) {
        email.classList.add("error");
        email.parentElement.classList.add("error");
        errorTxtEmail.innerText = "Enter a valid email address";
        return false;
    } else {
        email.classList.remove("error");
        email.parentElement.classList.remove("error");
        errorTxtEmail.innerText = "";
        return true;
    }
}


//Function for check name
function isValidName(name) {
    const isNameValid = name.trim().length >= 4;
    console.log(`Nombre ingresado: ${name}, Resultado de validación: ${isNameValid}`);

    const errorTxt = document.querySelector(".text-error.name");

    if (!isNameValid) {
        fullName.classList.add("error");
        fullName.parentElement.classList.add("error");
        errorTxt.innerText = "Minimum 4 characters required";
        return false;
    } else {
        fullName.classList.remove("error");
        fullName.parentElement.classList.remove("error");
        errorTxt.innerText = "";
        return true;
    }
}


//Function for check subject
function isValidSubject(inputSubject) {
    const isSubjectValid = inputSubject.trim().length >= 4;
    const errorTxt = document.querySelector(".text-error.subject");
    console.log(`subject ingresado: ${inputSubject}, Resultado de validación: ${isSubjectValid}`);

    if (!isSubjectValid) {
        subject.classList.add("error");
        subject.parentElement.classList.add("error");
        errorTxt.innerText = "Minimum 4 characters required";
        return false;
    } else {
        subject.classList.remove("error");
        subject.parentElement.classList.remove("error");
        errorTxt.innerText = "";
        return true;
    }
}


//Function for check message
function isValidMessage(inputMessage) {
    const isMessageValid = inputMessage.trim().length >= 10;
    const errorTxt = document.querySelector(".text-error.message");
    console.log(`message ingresado: ${inputMessage}, Resultado de validación: ${isMessageValid}`);

    if (!isMessageValid) {
        message.classList.add("error");
        message.parentElement.classList.add("error");
        errorTxt.innerText = "Minimum 10 characters required";
        return false;
    } else {
        message.classList.remove("error");
        message.parentElement.classList.remove("error");
        errorTxt.innerText = "";
        return true;
    }
}

document.addEventListener("DOMContentLoaded", function() {
});


// Function button submit
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const isValid = checkInputs();
    if (isValid)
    {
        sendEmail();

        form.reset();
        return false;

    } else {
        console.log("Faltan validaciones");
    }

});

