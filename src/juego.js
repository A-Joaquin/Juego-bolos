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
        let indiceFrame = 0;
        for (let frame = 0; frame < 10; frame++) {
          if (this.esSpare(indiceFrame)) { // spare
            this.puntaje += 10 + this.lanzamientos[indiceFrame + 2];
            indiceFrame += 2;
          } else {
            this.puntaje += this.lanzamientos[indiceFrame] + this.lanzamientos[indiceFrame + 1];
            indiceFrame += 2;
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
    esSpare(indiceFrame)
    {
        return (this.lanzamientos[indiceFrame] + this.lanzamientos[indiceFrame + 1] === 10);
    }
}

module.exports = juegoBolos;
