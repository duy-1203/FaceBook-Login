// Dung thao tác DOM để xử lý sự kiện đăng nhập
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const errorMessage = document.getElementById("error-message");
const loginButton = document.getElementById("login-button");

loginButton.addEventListener("click", function () {
  const emailValue = emailInput.value;
  const passwordValue = passwordInput.value;

  // Kiểm tra nếu email hoặc mật khẩu rỗng
  if (emailValue === "" || passwordValue === "") {
    errorMessage.textContent = "Vui lòng nhập đầy đủ thông tin.";
    errorMessage.style.color = "red";
    return;
  } else {
    errorMessage.textContent = "Đăng nhập thành công!";
    errorMessage.style.color = "green";
  }
});
