"use strict"

const month = ['sausis', 'vasaris', 'kovas', 'balandis', 'geguze', 'birzelis', 'liepa', 'rugpjutis', 'rugsejis', 'splis', 'lapkrituis', 'gruodis'];



if (!account.income) {
    console.log(account);
    
}
if (!account.expense) {
    
}


function balance(balanceList){
    let HTML = '';
    for (let i = 0; i < balanceList.length; i++) {
        const element = balanceList[i];
        let sumA = element.income;
        let sumB = element.expense;
        let sum = sumA - sumB;
        let sumT = 0;

        
        if ( sum <= NaN ) {
            sumT = element.income;
            
        } else {
            sumT = sum;
        }
       
            HTML += `
            <div class="table-row">
                <div class="cell">1</div>
                <div class="cell">${element.month}</div>
                <div class="cell">${element.income} Eur</div>
                <div class="cell">${element.expense}</div>
                <div class="cell">${sumT} Eur</div>
            </div>
            `;
    }
    return document.querySelector('#table-content').innerHTML = HTML;
}
balance(account);
