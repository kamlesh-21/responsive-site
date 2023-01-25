const button = document.getElementById("btn")
const button1 = document.getElementById("btn1") 
const modalCloseBtn = document.getElementById('modal-close-btn')
const loginForm = document.getElementById("login-form")
const modalInner = document.getElementById("modal-inner")


button.addEventListener("click", function(){
   modal.style.display = 'inline'
})
button1.addEventListener("click", function(){
    modal.style.display = 'inline'
 })

loginForm.addEventListener('submit', function(e){
    e.preventDefault()
    
    const loginFormData = new FormData(loginForm)
    const fullName = loginFormData.get('fullName')
    
    modalInner.innerHTML = `
        <h2>Thanks <span class="modal-display-name">${fullName}</span>! </h2>
        <p>Your request has been recorded. Our team will get in touch with you shortly to arrange a demo.</p>
        `
  
}) 

modalCloseBtn.addEventListener('click', function(){
    modal.style.display = 'none'
}) 

