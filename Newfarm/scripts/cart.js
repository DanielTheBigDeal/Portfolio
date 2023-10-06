let cart = [];
  
let melisa = {
  name: 'Мелиса',
  price: 220,
};

let basil = {
  name: 'Базилик лимонный',
  price: 200,
};

let radis = {
  name: 'Редис ред коралл',
  price: 200,
};

let pea = {
  name: 'Горошек',
  price: 150,
};

let indau = {
  name: 'Руккола (индау)',
  price: 170,
};

let violetLimon = {
  name: 'Фиолетовый лимон',
  price: 250,
};

let redCabbage = {
  name: 'Капуста краснокочанная',
  price: 180,
};

let mustard = {
  name: 'Горчица',
  price: 160,
}

function addMelisa() {
  cart.push(melisa);
  console.log(cart);
};

function addBasil() {
  cart.push(basil);
  console.log(cart);
};

function addRadish() {
  cart.push(radis);
  console.log(cart);
};

function addPea() {
  cart.push(pea);
  console.log(cart);
};

function addRadish() {
  cart.push(radis);
  console.log(cart);
};

function addIndau() {
  cart.push(indau);
  console.log(cart);
};

function addVioletLimon() {
  cart.push(violetLimon);
  console.log(cart);
};

function addRedCabbage() {
  cart.push(redCabbage);
  console.log(cart);
};

function addMustard() {
  cart.push(mustard);
  console.log(cart);
};

const $basketTable = document.getElementById('cart-table');

function printCart(item) {
  for (item of cart) {
    const $cartTr = document.createElement('tr');
    const $cartName = document.createElement('td');
    const $cartPrice = document.createElement('td');
    const $cartDelete = document.createElement('td');
    const $cartDeleteBtn = document.createElement('button');

    $cartTr.style.borderBottom = '1px solid black'

    $cartDeleteBtn.textContent = 'X';
    $cartDeleteBtn.style.padding = '5px'
    $cartDeleteBtn.style.fontSize = '20px';
    $cartDeleteBtn.style.color = 'red';
    $cartDeleteBtn.style.backgroundColor = 'transparent';
    $cartDeleteBtn.style.border = 'none';

    $cartName.textContent = item.name;
    $cartName.classList.add('cart-name');

    $cartPrice.textContent = item.price;
    $cartPrice.style.fontSize = '25px';
    $cartPrice.style.fontWeight = 600;
    $cartPrice.classList.add('cart-price')

    $cartDelete.append($cartDeleteBtn);
    $cartTr.classList.add('cart-tr');

    $cartTr.append($cartName, $cartPrice, $cartDelete);
    $basketTable.append($cartTr);
    const info = document.getElementById('cart');
    info.classList.toggle('show');
  }

}

function hideCart() {
  const info = document.getElementById('cart');
  info.style.display = 'none';
}
