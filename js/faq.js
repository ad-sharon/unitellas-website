const faqHeaders = document.querySelectorAll(".faqs-container .faq-header");

faqHeaders.forEach((header, i) => {
  header.addEventListener("click", () => {
    header.nextElementSibling.classList.toggle("active");

    const open = header.querySelector(".open");
    const close = header.querySelector(".close");

    if (header.nextElementSibling.classList.contains("active")) {
      open.classList.remove("active");
      close.classList.add("active");
    } else {
      open.classList.add("active");
      close.classList.remove("active");
    }
  });
});

let popup = document.getElementById("popup");

function openPopup(){
    popup.classList.add("open-popup");
    document.getElementById("overlay").style.display = "block";
}

function closePopup(){
    popup.classList.remove("open-popup");
    document.getElementById("overlay").style.display = "none";
}
