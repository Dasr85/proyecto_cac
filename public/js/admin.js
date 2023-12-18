document.addEventListener('DOMContentLoaded', function () {
    cargarProductos();
});

function cargarProductos() {
    // Lógica para cargar productos desde la base de datos 

    const productos = [
        { id: 1, codigo: 'STW001001', nombre: 'Baby Yoda Blueball', categoria: 'STAR WARS' },
        { id: 2, codigo: 'STW001002', nombre: 'Boba Fett Fighter', categoria: 'STAR WARS' },
        { id: 3, codigo: 'STW001003', nombre: 'Luke Skylwalker & Grogu', categoria: 'STAR WARS' },
        { id: 4, codigo: 'STW001004', nombre: 'Stormtrooper Lightsaber', categoria: 'STAR WARS' },
        { id: 5, codigo: 'PKM001001', nombre: 'Charmander Smiley', categoria: 'POKEMON' },
        { id: 6, codigo: 'PKM001002', nombre: 'Dragonite Hi!', categoria: 'POKEMON' },
        { id: 7, codigo: 'PKM001003', nombre: 'Pidgeotto Flying', categoria: 'POKEMON' },
        { id: 8, codigo: 'PKM001004', nombre: 'Pikachu Smiley', categoria: 'POKEMON' },
        { id: 9, codigo: 'PKM001005', nombre: 'Vulpix Fancy', categoria: 'POKEMON' },
        { id: 10, codigo: 'HPT001001', nombre: 'Harry Potter & Hegwid', categoria: 'HARRY POTTER' },
        { id: 11, codigo: 'HPT001002', nombre: 'Herminione Ball Dress', categoria: 'HARRY POTTER' },
        { id: 12, codigo: 'HPT001003', nombre: 'Luna Lovegood Lion Mask', categoria: 'HARRY POTTER' },
        { id: 13, codigo: 'HPT001004', nombre: 'Snape Patronus', categoria: 'HARRY POTTER' },
    ];

    const tbody = document.getElementById('product_table_body');
    tbody.innerHTML = '';

    productos.forEach(producto => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${producto.id}</td>
            <td>${producto.codigo}</td>
            <td>${producto.nombre}</td>
            <td>${producto.categoria}</td>
            <td id="botones">
            <button id="icono__editar" onclick="editarProducto(${producto.id})"><iconify-icon id="icono__borrar" icon="bxs:pencil" width="20" style="color: #1d84b5;"></iconify-icon></button>
            <button id="icono__borrar" onclick="eliminarProducto(${producto.id})"><iconify-icon id="icono__borrar" icon="bxs:trash" width="20" style="color: #f33;"></iconify-icon></button>
        
            </td>
        `;
        tbody.appendChild(row);
    });
}

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