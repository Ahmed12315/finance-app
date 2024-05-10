var income_value = document.getElementById("income_value")
var expenditure_value = document.getElementById("expenditure_value");
var balance_value = document.getElementById("balance_value");
var saving_value = document.getElementById("saving_value");
var totalIncome =0;
var totalExpenditure=0;
var transactions = [];


function income() {
    var amount= parseFloat(document.getElementById("amount").value)
    if(amount > 0){
        totalIncome += amount;
        income_value.innerText = totalIncome.toFixed(2)
        transactions.push({type:"income" , amount : amount , time : new Date()})
        console.log(transactions);
        summary();
    } 
}

function expenditure() {
    var amount = parseFloat(document.getElementById("amount").value)
    totalExpenditure += amount;
    expenditure_value.innerText = totalExpenditure.toFixed(2);
    transactions.push({type:"Expenditure", amount :amount, time:new Date()})
    console.log(transactions);
  summary();
}

function summary() {
    var balance = totalIncome - totalExpenditure;
    balance_value.innerText = balance.toFixed(2);
    if(balance >=0){
        saving_value.innerText ="Savings: " + balance.toFixed(2)
        saving_value.style.color = "green"
    }else{
        saving_value.innerText = "loss: " +balance.toFixed(2)
        saving_value.style.color = "red" + balance.toFixed(2)
    }
}


