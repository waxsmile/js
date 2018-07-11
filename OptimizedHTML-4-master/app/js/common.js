

let yourMoney = prompt("Ваш бюджет?");
let yourName = prompt("Название вашего магазина?");
let time = 19;

let mainList ={
  budget: yourMoney,
  shopName: yourName,
  shopGoods: [],
  employers: {},
  open: false
}

for (let i = 0; i < 5; i++){
  let a = prompt("Какой тип товаров будем продавать?");

  if ((typeof(a)) === 'string' && (typeof(a)) === null && a !='' && a.lenght <50 ){
	  console.log('Всё верно');
	  mainList.shopGoods[i] =a; 
  }else{

  }
}

if (time < 0){
	console.log('Такого не может быть!');
} else if(time > 8 && time <20){
	console.log('Время работать!');
	}else if(time < 24){
		console.log('Слишком поздно!');
		}else {
			console.log('В сутка только 24 часа');
		};

alert(mainList.budget / 30);

console.log(mainList);

