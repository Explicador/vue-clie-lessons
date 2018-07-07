<template>
    <div class="page-header" data-parallax="true" style="background-image: url('https://demos.creative-tim.com/paper-kit-2/assets/img/daniel-olahh.jpg');">
        <div class="filter"></div>
        <div class="container">
            <div class="motto text-center">
                <h1>José Eugénio Seie</h1>
                <h3>Asseguir irei me apresentar de forma resumida!</h3>
                <br />
                <a href="#app-profile" class="btn btn-outline-neutral btn-round"><i class="fa fa-play"></i>Continuar</a>
                <button @click="baixarCV" type="button" class="btn btn-outline-neutral btn-round">Baixar o CV</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  methods: {
    baixarCV () {
      alert('O CV ainda não esta pronto para donwload, \n\nVolte a baixar dentro de dias. \n\n\nObrigado.')
    }
  }
}
</script>
<style></style>
