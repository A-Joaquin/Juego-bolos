const juegoBolos = require('./juego.js'); // Importar la clase desde el archivo 'juego.js'

describe("Juego De Bolos", () => {
  it("Iniciar clase Juego", () => {
    let juego = new juegoBolos(); // Crear una instancia de la clase 'juegoBolos'
    juego.lanzamiento(0)
    expect(juego.getPuntaje()).toEqual(0);
  });

  it("Deberia calcular puntaje de los 20 lanzamientos", () => {
    let juego = new juegoBolos(); // Crear una instancia de la clase 'juegoBolos'
    for(let i=0;i<20;i++)
    {
      juego.lanzamiento(0)
    }
    expect(juego.getPuntaje()).toEqual(0);
  });


  it("Deberia calcular puntaje de los 20 lanzamientos con 1 pino derribado", () => {
    let juego = new juegoBolos(); // Crear una instancia de la clase 'juegoBolos'
    for(let i=0;i<20;i++)
    {
      juego.lanzamiento(1)
    }
    expect(juego.getPuntaje()).toEqual(20);
  });
});
