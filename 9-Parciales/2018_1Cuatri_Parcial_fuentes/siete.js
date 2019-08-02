function mostrar() {
    var nota;
    var sexo;
    var acumulador = 0;
    var contador = 0;
    var promedio;
    var acumVar = 0;
    var acumNotMay6 = 0;
    var notMay6Var = 0;
    var acumMin=0

    while (contador < 5) {

        nota = parseInt(prompt("Ingrese nota de 0 a 10"));

        while (nota < 0 || nota > 10) {

            prompt("Error, ingrese nota entre 0 y 10");
        }

        sexo = prompt("Ingrese sexo f o m")

        while (sexo != "f" && sexo != "m") {

            prompt("Error, ingrese f o m")

        }

        contador = +1
    }

    acumulador = acumulador + nota;
    promedio = acumulador / contador;

    //if (nota > acumMin){

        


    

        acumNotMay6 = acumNotMay6 + nota > 6;
    //notas mayores a 6

    acumVar = acumVar + sexo == "m"
    //varones

    notMay6Var = acumVar + acumNotMay6
    //varones con nota mayor a 6

}
