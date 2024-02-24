var inputText = document.querySelector(".input-text");
var outputText = document.querySelector(".output-text");
var consejo = document.querySelector(".consejo");
var mensaje = document.querySelector(".mensaje");

function validar(e) {
    var key = e.keyCode || e.which;
    var tecla = String.fromCharCode(key).toString();
    var letrasPermitidas = " abcdefghijklmnñopqrstuvwxyz";
    var teclaEnter = 13;
    var teclaEspecial = false;

    if(key == teclaEnter) {
        teclaEspecial = true;
    }
     
    if(letrasPermitidas.indexOf(tecla) == -1 && !teclaEspecial) {
        alert ("Por favor, ingresa solo letras minúsculas, sin acentos ni caracteres o números");
        return false;
    }
}


function encrypt(textoCapturado) {
    let llavesEncriptado = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    textoCapturado = textoCapturado.toLowerCase(); 

    for(i = 0; i < llavesEncriptado.length; i++) {
        if(textoCapturado.includes(llavesEncriptado[i][0])) {
            textoCapturado = textoCapturado.replaceAll(llavesEncriptado[i][0], llavesEncriptado[i][1]);
        }
    }
    
    return textoCapturado;
}

function encryptedText() {
    var textoEncriptado = encrypt(inputText.value);

    if(inputText.value.length == 0) {
        consejo.style.display = "inline-flex";  
        mensaje.style.display = "none";
        inputText.focus();
    } else {
        outputText.value = textoEncriptado; 
        inputText.value = ""; 
        consejo.style.display = "none";  
        mensaje.style.display = "inline-flex"; 
        outputText.focus();
    }
}


function decryptedText() {
    var textoDesencriptado = decrypt(inputText.value);

    if(inputText.value.length == 0) {
        consejo.style.display = "inline-flex"; 
        mensaje.style.display = "none"; 
        inputText.focus();
    } else {
        outputText.value = textoDesencriptado; 
        inputText.value = ""; 
        consejo.style.display = "none"; 
        mensaje.style.display = "inline-flex"; 
        outputText.focus();
    }
} 

function decrypt(textoCopiado) {
    let llavesEncriptacion = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    textoCopiado = textoCopiado.toLowerCase(); 
  
    for(i=0; i < llavesEncriptacion.length; i++) {
        if(textoCopiado.includes(llavesEncriptacion[i][1])) {
            textoCopiado = textoCopiado.replaceAll(llavesEncriptacion[i][1], llavesEncriptacion[i][0]);
        }
    }
    return textoCopiado;
}
function copy() {
    outputText.select(); 
    outputText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(outputText.value);
}

