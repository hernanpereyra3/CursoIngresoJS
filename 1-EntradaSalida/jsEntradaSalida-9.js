/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{   var uno

    uno=document.getElementById("sueldo").value;

    sueldo=parseInt(uno)

    aumento=(uno*(1+(10/100)))

    

    document.getElementById("resultado").value=aumento
}
