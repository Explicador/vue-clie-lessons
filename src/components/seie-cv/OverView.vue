<template>
    <div class="page-header" data-parallax="true" style="background-image: url('https://demos.creative-tim.com/paper-kit-2/assets/img/daniel-olahh.jpg');">
        <div class="filter"></div>
        <div class="container">
            <div class="motto text-center">
                <div class="avatar">
                    <img src="https://scontent.fmpm2-1.fna.fbcdn.net/v/t1.0-1/p160x160/24775126_933637970118308_5964366838633375797_n.jpg?_nc_cat=0&oh=b51ab8c3580c8096b4f74cd2d9c39c39&oe=5BEC1F87" style="border: 3px solid white;" alt="Circle Image" class="img-circle img-no-padding img-responsive">
                </div>
                <h1>José Eugénio Seie</h1>
                <h3>Asseguir irei me apresentar de forma resumida!</h3>
                <br />
                <a href="#activities" class="btn btn-outline-neutral btn-round"><i class="fa fa-play"></i> Continuar</a>
                <button @click="baixarCV" type="button" class="btn btn-outline-neutral btn-round"><i class="fa fa-user"></i> Portifolio Completo</button>
                <!--<button @click="baixarCV" type="button" class="btn btn-outline-neutral btn-round">Baixar CV em PDF</button>-->
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
