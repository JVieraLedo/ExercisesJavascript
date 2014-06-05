function mostrar_elemento(objeto){
    var elemento = objeto.value
    //vehiculo = vehiculo.options[vehiculo.selectedIndex].value

    elemento = eval ("new " + elemento + "()")
    var mostrar = document.getElementById("mostrador")
    mostrar.innerHTML = ""
    for(var i in elemento){
	if(i != "constructor")
	    mostrar.innerHTML += i + ": " + elemento[i] + "</br>\n"
    }

}
