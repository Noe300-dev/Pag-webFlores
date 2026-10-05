import { describe, it, expect } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useContador } from '../utils/useContador';

describe('2. Pruebas del Hook useContador (clase4)', () => {
  it('9. Inicia con el valor por defecto configurado', () => {
    const { result } = renderHook(() => useContador({ inicial: 2 }));
    expect(result.current.valor).toBe(2);
  });

  it('10. Incrementa y no supera el stock máximo', () => {
    const { result } = renderHook(() => useContador({ inicial: 4, min: 1, max: 5 }));
    act(() => result.current.incrementar());
    expect(result.current.valor).toBe(5);

    act(() => result.current.incrementar()); // no debe superar 5
    expect(result.current.valor).toBe(5);

    act(() => {
      result.current.decrementar();
      result.current.decrementar();
    });
    expect(result.current.valor).toBe(3);
  });
});