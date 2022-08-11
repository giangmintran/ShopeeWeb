const modal = document.querySelector(".modal");
const btnSwitch = document.querySelector(".auth-form__switch-btn");
const btnShowRegister = document.querySelector("#btnRegister");
const btnShowLogin = document.querySelector("#btnLogin");
const register = document.querySelector(".auth-form__register");
const login = document.querySelector(".auth-form__login")

const btnBack = document.querySelectorAll(".btn--back");



btnShowRegister.addEventListener("click",()=>{
    modal.classList.remove("form-hidden");
    login.classList.add("form-hidden");
    btnBack[0].addEventListener("click",()=>{
        modal.classList.add("form-hidden");
        login.classList.add("form-hidden");
    })
})


console.log(btnBack);

btnShowLogin.addEventListener("click",()=>{
    modal.classList.remove("form-hidden");
    register.classList.add("form-hidden");
    btnBack[1].addEventListener("click",()=>{
        modal.classList.add("form-hidden");
        register.classList.add("form-hidden");
    })
})







