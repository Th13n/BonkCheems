const cheem = document.getElementById("cheem");
const click = document.getElementById("bonk");
const baseballbat = document.getElementById("baseball_bat");
const userNameDIV = document.getElementById("userName");
const scoreDIV = document.getElementById("score");
const user = JSON.parse(localStorage.getItem("currentUser"));
const checkbox = document.getElementById("check");
const message = document.getElementById("message");
function bonkUser() {
  baseballbat.style.transform = "rotate(90deg)";
  setTimeout(function () {
    baseballbat.style.transform = "rotate(0deg)";
  }, 100);
  const Userlist = JSON.parse(localStorage.getItem("user"));
  const userName = user.email;
  const userScore = user.score;
  let userInfo = Userlist.find(function (x) {
    return x.email == userName;
  });
  userInfo.score++;
  scoreDIV.innerHTML = `${userInfo.score}`;
  for (x = 0; x < Userlist.lenght; x++) {
    if (x.email === userName) {
      Userlist.splice(x, 1, userInfo);
      break;
    }
  }
  localStorage.removeItem("user");
  localStorage.setItem("user", JSON.stringify(Userlist));
}
function bonkNoUser() {
  baseballbat.style.transform = "rotate(90deg)";
  setTimeout(function () {
    baseballbat.style.transform = "rotate(0deg)";
  }, 100);
  score = Number(localStorage.getItem("score"));
  score++;
  localStorage.removeItem("score");
  localStorage.setItem("score", String(score));
  scoreDIV.innerHTML = score;
}
if (user == undefined) {
  if (localStorage.getItem("score")) {
    localStorage.removeItem("score");
  }
  localStorage.setItem("score", "0");
  checkbox.innerHTML = ` <a href="login.html">
    <button class="bg_color-error">
        <span class="font_size-20">Đăng nhập</span>
    </button>
</a>
<a href="register.html">
    <button class="bg_color-secondary">
        <span class="font_size-20">Đăng kí</span>
    </button>
</a>`;
  userNameDIV.innerHTML = `User`;
  scoreDIV.innerHTML = `0`;
  message.innerHTML = `<p>Hãy đăng nhập để lưu số điểm của bạn</p>
  <i class="times circle icon" id='close'></i>`;
  message.style.visibility = "visible";
  const btn = document.getElementById("close");
  function hide() {
    message.style.visibility = "hidden";
  }
  btn.onclick = hide;
  click.onclick = bonkNoUser;
} else {
  checkbox.innerHTML = `<a href="login.html">
    <button class="bg_color-error" id='logout'>
        <span class="font_size-20">Đăng xuất</span>
    </button>
</a>`;
  message.style.visibility = "hidden";
  const logoutbtn = document.getElementById("logout");
  function log_out() {
    localStorage.removeItem("currentUser");
  }
  logoutbtn.onclick = log_out;
  const list = JSON.parse(localStorage.getItem("user"));
  const info = list.find(function (x) {
    return x.email == user.email;
  });
  userNameDIV.innerHTML = `${info.email}`;
  scoreDIV.innerHTML = `${info.score}`;
  message.innerHTML = ``;
  click.onclick = bonkUser;
}
