<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Identidad digital
    br
    br
    .contenedor.bg--1-claro.p-5.my-5
      .contenedor-img__1: img(src='@/assets/curso/1.png', alt='Texto que describa la imagen' style='width: 196px')
      .row.justify-content-end
        .col-lg-9
          .texto-adorno
            p.h1.fw-normal 
              b ¿Conoces cómo impacta tu identidad digital el comportamiento en la red? 
              | Ingresa al siguiente recurso para que conozcas su impacto y cómo gestionar tu privacidad.
    br
    br
    SlyderB.my-5(:datos="datosSlyder")(data-aos='zoom-in-up')
    #t_1_1.titulo-segundo(data-aos='fade-right')
      h2 1.1 Qué son los perfiles digitales (públicos y privados)
    br
    br
    .my-5
      .contenedor.bg--2-claro-2.p-5.my-5
        .row.justify-content-start
          .col-lg-8
            .texto-adorno
              p.h1.fw-normal
                b ¿Conoces qué son los perfiles digitales y el impacto que estos tienen para tu vida? 
                | En el siguiente recurso se realiza una exploración sobre la presencia que se tiene en la era digital.
        .contenedor-img__2: img(src='@/assets/curso/8.png', alt='Texto que describa la imagen' style='width: 337px')
    TabsA.color-acento-contenido.mb-5
      .tarjeta.bg--1-claro.p-4(titulo="La presencia digital ").p-5
        h4 La presencia digital 
        p Tener presencia en el mundo o en la era digital a la cual te enfrentas hoy en día, y, más aún, poder crear valor frente aquello que se te presenta responde a una serie de características propias y sociales, que van desde cómo te comportas en dicho mundo, diciendo quién eres, e igualmente, cómo quieres que te vean, y por último, y más importante aún, cómo te ven. Estos aspectos hacen que se generen modelos y patrones que interfieren en tus rasgos digitales.
      .tarjeta.bg--1-claro.p-4(titulo="Consumo de contenidos").p-5
        h4 Consumo de contenidos
        p El consumo de todos los contenidos que se te presentan con las plataformas digitales, desde redes sociales, buscadores, sitios o portales web, apps móviles, videoconferencias, entre otras, va generando datos intrínsecos, que hacen dejar huella de tu información y así crear un perfil digital, sin saberlo, de forma inconsciente. Es por ello que es importante que estés consciente de qué se trata y cómo gestionarlo, para evitar riesgos y amenazas.
      .tarjeta.bg--1-claro.p-4(titulo="Transformaciones digitales").p-5
        h4 Transformaciones digitales
        p La diversas oportunidades que se presentan con las transformaciones digitales son una prioridad en muchos gobiernos; y siendo parte de la sociedad actual, logran que todos los servicios de estas herramientas lleguen a muchas más personas y sean accesibles desde cualquier lugar y momento, lo que supone muchos desafíos, haciendo que personas, empresas, instituciones y el mismo gobierno deban poseer una identidad digital definida que abra las posibilidades a nuevas oportunidades.
      .tarjeta.bg--1-claro.p-4(titulo="Intimidad de la información").p-5
        h4 Intimidad de la información
        p Los nuevos ciudadanos digitales, o llamados internautas, adquieren nuevos comportamientos sobre la privacidad, ya que se ve afectada, de cierta forma, la intimidad de la información, debido a la tendencia marcada a querer compartir todo, ya sea con tu permiso o no, todos tus datos, con empresas y tus contactos.
    p.mb-5 Y ahora, conoce sobre las dimensiones que se tiene entre lo público y lo privado de los perfiles digitales.
    .row.g-0.justify-content-center.mb-5
      .col-lg-5
        .mb-5
          table.tabla_personalizada
            thead
              tr
                th.bg--3 
                  img(src='@/assets/curso/9.svg', alt='Texto que describa la imagen' style='width: 105px').m-auto
                  h3 PÚBLICO
            tbody
              tr
                td Ciudadano, Empleado
              tr
                td Formal, Especializado
              tr
                td Interacción impersonal – Masiva
              tr
                td Impuesta
              tr
                td Información común y compartida
              tr
                td Contenido objetivo
              tr
                td Espacios sociales comunes, empresariales
      .col-lg-5
        .mb-5
          table.tabla_personalizada2
            thead
              tr
                th.bg--4 
                  img(src='@/assets/curso/10.svg', alt='Texto que describa la imagen' style='width: 105px').m-auto
                  h3 PRIVADO
            tbody
              tr
                td Persona, Individuo
              tr
                td Específico, Personal
              tr
                td Interacción estrecha (amigos familia, intimidad)
              tr
                td Libre
              tr
                td Información y comunicación afectiva y confidencial
              tr
                td Contenido subjetivo
              tr
                td Espacios cerrados, personales




</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
  data: () => ({
    datosSlyder: [
      {
        titulo: '',
        texto:
          'El desarrollo de las nuevas tecnologías asociadas a la comunicación y el tratamiento de la información, de cierta manera, han trasladado tus actividades tradicionales a complementarlas con las digitales, haciendo que exista una nueva identidad digital en tus entornos sociales y tus relaciones con los demás, que se deriva de tu comportamiento en las diferentes plataformas que están a tu servicio.',
        imagen: require('@/assets/curso/2.jpg'),
      },
      {
        titulo: '',
        texto:
          'Las plataformas digitales pueden ser analizadas a partir de la información que tu dejas en Internet, la cual puede ser tratada, organizada y almacenada en diferentes partes, para poder determinar quién eres y qué quieres. Es así como tu rastro queda registrado y este, a su vez, puede ser compartido; es allí que debes de ser consciente de cómo debes de gestionar tu propia privacidad.',
        imagen: require('@/assets/curso/3.jpg'),
      },
      {
        titulo: '',
        texto:
          'En las nuevas esferas digitales que encuentras a tu servicio, la información, la privacidad y la seguridad van de la mano en la construcción de tu propia identidad digital. Estos aspectos son muy importantes cuando quieres hacer presencia en Internet, donde la gestión de tu privacidad debe ser el componente imperativo para poder tener una efectiva identidad digital.',
        imagen: require('@/assets/curso/4.jpg'),
      },
      {
        titulo: '',
        texto:
          'La construcción de la identidad es bastante compleja por su permanente construcción y evolución. La realidad del mundo digital impacta de manera directa y es un objeto de estudio que debes de tener presente.',
        imagen: require('@/assets/curso/5.jpg'),
      },
      {
        titulo: '',
        texto:
          'Los avances tecnológicos de los cuales has sido testigo directo hacen que tu vida y actividades cotidianas estén inmersas en una realidad tecnológica que incursionó en tu día a día y llegó para quedarse, complementando e incorporando características propias. Los cambios han sido evidentes, desde cómo compras, cómo te diviertes, cómo te reúnes y te comunicas con los demás, hasta la forma en cómo las empresas han transformado sus estrategias y más cuando todo apunta a cómo las experiencias de usuario son un pilar fundamental en el desarrollo social, desde todos los puntos de vista.',
        imagen: require('@/assets/curso/6.jpg'),
      },
      {
        titulo: '',
        texto:
          'Tu actividad y cómo te comportas en los medios digitales van dejando rastros y huellas que configuran tu identidad digital. Ya sea de una forma consciente o inconsciente, forjas el cómo te miran los demás y cómo aportas al desarrollo integral del tejido social humano, en pro de tu propio desarrollo, así como el de tu entorno y todo lo que te rodea.',
        imagen: require('@/assets/curso/7.jpg'),
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
