<template>
    <div>
        <nav class="navbar navbar-expand-lg fixed-top navbar-transparent" color-on-scroll="300">
            <div class="container">
                <div class="navbar-translate">
                    <a class="navbar-brand" href="https://www.creative-tim.com"><img src="https://scontent.fmpm2-1.fna.fbcdn.net/v/t1.0-1/p160x160/24775126_933637970118308_5964366838633375797_n.jpg?_nc_cat=0&oh=b51ab8c3580c8096b4f74cd2d9c39c39&oe=5BEC1F87" style="height: 25px;width: 25px;border-radius: 100px" alt=""> Jose Seie</a>
                    <button class="navbar-toggler navbar-toggler-right navbar-burger" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-bar"></span>
                        <span class="navbar-toggler-bar"></span>
                        <span class="navbar-toggler-bar"></span>
                    </button>
                </div>
                <div class="collapse navbar-collapse" id="navbarToggler">
                    <ul class="navbar-nav ml-auto">
                        <!--<li class="nav-item">-->
                            <!--<a href="../index.html" class="nav-link"><i class="nc-icon nc-layout-11"></i>Meus Projectos</a>-->
                        <!--</li>-->
                        <li class="nav-item">
                            <a href="#nop" @click="onProjects" class="nav-link"><i class="nc-icon nc-book-bookmark"></i>  Projectos</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" rel="tooltip" title="Siga-me no Twitter" data-placement="bottom" href="https://twitter.com/jose_seie" target="_blank">
                                <i class="fa fa-twitter"></i>
                                <p class="d-lg-none">Twitter</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" rel="tooltip" title="Siga-me no facebook" data-placement="bottom" href="https://www.facebook.com/jose.seie" target="_blank">
                                <i class="fa fa-facebook-square"></i>
                                <p class="d-lg-none">Facebook</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" rel="tooltip" title="Siga-me no Instagram" data-placement="bottom" href="https://www.instagram.com/joseeugenioseie" target="_blank">
                                <i class="fa fa-instagram"></i>
                                <p class="d-lg-none">Instagram</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" rel="tooltip" title="Siga-me no GitHub" data-placement="bottom" href="https://github.com/joseseie" target="_blank">
                                <i class="fa fa-github"></i>
                                <p class="d-lg-none">GitHub</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>
<script>
export default {
  methods: {
    onProjects () {
      alert('Ainda Estou a Organizar os meus Projectos. Bremente estarao disponiveis...')
    }
  }
}
</script>
<style></style>
