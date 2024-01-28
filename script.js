const toggleBtn = document.querySelector(".toggle_btn")
const dropdownMenu = document.querySelector(".dropdown_menu")
const toggleBtnIcon = document.querySelector(".toggle_btn i")

toggleBtn.addEventListener("click", function() {
    dropdownMenu.classList.toggle('open')
    const isOpen = dropdownMenu.classList.contains('open')

    
    toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'

    dropdownMenu.addEventListener("click", function() {
        dropdownMenu.classList.remove('open')
        toggleBtnIcon.classList = 'fa-solid fa-bars'
    })
})

/*--popup--*/
const loginBtn = document.querySelector('.action_btn')
const loginBtn1 = document.querySelector('.dropdown_menu .action_btn')
let loginPopup = document.querySelector(".loginForm")
let closeButton = document.querySelector(".close_btn")


loginBtn.addEventListener("click", function() {
    loginPopup.classList.add("activeForm")
})

loginBtn1.addEventListener("click", function() {
    loginPopup.classList.add("activeForm")
})

closeButton.addEventListener("click", function() {
    loginPopup.classList.remove("activeForm")
})


newAccountEl1 = document.querySelector(".newAccount1 ")
newAccountEl2 = document.querySelector(".newAccount2 ")

newAccountEl1.addEventListener("click", function() {
    loginPopup.classList.add('active')
    
})
newAccountEl2.addEventListener("click", function() {
    loginPopup.classList.remove('active')
})

closeButton.addEventListener("click", function() {
    loginPopup.classList.remove('active')
})

/*--slideshow--*/
var index = 0
show()
function show() {
    var i 
    var images = document.getElementsByClassName("image")
    for(i=0; i<images.length; i++) {
        images[i].style.display = "none"
    }
    
    index += 1
    if (index > images.length){
        index = 1
    }
    images[index - 1].style.display = "block"
    setTimeout(show, 4000)
}


let btn = document.querySelector('.pageThreeActionBtn')

btn.addEventListener("click", function() {
    loginPopup.classList.add('activeForm')
})

extraImage = document.querySelector('.downIcon')
extraImage.addEventListener("click", function(){
    document.querySelector('.pageFour .imgcontainer').setAttribute("style", "overflow-y: scroll;")
})

extraImage.addEventListener("click", function(){
    extraImage.style.display = "none"
})

document.getElementById("facebook").onclick = function () {
    window.open('https://www.facebook.com/', '_blank')
}

document.getElementById("instagram").onclick = function () {
    window.open('https://www.instagram.com/', '_blank')
}

document.getElementById("linkedin").onclick = function () {
    window.open('https://in.linkedin.com/', '_blank')
}

document.getElementById("github").onclick = function () {
    window.open('https://github.com/', '_blank')
}

document.getElementById("twitter").onclick = function () {
    window.open('https://twitter.com/i/flow/login?redirect_after_login=%2F%3Flang%3Den-in', '_blank')
}
