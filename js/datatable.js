$(document).ready(function() {
  // Inicia Firebase
  var config = {
    apiKey: 'AIzaSyABO7lJxdLXpn3Fdgs9iHb_UNrYnKn711c',
    authDomain: 'inventario-65d73.firebaseapp.com',
    databaseURL: 'https://inventario-65d73.firebaseio.com',
    projectId: 'inventario-65d73',
    storageBucket: 'inventario-65d73.appspot.com',
    messagingSenderId: '1040987382886'
  }
  firebase.initializeApp(config)

  // Inicia la datatable
  var datatable = $('#example').DataTable({
    data: [],
    columns: [
      { data: 'id' },
      { data: 'nombre' },
      { data: 'miligramos' },
      { data: 'tabletas' },
      { data: 'formula' },
      { data: 'cantidad' },
      { data: 'clasificacion' },
      { data: 'operacion' }
    ],
    columnDefs: [
      {
        targets: -1,
        data: null,
        defaultContent:
          '<a class="table-btn editar"><i data-feather="edit"></i></a><a class="table-btn eliminar"><i data-feather="x"></i></a>'
      }
    ],
    language: {
      sProcessing: 'Procesando...',
      sLengthMenu: 'Mostrar _MENU_ registros',
      sZeroRecords: 'No se encontraron resultados',
      sEmptyTable: 'Ningún dato disponible en esta tabla',
      sInfo:
        'Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros',
      sInfoEmpty: 'Mostrando registros del 0 al 0 de un total de 0 registros',
      sInfoFiltered: '(filtrado de un total de _MAX_ registros)',
      sInfoPostFix: '',
      sSearch: 'Buscar:',
      sUrl: '',
      sInfoThousands: ',',
      sLoadingRecords: 'Cargando...',
      oPaginate: {
        sFirst: 'Primero',
        sLast: 'Último',
        sNext: 'Siguiente',
        sPrevious: 'Anterior'
      },
      oAria: {
        sSortAscending:
          ': Activar para ordenar la columna de manera ascendente',
        sSortDescending:
          ': Activar para ordenar la columna de manera descendente'
      }
    }
  })
})
