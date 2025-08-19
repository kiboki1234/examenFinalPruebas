const { toCelsius, toFahrenheit, movingAverage } = require('../index');

describe('toCelsius', () => {
  test('32°F → 0.0°C', () => {
    expect(toCelsius(32)).toBeCloseTo(0.0, 1);
  });
  test('−40°F → −40.0°C', () => {
    expect(toCelsius(-40)).toBeCloseTo(-40.0, 1);
  });
  test('98.6°F → 37.0°C (redondeo 1 decimal)', () => {
    expect(toCelsius(98.6)).toBeCloseTo(37.0, 1);
  });
  test('TypeError cuando no es número finito', () => {
    expect(() => toCelsius('a')).toThrow(TypeError);
    expect(() => toCelsius(Infinity)).toThrow(TypeError);
  });
});

describe('toFahrenheit', () => {
  test('0°C → 32.0°F', () => {
    expect(toFahrenheit(0)).toBeCloseTo(32.0, 1);
  });
  test('100°C → 212.0°F', () => {
    expect(toFahrenheit(100)).toBeCloseTo(212.0, 1);
  });
  test('−40°C → −40.0°F', () => {
    expect(toFahrenheit(-40)).toBeCloseTo(-40.0, 1);
  });
  test('TypeError cuando no es número finito', () => {
    expect(() => toFahrenheit(null)).toThrow(TypeError);
    expect(() => toFahrenheit(NaN)).toThrow(TypeError);
  });
});

describe('movingAverage', () => {
  test('[10,20,30,40], w=2 → [15.00, 25.00, 35.00]', () => {
    const res = movingAverage([10, 20, 30, 40], 2);
    expect(res.length).toBe(3);
    expect(res[0]).toBeCloseTo(15.0, 2);
    expect(res[1]).toBeCloseTo(25.0, 2);
    expect(res[2]).toBeCloseTo(35.0, 2);
  });

  test('[1,2,3], w=3 → [2.00]', () => {
    const res = movingAverage([1, 2, 3], 3);
    expect(res).toHaveLength(1);
    expect(res[0]).toBeCloseTo(2.0, 2);
  });

  test('redondeo a 2 decimales', () => {
    const res = movingAverage([1, 2, 2], 2); 
    expect(res[0]).toBeCloseTo(1.5, 2);
    expect(res[1]).toBeCloseTo(2.0, 2);
  });

  test('TypeError por valores no numéricos', () => {
    expect(() => movingAverage([1, 'x', 3], 2)).toThrow(TypeError);
    expect(() => movingAverage('no array', 2)).toThrow(TypeError);
    expect(() => movingAverage([1, 2, 3], 2.5)).toThrow(TypeError);
  });

  test('RangeError por ventana fuera de rango', () => {
    expect(() => movingAverage([1, 2], 1)).toThrow(RangeError);
    expect(() => movingAverage([1, 2], 3)).toThrow(RangeError);
  });
});
