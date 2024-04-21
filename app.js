document.addEventListener("DOMContentLoaded",()=>{

  let form = document.querySelector("form")
  let password = document.querySelector("#password")
  let confirmPassword = document.querySelector("#confirm-password")
  let error_password  = document.querySelector("#error-message-password")

  form.addEventListener("submit",(event)=>{
    let phoneNumber = document.querySelector("#phone")
    let error = document.querySelector("#error-message-phone")


    if(phoneNumber.value.length != 10){
       error.textContent = "Invalid Number"

       phoneNumber.setAttribute("style","border : 1px solid red")

       event.preventDefault() // Stop the form from submitting 
    }

    phoneNumber.addEventListener("keyup",()=>{
        error.textContent = ""
        phoneNumber.removeAttribute("style")
    })
   
         
  })

  confirmPassword.setAttribute("disabled",true)
  password.addEventListener("keyup",()=>{
     if(password.value.length > 0){
      confirmPassword.removeAttribute("disabled")
     }
     else{
      confirmPassword.setAttribute("disabled",true)
     }

     if(password.value.length < 8){
      error_password.textContent = "Password must contains at least 8 characters"
     }
     else{
      error_password.textContent = ""
     }
  })


  confirmPassword.addEventListener("keyup",()=>{
    let error_password_confirm = document.querySelector("#error-message-password-confirm")
    if(password.value != confirmPassword.value){
       error_password_confirm.textContent = "Password doesn't match"
       confirmPassword.setAttribute("style","border : 1px solid red")
    }
    else{
      error_password_confirm.textContent = ""
      confirmPassword.removeAttribute("style")
    }

})


})