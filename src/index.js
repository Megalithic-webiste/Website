import "./index.css";

const menu = document.getElementById("menu");
const header = document.getElementById("header");
const sidebar_left = document.getElementById("sidebar-left");
const sidebar_right = document.getElementById("sidebar-right");
const body = document.getElementById("body");
const close_menu = document.getElementById("close-menu");

const mediaQuery = window.matchMedia("(min-width: 1024px)");

menu.addEventListener("click", function () {
  header.classList.add("hidden");
  body.classList.add("hidden");
  body.classList.remove("flex");
  sidebar_left.classList.remove("hidden");
  sidebar_left.classList.add("flex");
  sidebar_right.classList.remove("hidden");
  sidebar_right.classList.add("flex");
  close_menu.classList.remove("hidden");
  close_menu.classList.add("flex");
});

close_menu.addEventListener("click", function () {
  header.classList.remove("hidden");
  body.classList.remove("hidden");
  body.classList.add("flex");
  sidebar_left.classList.add("hidden");
  sidebar_left.classList.remove("flex");
  sidebar_right.classList.add("hidden");
  sidebar_right.classList.remove("flex");
  close_menu.classList.add("hidden");
  close_menu.classList.remove("flex");
});

mediaQuery.addListener(handleDeviceChange);

function handleDeviceChange(e) {
  if (e.matches) {
    if (close_menu.classList.contains("flex")) {
      header.classList.remove("hidden");
      body.classList.remove("hidden");
      body.classList.add("flex");
      sidebar_left.classList.add("hidden");
      sidebar_left.classList.remove("flex");
      sidebar_right.classList.add("hidden");
      sidebar_right.classList.remove("flex");
      close_menu.classList.add("hidden");
      close_menu.classList.remove("flex");
    }
  }
}

// Run it initially
handleDeviceChange(mediaQuery);
