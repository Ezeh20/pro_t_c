const xIcon=document.querySelector('.x_icon_two')
const form=document.getElementById('form')
const inputType=document.getElementById('password')
const firstName=document.getElementById('firstName')
const lastName=document.getElementById('lastName')
const email=document.getElementById('email')

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


form.addEventListener('submit', e=>{
    e.preventDefault()
    validateInput()
})


const validateInput=()=>{
    const firstNameValue=firstName.value.trim()
    const lastNameValue=lastName.value.trim()
    const emailValue=email.value.trim()
    const passwordValue=inputType.value.trim()



    if(firstNameValue===''){
        setErrorFor(firstName)
    }else{
        setSuccessFor(firstName)
    }

    if(lastNameValue===''){
        setErrorFor(lastName)
    }else{
        setSuccessFor(lastName)
    }
    if(emailValue === ''){
        setErrorFor(email)
    }else{
        setSuccessFor(email)
    }
   
    if(passwordValue === ''){
        setErrorFor(inputType)
    }else{
        setSuccessFor(inputType)
    }
}
const setErrorFor=(input)=>{
    const inputArea=input.parentElement;
    inputArea.className= 'svg_con error'
}

const setSuccessFor=(input)=>{
    const inputArea=input.parentElement;
    inputArea.className= 'svg_con success'
}