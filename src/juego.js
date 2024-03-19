class juegoBolos {
    constructor() {
        this.puntaje = 0; // Inicialización del atributo puntaje en el constructor
    }

    lanzamiento(pinos) {
        this.puntaje += pinos; // Incrementar el puntaje con el valor de los pinos
    }

    getPuntaje() {
        return this.puntaje; // Devolver el puntaje actual
    }
}

module.exports = juegoBolos;
