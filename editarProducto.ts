import { productos } from "../data/database.ts";


export function editarProducto(id: number, nuevoNombre: string) {
  const producto = productos.find(p => p.id === id);
  if (!producto) {
    return 'Error: Producto no encontrado.';
  }
  producto.nombre = nuevoNombre;
  return `Producto "${nuevoNombre}" editado correctamente.`;
}

export function editarPrecioProducto(id: number, nuevoPrecio: number) {
  const producto = productos.find(p => p.id === id);
  if (!producto) {
    return 'Error: Producto no encontrado.';
  }
  producto.precio = nuevoPrecio;
  return `Precio del producto "${producto.nombre}" actualizado a ${nuevoPrecio}.`;
}

export function editarStockProducto(id: number, nuevoStock: number) {
  const producto = productos.find(p => p.id === id);
  if (!producto) {
    return 'Error: Producto no encontrado.';
  }
  producto.stock = nuevoStock;
  return `Stock del producto "${producto.nombre}" actualizado a ${nuevoStock}.`;
}
