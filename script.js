let mainContainer = document.getElementById('mainContainer')
let table = document.getElementById('table-list');
let submit = document.getElementById('submit-btn');
let newRow;
let nameInput = document.getElementById('name-input');
let costInput = document.getElementById('cost-input');
let dateInput = document.getElementById('date-input');
let buttonRemove;
let total = document.getElementById('total');
let totalAmount = 0;

submit.addEventListener('click', function rowAdd(event){
    event.preventDefault;
    if(nameInput.value === ''){
    alert(`PLEASE FILL THE 'ITEM:' FIELD`)
    return;  
    }
    if(costInput.value < 0.1){
    alert(`THE 'COST' FIELD MUST BE A NUMBER > 0.1`)
    return;  
    } 
    
    newRow = document.createElement('tr');
    let tr = table.appendChild(newRow);
    
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4 = newRow.insertCell(3);
    cell1.innerHTML = nameInput.value;
    cell2.innerHTML = `${costInput.value}`;
    cell3.innerHTML = dateInput.value;
    cell4.innerHTML = '';
        
    buttonRemove = document.createElement('button');
    cell4.appendChild(buttonRemove);
    buttonRemove.innerHTML = 'X';
    buttonRemove.classList.add('buttonRemove');
    nameInput.value = '';
      

    let totalCalc = function (){
        totalAmount = Number(costInput.value) + totalAmount;
        return total.innerHTML = `TOTAL : € ${totalAmount} `;
    }
    totalCalc();
  
    
    function rowDelete () {
    for(var i = 1; i < table.rows.length; i++) {  
        let index;
        table.rows[i].cells[3].onclick = function(){
            let cellDeleteValue = this.parentElement.cells[1].innerText;
            Number(cellDeleteValue);
            totalAmount -= cellDeleteValue;
            total.innerHTML = `TOTAL : € ${totalAmount} `;
            index = this.parentElement.rowIndex;
            table.deleteRow(index);
            }

        }
        
    }

    rowDelete();
 });









