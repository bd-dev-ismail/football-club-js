const playerArray = [];
function selected(player){
    const tableBody = document.getElementById('table-body');
    tableBody.innerText = '';
    for(let i = 0; i<playerArray.length; i++){
        const name = playerArray[i].playerName;
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <tr>
            <th>${i+1}</th>
            <td>${name}</td>
        </tr>`;
        tableBody.appendChild(tr);       
    };

};

function addPlayer(element){
    if(playerArray.length === 5){
        alert('You Can Select Only Five Player!!!');
        return;
    }
    const playerName = element.parentNode.children[0].innerText;
    const playerObj = {playerName: playerName};
    playerArray.push(playerObj);
    element.disabled = true;
    //call new function
    selected(playerArray);
};
