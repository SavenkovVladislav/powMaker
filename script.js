
const inputNumber = document.getElementById("inputNumber");
const inputDegree = document.getElementById("inputDegree");
const result = document.getElementById("result");

function getResult() {
    let a = inputNumber.value;
    let b = inputDegree.value;
    if (a == "" || b == "") {
        alert("Введите число и степень");
        return;
    }

    let p = document.createElement('p');
    p.classList.add('child');
    p.innerHTML = getDegreeWhile(a, b);
    result.appendChild(p);
}

function getDegree(number, degree) {
    let result = number;

    if (degree == 0) {
        return 1;
    }

    for (i = Math.abs(degree); i !== 1; i--) {
        result = number * result;
    }

    if (degree > 0) {
        return result;
    }
    return 1 / result;

}

function getDegreeWhile(number, degree) {
    let result = number;

    while (degree !== 1) {
        result = result * number
        degree--
    }

    return result
}