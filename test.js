// Importar la función sum del archivo app.js
const { suma } = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = suma(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

test("One euro should be 1.16 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.16 dólares, entonces 3.5 euros debe ser (3.5 * 1.16)
    const expected = 3.5 * 1.16;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.06); // 1 euro son 1.16 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.16)
})

test("One dollar should be 153.99 yens", function() {
    // Importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js');

    // Uso la función como debe ser usada
    const yens = fromDollarToYen(3.5);

    // Si 1 dollar son 153.99 yens, entonces 3.5 dollars debe ser (3.5 * 153.99)
    const expected = 3.5 * 153.99;

    // Hago mi comparación (la prueba)
    expect(fromDollarToYen(3.5)).toBe(538.965); // 1 dollar son 153.99 yens, entonces 3.5 dollars deberían ser = (3.5 * 153.99)
})

test("One yen should be 0.0049 pounds", function() {
    // Importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js');

    // Uso la función como debe ser usada
    const pounds = fromYenToPound(3.5);

    // Si 1 yen son 0.0049 pounds, entonces 3.5 yens debe ser (3.5 * 0.0049)
    const expected = 3.5 * 0.0049;

    // Hago mi comparación (la prueba)
    expect(fromYenToPound(3.5)).toBe(0.01715); // 1 yen son 0.0049 pounds, entonces 3.5 yens deberían ser = (3.5 * 0.0049)
})