'use strict';

const list = document.querySelector('ul');

// helper function
function sorter(listItem) {
  const workers = Array.from(listItem.querySelectorAll('li'));

  return workers.sort((a, b) => {
    const salaryA = parseInt(
      a.getAttribute('data-salary').replace(/[^0-9]/g, ''),
    );
    const salaryB = parseInt(
      b.getAttribute('data-salary').replace(/[^0-9]/g, ''),
    );

    return salaryB - salaryA;
  });
}

// first function
function sortList(listItem) {
  const sortedArr = sorter(listItem);

  sortedArr.forEach((worker) => listItem.appendChild(worker));

  return sortedArr;
}

// second function
function getEmployees(listItem) {
  const employs = Array.from(listItem.querySelectorAll('li'));

  return employs.map((employee) => ({
    name: Array.from(employee.childNodes)
      .filter((node) => node.nodeType === Node.TEXT_NODE)
      .map((node) => node.textContent.trim())
      .filter(Boolean)
      .join(' '),
    position: employee.dataset.position,
    salary: employee.dataset.salary,
    age: employee.dataset.age,
  }));
}

sortList(list);
getEmployees(list);
