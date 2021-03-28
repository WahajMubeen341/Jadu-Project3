const verify_emailInput = document.getElementById("verify_email");
const verify_passwordInput = document.getElementById("verify_password");
<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>


const checkUserBtn = document.getElementById("check_member");
const userStorage = localStorage.getItem("users");
const JSONToUser = JSON.parse(userStorage);
console.log(JSONToUser)

var isUser = false;
checkUserBtn.addEventListener("click", function () {
    console.log("here");
    console.log(verify_emailInput.value);
    console.log(verify_passwordInput.value);
    JSONToUser.filter((user) => {
      if (user.email === verify_emailInput.value) {
        if (user.password === verify_passwordInput.value) {
         //document.location.href="./landingPage.html";
         isUser=true;
         console.log("true")   
        }
      }

    });
    isUser ? swal("Hello") : alert("not a user");
  });
 