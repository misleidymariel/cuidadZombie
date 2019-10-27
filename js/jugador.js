/* El objeto jugador es un objeto literal que se encuentra incompleto.
 Solo tiene asignadas algunas de sus propiedades y ningun metodo */
var Jugador = {
  /* el sprite contiene la ruta de la imagen
  */
  sprite: 'imagenes/auto_rojo_abajo.png',
  direction: Direcciones.ABAJO,
  x: 130,
  y: 160,
  ancho: 15,
  alto: 30,
  velocidad: 10,
  vidas: 5,
  // Hay que agregar lo que falte al jugador: movimientos, perdida de vidas,
  // y todo lo que haga falta para que cumpla con sus responsabilidades
  mover: function (movX, movY, sprite, nuevaDirection) {
    this.x += movX;
    this.y += movY;
    this.sprite = sprite;

    if ((this.direction == Direcciones.ABAJO || this.direction == Direcciones.ARRIBA)
      && (nuevaDirection == Direcciones.DERECHA || nuevaDirection == Direcciones.IZQUIERDA)) {

      var ancho = this.ancho;
      this.ancho = this.alto;
      this.alto = ancho;
    }
    if ((this.direction == Direcciones.DERECHA || this.direction == Direcciones.IZQUIERDA)
      && (nuevaDirection == Direcciones.ABAJO || nuevaDirection == Direcciones.ARRIBA)) {

      var ancho = this.ancho;
      this.ancho = this.alto;
      this.alto = ancho;
    }

    this.direction = nuevaDirection;
  },
  perderVidas: function(potencia) {
    console.log("potencia, ", potencia);
    this.vidas = this.vidas - potencia;
  }

}


