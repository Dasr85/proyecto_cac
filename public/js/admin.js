function mostrarFormulario() {
    const formulario = document.getElementById('formulario');
    formulario.classList.toggle('oculto');
}

function agregarProducto() {

    const codigo = document.getElementById('codigo').value;
    const nombre = document.getElementById('nombre').value;
    const categoria = document.getElementById('categoria').value;

    
    // Después de agregar el producto, vuelvo a cargar la tabla
    cargarProductos();
}

function editarProducto(id) {
    // Aquí abro un formulario de edición con los datos del producto.
    // console.log(Editar producto con ID ${id});
}

function eliminarProducto(id) {
    // Después de eliminar el producto, vuelvo a cargar la tabla.
    // Aquí solo actualizo la tabla con datos de ejemplo.
    // console.log(Eliminar producto con ID ${id});
    cargarProductos();
}