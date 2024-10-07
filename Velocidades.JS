
function convertir() {
    
    let velocidad1 = Number(document.querySelector('#km').value);

    let opcion = document.querySelector('#operacion').value;

    
    const valorMTS = 1000;
    const valorMILLAS = 0.62;

    let resultado;

    
    switch(opcion) {
        case "1":
            resultado = velocidad1 * valorMTS;
            break;
        case "2":
            resultado = velocidad1 * valorMILLAS;
            break;
        case "0":
            resultado = "Seleccione una opción válida";
            break;
        
    }

    
    document.getElementById('resultado').innerText = "La velocidad convertida es de " + resultado;
}