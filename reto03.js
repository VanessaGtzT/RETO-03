let fecha = new Date();
let today = fecha.getDay();
let hours = fecha.getHours();

today = 1;
hours = 19;

function businessHours(day,hour){
    let dmessage = " ";
    let hmessage = " ";
    if(day >= 1 && day <= 5 ){
        dmessage = "Día laboral "
        if(hour >=9 && hour <= 18){
            hmessage = " hora laboral";
        } else {
            hmessage = " hora no laboral"
        }
    } else {
        dmessage = "Día no laboral "
    }
    return dmessage + hmessage;
}

console.log(businessHours(today,hours));


//reto mascotas
//gatos
function gatitos(edad){
   let equivalencia;
       equivalencia = edad * 4;

       return "La edad humana de tu gato es:  " + equivalencia;

    if(equivalencia >= 16){
        console.log ("Tu gato ya es adulto");
    }else{
        console.log("Tu gato ta chiquito");
    }    
    return "La edad humana de tu gato es:" + equivalencia;
    
}

console.log(gatitos(3))

//perros
function perritos(edad){
    let equivalencia;
        equivalencia = edad * 7;
 
        return "La edad humana de tu perro es:  " + equivalencia;
 
     if(equivalencia >= 16){
         console.log ("Tu perro ya es adulto");
     }else{
         console.log("Tu perro ta chiquito");
     }    
     return "La edad humana de tu perro es:" + equivalencia;
     
 }
 
 console.log(perritos(3))




