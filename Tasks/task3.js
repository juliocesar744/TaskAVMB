let key = "Teste"
let value = 32

function mountArray(key, value) {
    let newObject = {};
    newObject[key] = value;

    return newObject;
}

mountArray(key, value);