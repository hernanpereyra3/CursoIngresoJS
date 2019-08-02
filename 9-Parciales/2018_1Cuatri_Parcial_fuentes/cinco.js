function mostrar() {
    var planeta
    var mensaje
    

    planeta = prompt("ingrese planeta");
    
    switch (planeta) {
        
        case "la tierra":
            mensaje="Aca vivimos";
            break;

        case "mercurio":
        case "venus":
            mensaje="Aca hace mas calor";
            break;

        case "marte":
        case "jupiter":
        case "saturno":
        case "urano":
        case "neptuno":

            mensaje="Aca hace mas frio";
            break;

        default:
            

            alert(Mensaje);


    
        }

        }