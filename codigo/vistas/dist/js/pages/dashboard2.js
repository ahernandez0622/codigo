$(function () {

  'use strict';

  /* ChartJS
    * -------
    * Aquí crearemos algunos gráficos usando ChartJS
    */

  // -----------------------
  // - TABLA DE VENTAS MENSUALES -
  // -----------------------

  // Obtenga contexto con jQuery, utilizando el método .get () de jQuery.
  var salesChartCanvas = $('#salesChart').get(0).getContext('2d');
  // Esto obtendrá el primer nodo devuelto en la colección jQuery.
  var salesChart       = new Chart(salesChartCanvas);

  var salesChartData = {
    labels  : ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label               : 'Electronics',
        fillColor           : 'rgb(210, 214, 222)',
        strokeColor         : 'rgb(210, 214, 222)',
        pointColor          : 'rgb(210, 214, 222)',
        pointStrokeColor    : '#c1c7d1',
        pointHighlightFill  : '#fff',
        pointHighlightStroke: 'rgb(220,220,220)',
        data                : [65, 59, 80, 81, 56, 55, 40]
      },
      {
        label               : 'Digital Goods',
        fillColor           : 'rgba(60,141,188,0.9)',
        strokeColor         : 'rgba(60,141,188,0.8)',
        pointColor          : '#3b8bba',
        pointStrokeColor    : 'rgba(60,141,188,1)',
        pointHighlightFill  : '#fff',
        pointHighlightStroke: 'rgba(60,141,188,1)',
        data                : [28, 48, 40, 19, 86, 27, 90]
      }
    ]
  };

  var salesChartOptions = {
    // Esto obtendrá el primer nodo devuelto en la colección jQuery.
    showScale               : true,
    // Booleano: si las líneas de la cuadrícula se muestran en el gráfico
    scaleShowGridLines      : false,
    // Cadena: color de las líneas de la cuadrícula
    scaleGridLineColor      : 'rgba(0,0,0,.05)',
    // Número: ancho de las líneas de la cuadrícula
    scaleGridLineWidth      : 1,
    // Booleano: si mostrar líneas horizontales (excepto el eje X)
    scaleShowHorizontalLines: true,
    // Booleano: si mostrar líneas verticales (excepto el eje Y)
    scaleShowVerticalLines  : true,
    // Booleano: si la línea se curva entre puntos
    bezierCurve             : true,
    // Número: tensión de la curva de Bézier entre puntos.
    bezierCurveTension      : 0.3,
    // Booleano: si mostrar un punto para cada punto
    pointDot                : false,
    // Número: radio de cada punto en píxeles
    pointDotRadius          : 4,
    // Número: ancho de píxel del trazo de punto
    pointDotStrokeWidth     : 1,
    // Número: cantidad adicional para agregar al radio para atender la detección de impactos fuera del punto dibujado
    pointHitDetectionRadius : 20,
    // Booleano: si mostrar un trazo para conjuntos de datos
    datasetStroke           : true,
    // Número: ancho de píxel del trazo del conjunto de datos
    datasetStrokeWidth      : 2,
    // Booleano: si se debe llenar el conjunto de datos con un color
    datasetFill             : true,
    // Cadena: una plantilla de leyenda
    legendTemplate          : '<ul class=\'<%=name.toLowerCase()%>-legend\'><% for (var i=0; i<datasets.length; i++){%><li><span style=\'background-color:<%=datasets[i].lineColor%>\'></span><%=datasets[i].label%></li><%}%></ul>',
    // Booleano: si se mantiene la relación de aspecto inicial o no cuando responde, si se establece en falso, ocupará todo el contenedor
    maintainAspectRatio     : true,
    // Booleano: si hacer que el gráfico responda al cambio de tamaño de la ventana
    responsive              : true
  };

  // Crea el gráfico de líneas
  salesChart.Line(salesChartData, salesChartOptions);

  // ---------------------------
  // - TABLA DE VENTAS MENSUALES FIN -
  // ---------------------------

  // -------------
  // - GRÁFICO CIRCULAR -
  // -------------
  // Obtenga contexto con jQuery, utilizando el método .get () de jQuery.
  var pieChartCanvas = $('#pieChart').get(0).getContext('2d');
  var pieChart       = new Chart(pieChartCanvas);
  var PieData        = [
    {
      value    : 700,
      color    : '#f56954',
      highlight: '#f56954',
      label    : 'Chrome'
    },
    {
      value    : 500,
      color    : '#00a65a',
      highlight: '#00a65a',
      label    : 'IE'
    },
    {
      value    : 400,
      color    : '#f39c12',
      highlight: '#f39c12',
      label    : 'FireFox'
    },
    {
      value    : 600,
      color    : '#00c0ef',
      highlight: '#00c0ef',
      label    : 'Safari'
    },
    {
      value    : 300,
      color    : '#3c8dbc',
      highlight: '#3c8dbc',
      label    : 'Opera'
    },
    {
      value    : 100,
      color    : '#d2d6de',
      highlight: '#d2d6de',
      label    : 'Navigator'
    }
  ];
  var pieOptions     = {
    // Booleano: si deberíamos mostrar un trazo en cada segmento
    segmentShowStroke    : true,
    // Cadena: el color de cada trazo de segmento
    segmentStrokeColor   : '#fff',
    // Número: el ancho de cada trazo de segmento
    segmentStrokeWidth   : 1,
    // Número: el porcentaje del gráfico que cortamos del medio.
    percentageInnerCutout: 50, // Este es 0 para gráficos circulares
    // Número: cantidad de pasos de animación
    animationSteps       : 100,
    // String - Efecto de suavizado de animación
    animationEasing      : 'easeOutBounce',
    // Booleano: si animamos la rotación del Donut
    animateRotate        : true,
    // Booleano: si animamos escalando el Donut desde el centro
    animateScale         : false,
    // Booleano: si hacer que el gráfico responda al cambio de tamaño de la ventana
    responsive           : true,
    // Booleano: si se mantiene la relación de aspecto inicial o no cuando responde, si se establece en falso, ocupará todo el contenedor
    maintainAspectRatio  : false,
    // Cadena: una plantilla de leyenda
    legendTemplate       : '<ul class=\'<%=name.toLowerCase()%>-legend\'><% for (var i=0; i<segments.length; i++){%><li><span style=\'background-color:<%=segments[i].fillColor%>\'></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>',
    // Cadena: una plantilla de información sobre herramientas
    tooltipTemplate      : '<%=value %> <%=label%> users'
  };
  // Crear gráfico circular o de anillos
  // Puede cambiar entre pastel y rosquilla utilizando el método siguiente.
  pieChart.Doughnut(PieData, pieOptions);
  // -----------------
  // - TABLA DE PIE FINAL-
  // -----------------

  /* jVector Maps
   * ------------
   * Crea un mapa del mundo con marcadores
   */
  $('#world-map-markers').vectorMap({
    map              : 'world_mill_en',
    normalizeFunction: 'polynomial',
    hoverOpacity     : 0.7,
    hoverColor       : false,
    backgroundColor  : 'transparent',
    regionStyle      : {
      initial      : {
        fill            : 'rgba(210, 214, 222, 1)',
        'fill-opacity'  : 1,
        stroke          : 'none',
        'stroke-width'  : 0,
        'stroke-opacity': 1
      },
      hover        : {
        'fill-opacity': 0.7,
        cursor        : 'pointer'
      },
      selected     : {
        fill: 'yellow'
      },
      selectedHover: {}
    },
    markerStyle      : {
      initial: {
        fill  : '#00a65a',
        stroke: '#111'
      }
    },
    markers          : [
      { latLng: [41.90, 12.45], name: 'Vatican City' },
      { latLng: [43.73, 7.41], name: 'Monaco' },
      { latLng: [-0.52, 166.93], name: 'Nauru' },
      { latLng: [-8.51, 179.21], name: 'Tuvalu' },
      { latLng: [43.93, 12.46], name: 'San Marino' },
      { latLng: [47.14, 9.52], name: 'Liechtenstein' },
      { latLng: [7.11, 171.06], name: 'Marshall Islands' },
      { latLng: [17.3, -62.73], name: 'Saint Kitts and Nevis' },
      { latLng: [3.2, 73.22], name: 'Maldives' },
      { latLng: [35.88, 14.5], name: 'Malta' },
      { latLng: [12.05, -61.75], name: 'Grenada' },
      { latLng: [13.16, -61.23], name: 'Saint Vincent and the Grenadines' },
      { latLng: [13.16, -59.55], name: 'Barbados' },
      { latLng: [17.11, -61.85], name: 'Antigua and Barbuda' },
      { latLng: [-4.61, 55.45], name: 'Seychelles' },
      { latLng: [7.35, 134.46], name: 'Palau' },
      { latLng: [42.5, 1.51], name: 'Andorra' },
      { latLng: [14.01, -60.98], name: 'Saint Lucia' },
      { latLng: [6.91, 158.18], name: 'Federated States of Micronesia' },
      { latLng: [1.3, 103.8], name: 'Singapore' },
      { latLng: [1.46, 173.03], name: 'Kiribati' },
      { latLng: [-21.13, -175.2], name: 'Tonga' },
      { latLng: [15.3, -61.38], name: 'Dominica' },
      { latLng: [-20.2, 57.5], name: 'Mauritius' },
      { latLng: [26.02, 50.55], name: 'Bahrain' },
      { latLng: [0.33, 6.73], name: 'São Tomé and Príncipe' }
    ]
  });

  /* GRÁFICOS SPARKLINE
   * ----------------
   * Cree gráficos en línea con línea de chispa
   */

  // -----------------
  // - BARRA SPARKLINE-
  // -----------------
  $('.sparkbar').each(function () {
    var $this = $(this);
    $this.sparkline('html', {
      type    : 'bar',
      height  : $this.data('height') ? $this.data('height') : '30',
      barColor: $this.data('color')
    });
  });

  // -----------------
  // - PIE DE SPARKLINE -
  // -----------------
  $('.sparkpie').each(function () {
    var $this = $(this);
    $this.sparkline('html', {
      type       : 'pie',
      height     : $this.data('height') ? $this.data('height') : '90',
      sliceColors: $this.data('color')
    });
  });

  // ------------------
  // - LÍNEA SPARKLINE -
  // ------------------
  $('.sparkline').each(function () {
    var $this = $(this);
    $this.sparkline('html', {
      type     : 'line',
      height   : $this.data('height') ? $this.data('height') : '90',
      width    : '100%',
      lineColor: $this.data('linecolor'),
      fillColor: $this.data('fillcolor'),
      spotColor: $this.data('spotcolor')
    });
  });
});
