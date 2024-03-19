const juegoBolos = require('./juego.js'); // Importar la clase desde el archivo 'juego.js'

describe("Juego De Bolos", () => {
  it("Iniciar clase Juego", () => {
    const juego = new juegoBolos(); // Crear una instancia de la clase 'juegoBolos'
    juego.lanzamiento(0)
    expect(juego.getPuntaje()).toEqual(0);
  });

  it("Deberia calcular los 20 lanzamientos", () => {
    const juego = new juegoBolos(); // Crear una instancia de la clase 'juegoBolos'
    juego.lanzamiento(0)
    expect(juego.getPuntaje()).toEqual(0);
  });

});
