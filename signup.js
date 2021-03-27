const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const verify_emailInput = document.getElementById("verify_email");
const verify_passwordInput = document.getElementById("verify_password");

const addUserBtn = document.getElementById("add_user");
const checkUserBtn = document.getElementById("check_member");

const userStorage = localStorage.getItem("users");
const JSONToUser = JSON.parse(userStorage);
let users = JSONToUser || [];

console.log(users);

class User {
  id;
  name;
  email;
  password;

  constructor(id, name, email, password) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
  }
}

addUserBtn.addEventListener("click", function () {
  const user = new User(
    Date.now(),
    nameInput.value,
    emailInput.value,
    passwordInput.value
  );
  users.push(user);
  const usersJson = JSON.stringify(users);
  localStorage.setItem("users", usersJson);
});

// checkUserBtn.addEventListener("click", function () {
//   user = users.filter((user) => {
//     if (user.email == verify_emailInput.value) {
//       if (user.password == verify_passwordInput.value) {
//         <a href="index.html"></a>;
//       }
//     }
//   });
// });
