function assertFiniteNumber(value, name) {
  if (typeof value !== 'number' || !Number.isFinite(value)) {
    throw new TypeError(`${name} debe ser un número finito`);
  }
}

/**
 * Media móvil simple con ventana entera w (2 ≤ w ≤ series.length).
 * Resultado redondeado a 2 decimales.
 * Errores:
 *  - valores no numéricos -> TypeError
 *  - ventana fuera de rango -> RangeError
 */
function movingAverage(series, window) {
  if (!Array.isArray(series)) {
    throw new TypeError('series debe ser un arreglo');
  }
  if (series.length === 0) {
    throw new RangeError('series no puede estar vacía');
  }
  // Validar elementos
  for (let i = 0; i < series.length; i++) {
    assertFiniteNumber(series[i], `series[${i}]`);
  }

  // Validar ventana
  if (typeof window !== 'number' || !Number.isInteger(window)) {
    throw new TypeError('window debe ser un entero');
  }
  if (window < 2 || window > series.length) {
    throw new RangeError('window fuera de rango (2..series.length)');
  }

  const out = [];
  // Cálculo con suma rodante (O(n))
  let sum = 0;
  for (let i = 0; i < window; i++) sum += series[i];

  // primer promedio
  out.push(+((sum / window).toFixed(2)));

  for (let i = window; i < series.length; i++) {
    sum += series[i] - series[i - window];
    out.push(+((sum / window).toFixed(2)));
  }

  return out;
}

module.exports = { movingAverage };
