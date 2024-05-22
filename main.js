/*TOGGLE ICON NAVBAR*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

/*scroll active link*/
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

    /* navbar sticky */

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
   /* remove toggle icon and navbar when click navbar link */

   menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};

const form = document.querySelector('form');
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

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

function checkInputs() {
    const items = document.querySelectorAll(".item");

    for (const item of items) {
        if (item.value == ""){
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }

        if (items[1].value != "") {
            checkEmail();
        }

        items[1].addEventListener("keyup", () => {
            checkEmail();
        })

        item.addEventListener("keyup", () => {
            if (item.value != "") {
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            }
            else{
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }
        })
    }
}

function checkEmail(){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const errorTxtEmail = document.querySelector(".text-error.email")

    if (!email.value.match(emailRegex)) {
        email.classList.add("error");
        email.parentElement.classList.add("error");

        if (email.value != "") {
            errorTxtEmail.innerText = "Enter a valid email address"
        } else{
            errorTxtEmail.innerText = "Email address can not be empty"
        }
    }
    else{
       email.classList.remove("error");
    email.parentElement.classList.remove("error");
    }
}

form.addEventListener("submit", (e) => {
e.preventDefault();
checkInputs();

if (!fullName.classList.contains("error")
    && !email.classList.contains("error")
    && !phone.classList.contains("error")
    && !subject.classList.contains("error")
    && !message.classList.contains("error")) {
    sendEmail();

    form.reset();
    return false;
}

});