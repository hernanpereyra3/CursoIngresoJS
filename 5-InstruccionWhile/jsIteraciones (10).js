function mostrar() {
	var contador = 0;
	var numero;
	var numeroDos;
	var suma;
	alert(numero);

	numeroDos = 12;
	suma = numero * numeroDos
	alert(suma);
	suma = "3";
	suma = 3;
	suma = "lalala";

	/*if (isNaN(suma)) {

		alert("error");

	} else {
		alert("bien")
	}*/
	while ((isNaN(suma)) || (suma < 0) || (suma)) {

		alert("error")
		suma = prompt("error, reingrese solo numeros")
	}
	alert("ingreso correcto" + suma)
	
	/*while(sexo!="f"&& sexo!="m"){


	}*/


}









//FIN DE LA FUNCIÓN