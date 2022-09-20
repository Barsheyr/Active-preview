const showIcon = document.getElementById("show-icon");
const closeIcon = document.getElementById("close-icon");
const socialPage = document.getElementById("social-page");
const nameSec = document.getElementById("name-sec");



showIcon.addEventListener("click", () => {
    socialPage.classList.toggle("hidden");
});

closeIcon.addEventListener("click", () => {
    socialPage.classList.add("hidden");
});