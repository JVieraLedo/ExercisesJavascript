function crear_generacion(id){
    var pantalla = document.getElementById(id)
	Conejo.siguiente_generacion()
	for(var i in Conejo.conejos)
            pantalla.innerHTML += "Nombre del conejo: " + Conejo.conejos[i].nombre + " Padre: " + Conejo.conejos[i].padre + "<br>\n"
        pantalla.innerHTML += "<br>Siguiente generacion: <br><br>\n"
}
