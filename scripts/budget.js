
document.getElementById('btn-calculate').addEventListener('click', function(){
    const playerField = getInputFieldById('player-filed');
    //calcualte player Cost
    const playerCost = playerArray.length * playerField;
    if(isNaN(playerCost)){
        alert('Please Enter a number');
        return;
    }
    //set the value of expense
    setTextElementById('player-text', playerCost);
    
});
document.getElementById('btn-total').addEventListener('click', function(){
    const playerText = getTextElementById('player-text');
    const managerField = getInputFieldById('manager-field');
    const coachField = getInputFieldById('coach-field');
    //calculate total
    const totalCostValue = playerText + managerField + coachField;
    if(isNaN(totalCostValue)){
        alert('valid')
        return;
    }
    //set the total cost
    setTextElementById('total-text', totalCostValue);
});