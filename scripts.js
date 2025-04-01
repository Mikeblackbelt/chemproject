function calculateLimestone(pH, area) {
    if (isNaN(ph) || isNaN(area) || ph < 0 || area < 0) {
       throw Error('Invalid Input')
    }
    return (7 - pH) * 0.5 * area; // Simple formula
    
}
