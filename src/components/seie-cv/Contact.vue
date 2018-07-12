<template>
    <div>
        <div class="section landing-section">
            <div class="container">
                <div class="row">
                    <div class="col-md-8 ml-auto mr-auto">
                        <h2 class="text-center">Tem alguma mensagem para mim?</h2>
                        <form class="contact-form" @submit.prevent="onSubmit">
                            <div class="row">
                                <div class="col-md-6">
                                    <label>Nome</label>
                                    <div class="input-group">
                                        <span class="input-group-addon">
                                            <i class="nc-icon nc-single-02"></i>
                                        </span>
                                        <input type="text" class="form-control" placeholder="Seu nome">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <label>Email</label>
                                    <div class="input-group">
                                        <span class="input-group-addon">
                                            <i class="nc-icon nc-email-85"></i>
                                        </span>
                                        <input type="text" class="form-control" placeholder="Seu Email">
                                    </div>
                                </div>
                            </div>
                            <label>Message</label>
                            <textarea class="form-control" rows="4" placeholder="Escreva aqui a sua mensagem..."></textarea>
                            <div class="row">
                                <div class="col-md-4 ml-auto mr-auto">
                                    <button class="btn btn-danger btn-lg btn-fill">Enviar Messagem</button>
                                </div>
                            </div>
                            <!--<div class="row">-->
                                <!--<div class="col-md-6 ml-auto mr-auto">-->
                                    <!--<button class="btn btn-primary btn-lg">Clique aqui para saber mais sobre mim...</button>-->
                                <!--</div>-->
                            <!--</div>-->
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  methods: {
    onSubmit () {
      alert('Lamento, ainda nao pode enviar emails por este meio use este email: \njoseeugenioseie@hotmail.com')
    }
  }

}
</script>
<style></style>
