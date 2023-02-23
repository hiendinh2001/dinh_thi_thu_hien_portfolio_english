// Menu
const menu = document.querySelector(".navbar__links");
const menuButton = document.querySelector(".navbar__icons");
const overlay = document.querySelector("#overlay");

menuButton.addEventListener("click", () => {
  menu.classList.toggle("navbar__open");
  menuButton.classList.toggle("open");
  overlay.classList.toggle("show");
});

overlay.addEventListener("click", () => {
  menu.classList.toggle("navbar__open");
  menuButton.classList.toggle("open");
  overlay.classList.toggle("show");
});

const myCvBtn = document.querySelector(".myCv-btn");
const fileLink = "./CV_Thi_Thu Hien Dinh_en.pdf";

const initTimer = () => {
    if(myCvBtn.classList.contains("disable-timer")) {
        return location.href = fileLink;
    }
    let timer = myCvBtn.dataset.timer;
    myCvBtn.classList.add("timer");
    myCvBtn.innerHTML = `My CV will open in <b>${timer}</b> seconds`;
    const initCounter = setInterval(() => {
        if(timer > 0) {
            timer--;
            return myCvBtn.innerHTML = `My CV will open in <b>${timer}</b> seconds`;
        }
        clearInterval(initCounter);
        location.href = fileLink;
        myCvBtn.innerText = "My CV is opening...";
        setTimeout(() => {
            myCvBtn.classList.replace("timer", "disable-timer");
            myCvBtn.innerHTML = `<span class="text">My CV</span>`;
        }, 3000);
    }, 1000);
}

myCvBtn.addEventListener("click", initTimer);