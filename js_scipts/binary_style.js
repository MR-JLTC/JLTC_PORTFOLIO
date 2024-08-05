const binaryBackground = document.getElementById('binaryBackground');
const rows = 50; // Number of rows in the grid
const cols = 100; // Number of columns in the grid

// Create binary cells
for (let i = 0; i < rows * cols; i++) {
    const cell = document.createElement('div');
    cell.className = 'binary-cell';

    // Generate a random binary digit (0 or 1)
    const digit = Math.random() < 0.5 ? '0' : '1';

    const binaryDigit = document.createElement('div');
    binaryDigit.className = 'binary-digit';
    binaryDigit.textContent = digit;

    cell.appendChild(binaryDigit);
    binaryBackground.appendChild(cell);
}
