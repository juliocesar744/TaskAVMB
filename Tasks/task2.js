let word = "teste"

function isAPalindromo(word) {
    let wordReverse = word.split("").reverse().join("");
    if (wordReverse === word){
        return true;
    } else {
        return false;
    }
}

console.log(isAPalindromo(word));