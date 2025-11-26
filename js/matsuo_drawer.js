
function drawerButton() {
    const dButton = document.querySelector(".drawerButton");
    const dMenu = document.querySelector(".drawerMenu");
    dButton.classList.toggle("active");
    dMenu.classList.toggle("active");

}

// メニューリンクをクリックしたら閉じる処理
document.querySelectorAll(".drawerMenu a").forEach((link) => {
    link.addEventListener("click", () => {
        document.querySelector(".drawerButton").classList.remove("active");
        document.querySelector(".drawerMenu").classList.remove("active");
    });
});
