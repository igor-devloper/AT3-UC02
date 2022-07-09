const form = document.getElementById('form')
const username = document.getElementById('username')
const useremail = document.getElementById('useremail')
const userpassword = document.getElementById('userpassword')
const checkpassword = document.getElementById('checkpassword')


form.addEventListener('submit', (e) => {
  e.preventDefault()

  checkInputs()
})

function checkInputs() {
  const usernameValue = username.value.trim()
  const useremailValue = useremail.value.trim()
  const userpasswordValue = userpassword.value.trim()
  const checkpasswordValue = checkpassword.value.trim()

  if(usernameValue === '') {
    errorValidation(username, 'Preencha este campo')
  } else{
    successValidation(username)
  }

  if(useremailValue === '') {
    errorValidation(useremail, 'Preencha o compo de email')
  } else{
    successValidation(useremail)
  }

  if(userpasswordValue === '') {
    errorValidation(userpassword, 'Preencha o compo de senha')
  } else if(userpasswordValue.length < 8) {
    errorValidation(userpassword, 'A senha deve ter mais de 8 caracteres')
  } else {
    successValidation(userpassword)
  }

  if(checkpasswordValue === '') {
    errorValidation(checkpassword, 'Confirme sua senha')
  } else if(checkpasswordValue != userpasswordValue) {
    errorValidation(checkpassword, 'As senhas não condizem')
  } else {
    successValidation(checkpassword)
  }
}

function errorValidation(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small')

  small.innerText = message
  formControl.className = 'form-control error'
}

function successValidation(input) {
  const formControl = input.parentElement;

  formControl.className = 'form-control success'
}


let count = 1 ;

document.getElementById("radio1").checked = true;

setInterval( function(){
  nextImage()
}, 5000)

function nextImage(){
  count++;
  if(count>4){
    count = 1
  }

  document.getElementById("radio"+count).checked = true;
}