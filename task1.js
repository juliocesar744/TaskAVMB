let numbers = [1,2,3,4,5,5,5,1]

function getQtdOddNumbers(numbers) {
    return numbers.filter(num => num % 2 === 1).length;
}

getOddNumbers(numbers);