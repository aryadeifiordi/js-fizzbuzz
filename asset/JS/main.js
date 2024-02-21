// creo le costanti 
const fizz = 'Fizz';
const buzz = 'Buzz';
const fizzbuzz = 'FizzBuzz'
const listElement = document.querySelector('.lista');

//console.log(listElement);

// creo ciclo

for(let i = 1; i <= 100; i++){
    // se i numeri sono multipli di 3, di 5, o di entrambi e stampo il corrispettivo output
  if (i % 3 == 0 && i % 5 == 0) {

    //console.log(fizzbuzz);
    listElement.insertAdjacentHTML("beforeend", `<li>${fizzbuzz}</li>`);

  } else if (i % 3 == 0) {

    //console.log(fizz);
    listElement.insertAdjacentHTML("beforeend", `<li>${fizz}</li>`);

  } else if (i % 5 == 0) {

    //console.log(buzz);
    listElement.insertAdjacentHTML("beforeend", `<li>${buzz}</li>`);

  } else {

    // console.log(i)
    listElement.insertAdjacentHTML("beforeend", `<li>${i}</li>`);

  };
}