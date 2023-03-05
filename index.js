// navigation active functionality Start
let navbar_links = document.querySelectorAll(".collapse .nav-link");
// console.log(navbar_links)
navbar_links.forEach((ele) => {
  ele.addEventListener("click", () => {
    // alert(ele.innerHTML);
    navbar_links.forEach((nav) => {
      nav.classList.remove("show");
    });
    ele.classList.add("show");
  });
});
// navigation active functionality End
