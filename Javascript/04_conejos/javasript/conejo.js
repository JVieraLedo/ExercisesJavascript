function Conejo(padre, nombre){
    this.padre = padre
    this.nombre = nombre
}

Conejo.conejos = []
Conejo.siguiente_conejo = 0

Conejo.siguiente_generacion = function(){
    for(var i in Conejo.conejos){
	for(var hijos=0; hijos<2; hijos ++){
	    var nombre = "conejo" + Conejo.siguiente_conejo
            eval ("var conejo" + Conejo.siguiente_conejo + "= new Conejo(Conejo.conejos[i].nombre, nombre)")
            Conejo.conejos.push(eval("conejo" + Conejo.siguiente_conejo))
            Conejo.siguiente_conejo++
	}
    }
}

var conejo1 = new Conejo("", "conejo1")
var conejo2  = new Conejo("", "conejo2")
Conejo.conejos.push(conejo1)
Conejo.conejos.push(conejo)
