"use strict"

const month = ['sausis', 'vasaris', 'kovas', 'balandis', 'geguze', 'birzelis', 'liepa', 'rugpjutis', 'rugsejis', 'splis', 'lapkrituis', 'gruodis'];

function months(account) {
    for (let m = 0; m < account.length; m++) {
        const element = account[m];
        const element2 = month[m];
        element.month = element2;
        
        // element.month = month[i];
    } 
}
months(account);

function balance(balanceList){
    let HTML = '';
    for (let i = 0; i < balanceList.length; i++) {
        const element = balanceList[i];
        let sumA = element.income;
        let sumB = element.expense;

        if (!element.income) {
            sumA = 0
        }
        if (!element.expense) {
            sumB = 0
        }   
        let sum = sumA - sumB;

            HTML += `
            <div class="table-row">
                <div class="cell">1</div>
                <div class="cell">${element.month}</div>
                <div class="cell">${element.income} Eur</div>
                <div class="cell">${element.expense}</div>
                <div class="cell">${sum} Eur</div>
            </div>
            `;
    }
    return document.querySelector('#table-content').innerHTML = HTML;
}
balance(account);

function rimantoMetai() {
    let HTML = '';
    HTML += `
    <h1>Rimanto metai</h1>
    `;
    return document.querySelector('.container .row').innerHTML = HTML;
}
rimantoMetai();