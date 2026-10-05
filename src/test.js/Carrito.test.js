import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Carrito from '../components/Carrito';

describe('4. Pruebas del Carrito de Compras', () => {
  it('13. Muestra mensaje cuando el carrito está vacío', () => {
    render(
      <Carrito
        carrito={[]}
        isOpen={true}
        onClose={() => {}}
        onModificarCantidad={() => {}}
        onEliminarItem={() => {}}
        onVaciarCarrito={() => {}}
        onFinalizarCompra={() => {}}
      />
    );
    expect(screen.getByText('Tu carrito está vacío')).toBeTruthy();
  });

  it('14. Renderiza los productos y ejecuta el mock de eliminar', async () => {
    const user = userEvent.setup();
    const mockEliminar = vi.fn();
    const itemsMock = [
      { id: 1, nombre: 'Girasoles Sol', precio: 19990, cantidad: 1, stock: 5, imagen: 'https://via.placeholder.com/70' }
    ];

    render(
      <Carrito
        carrito={itemsMock}
        isOpen={true}
        onClose={() => {}}
        onModificarCantidad={() => {}}
        onEliminarItem={mockEliminar}
        onVaciarCarrito={() => {}}
        onFinalizarCompra={() => {}}
      />
    );

    expect(screen.getByText('Girasoles Sol')).toBeTruthy();
    const btnEliminar = screen.getByRole('button', { name: /Eliminar Girasoles Sol/i });
    await user.click(btnEliminar);

    expect(mockEliminar).toHaveBeenCalledWith(1);
  });
});