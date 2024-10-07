function temp(){

    let temperatura=Number (document.querySelector('#temperatura').value);

    let opciones =document.querySelector('#opciones').value;

    let resultado
    switch(opciones){
        case "0":
            resultado="Seleccione una opción";
            break;
        case "1":
            resultado= (temperatura * 9/5)+32;
            console.log(resultado)
            if(resultado <= 32){
                document.getElementById ('texto').innerText="La tempeartura es de "+resultado+" Nos congelamos";
            }else if(resultado >=33 && resultado <= 50){
                document.getElementById ('texto').innerText="La tempeartura es de "+resultado+" Esta haciendo frio";
            }else if(resultado >= 51 && resultado <=77){
                document.getElementById ('texto').innerText="La tempeartura es de "+resultado+" Esta templado el dia";
            }else if(resultado>77){  document.getElementById ('texto').innerText="La tempeartura es de "+resultado+" Tienes fiebre o es el apocalipsis";}


            break;
            
            
        case "2":
            resultado=  (temperatura - 32) / 1.8;
            console.log(resultado)
            if(resultado <= 0){
                document.getElementById ('texto').innerText="La tempeartura es de "+resultado+" Nos congelamos";
            }else if(resultado >=5 && resultado <= 15){
                document.getElementById ('texto').innerText="La tempeartura es de "+resultado+" Esta haciendo frio";
            }else if(resultado >= 16 && resultado <=25){
                document.getElementById ('texto').innerText="La tempeartura es de "+resultado+" Esta templado el dia";
            }else if(resultado>26){  document.getElementById ('texto').innerText="La tempeartura es de "+resultado+" Tienes fiebre o es el apocalipsis";}
            

    }

   

    

    






}