// スクロールしたらボタンを表示/非表示
document.addEventListener("scroll", () => {
  const topBtn = document.querySelector(".miki_topback a");
  if (window.scrollY > 200) {
    // 200px スクロールで表示
    topBtn.classList.add("active");
  } else {
    topBtn.classList.remove("active");
  }
});

// ボタンをクリックしたらスムーズにトップへ戻る
document.querySelector(".miki_topback a").addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
