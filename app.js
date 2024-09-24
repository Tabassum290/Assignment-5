const donateBtn = document.getElementById('donate-btn');
const totalMoneyEl = document.getElementById('total-money');
const availableMoneyEl = document.getElementById('available-money');
const myModal = document.getElementById('my_modal_1');
const showHistory = document.getElementById('show-history');
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
const inputValue = parseFloat(inputMoney);
return inputValue;
}
// Donate Noakhali
document.getElementById('donate-btn').addEventListener('click', function(event){
    event.preventDefault();
    const addMoney = getdonationAmountbyId('input-money');
   if(isNaN(addMoney) ||addMoney<0){
alert('Please input a valid amount');
document.getElementById('my_modal_1').close();
return;
}
   if(addMoney >= availableMoneyEl) {
    alert("You don't not have sufficient balance");
    document.getElementById('my_modal_1').close();
    return;
   }
  const newBalance = accountBalance + addMoney;
        document.getElementById('total-money').innerText = newBalance;

        const availbaleTotalMoney = parseFloat(availableMoneyEl.innerText);
const currentMoney = availbaleTotalMoney - newBalance;
 availableMoneyEl.innerText = currentMoney;

// history
const donateTitle1 = document.getElementById('donate-noakhali').innerText;
const d = new Date();
document.getElementById('change-text').innerHTML += `<p class="text-lg text-gray-600"><span class="text-2xl font-bold text-blue-800">${addMoney} </span>${donateTitle1}
   </p><p class="text-md text-gray-500 p-4 rounded-lg">${new Date()}</p>`;
})
// Donate Feni
document.getElementById('donate-btn-feni').addEventListener ('click', function(event){
    event.preventDefault();
    const addMoney = getdonationAmountbyId('input-money-feni');
   if(isNaN(addMoney) ||addMoney<0){
alert('Please input a valid amount');
document.getElementById('my_modal_2').close();
return;
}
   if(addMoney >= availableMoneyEl) {
    alert("You don't not have sufficient balance");
    document.getElementById('my_modal_2').close();
    return;
   }
  const newBalance = accountBalance + addMoney;
        document.getElementById('total-money-feni').innerText = newBalance;

        const availbaleTotalMoney = parseFloat(availableMoneyEl.innerText);
const currentMoney = availbaleTotalMoney - newBalance;
 availableMoneyEl.innerText = currentMoney;

// history
const donateTitle2 = document.getElementById('donate-feni').innerText;
const d = new Date();
document.getElementById('change-text').innerHTML += `<p class="text-lg text-gray-600"><span class="text-2xl font-bold text-blue-800">${addMoney} </span>${donateTitle2}
   </p><p class="text-md text-gray-500 p-4 rounded-lg">$ {new Date()}</p>`;
})

// Donate for aid
document.getElementById('donate-btn-aid').addEventListener('click', function(event){
    event.preventDefault();
    const addMoney = getdonationAmountbyId('input-money-quota');
   if(isNaN(addMoney) || addMoney<0){
alert('Please input a valid amount');
document.getElementById('my_modal_3').close();
return;
}
   if(addMoney > availableMoneyEl) {
    alert("You don't not have sufficient balance");
    document.getElementById('my_modal_3').close();
    return;
   }
   console.log(addMoney);
  const newBalance = accountBalance + addMoney;
        document.getElementById('total-money-aid').innerText = newBalance;
 console.log(newBalance)
        const availbaleTotalMoney = parseFloat(availableMoneyEl.innerText);
const currentMoney = availbaleTotalMoney - newBalance;
 availableMoneyEl.innerText = currentMoney;
console.log(currentMoney);
// history
const donateTitle3 = document.getElementById('donate-aid').innerText;
console.log(donateTitle3);
const d = new Date();
document.getElementById('change-text').innerHTML += `<p class="text-lg text-gray-600"><span class="text-2xl font-bold text-blue-800">${addMoney}</span>${donateTitle3}
   </p><p class="text-md text-gray-500 p-4 rounded-lg">${new Date()}</p>`;
})