const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-3-line"
  );
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

const mixer = mixitup(".project__grid");

const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 900,
};

// header container
ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__content h4", {
  ...scrollRevealOption,
  delay: 400,
});

ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 900,
});

ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 1400,
});

ScrollReveal().reveal(".header__content .btn", {
  ...scrollRevealOption,
  delay: 1800,
});

// about container
ScrollReveal().reveal(".about__image img", {
  ...scrollRevealOption,
  origin: "left",
});

ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about__content p", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".about__content h4", {
  ...scrollRevealOption,
  delay: 1300,
});

ScrollReveal().reveal(".about__btns", {
  ...scrollRevealOption,
  delay: 1800,
});

// service container
ScrollReveal().reveal(".service__card", {
  duration: 1000,
  interval: 500,
});

// blog container
ScrollReveal().reveal(".blog__card", {
  ...scrollRevealOption,
  interval: 400,
});



// ###########################33 SECURITY ##########################3


//***************** SENDING MESSAGE TO EMAIL **************************

document.addEventListener('DOMContentLoaded', (event) => {
  // Ensure the DOM is fully loaded

  const fname = document.getElementById('fname');
  const email = document.getElementById('email');
  const nophone = document.getElementById('phoneInput');


  document.addEventListener('DOMContentLoaded', function () {

    var inputElement = document.getElementById('phone');
    if (inputElement) {
      var inputValue = inputElement.value;
      console.log(inputValue);
    } else {
      console.error('Element with ID "myInput" not found');
    }
  });


  const subject = document.getElementById('subject');
  const MessageSend = document.getElementById('MessageSend');
  const submit = document.getElementsByClassName('contact__form')[0];


  submit.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('clicked')
    function displayValues(fname, email, nophone, subject, MessageSend) {
      return `<h4>First Name: </h4>${fname.value}
      <br>
     <h4>Email address: </h4>${email.value}
     <br>
     <h4>Phone Number: </h4>${nophone.value}
     <br>
    <h4>Subject: </h4>${subject.value}
     <br>
     <h4>Message: </h4>${MessageSend.value}`;
    }

    Email.send({
      SecureToken: "92d79311-8448-4aeb-bf28-a9a2cd25699e",
      To: 'varnytech@gmail.com',
      From: "varnytech@gmail.com",
      Subject: "Contact form",
      Body: displayValues(fname, email, nophone, subject, MessageSend)
    }).then(
      message => alert('thank you! your details and message sent successfully')
    );


    let clickCount = 0;

    document.getElementById('myButton').addEventListener('click', function handleClick(event) {
      if (clickCount < 2) {
        // Disable the button after the first or second click
        event.target.disabled = true;
        clickCount++;
        console.log(`Button clicked ${clickCount} time(s) and now disabled`);
      }
    }, { once: false }); // Remove the 'once' option to keep the listener active
  });

});





// Replace any character that is not a letter, number, underscore, or hyphen

function sanitizeInput(input) {
  var sanitized = input.value.replace(/[^a-zA-Z0-9_-]/g, '');
  input.value = sanitized;
}

// making a call to mobile
function initiateCall() {
  // Replace '1234567890' with the number you want to call
  window.location.href = 'tel:+255 755 520 538';
}

document.getElementById('callButton').onclick = initiateCall;

// ************************** PHONE NUMBER ****************

document.getElementById('phoneInput').addEventListener('input', function (e) {
  // Remove any character that is not a digit or a plus sign
  var input = e.target.value.replace(/[^\d+]/g, '');

  // Check if the input starts with a plus sign
  var startsWithPlus = input.startsWith('+');

  if (!startsWithPlus) {
    input = '+' + input;
  }

  // Format the rest of the input
  var formattedInput = input.match(/(\+\d{0,3})(\d{0,3})(\d{0,3})(\d{0,3})/);
  e.target.value = formattedInput[1] + (formattedInput[2] ? '-' + formattedInput[2] : '') + (formattedInput[3] ? '-' + formattedInput[3] : '') + (formattedInput[4] ? '-' + formattedInput[4] : '');
});

// ************************* NAME SPACE ***************

document.getElementById('fname').addEventListener('input', function (e) {
  // Replace spaces with dashes and limit to the first three spaces
  e.target.value = e.target.value
    .replace(/\s+/g, '-')
    .split('-')
    .slice(0, 3)
    .join('-');
});