function resumen(){
    var hash = {}
    for(var palabra=0; palabra<arguments.length; palabra++)
	for(var letras=0; letras<arguments[palabra].length; letras++){
	    letra = arguments[palabra][letras]
	    if(letra == ' ')
	      continue
	    hash[letra] = hash[letra] || 0
	    hash[letra]++
	}
    return hash
}

function mostrar(letra){
    var mensaje = "Numero de letras: <br>"
    for(var n_letras in letra)
       mensaje += n_letras + "-" + letra[n_letras] + "<br>"
    //alert(mensaje)
	   return mensaje
}

function mostrar_nombres(){
    var nombres = document.getElementById("nombres").value
	nombres = mostrar(resumen(nombres))
    document.getElementById("muestra").innerHTML = nombres
}
