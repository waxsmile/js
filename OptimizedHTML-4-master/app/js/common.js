$(function() {

let yourMoney = prompt("Ваш бюджет?");
let yourName = prompt("Название вашего магазина?");

let mainList ={
  budget: yourMoney,
  shopName: yourName,
  shopGoods: [],
  employers: {},
  open: false
}

for (let i = 0; i < 5; i++){
  let a = prompt("Какой тип товаров будем продавать?");
  mainList.shopGoods[i] = a;
}

alert(mainList.budget / 30);

console.log(mainList);

});
