/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	var uno
    var dos
    
    uno=document.getElementById("numeroUno").value
    dos=document.getElementById("numeroDos").value

    uno=parseInt(uno);
    dos=parseInt(dos);
    
    suma=(uno+dos);

    alert("La suma es "+suma)
}

function restar()
{	var uno
    var dos
    
    uno=document.getElementById("numeroUno").value
    dos=document.getElementById("numeroDos").value

    uno=parseInt(uno);
    dos=parseInt(dos);
    
    restar=(uno-dos);

    alert("La resta es "+restar)
	
}

function multiplicar()
{ 	var uno
    var dos
    
    uno=document.getElementById("numeroUno").value
    dos=document.getElementById("numeroDos").value

    uno=parseInt(uno);
    dos=parseInt(dos);
    
    multiplicar=(uno*dos);

    alert("La multiplicacion es "+multiplicar)
	
}

function dividir()
{	var uno
    var dos
    
    uno=document.getElementById("numeroUno").value
    dos=document.getElementById("numeroDos").value

    uno=parseInt(uno);
    dos=parseInt(dos);
    
    dividir=(uno/dos);

    alert("La division es "+dividir)
	
}

