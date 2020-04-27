"use strict"

const month = ['Sausis', 'Vasaris', 'Kovas', 'Balandis', 
                'Geguze', 'Birzelis', 'Liepa', 'Rugpjutis', 
                'Rugsejis', 'Spalis', 'Lapkrituis', 'Gruodis'];

function balance(balanceList, monthList){
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
    
    const minIncome = document.querySelector('#minIncome');
    const mаxIncome = document.querySelector('#mаxIncome');
    const minExpense = document.querySelector('#minExpense');
    const maxExpense = document.querySelector('#maxExpense');
    let sum = 0;
    let income = 0;
    let expense = 0;
    let minIncomeMonth = {index: 1, value: Infinity};
    let maxIncomeMonth = {index: 1, value: 0};
    let minExpenseMonth = {index: 1, value: Infinity};
    let maxExpenseMonth = {index: 1, value: 0};

    let HTML = '';
    for (let i = 0; i < lineUp.length; i++) {
        const element = lineUp[i];
        let sumA = element.income || 0;
        let sumB = element.expense || 0;
        if (!element.income) {
            sumA = 0
        }
        if (!element.expense) {
            sumB = 0
        }
        income += sumA;
        expense += sumB;
        sum += sumA - sumB;

        if (sumA < minIncomeMonth.value ) {
            minIncomeMonth.value = sumA;
            minIncomeMonth.index = i;
        }
        if (sumA > maxIncomeMonth.value ) {
            maxIncomeMonth.value = sumA;
            maxIncomeMonth.index = i;
        }
        if (sumB < minExpenseMonth.value ) {
            minExpenseMonth.value = sumB;
            minExpenseMonth.index = i;
        }
        if (sumB > maxExpenseMonth.value ) {
            maxExpenseMonth.value = sumB;
            maxExpenseMonth.index = i;
        }
        
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
        document.querySelector('.table-footer > .cell:nth-child(3)').innerHTML = income+' Eur';
        document.querySelector('.table-footer > .cell:nth-child(4)').innerHTML = expense+' Eur';
        document.querySelector('.table-footer > .cell:nth-child(5)').innerHTML = sum+' Eur';

        minIncome.innerHTML = month[minIncomeMonth.index];
        maxIncome.innerHTML = month[maxIncomeMonth.index];
        minExpense.innerHTML = month[minExpenseMonth.index];
        maxExpense.innerHTML = month[maxExpenseMonth.index];

        return document.querySelector('#table-content').innerHTML = HTML;
    
}
balance(account, month);

// function tableFooter() {
    
//     let footerHTML = '';

//     footerHTML += `
//                 <div class="cell"></div>
//                 <div class="cell"></div>
//                 <div class="cell">0.00 Eur</div>
//                 <div class="cell">0.00 Eur</div>
//                 <div class="cell">HHH Eur</div>
//     `;
//     return document.querySelector('.table-footer').innerHTML = footerHTML;
// }
// tableFooter();