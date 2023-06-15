function loginBtn (event) {
  event.preventDefault();

  let email = document.getElementById("InputEmail1").value
  let password = document.getElementById("InputPassword1").value
  let warning = document.getElementById("warning")
  let passwordError = document.getElementById("passwordError")

  email = email.toLowerCase()
  password = password.toLowerCase()

  warning.innerHTML = ""
  passwordError.innerHTML = ""

  if ( email === "" || password === "" ) {

    warning.innerHTML = "Please enter both username and password."

  } else if (password === "") {

    passwordError.innerHTML = "Please enter Password."

  } else {

    let validEmail = "awelebeautifulone@gmail.com";
    let validPassword = "password";

    if (email === validEmail && password === validPassword) {


      if (email === validEmail && password === validPassword) {

        let loginSuccessModal = document.getElementById("loginSuccessModal");
        loginSuccessModal.classList.add("show");
        loginSuccessModal.style.display = "block";
        loginSuccessModal.setAttribute("aria-hidden", "false");

        let modalCloseButton = document.querySelector(".close");
        modalCloseButton.addEventListener("click", function() {
          loginSuccessModal.classList.remove("show");
          loginSuccessModal.style.display = "none";
          loginSuccessModal.setAttribute("aria-hidden", "true");
        });

        let modalDismissButton = document.querySelector(".close2");
        modalDismissButton.addEventListener("click", function() {
          loginSuccessModal.classList.remove("show");
          loginSuccessModal.style.display = "none";
          loginSuccessModal.setAttribute("aria-hidden", "true");
        });
        
      } else {
        
        let loginFailureModal = document.getElementById('loginFailureModal')
        loginFailureModal.classList.add("show");
        loginFailureModal.style.display = "block";
        loginFailureModal.setAttribute("aria-hidden", "false");

        let modalCloseButton = document.querySelector(".close");
        modalCloseButton.addEventListener("click", function() {
          loginFailureModal.classList.remove("show");
          loginFailureModal.style.display = "none";
          loginFailureModal.setAttribute("aria-hidden", "true");
        })

        let modalDismissButton = document.querySelector(".close2")
        modalDismissButton.addEventListener("click", function() {
          loginFailureModal.classList.remove("show");
          loginFailureModal.style.display = "none";
          loginFailureModal.setAttribute("aria-hidden", "true");
        })
      }


      /*let loginSuccessModal = new bootstrap.Modal(document.getElementById("loginSuccessModal"));
      loginSuccessModal.show();

      setTimeout(function() {
        loginSuccessModal.hide();
      }, 5000);

    } else {

      let loginFailureModal = new bootstrap.Modal(document.getElementById("loginFailureModal"));
      loginFailureModal.show();

      setTimeout(function() {
        loginFailureModal.hide();
      }, 5000)*/

      //warning.innerHTML = "Invalid email or password.";
    }
  }

  document.getElementById("InputEmail1").value = "";
  document.getElementById("InputPassword1").value = ""

 
}

let login = document.getElementById("loginbtn")
login.addEventListener("click", loginBtn)


let showPasswordCheckbox = document.getElementById("Check");
let passwordInput = document.getElementById("InputPassword1");

showPasswordCheckbox.addEventListener("change",  function() {
  if (showPasswordCheckbox.checked) {
    passwordInput.setAttribute("type", "text");
  } else {
    passwordInput.setAttribute("type", "password");
  }
});

