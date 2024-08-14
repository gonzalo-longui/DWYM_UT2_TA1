function repeatString(texto, repeticiones) {
    for (let i = 0; i < repeticiones; i++) {
        console.log(texto);
    };
};

let text = prompt("Ingresa un texto");
let repetitions = parseInt(prompt("Ingresa las repeticiones"));

repeatString(text, repetitions);