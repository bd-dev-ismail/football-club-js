//getting input filed value
function getInputFieldById(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldAmountString = inputField.value;
    const inputFieldAmount = parseFloat(inputFieldAmountString);
    inputField.value = '';
    return inputFieldAmount;
};
//getting text value
function getTextElementById(textId){
    const textField = document.getElementById(textId);
    const textFieldAmountString = textField.innerText;
    const textFieldAmount = parseFloat(textFieldAmountString);
    return textFieldAmount;
};
//set text element
function setTextElementById(elementId, newValue){
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
    
};