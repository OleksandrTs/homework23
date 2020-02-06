(function(){
    "use strict";

    function task1(){
        let age = prompt("Введите ваш возраст")
        if (age > 0 && age < 12){
            alert("Ребёнок");
          } else if (age < 18){
            alert("Подросток");
          } else if (age < 60){
            alert("Взрослый");
          } else {
            alert("Пенсионер");
          }
    }
    //task1();

    function task2(){
        let num = prompt("Введите цифру"),
            key = [")", "!", "@", "#", "$", "%", "^", "&", "*", "("];
        alert(`${key[num]}`);
    }
    //task2();

    function task3(){
      let userNumber = prompt("Введите трёхзначное число");
      if (userNumber[0] == userNumber[1] || userNumber[0] == userNumber[2] || userNumber[1] == userNumber[2]){
        console.log("ok");
      } else {
        console.log("not ok")
      }
    }
    //task3();

    function task4(){
      let userYear = prompt("Введите год");
      if (userYear % 400 == 0 || (userYear % 4 == 0 && userYear % 100 !== 0)){
        console.log("Год високосный")
      } else {
        console.log("Год не високосный")
      }
    }
    //task4();

    function task5(){
      let userNumber = prompt("Введите пятизначное число");
      if (userNumber[0] == userNumber[4] && userNumber[1] == userNumber[3]){
        console.log("Палиндром")
      } else {
        console.log("Не палиндром")
      }
    }
    //task5();

    function task6() {
      let userChoice = prompt("Введите сумму в USD и валюту для перевода (eur, uah, azn)").split(" "),
          answer;
          if (userChoice[1] == "eur"){
            answer = userChoice[0] * 0.9;
          } else if (userChoice[1] == "uah"){
            answer = userChoice[0] * 24;
          } else if (userChoice[1] == "azn"){
            answer = userChoice[0] * 30;
          } 
          console.log(answer)
    }
    //task6();

    function task7() {
      let check = prompt("Введите сумму покупки");
      if (check >= 200 && check < 300){
        alert(`Сумма к оплате со скидкой: ${check * .97}`);
      } else if (check >= 300 && check < 500){
        alert(`Сумма к оплате со скидкой: ${check * .95}`);
      } else if (check >= 500){
        alert(`Сумма к оплате со скидкой: ${check * .93}`);
      }
    }
    //task7();

    function task8() {
      let userNum = prompt("Введите длину окружности и периметр квадрата через пробел").split(" "),
          diam = userNum[0] / 3.14,
          sqr = userNum[1] / 4;
      if (diam <= sqr){
          console.log("Окружность поместится в квадрате")
      } else {
          console.log("Окружность не поместится в квадрате")
      }
    }
    //task8();

})()