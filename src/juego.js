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
          if(this.esStrike(indiceFrame))
          {
            this.puntaje+=10+this.strikeBonus(indiceFrame);
            indiceFrame++;
          }
          else if (this.esSpare(indiceFrame)) { // spare
            this.puntaje += 10 + this.spareBonus(indiceFrame)
            indiceFrame += 2;
          } else {
            this.puntaje += this.sumaDeLasBolasEnFrame(indiceFrame);
            indiceFrame += 2;
          }
        }
        //console.log(this.puntaje);
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
        return (this.lanzamientos[indiceFrame] + this.lanzamientos[indiceFrame + 1] == 10);
    }
    spareBonus(indiceFrame)
    {
        return this.lanzamientos[indiceFrame + 2];
    }
    esStrike(indiceFrame)
    {
        return this.lanzamientos[indiceFrame] === 10;
    }
    strikeBonus(indiceFrame)
    {
        return this.lanzamientos[indiceFrame + 1] + this.lanzamientos[indiceFrame + 2];
    }
    sumaDeLasBolasEnFrame(indiceFrame)
    {
        return this.lanzamientos[indiceFrame] + this.lanzamientos[indiceFrame + 1];
    }

}

module.exports = juegoBolos;
