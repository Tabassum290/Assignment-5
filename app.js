const donateBtn = document.getElementById('donate-btn');
const totalMoneyEl = document.getElementById('total-money');
const availableMoneyEl = document.getElementById('available-money');

document.getElementById('blog-btn').addEventListener('click', function(){
    window.location.href = '/blog.html';
})
function goBack(){
    window.location.href = '/index.html';
}
function selectedBtn(){
    document.getElementById('history-btn').classList.remove('bg-[#B4F461]');
    document.getElementById('donation-btn').classList.add('bg-[#B4F461]');
}
function selectedBtn_2(){
    document.getElementById('donation-btn').classList.remove('bg-[#B4F461]');
    document.getElementById('history-btn').classList.add('bg-[#B4F461]');   
}

document.getElementById('history-btn').addEventListener('click', function(){
document.getElementById('show-history').classList.remove('hidden');
document.getElementById('hide-donation').classList.add('hidden');
})
document.getElementById('donation-btn').addEventListener('click', function(){
document.getElementById('show-history').classList.add('hidden');
document.getElementById('hide-donation').classList.remove('hidden');


})

function donateButton(event){
    let totalAmount = 0;
const inputMoney = document.getElementById('input-money').value;
const amount = parseFloat(inputMoney);
if(isNaN (amount) || amount<0){
    return alert("Please enter a valid number");
}

totalAmount += amount;
totalMoneyEl.innerText = totalAmount;

const availbaleTotalMoney = parseFloat(availableMoneyEl.innerText);
const availableMoney = availbaleTotalMoney - amount;
availableMoneyEl.innerText = availableMoney;
}