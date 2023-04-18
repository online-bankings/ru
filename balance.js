let timeSum = 270525; let moneysum = timeSum.toLocaleString(); 
let tallage = 3;
let result = timeSum / 100 * tallage; //вычисление процентов
let percentm = result.toLocaleString(); 
let raznpercent = timeSum - result;
let ostpercent = raznpercent.toLocaleString(); 
setTimeout(function(){$("#moneysum1,#moneysum2,#moneysum3,#moneysum4,#moneysum5,#moneysum14").text(moneysum); $("#moneysum6,#moneysum7").text(percentm); $("#moneysum8,#moneysum9,#moneysum10,#moneysum11,#moneysum12,#moneysum13,#moneysum15").text(ostpercent);},1);
