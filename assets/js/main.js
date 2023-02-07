// TODO ==================== NAV ====================
const menuIcon = document.querySelector(".menu-icon");
const sidebar = document.querySelector(".sidebar");
const subscribeList = document.querySelector(".subscribe-list");

menuIcon.onclick = function () {
  sidebar.classList.toggle("small-sidebar");
  // subscribeList.style.display = "none";
};
