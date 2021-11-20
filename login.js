if(localStorage.getItem('score')){
  localStorage.removeItem('score')
}
if (localStorage.getItem("user") == undefined) {
  localStorage.setItem("user", "[]");
}
const button = document.getElementById("btn");
function lmao() {
  const accounts = JSON.parse(localStorage.getItem("user"));
  const username = document.getElementById("username");
  const password = document.getElementById("password");
  let emailFind = accounts.find(function (x) {
    return x.email == username.value;
  });
  console.log(emailFind);
  if (emailFind) {
    if (emailFind.pass == password.value) {
      alert("Bạn đã đăng nhập thành công");
      localStorage.setItem("currentUser", JSON.stringify(emailFind));
      window.location.href = "index.html";
    } else {
      alert("Sai mật khẩu");
    }
  } else {
    alert("Sai tên đăng nhập");
  }
}
button.onclick = lmao;
