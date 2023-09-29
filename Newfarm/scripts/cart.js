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

const $basketTable = document.getElementById('basket-table');

// function showBasket() {
//   for (purchase of basket) {
//     const $purchaseTr = document.createElement('tr');
//     const $purchaseName = document.createElement('td');
//     const $purchaseprice = document.createElement('td');

//     $purchaseName.textContent = purchase.name;
//     $purchaseprice.textContent = purchase.price;

//     $studTr.classList.add('');

//     $purchaseTr.append($purchaseName, $purchaseprice);
//     $basketTable.append($purchaseTr);
//   }
// }

/*if () {
  let empty = document.createElement('h2');
  empty.textContent = 'Здесь пока пусто';
  const table = document.getElementById('cart-tr');
  table.append(empty);
}*/

/*document.onclick = (event) => {
  if (event.target.classList.contains('descriptions__add')) {
    addFunction(event.target.dataset.id);
  }

  else if (event.target.classList.contains('cart__delete')) {
    deleteFunction(event.target.dataset.id)
  }
}

const addFunction = (id) => {
  cart[id]++;
  renderCart();
}

function renderCart() {
  console.log(cart);
}*/

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

/*switch (elemId) {
    case 'melisa': 
    let melisa = {
      name: 'Мелисса ароматный лимон',
      price: 220,
    }
      cart.push(melisa);
      break;
    case 'basil':
      cart.push(basil);
      break;
    case 'radishAdd':
      cart.push(radis);
      break;
    case 'peaAdd':
      cart.push(pea);
      break;
    case 'indauAdd':
      cart.push(indau);
      break;
    case 'violetLimonAdd':
      cart.push(violetLimon);
      break;
    case 'redCabbageAdd':
      cart.push(redCabbage);
      break;
    case 'mustardAdd':
      cart.push(mustard);
      break;
  }*/
