function Animal(age, place, weight){
    this.age = age
    this.place = place
    this.weight
}

Mammal.prototype = new Animal
Mammal.prototype.constructor = Mammal
function Mammal(tip, hair, name){
    this.tip = tip
    this.color_hair = hair
    this.name = name
}

Reptile.prototype = new Animal
Reptile.prototype.constructor = Reptile
function Reptile(tail, length){
    this.tail = tail
    this.length = length
}

Bird.prototype = new Animal
Bird.prototype.constructor = Bird
function Bird(feathers, wings){
    this.numbre_of_feathers = feathers
    this.wings = wings
}


Dog.prototype = new Mammal
Dog.prototype.constructor = Dog
function Dog(){
    Animal.call(this, 5, "Spain", 15)
    Mammal.call(this, 4, "dark", "spyke")
    this.fleas = 5    
}


Cat.prototype = new Mammal
Cat.prototype.constructor = Cat
function Cat() {
    Animal.call(this, 3, "Germany", 5)
    Mammal.call(this, 3, "Brown", "Murry")
    this.lives = 7
}

Lizart.prototype = new Reptile
Lizart.prototype.constructor = Lizart
function Lizart(){
    Animal.call(this, 150, "Japan", 800)
    Reptile.call(this, "yes", 200)
    this.name = "Godzilla"
}

Snake.prototype = new Reptile
Snake.prototype.constructor = Snake
function Snake(){
    Animal.call(this, 5, "India", 50)
    Reptile.call(this, "no", 15)
    this.vemon = "oxidoreductases"
}

Eagle.prototype = new Bird
Eagle.prototype.constructor = Eagle
function Eagle(){
    Animal.call(this, 3, "Spain", 60)
    Bird.call(this, 8000, 2)
    this.type_of_eagle = "Real"
}


