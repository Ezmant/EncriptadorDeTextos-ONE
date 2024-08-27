const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

function validarTexto(texto) {
    const expresion = /^[a-z]+$/;
    return expresion.test(texto);
}

function mostrarAdvertencia() {
    alert("El texto solo debe contener letras minúsculas sin acentos ni caracteres especiales.");
    textArea.value = "";
}

function btnEncriptar(){
    const texto = textArea.value;
    if (validarTexto(texto)) {
        const textoEncriptado = encriptar(texto);
        mensaje.value = textoEncriptado;
        mensaje.style.backgroundImage = "none";
    } else {
        mostrarAdvertencia();
    }
}

function btnDesencriptar(){
    const texto = textArea.value;
    if (validarTexto(texto)) {
        const textoDesencriptado = desencriptar(texto);
        mensaje.value = textoDesencriptado;
        mensaje.style.backgroundImage = "none";
    } else {
        mostrarAdvertencia();
    }
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
    ];

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
    ];

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}

function copiarAlPortapapeles() {
    mensaje.select();
    document.execCommand('copy');
    alert('¡Texto copiado al portapapeles!');
}
