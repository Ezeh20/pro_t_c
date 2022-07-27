const xIcon=document.querySelector('.x_icon_two')
const inputType=document.getElementById('password')

let password=true

xIcon.addEventListener('click', ()=>{
    if(password){
        inputType.setAttribute('type', 'text')
        xIcon.removeAttribute('src')
        xIcon.setAttribute('src', 'img/icons/eye.svg')
    }else{
        inputType.setAttribute('type', 'password')
        xIcon.removeAttribute('src')
        xIcon.setAttribute('src', 'img/icons/eye-slash.svg')
    }
    password=!password
})