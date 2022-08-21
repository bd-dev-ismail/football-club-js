function getInputFieldById(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldAmountString = inputField.value;
    const inputFieldAmount = parseFloat(inputFieldAmountString);
    inputField.value = '';
    return inputFieldAmount;
};
// function setTextElementById(elementId){
//     const textElement = document.getElementById(elementId);
//     const textAmount = textElement.innerText;
//     textElement.innerText = textAmount;
// }
document.getElementById('btn-calculate').addEventListener('click', function(){
    const playerField = getInputFieldById('player-filed');
    //calcualte player Cost
    const playerCost = playerArray.length * playerField;
    //set the value of expense
    const playerText = document.getElementById('player-text');
    const playerTextAmount = playerText.innerText;
    playerText.innerText = playerCost;
});