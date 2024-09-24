const donateBtn = document.getElementById('donate-btn');
const totalMoneyEl = document.getElementById('total-money');
const myModal = document.getElementById('my_modal_1');
const availableMoney =document.getElementById('available-money');
const showHistory = document.getElementById('show-history');
const defaultText = document.getElementById('default-text');
let accountBalance = 0;

document.getElementById('blog-btn').addEventListener('click', function(){
    window.location.href = './blog.html';
})
function goBack(){
    window.location.href = './index.html';
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

// Reusable Function
function getdonationAmountbyId(id){
const inputMoney = document.getElementById(id).value ;
let inputValue = 0;
if(!isNaN (inputMoney)){
    inputValue = parseFloat(inputMoney);
    return inputValue;
}
}
// Donate Noakhali
document.getElementById('donate-btn').addEventListener('click', function(event){
    event.preventDefault();
    const availableMoney= document.getElementById('available-money');
    const availableMoney2 = parseFloat(availableMoney.innerText);
    const addMoney = getdonationAmountbyId('input-money');
    if(addMoney > availableMoney2) {
        alert("You don't not have sufficient balance");
        document.getElementById('my_modal_1').close();
        return;
       }
   if(isNaN(addMoney) || addMoney<0){
alert('Please input a valid amount');
document.getElementById('my_modal_1').close();
return;
}

const newBalance = accountBalance + addMoney;
        document.getElementById('total-money').innerText = newBalance;
        const availabaleTotalMoney = parseFloat(availableMoney.innerText);
const currentMoney = availabaleTotalMoney - newBalance;
 availableMoney.innerText = currentMoney;

// history
defaultText.classList.add('hidden');
const donateTitle1 = document.getElementById('donate-noakhali').innerText;
const d = new Date();
document.getElementById('change-text').innerHTML += `<p class="text-lg text-gray-600"><span class="text-2xl font-bold text-blue-800">${addMoney} </span>${donateTitle1}
   </p><p class="text-md text-gray-500 p-4 rounded-lg">${new Date()}</p>`;
})
// Donate Feni
document.getElementById('donate-btn-feni').addEventListener ('click', function(event){
    event.preventDefault();
    const addMoney = getdonationAmountbyId('input-money-feni');
    const availableMoney = document.getElementById('available-money');
    const availableMoney2 = parseFloat(availableMoney.innerText);
    if(addMoney > availableMoney2) {
        alert("You don't not have sufficient balance");
        document.getElementById('my_modal_2').close();
        return;
       }
   if(isNaN(addMoney) ||addMoney<0){
alert('Please input a valid amount');
document.getElementById('my_modal_2').close();
return;
}

const newBalance = accountBalance + addMoney;

        document.getElementById('total-money-feni').innerText = newBalance;

        const availabaleTotalMoney = parseFloat(availableMoney.innerText);
const currentMoney = availabaleTotalMoney - newBalance;
 availableMoney.innerText = currentMoney;

// history
defaultText.classList.add('hidden');
const donateTitle2 = document.getElementById('donate-feni').innerText;
const d = new Date();
document.getElementById('change-text').innerHTML += `<p class="text-lg text-gray-600"><span class="text-2xl font-bold text-blue-800">${addMoney} </span>${donateTitle2}
   </p><p class="text-md text-gray-500 p-4 rounded-lg">${new Date()}</p>`;
})

// Donate for aid

document.getElementById('donate-btn-aid').addEventListener ('click', function(event){
    event.preventDefault();
    const addMoney = getdonationAmountbyId('input-money-quota');
    const availableMoney= document.getElementById('available-money');
    const availableMoney2 = parseFloat(availableMoney.innerText);
    if(addMoney > availableMoney2) {
        alert("You don't not have sufficient balance");
        document.getElementById('my_modal_3').close();
        return;
       }
   if(isNaN(addMoney) ||addMoney<0){
alert('Please input a valid amount');
document.getElementById('my_modal_3').close();
return;
}

  const newBalance = accountBalance + addMoney;
        document.getElementById('total-money-aid').innerText = newBalance;

        const availbaleTotalMoney = parseFloat(availableMoney.innerText);
const currentMoney = availbaleTotalMoney - newBalance;
 availableMoney.innerText = currentMoney;

// history
defaultText.classList.add('hidden');
const donateTitle3 = document.getElementById('donate-aid').innerText;
const d = new Date();
document.getElementById('change-text').innerHTML += `<p class="text-lg text-gray-600"><span class="text-2xl font-bold text-blue-800">${addMoney} </span>${donateTitle3}
   </p><p class="text-md text-gray-500 p-4 rounded-lg">${new Date()}</p>`;
})
