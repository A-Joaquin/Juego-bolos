const juegoBolos = require('./juego.js'); // Importar la clase desde el archivo 'juego.js'

describe("Juego De Bolos", () => {
  it("Iniciar clase Juego", () => {
    const juego = new juegoBolos(); // Crear una instancia de la clase 'juegoBolos'
    juego.jugada(1)
    expect(juego.getPuntaje()).toEqual(0);
  });
});
