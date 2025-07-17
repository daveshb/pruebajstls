import { showLogin } from "./js/login";


// Verificamos si hay sesión
// const session = getSession();

// Si hay sesión activa, mostrar el sidebar
// if (session) {
//   renderSidebar();
// } else {
//   clearSidebar();
// }

// import { renderSidebar, clearSidebar } from "./components/sidebar.js";
// import { getSession } from "./services/auth.js";

const routes = {
  "/": "./pages/login.html",
  "/dashboard": "/pages/events.html",
  // "dashboard/events/create": "/pages/add-event.html",
  // "dashboard/events/edit": "/pages/edit-event.html",

  "/login": "./pages/login.html",
  // "/register": "/pages/register.html",
};

export async function navigate(pathname, addToHistory = true) {
  console.log(pathname)
  const route = routes[pathname] || routes["/login"];
  console.log(route)
  const html = await fetch(route).then(res => res.text());
  document.getElementById("app").innerHTML = html;
  history.pushState({}, "", pathname);

  // if (addToHistory) {
  //   history.pushState({}, "", pathname);
  // }
 
  // const session = getSession();
  // if (pathname === "/login" || pathname === "/register") {
  //   clearSidebar();
  // } else if (session) {
  //   renderSidebar();
  // }

  // Aqui estamos manejando las vistas
  if (pathname === "/login" || pathname === "/") showLogin();
  // else if (pathname === "/register") showRegister();
  // else if (pathname === "/dashboard") showDashboard();
  // else if (pathname === "/add-user") showAddUser();
  // else if (pathname === "/users") showUsers();
  // else if (pathname === "/public") showPublic();
  // else if (pathname === "/edit-user") showEditUser();
  // else if (pathname === "/add-event") showAddEvent();
  // else if (pathname === "/events") showEvents();
  // else if (pathname === "/edit-event") showEditEvent();
  // else if (pathname === "/my-events") showMyEvents();
}


document.body.addEventListener("click", (e) => {
  const link = e.target.closest("[data-link]");
  if (link) {
    e.preventDefault();
    const path = link.getAttribute("href");
    navigate(path);
  }
});

window.addEventListener("DOMContentLoaded", () => {
  navigate(location.pathname);
});

window.addEventListener("popstate", () => {
  console.log("se hizo clic");
  console.log(location);
  navigate(location.pathname);
});
