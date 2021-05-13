let toggleButton = document.querySelector(".header .navbar .toggle-icon");
let menu = document.querySelector(".header .toggle-icon + ul");
let listItems = document.querySelectorAll(".header .navbar ul li");
toggleButton.onclick = () => {
  menu.classList.toggle("active");
};

for (let i = 0; i < listItems.length; i++) {
  listItems[i].onclick = () => {
    if (menu.classList.contains("active")) {
      menu.classList.toggle("active");
    }
  };
}
