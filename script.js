
const inputNumber = document.getElementById("inputNumber");
const inputDegree = document.getElementById("inputDegree");
const result = document.getElementById("result");

function getResult() {
    /*с помощью .value мы вытаскиваем значение, которое ввел пользователь в input и присваеваем эти значения переменным a и b*/
    let a = inputNumber.value;
    let b = inputDegree.value;
    /*проверка на то, чтобы в поля были введены значения, иначе остановить функцию*/
    if (a == "" || b == "") {
        alert("Введите число и степень");
        return;
    }

    let p = document.createElement('p'); //Создаёт новый элемент с заданным тегом каждый раз, когда вызывается функция

    p.classList.add('child'); //Метод add объекта classList позволяет добавлять CSS классы элементу. Добавили класс child 

    p.innerHTML = getDegree(a, b); //Свойство innerHTML позволяет получить и изменить текст элемента. В созданные параграфы записываем результат функции getDegree с ранее заданными a и b

    result.appendChild(p); //Метод appendChild позволяет вставить в конец родительского элемента другой элемент. родитель.appendChild(элемент). Т.е. помещаем созданные елементы в родителя result
}

function getDegree(number, degree) {
    let result = number;

    /*Любое число в степени 0 будет равно 1.*/
    if (degree == 0) {
        return 1;
    }

    /*Метод Math.abs возвращает модуль числа*/
    for (i = Math.abs(degree); i !== 1; i--) {
        result = number * result;
    }

    /*Проверяем на знак степени, если степень отрицательная, то вернуть 1/result*/
    if (degree > 0) {
        return result;
    }
    return 1 / result;

}
/*Если использовать цикл while*/
/*
function getDegreeWhile(number, degree) {
    let result = number;

    while (degree !== 1) {
        result = result * number
        degree--
    }

    return result
}
*/