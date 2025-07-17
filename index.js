import {
  showLogin,
  showRegister,
  showDashboard,
  showAddUser,
  showUsers,
  showPublic,
  showEditUser,
  showAddEvent,
  showEvents,
  showEditEvent,
  showMyEvents
} from "./views-controller.js";

import { renderSidebar, clearSidebar } from "./components/sidebar.js";
import { getSession } from "./services/auth.js";


//Rutas en las cual se va a navegar
const routes = {
  "/": "/src/pages/login.html",
  "/dashboard": "/src/pages/events.html",
  "dashboard/events/create": "/src/pages/add-event.html",
  "dashboard/events/edit": "/src/pages/edit-event.html",

  "/login": "/src/pages/login.html",
  "/register": "/src/pages/register.html",

};

//Funcion para hacer posible la navegacion
export async function navigate(pathname, addToHistory = true) {
  const route = routes[pathname] || routes["/login"];
  console.log(route)
  const html = await fetch(route).then(res => res.text());
  document.getElementById("app").innerHTML = html;

  if (addToHistory) {
    history.pushState({}, "", pathname);
  }

  // Mostrar u ocultar el sidebar
  const session = getSession();
  if (pathname === "/login" || pathname === "/register") {
    clearSidebar();
  } else if (session) {
    renderSidebar();
  }

  // Aqui estamos manejando las vistas
  if (pathname === "/login" || pathname === "/") showLogin();
  else if (pathname === "/register") showRegister();
  else if (pathname === "/dashboard") showDashboard();
  else if (pathname === "/add-user") showAddUser();
  else if (pathname === "/users") showUsers();
  else if (pathname === "/public") showPublic();
  else if (pathname === "/edit-user") showEditUser();
  else if (pathname === "/add-event") showAddEvent();
  else if (pathname === "/events") showEvents();
  else if (pathname === "/edit-event") showEditEvent();
  else if (pathname === "/my-events") showMyEvents();
}


document.body.addEventListener("click", (e) => {
  const link = e.target.closest("[data-link]");
  if (link) {
    e.preventDefault();
    const path = link.getAttribute("href");
    navigate(path);
  }
});

// Funcion hecha para ir hacia adelante y hacia atras
window.addEventListener("popstate", () => {
  navigate(location.pathname, false);
});
