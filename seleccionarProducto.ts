import { productos} from "../data/database.ts";


export function seleccionarProducto(id: number, cantidad: number) {
  const producto = productos.find(p => p.id === id);
  if (!producto) {
    return 'Error: Producto no encontrado.';
  }
  if (cantidad > producto.stock) {
    return 'Error: Stock insuficiente.';
  }
  canasta.push({ producto, cantidad });
  return `Producto "${producto.nombre}" seleccionado correctamente.`;
}

export let canasta: { producto: any; cantidad: number }[] = [];