const iconBoxes = document.querySelectorAll(".icon-box, .saiba-mais-button"); // agora inclui <a>
const iconBoxContainers = document.querySelectorAll(".icon-container");
const closeBtns = document.querySelectorAll(".close-btn");
const maximizeBtns = document.querySelectorAll(".maximize-btn");
const body = document.querySelector("body");

iconBoxes.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        e.preventDefault(); // impede o comportamento padrão dos <a href="#...">
        let modalId = btn.getAttribute("data-modal");
        let modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = "block";
            body.classList.add("prevent-background-scroll");
        }
    });
});

closeBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        let modal = btn.closest(".popup");
        modal.style.display = "none";
        body.classList.remove("prevent-background-scroll");
        iconBoxContainers.forEach((container) => {
            container.style.display = "flex";
        });
    });
});

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("popup")) {
        e.target.style.display = "none";
        body.classList.remove("prevent-background-scroll");
    }
});

maximizeBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        let modal = btn.closest(".popup");
        let container = modal.querySelector(".popup-container");
        let popupBody = modal.querySelector(".popup-body");

        if (modal.classList.contains("maximized")) {
            container.style.width = "min(900px, 90%)";
            container.style.top = "45%";
            popupBody.style.height = "70vh";
        } else {
            container.style.width = "100%";
            container.style.top = "50%";
            popupBody.style.height = "90vh";
        }

        modal.classList.toggle("maximized");
        popupBody.classList.toggle("prevent-scroll");
    });
});