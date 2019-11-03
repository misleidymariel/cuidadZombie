/* Para insipirarte para la implementacion del ZombieConductor podes usar
al ZombieCaminante de ejemplo. Tene en cuenta que tendra algunas diferencias.
Por ejemplo, la cantidad parametros que recibe su constructor. En ZombieConductor
no son exactamente los mismos parametros que en el objeto Enemigo, a diferencia
del ZombieCaminante que eran los mismos. */

var ZombieConductor = function(sprite, x, y, ancho, alto, velocidad, rangoMov, eje, maxX, maxY, direccion) {
  /* Completar constructor a partir de Enemigo */
  Enemigo.call(this, sprite, x, y, ancho, alto, velocidad, rangoMov, );
  /* No olvidar agregar la/s propiedad/es unicas de ZombieConductor necesarias */
  this.eje = eje;
  this.maxX = maxX;
  this.maxY = maxY;
  this.direccion = direccion; // si direccion es true, se mueve de izq a derecha o de arriba a abajo.
}

ZombieConductor.prototype = Object.create(Enemigo.prototype);
ZombieConductor.prototype.constructor = ZombieConductor;

/* Completar creacion del ZombieConductor */

/* Completar metodos para el movimiento y el ataque */
  ZombieConductor.prototype.mover = function (){
    
    if(this.eje == "horizontal") {
      if(this.direccion) {
        this.x += this.velocidad; // se mueve de izq a derecha.
      } else {
        this.x -= this.velocidad; // se mueve de der a izq.
      }
      
      if(this.x > this.maxX || this.x < -100 ) {
        this.direccion = !this.direccion;
      }
    }
    
    if(this.eje == "vertical"){
      if(this.direccion) {
        this.y += this.velocidad;
      } else {
        this.y -= this.velocidad; // se mueve de der a izq.
      }
      
      if(this.y > this.maxY || this.y < -100 ){
        this.direccion = !this.direccion;
      }
    }
   
  }
