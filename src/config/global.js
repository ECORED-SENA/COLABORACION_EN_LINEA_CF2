export default {
  global: {
    componenteFormativo: 'Identidad digital',
    descripcionCurso:
      'El consumo de servicios digitales cada vez es mayor, por lo que se dejan rastros en la red que son importantes gestionar, evitando estar expuesto a riesgos y amenazas. En este componente, se lograrán habilidades para ser un mejor ciudadano digital del siglo XXI, con una mirada ética y responsable de la comunicación con los demás y de la información que se comparte.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Identidad digital',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Qué son los perfiles digitales (públicos y privados)',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Tipos de perfiles digitales ',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Elementos de la identidad digital ',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Tipos de identidad digital',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Uso y consumo de contenidos',
            hash: 't_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Leyes y tratamiento de datos',
            hash: 't_1_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.7',
            titulo: 'Uso ético de la información digital',
            hash: 't_1_7',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Herramientas digitales',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Ecoprensa. (2016). Redes sociales: los límites de lo público y lo privado. elEconomista América.  ',
      link:
        'https://www.eleconomistaamerica.co/telecomunicacion-tecnologia-cl/noticias/7790793/08/16/Redes-sociales-los-limites-de-lo-publico-y-lo-privado.html',
    },
    {
      referencia:
        'Fundación telefónica. (2013). Identidad Digital: El nuevo usuario en el mundo digital. Editorial Ariel. ',
      link:
        'https://www.ufasta.edu.ar/biblioteca/files/2017/02/identidad_digital.pdf',
    },
    {
      referencia: 'Innova School. (s. f.). PLE y PLN Básico. Ébolo.  ',
      link: 'https://ebolo.es/welearning/innovaschool/modulos/ple1/index.html',
    },
    {
      referencia:
        'Martínez, P. (2017). Estudio de Uso y Actitudes de Consumo de Contenidos Digitales. Ministerio de Energía, Turismo y Agenda Digital. ',
      link:
        'https://www.ontsi.es//sites/ontsi/files/Uso%20y%20actitudes%20de%20consumo%20de%20contenidos%20digitales.%20Julio%202017.pdf',
    },
    {
      referencia:
        'Mejia, R. (2016). Construyendo nuestra identidad digital. rubenmejiasite. ',
      link:
        'https://rubenmejiasite.wordpress.com/2016/08/21/construyendo-nuestra-identidad-digital/',
    },
    {
      referencia:
        'ProTalento. (2020). Habilidades digitales en Colombia. ¿El futuro digital es de todos? GAN Colombia. ',
      link:
        'http://www.andi.com.co/Uploads/GAN_HabilidadesDigitales_COL_V8.pdf',
    },
    {
      referencia:
        'Rivera, C. (2014). Identidad digital... ¿ser o no ser? Infotecarios.',
      link:
        'https://www.infotecarios.com/identidad-digital-ser-o-ser/#.Yuph0hHPxPY',
    },
    {
      referencia:
        'Sabater, C. (2014). La vida privada en la sociedad digital. La exposición pública de los jóvenes en Internet. Aposta, (61), p. 1-32. ',
      link: 'https://www.redalyc.org/pdf/4959/495950257001.pdf',
    },
    {
      referencia:
        'Superintendencia de Industria y Comercio. (2018). Protección de datos personales. Gov.co.  ',
      link: 'https://www.sic.gov.co/sobre-la-proteccion-de-datos-personales',
    },
    {
      referencia: 'Universidad de Alicante. (2019). Netiqueta.  ',
      link:
        'https://rua.ua.es/dspace/bitstream/10045/79601/2/CI2_intermedio_2017-18_Netiqueta.pdf',
    },
    {
      referencia:
        'Universidad Pablo de Olavide. (2020). Gestión de la Identidad Digital.  ',
      link:
        'https://rio.upo.es/xmlui/bitstream/handle/10433/8986/Gestión%20de%20la%20Identidad%20Digital.pdf?sequence=1&isAllowed=y',
    },
  ],
  glosario: [
    {
      termino: 'Aplicación móvil (app) ',
      significado:
        'programa informático empaquetado para poder ser utilizado en dispositivos móviles. Pueden ser gratuitos o de pago, se descargan de tiendas Android o IOS.',
    },
    {
      termino: 'Blog ',
      significado:
        'sitio web que recopila información en orden cronológico, tipo diario; puede ser personal o empresarial; se usa para noticias o artículos. ',
    },
    {
      termino: 'Comunidad ',
      significado:
        'grupo de personas que se reúnen para poder compartir información de interés y se comunican de manera síncrona o asíncrona. ',
    },
    {
      termino: 'Firma digital ',
      significado:
        'documento electrónico cifrado para proteger información y verificar la fuente desde donde fue emitida.',
    },
    {
      termino: 'Identidad digital ',
      significado:
        'rasgos que una persona, grupo u organización tiene en medios digitales, generados a partir de su actuar en la red.',
    },
    {
      termino: 'Reputación online ',
      significado:
        'opiniones, comentarios o calificaciones de una persona o empresa que está presente en Internet.',
    },
    {
      termino: 'Youtuber',
      terminoHtml: '<i>Youtuber</i>',
      significado:
        'llamados también influenciadores digitales, son las personas que suben contenidos a Internet para poder compartirlos en plataformas digitales como YouTube.',
    },
  ],
  complementario: [
    {
      texto:
        'OSIseguridad. (2020, marzo 30). Identidad digital. ¿Quiénes somos la red? [Video]. Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=rNmXiYY9iHA',
    },
    {
      texto:
        'Molina, M., Furnari, A. y Hagelstrom, I. (2016). Guía de sensibilización sobre Convivencia Digital. UNICEF. ',
      tipo: 'Cartilla',
      descarga: '/downloads/COM-Guia_ConvivenciaDigital_ABRIL2017.pdf',
    },
    {
      texto:
        'Fundación telefónica. (2013). Identidad Digital: El nuevo usuario en el mundo digital. Editorial Ariel. ',
      tipo: 'Cartilla',
      descarga: '/downloads/identidad_digital.pdf',
    },
    {
      texto:
        'Ecoprensa. (2016). Redes sociales: los límites de lo público y lo privado. elEconomista América. .',
      tipo: 'Columna digital',
      link:
        'https://www.eleconomistaamerica.co/telecomunicacion-tecnologia-cl/noticias/7790793/08/16/Redes-sociales-los-limites-de-lo-publico-y-lo-privado.html',
    },
    {
      texto: 'Universidad de Alicante. (2019). Netiqueta. ',
      tipo: 'Cartilla',
      descarga: '/downloads/CI2_intermedio_2017-18_Netiqueta.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Pedro Javier Lozada Villota',
        cargo: 'Experto temático',
        centro:
          'Centro de Teleinformática y Producción Industrial - Regional Cauca',
      },
      {
        nombre: 'Paula Andrea Taborda Ortiz',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de diseño y metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Revisora Metodológica y Pedagógica',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Darío González',
        cargo: 'Corrección de estilo',
        centro: ' Centro Agropecuario La Granja - Regional Tolima',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: ['Yuly Andrea Rey Quiñonez'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Camilo Andres Bolaño Rey',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Andres Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo Lopez ',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'José Jaime Luis Tang Pinzón',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ángela María Maldonado Jaime',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Oleg Litvin',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carlos Eduardo Garavito Parada',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Maria Camila Ovalle Ospina',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
