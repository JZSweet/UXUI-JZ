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

function openWindow() {
    window.open('./case/case1.html');
};

function openWindow2() {
    window.open('./case/case2.html');
};

function openWindow3() {
    window.open('./case/case3.html');
};

function closeWindow() {
    window.close();
}