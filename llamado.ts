import promptSync from 'prompt-sync';
const prompt = promptSync();

import { altaProducto } from '../functions/altaProducto.ts';
import { bajaProducto } from '../functions/bajaProducto.ts';
import { editarProducto } from '../functions/editarProducto.ts';
import { editarPrecioProducto } from '../functions/editarProducto.ts';
import { editarStockProducto } from '../functions/editarProducto.ts';
import { seleccionarProducto, canasta } from '../functions/seleccionarProducto.ts';
import { venderProductos } from '../functions/venderProductos.ts';
import { productos } from '../data/database.ts';

let salir = false;

while (!salir) {
  console.log('\n--- Menú Punto de Venta ---');
  console.log('1. Dar de alta producto.ts');
  console.log('2. Dar de baja producto.ts');
  console.log('3. Editar producto.ts');
  console.log('4. Seleccionar producto.ts');
  console.log('5. Vender productos.ts');
  console.log('6. Ver productos.ts');
  console.log('0. Salir');
  const opcion = prompt('Elige una opción: ');

  switch (opcion) {
    case '1':
      const nombre = prompt('Nombre: ');
      const precio = Number(prompt('Precio: '));
      const stock = Number(prompt('Stock: '));
      altaProducto(nombre, precio, stock);
      break;
    case '2':
      const idBaja = Number(prompt('ID del producto a dar de baja: '));
      bajaProducto(idBaja);
      break;
    case '3':
      const idEdit = Number(prompt('ID del producto a editar: '));
      const nuevoNombre = prompt('Nuevo nombre: ');
      const nuevoPrecio = Number(prompt('Nuevo precio: '));
      const nuevoStock = Number(prompt('Nuevo stock: '));
      editarProducto(idEdit, nuevoNombre);
      editarPrecioProducto(idEdit, nuevoPrecio);
      editarStockProducto(idEdit, nuevoStock);
      break;
    case '4':
      const idSel = Number(prompt('ID del producto a seleccionar: '));
      const cantidadSel = Number(prompt('Cantidad: '));
      seleccionarProducto(idSel, cantidadSel);
      break;
    case '5':
      const total = venderProductos();
      console.log('Productos vendidos:', canasta);
      console.log('Total a pagar:', total);
      break;
    case '6':
      console.log('Productos:', productos);
      break;
    case '0':
      salir = true;
      break;
    default:
      console.log('Opción no válida');
  }
}