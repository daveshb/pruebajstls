import { navigate } from "../index.js";

export function showLogin() {
  const form = document.getElementById("loginForm");
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // const remember = e.target.remember.checked;

    // const user = await loginUser(email, password);
    // if (!user) {
    //   alert("Credenciales incorrectas");
    //   return;
    // }
    if (email == "correo@correo.com" && password == "123") {
      console.log("entro");
      navigate("/dashboard");
    }

    // saveSession(user, remember);

    // navigate(user.role === "admin" ? "/dashboard" : "/public");
    // navigate("/dashboard");
  });
}
