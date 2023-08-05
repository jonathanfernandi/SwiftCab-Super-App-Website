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