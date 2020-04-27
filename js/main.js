"use strict"

const month = ['Sausis', 'Vasaris', 'Kovas', 'Balandis', 
                'Geguze', 'Birzelis', 'Liepa', 'Rugpjutis', 
                'Rugsejis', 'Spalis', 'Lapkrituis', 'Gruodis'];

function balance(balanceList, monthList){
    // Rikiaviams
    let lineUp = [];
    for (let l = 0; l < balanceList.length; l++) {
        const lineUpMonths = l+1;
            for (let k = 0; k < balanceList.length; k++) {
                if (balanceList[k].month === lineUpMonths) {
                    lineUp.push(balanceList[k]);
                        break;
                }                
            }
    }
    
    // Spausdiniams
    let sum = 0;
    let HTML = '';
    for (let i = 0; i < lineUp.length; i++) {
        const element = lineUp[i];
        let sumA = element.income;
        let sumB = element.expense;

        if (!element.income) {
            sumA = 0
        }
        if (!element.expense) {
            sumB = 0
        }
        sum += sumA - sumB;

            HTML += `
            <div class="table-row">
                <div class="cell">${i+1}</div>
                <div class="cell">${monthList[ element.month-1 ]}</div>
                <div class="cell">${element.income ? element.income+' Eur' : '-'}</div>
                <div class="cell">${element.expense ? element.expense+' Eur' : '-'}</div>
                <div class="cell">${sum} Eur</div>
            </div>
            `;
    }
    return document.querySelector('#table-content').innerHTML = HTML;
}
balance(account, month);

