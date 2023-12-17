document.addEventListener('DOMContentLoaded', function () {
  const elementos = [
    { idPrecio: 'precio', idQuantity: 'quantity', idTotal: 'total', idBtnIncrementar: 'btn-incrementar', idBtnDecrementar: 'btn-decrementar' },
    { idPrecio: 'precio-2', idQuantity: 'quantity-2', idTotal: 'total-2', idBtnIncrementar: 'btn-incrementar-2', idBtnDecrementar: 'btn-decrementar-2' }
  ];

  elementos.forEach((elemento) => {
    const precioElement = document.getElementById(elemento.idPrecio);
    const quantityElement = document.getElementById(elemento.idQuantity);
    const totalElement = document.getElementById(elemento.idTotal);
    const btnIncrementar = document.getElementById(elemento.idBtnIncrementar);
    const btnDecrementar = document.getElementById(elemento.idBtnDecrementar);

    const precio = parseFloat(precioElement.textContent.trim().replace(/[^\d.,]/g, '').replace(',', '.'));

    //calcular el total
    function calcularTotal() {
      const cantidad = parseInt(quantityElement.value, 10);
      const total = precio * cantidad;
      totalElement.textContent = `$${total.toFixed(2)}`;
      actualizarCarrito();
    }

    //incrementar la cantidad
    function incrementar() {
      let cantidad = parseInt(quantityElement.value, 10);
      cantidad = isNaN(cantidad) ? 0 : cantidad;
      quantityElement.value = cantidad + 1;
      calcularTotal();
    }

    //decrementar la cantidad
    function decrementar() {
      let cantidad = parseInt(quantityElement.value, 10);
      cantidad = isNaN(cantidad) ? 0 : cantidad;
      if (cantidad > 0) {
        quantityElement.value = cantidad - 1;
        calcularTotal();
      }
    }

    //botones de incrementar y decrementar
    btnIncrementar.addEventListener('click', incrementar);
    btnDecrementar.addEventListener('click', decrementar);

    //cantidad manualmente
    quantityElement.addEventListener('input', calcularTotal);
  });
});

//sección cart-carrito-3
function actualizarCarrito() {
  const cantidadElementos1 = parseFloat(document.getElementById('quantity').value);
  const precio1 = parseFloat(document.getElementById('precio').textContent.replace('precio: $', '').replace(',', ''));

  const cantidadElementos2 = parseFloat(document.getElementById('quantity-2').value);
  const precio2 = parseFloat(document.getElementById('precio-2').textContent.replace('precio: $', '').replace(',', ''));

  const cantidadTotal = cantidadElementos1 + cantidadElementos2;
  const subtotal = cantidadElementos1 * precio1 + cantidadElementos2 * precio2;
  const efectivo = 0;
  const total = subtotal + efectivo;

  document.getElementById('cantidad-elementos').querySelector('p').textContent = cantidadTotal;
  document.getElementById('subtotal').querySelector('p').textContent = `$ ${subtotal.toFixed(2)}`;
  document.getElementById('efectivo').querySelector('p').textContent = `$ ${efectivo.toFixed(2)}`;
  document.getElementById('total-cart-carrito-3').querySelector('p').textContent = `$ ${total.toFixed(2)}`;
}



document.addEventListener('DOMContentLoaded', function () {
  const eliminarBtn = document.querySelector('.cart-carrito-1 .eliminar');

  eliminarBtn.addEventListener('click', function () {
    const cartCarrito1 = document.querySelector('.cart-carrito-1');
    
    if (cartCarrito1) {
      cartCarrito1.remove(); // Elimina el elemento
      actualizarCarrito(); // Actualiza la sección cart-carrito-3
    }
  });
});


document.addEventListener('DOMContentLoaded', function () {
  const eliminarBtn = document.querySelector('.cart-carrito-2 .eliminar');

  eliminarBtn.addEventListener('click', function () {
    const cartCarrito2 = document.querySelector('.cart-carrito-2');
    
    if (cartCarrito2) {
      cartCarrito2.remove(); // Elimina el elemento
      actualizarCarrito(); // Actualiza la sección cart-carrito-3
    }
  });
});