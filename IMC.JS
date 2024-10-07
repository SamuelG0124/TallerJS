function IMC()
{
    let kilogramos=Number (document.querySelector('#kg').value);
    let altura=Number(document.querySelector('#mts').value);

    let operacion= kilogramos / (altura*altura);

    operacion=operacion.toFixed(2);

    if (operacion < 18.5) {

        document.getElementById('mostrar').innerText= "Su imc es de "+operacion +" Bajo peso debe ir al nutricionista";
        
    }else if(operacion >= 18.5 && operacion < 25){
         document.getElementById('mostrar').innerText= "Su imc es de "+operacion +" Peso normal"
        
    }else if(operacion >=25 && operacion<30){
        document.getElementById('mostrar').innerText= "Su imc es de "+operacion +" Sobrepeso"

    }else {
        document.getElementById('mostrar').innerText= "Su imc es de "+operacion +" Usted esta Obeso, vaya al nutricionista"
    }
}