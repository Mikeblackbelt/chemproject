function calculateLimestone(pH, area) {
    if (isNaN(ph) || isNaN(area) || ph < 0 || area < 0) {
       throw Error('Invalid Input')
    }
    return (7 - pH) * 0.5 * area; // Simple formula
    
}

const quantityInput = document.getElementById('quantity');
const costDisplay = document.getElementById('cost');
const pricePerUnit = 9.99;

quantityInput.addEventListener('input', function () {
    const quantity = parseInt(quantityInput.value) || 0;
    const totalCost = (quantity * pricePerUnit).toFixed(2);
    costDisplay.textContent = `Cost: $${totalCost}`;
});