window.addEventListener("scroll",function(){
    const header=document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY>0);
});

var swiper = new Swiper(".client-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");
const navItems=document.querySelectorAll(".nav-items a");

menuBtn.addEventListener("click",() => {
  navigation.classList.add("active");
});

closeBtn.addEventListener("click",() => {
  navigation.classList.remove("active");
});

navItems.forEach((navItem) => {
  navItem.addEventListener("click",() => {
    navigation.classList.remove("active");
  });
});