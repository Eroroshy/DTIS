import { productos } from "../data/database.ts";

export function altaProducto(nombre: string, precio: number, stock: number) {
  const nuevoProducto = {
    id: productos.length + 1,
    nombre,
    precio,
    stock,
    activo: true
  };
  productos.push(nuevoProducto);
  return `Producto "${nombre}" dado de alta correctamente.`;
}
