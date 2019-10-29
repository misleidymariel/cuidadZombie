/* Para insipirarte para la implementacion del ZombieConductor podes usar
al ZombieCaminante de ejemplo. Tene en cuenta que tendra algunas diferencias.
Por ejemplo, la cantidad parametros que recibe su constructor. En ZombieConductor
no son exactamente los mismos parametros que en el objeto Enemigo, a diferencia
del ZombieCaminante que eran los mismos. */

var ZombieConductor = function(sprite, x, y, ancho, alto, velocidad, rangoMov, direccion, maxX, maxY) {
  /* Completar constructor a partir de Enemigo */
  Enemigo.call(this, sprite, x, y, ancho, alto, velocidad, rangoMov, );
  /* No olvidar agregar la/s propiedad/es unicas de ZombieConductor necesarias */
  this.direccion = direccion;
  this.maxX = maxX;
  this.maxY = maxY;
}

ZombieConductor.prototype = Object.create(Enemigo.prototype);
ZombieConductor.prototype.constructor = ZombieConductor;

/* Completar creacion del ZombieConductor */

/* Completar metodos para el movimiento y el ataque */
  ZombieConductor.prototype.mover = function (){
    
    if(this.direccion == "horizontal"){
      this.x += this.velocidad;
      if(this.x > this.maxX){
        this.x = 0;
      }
    }
    if(this.direccion == "vertical"){
      this.y += this.velocidad;
      if(this.y > this.maxY){
        this.y = 0;
      }
    }
   
  }
