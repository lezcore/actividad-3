// BIANOR SERGIO CHIPILE CARI

// Etapas de la vida
var edad = 260;

if(edad<0) {
  console.log(`${edad} En fase prenatal(embarazo)`);
} else if (edad>=0 && edad<=6){
  console.log(`${edad} En fase infancia`);
} else if (edad>6 && edad<=12){
  console.log(`${edad} En fase niñez`);
} else if (edad>12 && edad<=20){
  console.log(`${edad} En fase adolescencia`);
} else if (edad>20 && edad<=25){
  console.log(`${edad} En fase juventud`);
} else if (edad>25 && edad<=60){
  console.log(`${edad} En fase adultez`);
} else if (edad>60 && edad<=130){
  console.log(`${edad} Estas en la fase de vejez`);
} else {
  console.log(`${edad} dime donde consigo el elixir de la vida`);
}


// Temperatura del ambiente
var temperatura = 37;

if(temperatura<=0) {
  console.log(`${temperatura} el agua esta congelada`);
} else if (temperatura>0 && temperatura<=10){
  console.log(`${temperatura} hace mucho frio`);
} else if (temperatura>10 && temperatura<=30){
  console.log(`${temperatura} temperatura ambiente`);
} else if (temperatura>30 && temperatura<=50){
  console.log(`${temperatura} esta haciendo calor`);
} else if (temperatura>50 && temperatura>=97){
  console.log(`${temperatura} es increible que haya vida en tanto calor`);
} else {
  console.log(`${temperatura} no es posible vivir a tan altas temperaturas`);
}
