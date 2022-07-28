const xIcon=document.querySelector('.x_icon_two')
const form=document.getElementById('form')
const inputType=document.getElementById('password')
const firstName=document.getElementById('firstName')
const lastName=document.getElementById('lastName')
const email=document.getElementById('email')

let password=true

//onclick, check if the input type is [password] if it is, switch the input type [text] 
xIcon.addEventListener('click', ()=>{
    if(password){
        inputType.setAttribute('type', 'text')
        //remove the original attribute then set a new attribute with a diffrent src path [your alternate icon]
        xIcon.removeAttribute('src')
        xIcon.setAttribute('src', 'img/icons/eye.svg')
    }else{
        //reset
        inputType.setAttribute('type', 'password')
        xIcon.removeAttribute('src')
        xIcon.setAttribute('src', 'img/icons/eye-slash.svg')
    }
    password=!password
})

form.addEventListener('submit', e=>{
    e.preventDefault()
    // call the validate function on click
    validateInput()
})


const validateInput=()=>{
    //get the input values then remove white spaces
    const firstNameValue=firstName.value.trim()
    const lastNameValue=lastName.value.trim()
    const emailValue=email.value.trim()
    const passwordValue=inputType.value.trim()

    //check if the input is  empty.If empty, throw the error
    if(firstNameValue===''){
        setErrorFor(firstName)
    }else{
        setSuccessFor(firstName)
    }
    //
    if(lastNameValue===''){
        setErrorFor(lastName)
    }else{
        setSuccessFor(lastName)
    }
    //regX will be applied later
    if(emailValue === ''){
        setErrorFor(email)
    }else{
        setSuccessFor(email)
    }
   //regX will be applied later
    if(passwordValue === ''){
        setErrorFor(inputType)
    }else{
        setSuccessFor(inputType)
    }
}
const setErrorFor=(input)=>{
    //get the parent div of the input
    const inputArea=input.parentElement;
    inputArea.className= 'svg_con error'
}

const setSuccessFor=(input)=>{
    //get the parent div of the input
    const inputArea=input.parentElement;
    inputArea.className= 'svg_con success'
}