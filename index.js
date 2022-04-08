const img = document.querySelector(".hamburgerMenu");
const menu = document.querySelector(".header-right");
const open = false;
img.onclick = () => {
    console.log('clicked')
    if (menu.style.display === "flex") {
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
    }
}