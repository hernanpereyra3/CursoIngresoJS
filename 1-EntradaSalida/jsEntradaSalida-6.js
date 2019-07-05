/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{   var uno;
    var dos; 
    
    uno = document.getElementById("numeroUno").value;
    dos = document.getElementById("numeroDos").value;

    valor1 = parseInt(uno);
    valor2 = parseInt(dos);
    
    suma=(valor1 + valor2)

    alert("El resultado es " + suma);
    
}

