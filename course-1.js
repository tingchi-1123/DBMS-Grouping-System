function toggleDropdown() {
  var dropdown = document.querySelector(".dropdown-content");
  dropdown.classList.toggle("show");
}

document.addEventListener("DOMContentLoaded", function () {
  var dropdownItems = document.querySelectorAll(".dropdown-item");
  dropdownItems.forEach((item) => {
    item.addEventListener("click", function () {
      var userIdDisplay = document.querySelector(".user-id");
      userIdDisplay.innerText = this.getAttribute("data-info");
      document.querySelector(".dropdown-content").classList.remove("show");
    });
  });
});
