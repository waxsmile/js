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
mainList.shopGoods[0] = prompt("Какой тип товаров будем продавать?");
mainList.shopGoods[1] = prompt("Какой тип товаров будем продавать?");
mainList.shopGoods[2] = prompt("Какой тип товаров будем продавать?");

alert(mainList.budget / 30);

console.log(mainList);

});
