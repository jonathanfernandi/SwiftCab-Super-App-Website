{
    const header = document.querySelector(".header")
    let lastScrollY = window.scrollY;

    window.addEventListener("scroll", () => {
        if(lastScrollY < window.scrollY) {
            header.classList.add("header--hidden")
        } else {
            header.classList.remove("header--hidden")
        }

        lastScrollY = window.scrollY
    })
}

const mainMenu = document.querySelector('.nav-ul')
const closeMenu = document.querySelector('.close-menu')
const openMenu = document.querySelector('.burger-btn')

openMenu.addEventListener('click', show)
closeMenu.addEventListener('click', close)

function show() {
    mainMenu.style.display = 'flex'
    mainMenu.style.top = '0'
}

function close() {
    mainMenu.style.top = '-100%'
}

function loginValidation(e) {
    e.preventDefault();

    window.location.href="../html/home.html"
}

function registerValidation(e) {
    e.preventDefault();

    var fullName = document.getElementById("full-name")
    var email = document.getElementById("email")
    var countryPhoneCode = document.getElementById("country-phone-code")
    var gender = document.getElementById("gender")
    var dob = document.getElementById("dob")
    var varDob = new Date(dob.value)
    var today = new Date()

    if(fullName.value.length < 2) {
        alert("Keep it 2 to 30 characters, please")
    } else if(!email.value) {
        alert("Add an email to complete your profile.")
    } else if(!email.value.includes("@") || !email.value.includes(".")) {
        alert("Uhm, wrong format. Here's a clue: name@email.com")
    } else if(!countryPhoneCode.value) {
        alert("Select a country phone code.")
    } else if(!gender.checked == true) {
        alert("Select a gender.")
    } else if(!dob.value) {
        alert("Input your date of birth to complete your profile.")
    } else if(((today.getFullYear() - varDob.getFullYear()) < 18) || (((today.getFullYear() - varDob.getFullYear()) === 18) && ((today.getMonth() - varDob.getMonth()) <= 0) && ((today.getDate() - varDob.getDate()) < 0))) {
        alert("You must be at least 18 years old to register as a driver.")
    } else if(varDob.getTime() > today.getTime()) {
        alert("Date of birth must not be greater than today.")
    } else {
        window.location.href="../html/home.html"
    }
}