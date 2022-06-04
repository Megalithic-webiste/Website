import "./index.css";

const menu = document.getElementById("menu");
const header = document.getElementById("header");
const sidebar_left = document.getElementById("sidebar-left");
const sidebar_right = document.getElementById("sidebar-right");
const body = document.getElementById("body");
const close_menu = document.getElementById("close-menu");
const search_bar = document.getElementById("search-bar");
const header_bar = document.getElementById("header-bar");
const search_button = document.getElementById("search-button");
const close_search = document.getElementById("close-search");
const down_arrow_menu = document.getElementsByClassName("down-arrow-menu");
const up_arrow_menu = document.getElementsByClassName("up-arrow-menu");
const menu_content = document.getElementsByClassName("menu-content");

console.log(up_arrow_menu);

for (let i = 0; i < menu_content.length; i++) {
  down_arrow_menu[i].addEventListener("click", function () {
    for (let j = 0; j < menu_content.length; j++) {
      if (up_arrow_menu[j].classList.contains("flex") === true) {
        up_arrow_menu[j].classList.remove("flex");
        up_arrow_menu[j].classList.add("hidden");
        down_arrow_menu[j].classList.remove("hidden");
        down_arrow_menu[j].classList.add("flex");
        menu_content[j].classList.remove("flex");
        menu_content[j].classList.add("hidden");
      }
      up_arrow_menu[i].classList.add("flex");
      up_arrow_menu[i].classList.remove("hidden");
      down_arrow_menu[i].classList.add("hidden");
      down_arrow_menu[i].classList.remove("flex");
      menu_content[i].classList.add("flex");
      menu_content[i].classList.remove("hidden");
    }
  });
  up_arrow_menu[i].addEventListener("click", function () {
    up_arrow_menu[i].classList.remove("flex");
    up_arrow_menu[i].classList.add("hidden");
    down_arrow_menu[i].classList.remove("hidden");
    down_arrow_menu[i].classList.add("flex");
    menu_content[i].classList.remove("flex");
    menu_content[i].classList.add("hidden");
  });
}

search_button.addEventListener("click", function () {
  search_bar.classList.remove("hidden");
  search_bar.classList.add("flex");
  header_bar.classList.add("hidden");
  header_bar.classList.remove("flex");
});

close_search.addEventListener("click", function () {
  search_bar.classList.add("hidden");
  search_bar.classList.remove("flex");
  header_bar.classList.remove("hidden");
  header_bar.classList.add("flex");
});

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
