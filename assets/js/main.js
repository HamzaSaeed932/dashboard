// add hovered class to selected list item
let list = document.querySelectorAll(".navigation li");

function activeLink() {
  list.forEach((item) => {
    item.classList.remove("hovered");
  });
  this.classList.add("hovered");
}

list.forEach((item) => item.addEventListener("mouseover", activeLink));

// Menu Toggle
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toggle.onclick = function () {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
};


document.addEventListener('DOMContentLoaded', function() {
  // Get the table and span elements
  var complaintsTable = document.getElementById('complaints-table');
  var totalValueSpan = document.getElementById('total-value');

  calculateTotalValue();

  complaintsTable.addEventListener('input', calculateTotalValue);

  function calculateTotalValue() {

    var complaintRows = complaintsTable.getElementsByTagName('tbody')[0].getElementsByTagName('tr');
    totalValueSpan.textContent = complaintRows.length ;
  }
});


