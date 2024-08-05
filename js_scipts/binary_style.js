const binaryBackground = document.getElementById('binaryBackground');
    const rows = 50;
    const cols = 100;

// Create binary cells
for (let i = 0; i < rows * cols; i++) {
    const cell = document.createElement('div');
    cell.className = 'binary-cell';
        
    const digit1 = document.createElement('div');
    digit1.className = 'binary-digit';
    digit1.textContent = '0';
        
    const digit2 = document.createElement('div');
    digit2.className = 'binary-digit';
    digit2.textContent = '1';
    digit2.style.transform = 'translateY(100%)';
    digit2.style.opacity = '0';
        
    cell.appendChild(digit1);
    cell.appendChild(digit2);
    binaryBackground.appendChild(cell);
}

    // Function to update binary cells
function updateBinaryCells() {
    const cells = document.querySelectorAll('.binary-cell');
    cells.forEach(cell => {
        if (Math.random() < 0.01) { // 1% chance to change
            const digits = cell.children;
            const currentTop = digits[0];
            const currentBottom = digits[1];
                
            if (currentTop.textContent === '0') {
                currentTop.style.transform = 'translateY(-100%)';
                currentTop.style.opacity = '0';
                currentBottom.style.transform = 'translateY(0)';
                currentBottom.style.opacity = '1';
            } else {
                currentTop.style.transform = 'translateY(100%)';
                currentTop.style.opacity = '0';
                currentBottom.style.transform = 'translateY(0)';
                currentBottom.style.opacity = '1';
            } 
            // Swap the digits
            cell.insertBefore(currentBottom, currentTop);
        }
    });
}
// Update cells periodically
setInterval(updateBinaryCells, 50);