<template>
    <div>
        <div class="section section-dark text-center">
            <div class="container">
                <h2 class="title">Monitores junto comigo</h2>
                <!--<h6 class="title"></h6>-->
                <div class="row">
                    <div class="col-md-4">
                        <div class="card card-profile card-plain">
                            <div class="card-avatar">
                                <a href="#avatar"><img src="https://avatars3.githubusercontent.com/u/23740775?s=460&v=4" alt="..."></a>
                            </div>
                            <div class="card-body">
                                <a href="#paper-kit">
                                    <div class="author">
                                        <h4 class="card-title">Herquiloide Hele</h4>
                                        <h6 class="card-category">Backend Developer</h6>
                                    </div>
                                </a>
                                <p class="card-description text-center">
                                    Foi monitor junto comigo na cadeira de Fundamentos de Programacao na Universidade Eduardo Mondlane, no periodo de Fevereiro a Julho de 2017
                                </p>
                            </div>
                            <div class="card-footer text-center">
                                <a href="https://github.com/herquiloidehele" target="_blank" class="btn btn-link btn-just-icon btn-neutral"><i class="fa fa-github"></i></a>
                                <!--<a href="#pablo" class="btn btn-link btn-just-icon btn-neutral"><i class="fa fa-google-plus"></i></a>-->
                                <!--<a href="#pablo" class="btn btn-link btn-just-icon btn-neutral"><i class="fa fa-linkedin"></i></a>-->
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4">
                        <div class="card card-profile card-plain">
                            <div class="card-avatar">
                                <a href="#avatar"><img src="https://avatars0.githubusercontent.com/u/23740856?s=460&v=4" alt="..."></a>
                            </div>
                            <div class="card-body">
                                <a href="#paper-kit">
                                    <div class="author">
                                        <h4 class="card-title">Alfredo Sebastiao</h4>
                                        <h6 class="card-category">FrontEnd Developer</h6>
                                    </div>
                                </a>
                                <p class="card-description text-center">
                                    Foi monitor junto comigo na cadeira de Programacao Orientada a Objectos na Universidade Eduardo Mondlane, no periodo de Agosto a Dezembro de 2017
                                </p>
                            </div>
                            <div class="card-footer text-center">
                                <a href="https://github.com/alfredosebastiao" target="_blank" class="btn btn-link btn-just-icon btn-neutral"><i class="fa fa-github"></i></a>
                                <!--<a href="#pablo" class="btn btn-link btn-just-icon btn-neutral"><i class="fa fa-google-plus"></i></a>-->
                                <!--<a href="#pablo" class="btn btn-link btn-just-icon btn-neutral"><i class="fa fa-linkedin"></i></a>-->
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4">
                        <div class="card card-profile card-plain">
                            <div class="card-avatar">
                                <a href="#avatar"><img src="https://avatars0.githubusercontent.com/u/11987675?s=460&v=4" alt="..."></a>
                            </div>
                            <div class="card-body">
                                <a href="#paper-kit">
                                    <div class="author">
                                        <h4 class="card-title">Claudio Sumburane</h4>
                                        <h6 class="card-category">FrontEnd Developer</h6>
                                    </div>
                                </a>
                                <p class="card-description text-center">
                                    Jovem determinado, fomos parceiros de grupo de 2016 a 2018 (ano em que fiz 4rto ano), alem disso, desenvolvemos projectos e juntos comecamos a Plataforma Explicador...
                                </p>
                            </div>
                            <div class="card-footer text-center">
                                <a href="https://github.com/Diucla" target="_blank" class="btn btn-link btn-just-icon btn-neutral"><i class="fa fa-github"></i></a>
                                <!--<a href="#pablo" class="btn btn-link btn-just-icon btn-neutral"><i class="fa fa-google-plus"></i></a>-->
                                <!--<a href="#pablo" class="btn btn-link btn-just-icon btn-neutral"><i class="fa fa-linkedin"></i></a>-->
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
