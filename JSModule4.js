window.onload = () => {
  const figures = document.querySelectorAll("figure");

  figures.forEach(figure => {
    // Thêm tabindex để dùng bàn phím
    figure.setAttribute("tabindex", "0");

    // Hover bằng chuột
    figure.addEventListener("mouseover", () => {
      figure.style.backgroundColor = "#e0f7fa";
    });

    figure.addEventListener("mouseleave", () => {
      figure.style.backgroundColor = "white";
    });

    // Tương tác bằng bàn phím (Enter hoặc Space)
    figure.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        alert(`You selected: ${figure.querySelector("figcaption").textContent}`);
      }
    });
  });
};
