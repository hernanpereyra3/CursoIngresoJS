/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
    var uno

    uno=document.getElementById("importe").value;

    sueldo=parseInt(uno)

    descuento=(uno*(1-(25/100)))

    

    document.getElementById("resultado").value=descuento
}
