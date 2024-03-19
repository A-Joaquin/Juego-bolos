class juegoBolos {
    constructor() {
        this.puntaje = 0; // Inicialización del atributo puntaje en el constructor
        this.lanzamientos = new Array(21).fill(0);
        this.iteradorLanzam = 0;
    }

    lanzamiento(pinos) {
        this.lanzamientos[this.iteradorLanzam++] = pinos; // Incrementar el puntaje con el valor de los pinos
    }

    getPuntaje() {
        let i = 0;
        for (let frame = 0; frame < 10; frame++) {
          if (this.lanzamientos[i] + this.lanzamientos[i + 1] === 10) { // spare
            this.puntaje += 10 + this.lanzamientos[i + 2];
            i += 2;
          } else {
            this.puntaje += this.lanzamientos[i] + this.lanzamientos[i + 1];
            i += 2;
          }
        }
        return this.puntaje;
        
    }
    lanzamientosFuncion(NroLanzamientos,pinos)
    {
        for(let i=0;i<NroLanzamientos;i++)
        {
          this.lanzamiento(pinos);
        }
    }
}

module.exports = juegoBolos;
