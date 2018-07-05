<template>
    <div>
        <div class="main">
            <div class="section text-center">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 ml-auto mr-auto">
                            <h2 class="title">As minhas actividades</h2>
                            <h5 class="description">O resumo asseguir tem a ver com as actividades que tenho feito: Quando estou inspirado, feliz, triste ate em outros estados de humor...</h5>
                            <br>
                            <a href="#nop" class="btn btn-danger btn-round">Ver Detailhes</a>
                        </div>
                    </div>
                    <br/><br/>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="info">
                                <div class="icon icon-danger">
                                    <i class="nc-icon nc-album-2"></i>
                                </div>
                                <div class="description">
                                    <h4 class="info-title">Galeria de fotos</h4>
                                    <p class="description">Tenho reservado algumas horas para aprecisar as diferentes fotos bonitas que muitas das vezes tem servido de inspiracao</p>
                                    <a href="#pkp" class="btn btn-link btn-danger">See more</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="info">
                                <div class="icon icon-danger">
                                    <i class="nc-icon nc-bulb-63"></i>
                                </div>
                                <div class="description">
                                    <h4 class="info-title">Novas Ideas</h4>
                                    <p>Boas ideias geralmente sao a solucao para os diferentes problemas pessoais e da sociedade. Gosto muito de procura-las, no meu pensamento...</p>
                                    <a href="#pkp" class="btn btn-link btn-danger">See more</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="info">
                                <div class="icon icon-danger">
                                    <i class="nc-icon nc-chart-bar-32"></i>
                                </div>
                                <div class="description">
                                    <h4 class="info-title">Actualizacao</h4>
                                    <p>Tenho reservado tempo, para reaprender o que aprendi, assim ando actualizado em relacao as tecnologias aprendidas...</p>
                                    <a href="#pkp" class="btn btn-link btn-danger">See more</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  computed: {
    year () {
      return new Date().getFullYear()
    }
  }
}
</script>
<style></style>
