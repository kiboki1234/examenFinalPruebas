// Validaciones y redondeos seguros:
function assertFiniteNumber(value, name) {
  if (typeof value !== 'number' || !Number.isFinite(value)) {
    throw new TypeError(`${name} debe ser un número finito`);
  }
}
function round1(n) {
  return Math.round(n * 10) / 10;
}

/**
 * °C = (°F − 32) × 5/9  → 1 decimal
 */
function toCelsius(f) {
  assertFiniteNumber(f, 'f');
  return round1((f - 32) * (5 / 9));
}

/**
 * °F = (°C × 9/5) + 32  → 1 decimal
 */
function toFahrenheit(c) {
  assertFiniteNumber(c, 'c');
  return round1(c * (9 / 5) + 32);
}

module.exports = { toCelsius, toFahrenheit };
