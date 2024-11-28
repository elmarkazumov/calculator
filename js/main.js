const buttonEquals = document.getElementById('button__equals');

function sum(firstNum, secondNum, selectedOperation){

    if(firstNum === '' || secondNum === ''){
        return alert('Введите числа!');
    } else {
        firstNum = Number(firstNum);
        secondNum = Number(secondNum);
    }
    
    if(Number.isFinite(firstNum) || Number.isFinite(secondNum)){
        console.log('На выходе числа!');
    } else{
        return alert('Введено некорректные значения');
    }

    let sumNum;

    switch (selectedOperation) {
        case "+":
            sumNum = firstNum + secondNum;
            break;
        case "-":
            sumNum = firstNum - secondNum;
            break;
        case "*":
            sumNum = firstNum * secondNum;
            break;
        case "/":
            sumNum = firstNum / secondNum;            
            break;

        default:
            alert('Выбран некорректный оператор');
    }

    if(Number.isNaN(sumNum)){
        alert('Попробуйте снова');
    } else{
        return sumNum;
    }
}

function saveNewResult(result){
    const divHistory = document.querySelector('.calc__results');
    const newResult = document.createElement('span');
    
    newResult.textContent = result;
    newResult.classList.add('calc__new-result')

    divHistory.prepend(newResult);

}

function deleteSelectedResult(){
    const divHistory = document.querySelectorAll('.calc__new-result');

    divHistory.forEach((result) => {
        result.addEventListener('click', ()=> {result.remove()});
    })
}

function calculation(){
    const selectOperation = document.getElementById('select__operation').value;
    const firstNumber = document.getElementById('first__number').value;
    const secondNumber = document.getElementById('second__number').value;
    const valueExpression = document.getElementById('value__expression');
    
    let calculateValue = Number((sum(firstNumber, secondNumber, selectOperation)).toFixed(2));

    valueExpression.textContent = calculateValue;

    saveNewResult(calculateValue);
    deleteSelectedResult();
}

buttonEquals.addEventListener('click', calculation);