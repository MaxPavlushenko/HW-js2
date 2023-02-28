"use strict"
//Taks1//
/*{
const name=prompt('Ваше имя');
const age=prompt('Ваш возрост',25);
const city=prompt('Ваш город');
const phone=prompt('Ваш телефон');
const email=prompt('Ваша почта');
const company=prompt('Ваша компания');

alert('Меня зовут '+(name)+'. Мне '+(age)+' лет. Я проживаю в городе '+(city)+ ' и работаю в компании '+(company)+'. Мои контактные данные: \n'+
 (phone)+', \n'+(email));


//Task2//

const year=new Date().getFullYear()
const birthyr=year-age;
alert((name)+' родился в '+(birthyr)+' году');


}*/

//Task3//

/*{
  const str=prompt('Введите 6 цифр');
  const strsum1= str[0]+str[1]+str[2];
  const strsum2= str[3]+str[4]+str[5];
  if(strsum1==strsum2){
    alert('да');
  }
  else{
    alert('нет');
  }
}*/

//Task4//

/*{
const a= prompt();
if(a>0){
  console.log('Верно');
}
else{
  console.log('Неверно');
}

}*/

//task5//

/*{
  let a=10;
  let b=2;
  console.log(a+b);
  console.log(a-b);
  console.log(a*b);
  console.log(a/b);
  if((a+b)>1){
    console.log((a+b)*(a+b));
  }


//Task6//

if(a > 2 && a < 11 || b >= 6 && b < 14){
  console.log('Верно');
}
  else{
    console.log('Неверно');
  }
}*/

//Task7//

/*{
  const n=prompt('число от 0 до 59');
  if(n>=0&&n<16){
    console.log('1-я четверть часа');
  }
  else if(n>=15&&n<31){
    console.log('2-я четверть часа');
  }
  else if(n>=30&&n<46){
    console.log('3-я четверть часа');
  }
  else if(n>=45&&n<60){
    console.log('4-я четверть часа');
  }
}*/

//Task8//

/*{
  const day=prompt('число от 1 до 31');
  if(day>=1&&day<11){
    console.log('1-я декада');
  }
   if(day>=10&&day<21){
    console.log('2-я декада');
  }
   if(day>=20&&day<32){
    console.log('3-я декада');
  }
}*/

//Task9//

/*{
  const days = prompt('Введите количество дней');
  const year = days / 365;
  const month = Math.ceil(days / 31);
  const week = days / 7;
  const hr = days * 24;
  const min = days * 1440;
  const sec = days * 86400;

  if (days < 7) {
    console.log('Меньше года \n Меньше месяца \n Меньше недели \n' + (hr) + ' часов\n' + (min) + ' минут \n' + (sec) + ' секунд.');
  }
  if (days >= 7 && days < 31) {
    console.log('Меньше года \n Меньше месяца \n' + (week) + ' недели \n' + (hr) + ' часов\n' + (min) + ' минут \n' + (sec) + ' секунд.');
  }
  if (days >= 31 && days < 365) {
    console.log('Меньше года \n ' + (month) + ' месяцев \n' + (week) + ' недели \n' + (hr) + ' часов\n' + (min) + ' минут \n' + (sec) + ' секунд.');
  }
  if (days >= 365) {
    console.log((year) + ' года \n' + (month) + ' месяцев \n' + (week) + ' недели \n' + (hr) + ' часов\n' + (min) + ' минут \n' + (sec) + ' секунд.');
  }

  //Task10//

  switch (month) {
    case 1:
    case 2:
    case 12: console.log((month) + 'й месяц \n зима');
      break;
    case 3:
    case 4:
    case 5: console.log((month) + 'й месяц \n весна');
      break;
    case 6:
    case 7:
    case 8: console.log((month) + 'й месяц \n лето');
      break;
    case 9:
    case 10:
    case 11: console.log((month) + 'й месяц \n осень');
    break;
    default: console.log('Hello');
    break;
  }
}*/


