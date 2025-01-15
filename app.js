const container = document.querySelector('#container');
const btnNewGrid = document.querySelector('#newGrid');

function newGrid() {
  const squares = prompt('How much squares do you want?');
  createGrid(squares);
}


btnNewGrid.addEventListener('click', newGrid);

function createGrid(squares) {
  container.innerHTML = '';

  for(let i = 1; i <= squares; i ++) {
    const row = document.createElement('div');
    row.id = `row-${i}`;
    row.classList.add('row');
  
    for(let j = 1; j <= squares; j++) {
      const item = document.createElement('div');
      item.id = `row-${i}-item-${j}`;
      item.style.width = '20px';
      item.style.height = '20px';
      row.appendChild(item);
  
      item.addEventListener('mouseover', () => item.style.backgroundColor = 'black');
    }
  
    container.appendChild(row);
  }
}

