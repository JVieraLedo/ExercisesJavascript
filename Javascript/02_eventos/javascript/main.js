function colorear_submenu(submenu){
     submenu.style.backgroundColor = 'red'
     submenu.style.color = '#000'
}
function descolorear(entidad){
     entidad.style.backgroundColor = null
     entidad.style.color = null
}

function colorear_menu(menu){
     menu.style.backgroundColor = 'red'
     menu.style.color = '#000'
}

    var temporizador = 0
    var abrir
function desplegar(clase){
    clearTimeout(temporizador)
	//document.getElementById('menu').style.height = '100%'
        abrir = document.getElementsByClassName(clase)
	for(var i=0; i<abrir.length; i++){
           abrir[i].style.visibility = 'visible'
	}
}

function ocultar_menu(){
    temporizador = setTimeout(ocultalo, 2000)
    function ocultalo(){
	//document.getElementById('menu').style.height = null
        for(i=0; i<abrir.length; i++){
            abrir[i].style.visibility = 'hidden'
	}
    }
}
