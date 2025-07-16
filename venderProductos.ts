import { canasta } from "./seleccionarProducto.ts";


export function venderProductos() {
  let total = 0;
  for (const item of canasta) {
    const { producto, cantidad } = item;
    total += producto.precio * cantidad;
    producto.stock -= cantidad;
  }
  canasta.length = 0;
  return total;
}