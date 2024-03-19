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

  it("Deberia calcular puntaje de los 20 lanzamientos con spare incluido frame 1:5,5 frame 2:3,0 .... fraMe N:0,0", () => {
    let juego = new juegoBolos(); // Crear una instancia de la clase 'juegoBolos'
    juego.lanzamiento(5);
    juego.lanzamiento(5);
    juego.lanzamiento(3);
    juego.lanzamientosFuncion(17,0)
    expect(juego.getPuntaje()).toEqual(16);
  });

  it("Deberia calcular puntaje de los 20 lanzamientos con strike incluido", () => {
    let juego = new juegoBolos(); // Crear una instancia de la clase 'juegoBolos'
    juego.lanzamiento(10);
    juego.lanzamiento(3);
    juego.lanzamiento(4);
    juego.lanzamientosFuncion(16,0)
    expect(juego.getPuntaje()).toEqual(24);
  });
});

