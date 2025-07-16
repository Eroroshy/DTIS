import { productos } from '../data/database.ts';


export function bajaProducto(id: number): string {
  const producto = productos.find(p => p.id === id);
  if (!productos) {
    return 'Error: Producto no encontrado.';
  }
  if (!producto) {
    return 'Error: Producto no encontrado.';
  }
  if (!producto.activo) {
    return 'Error: El producto ya está dado de baja.';
  }
  producto.activo = false;
  return `Producto "${producto.nombre}" dado de baja correctamente.`;
}
