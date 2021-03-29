const verify_emailInput = document.getElementById("verify_email");
const verify_passwordInput = document.getElementById("verify_password");

const checkUserBtn = document.getElementById("check_member");
const userStorage = localStorage.getItem("users");
const JSONToUser = JSON.parse(userStorage);
console.log(JSONToUser);
//  let newList=[];

var isUser = false;
checkUserBtn.addEventListener("click", function (e) {
  //console.log("here");
  //console.log(verify_emailInput.value);
  //console.log(verify_passwordInput.value);

  e.preventDefault();
  JSONToUser.filter((user) => {
    if (
      user.email === verify_emailInput.value &&
      user.password === verify_passwordInput.value
    ) {
      //document.location.href="./landingPage.html";

      isUser = true;
      console.log("true");
    }
  });
  isUser
    ? window.location.replace("./landingPage.html")
    : //() => {
        alert("PLease Enter valid credentials");
        //document.getElementById("verify_email").value = "";
        //document.getElementById("verify_password").value = "";        
      //};
});
