import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import DetalleModal from './DetalleModal';
import Carrito from './Carrito';
import AuthModal from './AuthModal';

import Home from './Home';
import Catalogo from './Catalogo';
import PersonalizarRamo from './PersonalizarRamo';
import MisPedidos from './MisPedidos';
import Blog from './Blog';
import Nosotros from './Nosotros';
import Contacto from './Contacto';
import AdminDashboard from './AdminDashboard';

import { floresIniciales, blogInicial, usuariosIniciales } from './js/floresData';

export default function App() {
  const [paginaActual, setPaginaActual] = useState('inicio');

  // Estados sincronizados con LocalStorage
  const [flores, setFlores] = useState(() => {
    const s = localStorage.getItem('floresya_catalogo');
    return s ? JSON.parse(s) : floresIniciales;
  });

  const [usuarios, setUsuarios] = useState(() => {
    const s = localStorage.getItem('floresya_usuarios');
    return s ? JSON.parse(s) : usuariosIniciales;
  });

  const [usuarioActual, setUsuarioActual] = useState(() => {
    const s = localStorage.getItem('floresya_sesion');
    return s ? JSON.parse(s) : null;
  });

  const [carrito, setCarrito] = useState(() => {
    const s = localStorage.getItem('floresya_carrito');
    return s ? JSON.parse(s) : [];
  });

  const [pedidos, setPedidos] = useState(() => {
    const s = localStorage.getItem('floresya_pedidos');
    return s ? JSON.parse(s) : [];
  });

  // Modales
  const [florDetalle, setFlorDetalle] = useState(null);
  const [carritoAbierto, setCarritoAbierto] = useState(false);
  const [authAbierto, setAuthAbierto] = useState(false);

  useEffect(() => {
    localStorage.setItem('floresya_catalogo', JSON.stringify(flores));
  }, [flores]);

  useEffect(() => {
    localStorage.setItem('floresya_usuarios', JSON.stringify(usuarios));
  }, [usuarios]);

  useEffect(() => {
    localStorage.setItem('floresya_carrito', JSON.stringify(carrito));
  }, [carrito]);

  useEffect(() => {
    localStorage.setItem('floresya_pedidos', JSON.stringify(pedidos));
  }, [pedidos]);

  useEffect(() => {
    if (usuarioActual) {
      localStorage.setItem('floresya_sesion', JSON.stringify(usuarioActual));
    } else {
      localStorage.removeItem('floresya_sesion');
    }
  }, [usuarioActual]);

  // Carrito handlers
  const agregarAlCarrito = (flor, cantidad = 1) => {
    setCarrito((prev) => {
      const idx = prev.findIndex((i) => i.id === flor.id);
      if (idx !== -1) {
        const nuevo = [...prev];
        const cant = Math.min(nuevo[idx].cantidad + cantidad, flor.stock);
        nuevo[idx] = { ...nuevo[idx], cantidad: cant };
        return nuevo;
      }
      return [...prev, { ...flor, cantidad }];
    });
  };

  const modificarCantidad = (id, nuevaCant) => {
    if (nuevaCant <= 0) {
      eliminarItem(id);
      return;
    }
    setCarrito((prev) => prev.map((it) => (it.id === id ? { ...it, cantidad: nuevaCant } : it)));
  };

  const eliminarItem = (id) => {
    setCarrito((prev) => prev.filter((it) => it.id !== id));
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  const finalizarCompra = (nuevoPedido) => {
    // Descontar stock
    setFlores((prev) =>
      prev.map((f) => {
        const comprado = carrito.find((c) => c.id === f.id);
        if (comprado) {
          return { ...f, stock: Math.max(0, f.stock - comprado.cantidad) };
        }
        return f;
      })
    );

    setPedidos((prev) => [nuevoPedido, ...prev]);
    vaciarCarrito();
    alert(`¡Pedido ${nuevoPedido.id} generado exitosamente! Puedes revisarlo en la sección "Mis Pedidos".`);
    setPaginaActual('mis-pedidos');
  };

  // Admin handlers
  const agregarFlor = (nueva) => setFlores((prev) => [nueva, ...prev]);
  const actualizarFlor = (editada) => setFlores((prev) => prev.map((f) => (f.id === editada.id ? editada : f)));
  const eliminarFlor = (id) => {
    if (window.confirm('¿Seguro que deseas eliminar esta flor?')) {
      setFlores((prev) => prev.filter((f) => f.id !== id));
    }
  };

  const registrarUsuario = (nuevo) => setUsuarios((prev) => [...prev, nuevo]);
  const actualizarUsuario = (editado) => setUsuarios((prev) => prev.map((u) => (u.id === editado.id ? editado : u)));
  const eliminarUsuario = (id) => {
    if (window.confirm('¿Eliminar usuario?')) {
      setUsuarios((prev) => prev.filter((u) => u.id !== id));
    }
  };

  const cerrarSesion = () => {
    setUsuarioActual(null);
    if (paginaActual === 'admin') setPaginaActual('inicio');
  };

  const totalItems = carrito.reduce((acc, it) => acc + it.cantidad, 0);

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar
        paginaActual={paginaActual}
        setPaginaActual={setPaginaActual}
        totalItemsCarrito={totalItems}
        usuarioActual={usuarioActual}
        onAbrirCarrito={() => setCarritoAbierto(true)}
        onAbrirAuth={() => setAuthAbierto(true)}
        onCerrarSesion={cerrarSesion}
      />

      <main className="flex-grow-1">
        {paginaActual === 'inicio' && (
          <Home
            flores={flores}
            onAgregarAlCarrito={agregarAlCarrito}
            onVerDetalle={(f) => setFlorDetalle(f)}
            setPaginaActual={setPaginaActual}
          />
        )}

        {paginaActual === 'catalogo' && (
          <Catalogo
            flores={flores}
            onAgregarAlCarrito={agregarAlCarrito}
            onVerDetalle={(f) => setFlorDetalle(f)}
          />
        )}

        {paginaActual === 'personalizar' && (
          <PersonalizarRamo onAgregarAlCarrito={agregarAlCarrito} />
        )}

        {paginaActual === 'mis-pedidos' && (
          <MisPedidos pedidos={pedidos} setPaginaActual={setPaginaActual} />
        )}

        {paginaActual === 'blog' && <Blog articulos={blogInicial} />}

        {paginaActual === 'nosotros' && <Nosotros />}

        {paginaActual === 'contacto' && <Contacto />}

        {paginaActual === 'admin' && (
          <AdminDashboard
            flores={flores}
            onAgregarFlor={agregarFlor}
            onActualizarFlor={actualizarFlor}
            onEliminarFlor={eliminarFlor}
            usuarios={usuarios}
            onActualizarUsuario={actualizarUsuario}
            onEliminarUsuario={eliminarUsuario}
          />
        )}
      </main>

      <Footer setPaginaActual={setPaginaActual} />

      {florDetalle && (
        <DetalleModal
          flor={florDetalle}
          onClose={() => setFlorDetalle(null)}
          onAgregarAlCarrito={agregarAlCarrito}
        />
      )}

      <Carrito
        carrito={carrito}
        isOpen={carritoAbierto}
        onClose={() => setCarritoAbierto(false)}
        onModificarCantidad={modificarCantidad}
        onEliminarItem={eliminarItem}
        onVaciarCarrito={vaciarCarrito}
        onFinalizarCompra={finalizarCompra}
      />

      <AuthModal
        isOpen={authAbierto}
        onClose={() => setAuthAbierto(false)}
        usuarios={usuarios}
        onLoginExitoso={(u) => setUsuarioActual(u)}
        onRegistrarUsuario={registrarUsuario}
      />
    </div>
  );
}