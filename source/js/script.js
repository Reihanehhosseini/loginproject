let userName = document.querySelector(".username");
let password = document.querySelector(".password");

let warningUserName = document.querySelector(".warningusername");
let warningPassword = document.querySelector(".warningpassword");

userName.addEventListener("keypress", function () {
  if (userName.value.length < 12) {
    warningUserName.style.display = "inline";
    warningUserName.style.color = "red";
  }  if(userName.value.length = 0){
    warningUserName.style.display = "none"
  }else{
    userName.style.display = "inline";
    warningUserName.innerHTML = "its correct";
    warningUserName.style.color = "green"
  }});
///
if(Numbers === 2 ){
  return true
}else{
  return false
}

if(lolo == 10){
  return true
}