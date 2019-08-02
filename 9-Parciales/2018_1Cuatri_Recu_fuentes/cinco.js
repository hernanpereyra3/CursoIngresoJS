function mostrar() {
    var dia
    dia = prompt("ingrese dia")

    switch(dia){
    case"lunes":
    case"martes":
    case"miercoles":
    case"jueves":
    case"viernes":
        alert("A trabajar")
        break;

    case"sabado":
    case"domingo":
        alert("Buen finde")
        break;

        default:

        alert("no es valido")
        break;
    }
}
