const {crearAlumno} = require('./alumno');

describe('toEqual crearAlumno', () => {
    test('Happy path: toEqual', () => {
        expect(crearAlumno('Ana', 20)).toEqual(
            { nombre: 'Ana', edad: 20 });
    });

    test('Sad path: lanzar error datos invalidos', () => {
        expect(() => crearAlumno(null, 20)).toThrow('Nombre invalido');
        expect(() => crearAlumno('Maria', -20)).toThrow('Edad invalida');
    });
});
