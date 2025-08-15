'use strict';

// first function
function sortList(workers) {
  workers.sort((a, b) => {
    const salaryA = parseInt(
      a.getAttribute('data-salary').replace(/[^0-9]/g, ''),
    );
    const salaryB = parseInt(
      b.getAttribute('data-salary').replace(/[^0-9]/g, ''),
    );

    return salaryB - salaryA;
  });

  const list = document.querySelector('ul');

  workers.forEach((worker) => list.appendChild(worker));

  return workers;
}

// second function
const employees = Array.from(document.querySelectorAll('ul li'));

sortList(employees);

function getEmployees(employs) {
  return employs.map((employee) => ({
    name: employee.textContent.trim(),
    position: employee.getAttribute('data-position'),
    salary: employee.getAttribute('data-salary'),
    age: employee.getAttribute('data-age'),
  }));
}

getEmployees(employees);
