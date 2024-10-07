function valor() {
    let duracionLlamada = Number(document.querySelector('#duracion').value);
    const minutoAdicional = 150;
    const primerosCinco = 200;

    let costo;

    
    if (duracionLlamada >= 5) {
        costo = primerosCinco + (duracionLlamada - 5) * minutoAdicional;
        document.getElementById('costo').innerText = "El precio de la llamada es de: " + costo + " pesos";
    } else {
        
        costo = primerosCinco;
        document.getElementById('costo').innerText = "El valor de la llamada fue de: " + costo + " pesos";
    }
}