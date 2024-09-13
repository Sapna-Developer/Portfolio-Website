// Tab Functionality
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function openTab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

// Side Menu Functionality
var Sidemenu = document.getElementById("sidemenu");

function openmenu() {
  Sidemenu.style.right = "0";
}

function closemenu() {
  Sidemenu.style.right = "-200px";
}

// Form Submission to Google Sheets
const scriptURL =
  "https://script.google.com/macros/s/AKfycbziexkSOo3ItX42gaSfqj9zRDeqN3altOsKZQLd7bGm9RFuqTsMMZCBSFxk1XX_gBhl4w/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message sent successfully";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});

// Text Animation Functionality
const textArray = [
  "Frontend Developer",
  "Software Developer",
  "Full Stack Developer",
  "Web Developer",
  "Angular Developer",
];

let index = 0;
let charIndex = 0;
const typingSpeed = 150; // Speed of typing
const eraseSpeed = 100; // Speed of erasing
const newTextDelay = 2000; // Delay between texts
const animatedText = document.getElementById("animated-text");

function typeText() {
  if (charIndex < textArray[index].length) {
    animatedText.textContent += textArray[index].charAt(charIndex);
    charIndex++;
    setTimeout(typeText, typingSpeed);
  } else {
    setTimeout(eraseText, newTextDelay);
  }
}

function eraseText() {
  if (charIndex > 0) {
    animatedText.textContent = textArray[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseText, eraseSpeed);
  } else {
    index = (index + 1) % textArray.length;
    setTimeout(typeText, typingSpeed);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(typeText, newTextDelay);
});
