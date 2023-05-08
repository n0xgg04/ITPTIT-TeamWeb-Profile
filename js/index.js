//smooth scroll kkk
const navLinks = document.querySelectorAll('ul.nav-container_menu--ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();

        const href = link.getAttribute('href');
        const offsetTop = document.querySelector(href).offsetTop;

        scroll({
            top: offsetTop,
            behavior: 'smooth'
        });
    });
});


function checkFadeIn() {
    let elements = document.querySelectorAll('.with-fall-in-animation');
    elements.forEach(element => {
        if (isElementInViewport(element)) {
            element.classList.add('fall-in-box');
            console.log(element)
        }
    });
}

//fall in
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom - 120 <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

window.addEventListener('scroll', checkFadeIn); //!Fall in animation

//!Navbar logic
var navbar = document.querySelector(".navbar-top");
window.addEventListener("scroll", function () {
    //!If is mobile= document.querySelector(
    navbar.classList.toggle("scrolled", window.scrollY > 0);
});

//!Function
const scrollNext = () => {
    const offsetTop = document.querySelector("#information-aboutme").offsetTop;
    scroll({
        top: 700,
        behavior: 'smooth'
    });
}

document.querySelector(".main-page_scrollButton").addEventListener("click", scrollNext);

// document.querySelector(".e-page-1").addEventListner("click", () => {
//     document.querySelector(".e-page-2").classList.add("hidden-element");
// })

let experienceViewList = document.querySelectorAll(".education-container-row_left ul li");
let pageList = ["e-page-1", "e-page-2", "e-page-3", "e-page-4"]
const openAndHideOther = (page) => {
    pageList.forEach(page => {
        document.querySelector("#" + page).classList.add("hidden-element");
    })
    try {
        document.querySelector("#" + page).classList.remove("hidden-element");
    } catch (err) {
        console.log(err);
    }
    document.querySelector("#" + page).classList.add("fall-in-animation")
}

experienceViewList.forEach((element, index) => {
    element.addEventListener("click", () => {
        experienceViewList.forEach(element => {
            element.classList.remove("is_actived");
        })
        element.classList.add("is_actived")
        openAndHideOther(pageList[index]);
        console.log(index);
    })
})

//navi
let navButtonExpand = document.querySelector(".nav-expand-button")
navButtonExpand.addEventListener("click", () => {
    let elementNav = document.querySelector(".navigation-expended");
    if (elementNav.style.display == "none") {
        elementNav.style.display = "block";
        navbar.classList.add("scrolled");
    } else {
        elementNav.style.display = "none"
        navbar.classList.removed("scrolled");
    }
})