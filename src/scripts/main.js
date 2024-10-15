'use strict';

const addRowBtn = document.querySelector('.append-row');
const addColumnBtn = document.querySelector('.append-column');
const deleteRowBtn = document.querySelector('.remove-row ');
const deleteColumnBtn = document.querySelector('.remove-column');

const table = document.querySelector('.field');

const maxCount = 10;
const minCount = 2;
let rowCount = table.rows.length;
let columnCount = table.rows[0].cells.length;

function updateBtnsStates() {
  addRowBtn.disabled = rowCount >= maxCount;
  deleteRowBtn.disabled = rowCount <= minCount;
  addColumnBtn.disabled = columnCount >= maxCount;
  deleteColumnBtn.disabled = columnCount <= minCount;
}

addRowBtn.addEventListener('click', () => {
  const newRow = table.insertRow();

  for (let i = 0; i < columnCount; i++) {
    const newCell = newRow.insertCell();

    newCell.textContent = '';
  }

  rowCount++;
  updateBtnsStates();
});

deleteRowBtn.addEventListener('click', () => {
  table.deleteRow(-1);

  rowCount--;
  updateBtnsStates();
});

addColumnBtn.addEventListener('click', () => {
  for (let i = 0; i < rowCount; i++) {
    const cell = table.rows[i].insertCell();

    cell.textContent = '';
  }

  columnCount++;
  updateBtnsStates();
});

deleteColumnBtn.addEventListener('click', () => {
  for (let i = 0; i < rowCount; i++) {
    table.rows[i].deleteCell(-1);
  }

  columnCount--;
  updateBtnsStates();
});

updateBtnsStates();
