// Khi trang đã load
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".acction");

  links.forEach((link) => {
    link.addEventListener("click", function () {
      // Bỏ active ở các thẻ khác nếu có
      links.forEach((l) => l.classList.remove("active"));

      // Thêm active cho thẻ vừa click
      this.classList.add("active");
    });
  });
});
