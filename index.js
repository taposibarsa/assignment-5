document.getElementById("signin").addEventListener("click", () => {
  const userBtn = document.getElementById("username-btn").value;
  const passBtn = document.getElementById("pass-btn").value;
  console.log("userBtn");

    if (userBtn === "admin" && passBtn === "admin123") {
    alert("login success");
    window.location.replace("home.html");
  } else {
    alert("login failed");
    return;
  }
})