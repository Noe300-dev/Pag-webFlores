import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FlorCard from '../components/FlorCard';

describe('3. Pruebas de Componente FlorCard', () => {
  const florTest = {
    id: 10,
    codigo: 'FLOR-TEST',
    nombre: 'Tulipanes de Ensayo',
    categoria: 'Tulipanes',
    precio: 25000,
    stock: 2,
    stockCritico: 3,
    imagen: 'https://via.placeholder.com/150',
    descripcion: 'Flores frescas de invernadero'
  };

  it('11. Renderiza los datos y la etiqueta de stock crítico', () => {
    render(<FlorCard flor={florTest} onAgregarAlCarrito={() => {}} onVerDetalle={() => {}} />);
    expect(screen.getByText('Tulipanes de Ensayo')).toBeTruthy();
    expect(screen.getByText('$25.000')).toBeTruthy();
    expect(screen.getByText(/¡Solo 2 en stock!/i)).toBeTruthy();
  });

  it('12. Ejecuta la función mock al agregar al carrito', async () => {
    const user = userEvent.setup();
    const mockAgregar = vi.fn();

    render(<FlorCard flor={florTest} onAgregarAlCarrito={mockAgregar} onVerDetalle={() => {}} />);

    const boton = screen.getByRole('button', { name: /Agregar al Carrito/i });
    await user.click(boton);

    expect(mockAgregar).toHaveBeenCalledTimes(1);
    expect(mockAgregar).toHaveBeenCalledWith(florTest, 1);
  });
});