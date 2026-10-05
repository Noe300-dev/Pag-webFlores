import { describe, it, expect } from 'vitest';
import {
  saludo,
  suma,
  formatearPrecio,
  aplicarDescuento,
  validarCorreo,
  calcularResumenCarrito
} from '../utils/floresUtils';

describe('1. Pruebas de Utilidades y Cálculos (clase4)', () => {
  it('1. Saludo retorna Hola ñeñe', () => {
    expect(saludo()).toBe('Hola ñeñe');
  });

  it('2. Suma retorna 17 por defecto', () => {
    expect(suma()).toBe(17);
  });

  it('3. Formatea precio con signo peso y separador de miles', () => {
    expect(formatearPrecio(1000)).toBe('$1.000');
    expect(formatearPrecio(29990)).toBe('$29.990');
    expect(formatearPrecio(0)).toBe('$0');
  });

  it('4. formatearPrecio lanza error si el valor no es un número', () => {
    expect(() => formatearPrecio('abc')).toThrow('Valor inválido');
    expect(() => formatearPrecio(NaN)).toThrow('Valor inválido');
  });

  it('5. Aplica descuentos porcentuales adecuadamente', () => {
    expect(aplicarDescuento(1000, 0)).toBe(1000);
    expect(aplicarDescuento(1000, 15)).toBe(850);
    expect(aplicarDescuento(1000, 100)).toBe(0);
  });

  it('6. aplicarDescuento lanza excepción si el porcentaje es menor a 0 o mayor a 100', () => {
    expect(() => aplicarDescuento(1000, -10)).toThrow();
    expect(() => aplicarDescuento(1000, 120)).toThrow();
  });

  it('7. Valida correos con dominios autorizados de Duoc UC y Gmail', () => {
    expect(validarCorreo('profesor@duocuc.cl')).toBe(true);
    expect(validarCorreo('docente@profesor.cl')).toBe(true);
    expect(validarCorreo('cliente@gmail.com')).toBe(true);
    expect(validarCorreo('invalido@yahoo.com')).toBe(false);
  });

  it('8. Calcula envío gratis si el subtotal supera los $35.000', () => {
    const items = [{ precio: 20000, cantidad: 2 }]; // $40.000
    const resumen = calcularResumenCarrito(items, 0, 3990);
    expect(resumen.subtotal).toBe(40000);
    expect(resumen.envio).toBe(0); // Despacho gratis
    expect(resumen.total).toBe(40000);
  });
});