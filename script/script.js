// generate random table data
const tableBody = document.getElementById("employee-table");

for (let i = 1; i <= 400; i++) {
  const row = document.createElement("tr");

  const idCell = document.createElement("td");
  idCell.textContent = i;
  row.appendChild(idCell);

  const nameCell = document.createElement("td");
  nameCell.textContent = "Emp " + i;
  row.appendChild(nameCell);

  const salaryCell = document.createElement("td");
  salaryCell.textContent = Math.floor(Math.random() * 50000) + 30000;
  row.appendChild(salaryCell);

  tableBody.appendChild(row);
}
// search element
function f1() {
  let tr = document.querySelectorAll("tr");
  let input = document.querySelector("input");
  let searchvalue = input.value.toUpperCase();
  console.log(searchvalue);
  tr.forEach((element) => {
    value = element.textContent.toUpperCase();
    if (value.includes(searchvalue)) {
      element.style.display = "";
    } else {
      element.style.display = "none";
    }
  });
}
