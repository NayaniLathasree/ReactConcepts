localStorage.setItem("email", "abc@gmail.com");
document.write(localStorage.getItem('email'))

let a;
function login() {
  const val = localStorage.getItem("a");
  sessionStorage.setItem('sessionId', 123)
  console.log("a before click", a);
  if (val) {
    a = Number(val);
  } else {
    a = 10;
   localStorage.setItem('a', a);
  }
}
function incrementA() {
  a += 10;
  console.log("a after click", a);
  localStorage.setItem("a", a);
}
function logout() {
    localStorage.clear()
    sessionStorage.clear()
}

sessionStorage.getItem('sessionId')

