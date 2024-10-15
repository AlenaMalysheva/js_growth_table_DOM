'use strict';

const appendRow = document.querySelector('.append-row');
const appendColumn = document.querySelector('.append-column');
const deleteRow = document.querySelector('.remove-row ');
const deleteColumn = document.querySelector('.remove-column');

const table = document.querySelector('.field');

const maxCount = 10;
const minCount = 2;
let rowCount = table.rows.length;
let columnCount = table.rows[0].cells.length;

function updateBtnsStates() {
  appendRow.disabled = rowCount >= maxCount;
  deleteRow.disabled = rowCount <= minCount;
  appendColumn.disabled = columnCount >= maxCount;
  deleteColumn.disabled = columnCount <= minCount;
}

appendRow.addEventListener('click', () => {
  if (rowCount < maxCount) {
    const newRow = table.insertRow();

    for (let i = 0; i < columnCount; i++) {
      const newCell = newRow.insertCell();

      newCell.textContent = '';
    }

    rowCount++;
    updateBtnsStates();
  }
});

deleteRow.addEventListener('click', () => {
  if (rowCount > minCount) {
    table.deleteRow(-1);

    rowCount--;
    updateBtnsStates();
  }
});

appendColumn.addEventListener('click', () => {
  if (columnCount < maxCount) {
    for (let i = 0; i < rowCount; i++) {
      const cell = table.rows[i].insertCell();

      cell.textContent = '';
    }

    columnCount++;
    updateBtnsStates();
  }
});

deleteColumn.addEventListener('click', () => {
  if (columnCount > minCount) {
    for (let i = 0; i < rowCount; i++) {
      table.rows[i].deleteCell(-1);
    }

    columnCount--;
    updateBtnsStates();
  }
});

updateBtnsStates();
