if (localStorage.getItem("score")) {
  localStorage.removeItem("score");
}
if (localStorage.getItem("user") == undefined) {
  localStorage.setItem("user", "[]");
}
const button = document.getElementById("btn");
function register() {
  const accounts = JSON.parse(localStorage.getItem("user"));
  const username = document.getElementById("username");
  const password = document.getElementById("password");
  const repass = document.getElementById("repassword");
  if (username.value && password.value && repass.value) {
    let b = accounts.find(function (x) {
      return x.email === username.value;
    });
    if (b) {
      alert("email da ton tai");
    } else {
      if ((password.value = repass.value)) {
        accounts.push({
          email: username.value,
          pass: password.value,
          score: 0,
        });
      }
      localStorage.user = JSON.stringify(accounts);
      alert("đã đăng kí thành công");
      window.location.href = "login.html";
    }
  } else {
    alert("ban chua nhap ten dang nhap hoac mat khau");
  }
}
button.onclick = register;
