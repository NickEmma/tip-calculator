const inputsEl = document.querySelectorAll('.form-control');
const addPeopleEl = document.querySelector('.add-people');
const minusPeopleEl = document.querySelector('.minus-people');
const billInput = document.getElementById('billTotalInput');
const tipInput = document.getElementById('tipInput');
const numberOfPeopleDiv = document.getElementById('numberOfPeople');
const perPersonTotalDiv = document.getElementById('perPersonTotal');

let numberOfPeople = Number(numberOfPeopleDiv.innerText);

const calculateBill = () => {
  const bill = Number(billInput.value);
  const tipPercentage = Number(tipInput.value) / 100;
  const tipAmount = bill * tipPercentage;
  const total = tipAmount + bill;
  const perPersonTotal = total / numberOfPeople;
  perPersonTotalDiv.innerText = `$${perPersonTotal.toFixed(2)}`;
};

const increasePeople = () => {
  numberOfPeople += 1;
  numberOfPeopleDiv.innerText = numberOfPeople;
  calculateBill();
};

const decreasePeople = () => {
  if (numberOfPeople <= 1) {
    throw 'Hey! You cannot have less than 1 person!';
  }
  numberOfPeople -= 1;
  numberOfPeopleDiv.innerText = numberOfPeople;
  calculateBill();
};

inputsEl.forEach((inp) => inp.addEventListener('keyup', calculateBill));
addPeopleEl.addEventListener('click', increasePeople);
minusPeopleEl.addEventListener('click', decreasePeople);
