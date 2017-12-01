$(document).ready(function() {
  var db = firebase.database()
  var datatable = $('#example').DataTable()
  // Obtiene la lista de productos
  db.ref('productos').on('value', function(productos) {
    render_producto(productos)
  })

  // Obtiene un producto seleccionado
  $(document).on('click', '.editar', function() {
    var data = datatable.row($(this).parents('tr')).data()
    db.ref('productos/' + data.id).once('value', function(producto) {
      producto = producto.val()
      $('#id').val(data.id)
      $('#nombre').val(producto.nombre)
      $('#miligramos').val(producto.miligramos)
      $('#tabletas').val(producto.tabletas)
      $('#formula').val(producto.formula)
      $('#cantidad').val(producto.cantidad)
      $('#clasificacion').val(producto.clasificacion)
      $('.modal-title').html('Editando producto')
      $('#accion')
        .removeClass('guardar')
        .addClass('actualizar')
    })
    $('#exampleModalLong').modal('show')
  })

  // Agrega un producto
  $('.agregar_producto').click(function() {
    $('#accion')
      .removeClass('actualizar')
      .addClass('guardar')
    $('.modal-title').html('Agregar producto')
  })

  // Guarda un producto
  $(document).on('click', '.guardar', function() {
    var producto = $('#formProductos').getFormData()
    db.ref('/productos').push(producto)
    $('#exampleModalLong').modal('hide')
  })

  // Actualiza un producto
  $(document).on('click', '.actualizar', function() {
    var producto = $('#formProductos').getFormData()
    var id = $('#id').val()
    db.ref('/productos/' + id).set(producto)
    $('#exampleModalLong').modal('hide')
  })

  // Elimina un producto
  $(document).on('click', '.eliminar', function() {
    var data = datatable.row($(this).parents('tr')).data()
    if (!confirm('¿Desea eliminar el producto?')) return
    db
      .ref('productos')
      .child(data.id)
      .remove()
  })

  // Imprime la lista de productos en la tabla
  function render_producto(productos) {
    var data = []
    productos.forEach(producto => {
      data.push({ id: producto.key, ...producto.val() })
    })
    datatable.clear()
    datatable.rows.add(data)
    datatable.draw()
    feather.replace()
  }
})
