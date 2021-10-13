<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-tasks" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .row.mb-5.justify-content-center.align-items-center.align-items-lg-stretch
      .col-6.col-md-4.col-lg-3.mb-4.mb-md-0
        .tarjeta.tarjeta--azul.h-100.d-flex.align-items-center
          figure
            img(src="@/assets/template/emparejamiento.svg", alt="Texto que describa la imagen")
      .col-12.col-md-8.col-lg-9
        .titulo-segundo
          h2 Actividad didáctica 1
        p.mb-4 La actividad planteada consiste en organizar dos columnas, una con el encabezado “PÚBLICO”, y la otra, “PRIVADO”. Se le entregan al aprendiz diferentes palabras o términos y él/ella debe ubicarlas bajo la columna a la que pertenezcan. Así, podrá identificar las dimensiones que pueden tener los perfiles digitales y gestionar su identidad digital en los medios digitales que se presentan en todo el componente formativo.
        .tarjeta.tarjeta--azul.p-3
          .row.justify-content-around.align-items-center            
            .col-sm.mb-3.mb-sm-0
              p.fw-bold.mb-0 Relacionar Conceptos 
            .col-auto
              a.boton.boton--b(:href="obtenerLink('/actividades/actividad-1/story.html')" target="_blank")
                span Realizar
                i.fas.fa-puzzle-piece
    .row.mb-5.justify-content-center.align-items-center.align-items-lg-stretch
      .col-6.col-md-4.col-lg-3.mb-4.mb-md-0
        .tarjeta.tarjeta--azul.h-100.d-flex.align-items-center
          figure
            img(src="@/assets/template/completar.svg", alt="Texto que describa la imagen")
      .col-12.col-md-8.col-lg-9
        .titulo-segundo
          h2 Actividad didáctica 2
        p.mb-4 La actividad planteada consiste en realizar un crucigrama con pistas verticales y horizontales, con características propias de las TI. El objetivo es que el aprendiz pueda reconocer la definición de cada uno de los términos y estos sean organizados en filas y columnas dentro del crucigrama.
        .tarjeta.tarjeta--azul.p-3
          .row.justify-content-around.align-items-center            
            .col-sm.mb-3.mb-sm-0
              p.fw-bold.mb-0 Crucigrama
            .col-auto
              a.boton.boton--b(:href="obtenerLink('/actividades/actividad-2/story.html')" target="_blank")
                span Realizar
                i.fas.fa-puzzle-piece

    

</template>

<script>
export default {
  name: 'Actividad',
}
</script>

<style lang="sass" scoped></style>
