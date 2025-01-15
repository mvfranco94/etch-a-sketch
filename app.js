const container = document.querySelector('#container');
const btnNewGrid = document.querySelector('#newGrid');

let opacity = 0;

function newGrid() {
  opacity = 0;
  let squares = -99;
  do {
    squares = prompt('How much squares do you want? (limit 100)');
  } while(squares < 0 || squares > 100);
  
  createGrid(squares);
}

function random255() {
  return Math.floor((Math.random() * 255));
}


function randomRGB() {
  return `rgb(${random255()}, ${random255()}, ${random255()})`;
}

btnNewGrid.addEventListener('click', newGrid);

function createGrid(squares, width = 960) {
  container.innerHTML = '';
  const size = width / squares;

  for(let i = 1; i <= squares; i ++) {
    const row = document.createElement('div');
    row.id = `row-${i}`;
    row.classList.add('row');
  
    for(let j = 1; j <= squares; j++) {
      const item = document.createElement('div');
      item.id = `row-${i}-item-${j}`;
      item.style.width = `${size}px`;
      item.style.height = `${size}px`;
      row.appendChild(item);
  
      item.addEventListener('mouseover', e => { 
        
        if (opacity < 1) {
          opacity += 0.1;
        }
        item.style.backgroundColor = `${randomRGB()}`;
      
        item.style.opacity = opacity;
      });
    }
  
    container.appendChild(row);
  }
}

