const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");


const addUserBtn = document.getElementById("add_user");

//localStorage.clear();
const userStorage = localStorage.getItem("users");
const parsed = JSON.parse(userStorage);
let users = parsed || [];

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
addUserBtn.addEventListener("click",  function ()  {
  if(nameInput.value ==="" || emailInput.value ==="" || passwordInput.value===""){
    alert("Please fill the complete form!");
  }
  else{
  const user = new User(
    Date.now(), //id
    nameInput.value, //name
    emailInput.value, //email
    passwordInput.value //password
  );
  users.push(user);
  const usersJson = JSON.stringify(users);
  localStorage.setItem("users", usersJson);
  }
 
});


 