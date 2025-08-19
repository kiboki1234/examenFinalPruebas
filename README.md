# Clima & Conversión

Funciones:
- `toCelsius(f)` y `toFahrenheit(c)` (1 decimal, valida número finito)
- `movingAverage(series, window)` (2 decimales, valida tipos y rango)

## Scripts
- `npm run lint`
- `npm test` (cobertura ≥ 80%)
- `npm run ci` (lint + test)

## CI/CD
- CI en PR/push a main (lint+tests+coverage).
- Preview en PR (Firebase Hosting).
- Live al merge a main.

### Secrets
- `FIREBASE_SERVICE_ACCOUNT`: JSON de servicio (Admin SDK)
- `FIREBASE_PROJECT_ID`: id del proyecto

## Evidencias (para tu PDF)
1. **PR con CI en verde** + comentario de GitHub Action con **URL de preview**.
2. **Capturas de error**:
   - Lint fallando (introduce un `;` faltante y ejecuta CI).
   - Pruebas fallando (cambia un valor esperado) y ejecuta CI.
3. **Capturas del run de CI**:
   - Lint OK.
   - Resumen de tests **con cobertura ≥ 80%** (pantalla de jest/summary).
4. **Deploy Live**:
   - Captura del job `Deploy Firebase Hosting` en push a `main`.
   - **URL productiva** y **commit/sha** mostrado por la acción.
# examenFinalPruebas
