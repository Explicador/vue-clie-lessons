<template>
  <div class="">
      <!--<div id="app-header"><app-header></app-header></div>-->
      <!--<h1>Portfolio completo</h1>-->
      <section class="corpo-pagina container col-sm-12 col-md-12 col-lg-12"><!--Inicio do corpo principal da pagina -->
          <header id="s-inicio" class=" row abecalho-pagina "> <!--Inicio do Cabeçalho -->

              <button class="aside-menu navbar-toggle"> <!-- Inicio Menu Button -->
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
              </button> <!-- Fim Menu Button -->

              <button class="aside-contact navbar-toggle"> <!-- Inicio Menu Button -->
                  <img src="img/png/001.png" alt="Not">
                  <a href="#contactos-form"></a>
              </button> <!-- Fim Menu Button -->

              <nav class="menu col-md-3 col-sm-8 col-xs-12"> <!--Inicio do Menu -->
                  <img id="imagem" src="img/seie.jpg" class="img-responsive hidden-sm hidden-xs">
                  <section class="col-md-5">
                      <img id="imagem2" src="img/seie-s1.jpg" class="hidden-md hidden-lg">
                  </section>
                  <section class="section-space col-md-5">
                      <button class="aside-menu navbar-toggle"> <!-- Inicio do Toggle no Small-Menu -->
                          <span class="icon-bar"></span>
                          <span class="icon-bar"></span>
                          <span class="icon-bar"></span>
                      </button> <!-- Fim do Toggle no Small-Menu -->

                  </section>

                  <section id="section-list">
                      <ul>
                          <li id="Inicio" class="imenu descer-subir itensborder"><a href="#s-inicio"><span class="selecionado">Inicio</span></a></li>
                          <li id="l-Resumo" class="imenu descer-subir itensborder"><a href="#s-resumo"><span>Resumo</span></a></li>
                          <li class="imenu descer-subir itensborder"><a href="#s-portfolio"><span>Portfolio</span></a></li>
                          <li class="imenu descer-subir itensborder"><a href="#s-testemunhas"><span>Testemunhas</span></a></li>
                          <li class="imenu descer-subir itensborder"><a href="#s8"><span>Novidades <span class="indisp">Indisp</span></span></a></li>
                          <li id="contacto" class="imenu descer-subir itensborder"><a id="cont" href="#s-contactos"><span>Contactos</span></a></li>
                          <li class="imenu descer-subir"><a href="#s8"><span>Documentarios <span class="indisp">Indisp</span></span></a></li>
                      </ul>
                  </section>
                  <section class="text-center hidden-md hidden-lg">
                      <h4>Veja as minhas redes sociais</h4>
                      <ul class="list-inline">
                          <li><a href="https://www.facebook.com/jose.seie"><span><img src="img/icons/022-facebook.png" width="30px" alt=""/></span></a></li>
                          <li><a href="#"><span><img src="img/icons/023-twitter.png" width="30px" alt=""/></span></a></li>
                          <li><a href="#"><span><img src="img/icons/020-google-plus.png" width="30px" alt=""/></span></a></li>
                      </ul>
                  </section>
              </nav><!--Fim do Menu -->

              <section class="cabecalho-div01 col-md-7 col-sm-6 col-md-offset-3 md-e-lg-sem-padding col-sm-offset-5"><!--Inicio do DIV direito do Menu -->
                  <p><img src="img/png/001.png" alt="Testo"/> Deseja escrever alguma pergunta para mim? <a href="#">joseeugenioseie@hotmail.com</a></p>
                  <section class="menu-nomes md-e-lg-sem-padding col-md-12">
                      <hgroup class="col-md-12">
                          <h1 class="wow bounceInDown" data-wow-duration="5s">Ola! eu sou <strong>José Seie</strong></h1>
                          <h3 class="wow zoomIn">Programador</h3>
                      </hgroup>

                      <section class="col-md-12">
                          <ul class="li-cv-resumo text-center list-inline col-md-12 row">
                              <li id="resumo1" class="col-sm-6 col-lg-5 row"><a href="#s-resumo">Ir ao meu resumo</a></li>
                              <li id="cvv"><a href="#">Forca quebra de linha</a></li>
                              <li id="cv" class="co-sm-6 col-lg-5"><a href="#">Baixar o meu CV</a></li>
                          </ul>
                      </section>
                  </section>

              </section><!--Fim do DIV direito do Menu -->

          </header> <!-- fim  do Cabeçalho-->

          <section id="s-resumo" class="row s-resumo"> <!--Inicio da section 02 Resumo -->

              <section class="div-oculto col-md-3 hidden-ms hidden-xs" style="color: rgba(0,0,0,.0);">Primeira Section Por Ocultar</section>
              <section class="col-md-9 sresumo-linha1"> <!--Inicio  da primeira linhas com 3 divs -->
                  <h1>Resumo</h1>
                  <section class="resumo-sobre col-md-4"><!--Inicio de Sobre -->

                      <img src="img/icons/009-user.png" class="wow bounceInDown" alt="icon Logo" />

                      <h1>Sobre <span>Me!</span></h1>

                      <p class="paragr1">
                          Com apenas alguns anos de experiencia,  eu tenho certeza que ninguém perderia a oportunidade
                          de me contactar, ou seja
                      </p>
                      <p class="paragr2">
                          Licenciando na Universidade Eduardo Mondlane, na melhor universidade de Moçambique.  programo em pelo menos 6 linguagens.
                      </p>
                      <p class="paragr2">
                          Sou muito fluente no que faço, ou seja, gosto de aprender rapidamente para atingir pelo menos a fluencia
                      </p>
                      <p style="color: white;">Paragrafo de quebra de Linhas ou espacamento apenas </p>
                  </section> <!--Fim de Sobre -->
                  <section class="resumo-especialidades col-md-4"> <!--Inicio de Especialidades -->

                      <img src="img/icons/015-psi.png" class="wow bounceInDown" alt="icon Logo" />

                      <h1>minhas <span>Especialidades</span></h1>

                      <section class="pp1 ppborder flex-container">
                          <img src="img/Iconv45.png"  alt="Img Pequena"/>
                          <hgroup>
                              <p class="esp-titulo">Criação de Paginas WEB</p>
                              <p class="esp-item">Crio paginas modernas</p>
                          </hgroup>
                      </section>

                      <section class="pp1 ppborder flex-container">
                          <img src="img/Iconv45.png"  alt="Img Pequena"/>
                          <hgroup>
                              <p class="esp-titulo">Des. Front-End</p>
                              <p class="esp-item">Crio paginas modernas</p>
                          </hgroup>
                      </section>

                      <section class="pp1 ppborder flex-container">
                          <img src="img/Iconv45.png"  alt="Img Pequena"/>
                          <hgroup>
                              <p class="esp-titulo">Design. Responsivo</p>
                              <p class="esp-item">Aprendendo ainda...</p>
                          </hgroup>
                      </section>

                  </section> <!--Fim de Especialidades -->
                  <section class="resumo-linguas col-md-4"> <!--Inicio de Linguas -->

                      <img src="img/icons/006-link.png" class="wow bounceInDown" alt="icon Logo" />

                      <h1>Dominio de <strong>Linguas</strong></h1>

                      <p></p>
                      <div class="progress">
                          <div class="progress-bar progress-bar-success progress-bar-striped active" role="progressbar" aria-valuenow="80" aria-valuemin="0"
                               aria-valuemax="100" style="width: 80%;">
                              <span class="sr-only">80%</span>
                          </div>
                          <span>80%</span>
                      </div>
                      <p>Portugues</p>

                      <div class="progress">
                          <div class="progress-bar progress-bar-success progress-bar-striped active" role="progressbar" aria-valuenow="60" aria-valuemin="0"
                               aria-valuemax="100" style="width: 35%;">
                              <span class="sr-only">35%</span>
                          </div>
                          <span>35%</span>
                      </div>
                      <p>Ingles</p>

                      <div class="progress">
                          <div class="progress-bar progress-bar-success progress-bar-striped active" role="progressbar" aria-valuenow="60" aria-valuemin="0"
                               aria-valuemax="100" style="width: 89%;">
                              <span class="sr-only">89%</span>
                          </div>
                          <span>97%</span>
                      </div>
                      <p>Changana</p>

                      <div class="progress">
                          <div class="progress-bar progress-bar-success progress-bar-striped active" role="progressbar" aria-valuenow="60" aria-valuemin="0"
                               aria-valuemax="100" style="width: 77%;">
                              <span class="sr-only">40%</span>
                          </div>
                          <span>87%</span>
                      </div>
                      <p>Tsonga</p>

                  </section> <!--Fim de Linguas -->
              </section> <!--Fim  da primeira linhas com 3 divs -->

              <section class="col-md-12 row"> <!-- Inicio da Segunda Linha com 3 Divs -->
                  <!--<section class="div-oculto col-md-3 hidden-sm hidden-xs" style="color: rgba(0,0,0,.0);">Segunda Section Por Ocultar</section>-->
                  <section class="col-md-9 row"> <!--Inicio  da Segunda Interno linhas com 3 divs -->
                      <section class="resumo-habilidades col-md-4"> <!--Inicio de Habilidades -->

                          <img src="img/icons/008-layers.png" class="wow bounceInDown" data-wow-duration="3s" data-wow-delay="0s" alt="icon Logo" />

                          <h1>Dominio e <span>Habilidades</span></h1>

                          <p style="color: #fff;">s</p>
                          <div class="progress">
                              <div class="progress-bar progress-bar-success progress-bar-striped active" role="progressbar" aria-valuenow="80" aria-valuemin="0"
                                   aria-valuemax="100" style="width: 60%;">
                                  <span class="sr-only">75%</span>
                              </div>
                              <span>75%</span>
                          </div>
                          <p>Java</p>

                          <div class="progress">
                              <div class="progress-bar progress-bar-success progress-bar-striped active" role="progressbar" aria-valuenow="60" aria-valuemin="0"
                                   aria-valuemax="100" style="width: 70%;">
                                  <span class="sr-only">80%</span>
                              </div>
                              <span>80%</span>
                          </div>
                          <p>HTML5</p>

                          <div class="progress">
                              <div class="progress-bar progress-bar-success progress-bar-striped active" role="progressbar" aria-valuenow="60" aria-valuemin="0"
                                   aria-valuemax="100" style="width: 57%;">
                                  <span class="sr-only">67%</span>
                              </div>
                              <span>67%</span>
                          </div>
                          <p>CSS3</p>

                          <div class="progress">
                              <div class="progress-bar progress-bar-success progress-bar-striped active" role="progressbar" aria-valuenow="60" aria-valuemin="0"
                                   aria-valuemax="100" style="width: 30%;">
                                  <span class="sr-only">40%</span>
                              </div>
                              <span>40%</span>
                          </div>
                          <p>PHP</p>

                      </section> <!-- Fim de Habilidades -->

                      <section class="resumo-educacao col-md-4"> <!-- Inicio de Educação -->

                          <img src="img/icons/003-light-bulb.png" class="wow bounceInDown" data-wow-duration="3s" data-wow-delay="0.5s" alt="icon Logo"/>

                          <h1>Educação e <span>Trabalho</span></h1>

                          <p style="color: white;">Espacamento</p>

                          <section class="pp3">

                              <section class="edtrabalho">
                                  <div class="trabtam">
                                  </div>
                                  <ul >
                                      <li><span class="trabtam-span">Janeiro 2015- Dezembro 2015</span></li>
                                  </ul>
                                  <div class="trabtam trabtam-baixo">
                                      <div>
                                          <p class="trabtit">Curso de Pascal</p>
                                          <p class="trabesc">Na Universidade Eduardo Mondlane.</p>
                                      </div>
                                  </div>
                              </section>

                              <section class="edtrabalho">
                                  <div class="trabtam">
                                  </div>
                                  <ul >
                                      <li><span class="trabtam-span">Janeiro 2016- Dezembro 2016</span></li>
                                  </ul>
                                  <div class="trabtam trabtam-baixo">
                                      <div>
                                          <p class="trabtit">Curso de Java</p>
                                          <p class="trabesc">Na Universidade Eduardo Mondlane.</p>
                                      </div>
                                  </div>
                              </section>

                              <section class="edtrabalho">
                                  <div class="trabtam">
                                  </div>
                                  <ul >
                                      <li><span class="trabtam-span">Dezembro 2016- Mar 2017</span></li>
                                  </ul>
                                  <div class="trabtam trabtam-baixo trabtam-baixo-ultimo">
                                      <div>
                                          <p class="trabtit">Cursos de HTML5, CSS3 e JavaScript</p>
                                          <p class="trabesc">Na Universidade Eduardo Mondlane.</p>
                                      </div>
                                  </div>
                              </section>

                          </section>

                      </section> <!-- Fim de Educação -->

                      <section class="resumo-hobes col-md-4"> <!-- Inicio de Hobes -->

                          <img src="img/icons/004-film.png" class="wow bounceInDown" data-wow-duration="3s" data-wow-delay="1s" alt="icon Logo"/>

                          <h1>Hobbies e <strong>Interresses</strong></h1>

                          <ul class="list-inline col-md-12 col-sm-12 col-xs-12">
                              <li class="col-md-3 col-sm-2 col-xs-3">
                                  <span class="hobby-titulo">
                                    <!-- <h2>Musicas</h2> -->
                                      <a data-toggle="modal" href="#m-musicas"><img src="img/png/002-music.png" alt="Musicas"></a>
                                  </span>
                              </li>
                              <li class="col-md-3 col-sm-2 col-xs-3">
                                  <span class="hobby-titulo">
                                      <!-- <h2>Video</h2> -->
                                      <a data-toggle="modal" href="#m-video">
                                          <img src="img/png/004-video.png" alt="Video">
                                      </a>
                                  </span>
                              </li>

                              <li class="col-md-3 col-sm-2 col-xs-3">
                                  <span class="hobby-titulo">
                                      <!--<h2>Fotos</h2> -->
                                      <a data-toggle="modal" href="#m-foto-viagem"><img src="img/png/003-fotos.png" alt="Fotos"></a>
                                  </span>
                              </li>

                              <li class="col-md-3 col-sm-2 col-xs-3">
                                 <span class="hobby-titulo">
                                     <!-- <h2>Viagens</h2> -->
                                     <a data-toggle="modal" href="#m-foto-viagem"><img src="img/png/004-viagens.png" alt="Viagens"></a>
                                 </span>
                              </li>
                          </ul>
                      </section> <!-- Fim de Hobes -->

                  </section> <!--Fim  da Segunda Interno linhas com 3 divs -->
              </section> <!-- Fim da Segunda Linha com 3 Divs -->
          </section> <!--Fim da section 02 Resumo -->

          <section id="s-portfolio" class="s-portfolio row"> <!--Inicio da section 03 Portfolio -->

              <section class="div-oculto col-md-3 hidden-sm hidden-xs" style="color: rgba(0,0,0,0.0);">
                  Section a Ocultar
              </section>
              <section class="s-portf-div2 row md-e-lg-sem-padding col-md-9"> <!--Inicio  da Section Interno com mini menu -->
                  <h1>Portfolio</h1>

                  <nav class="s-portf-nav col-md-offset-2 col-md-10"> <!-- Inicio da nav do Menu -->
                      <ul class="list-inline">
                          <li><a href="#">Todos</a></li>
                          <li ><a href="#">WebDesigns</a></li>
                          <li ><a href="#">Desenvolvimento</a></li>
                          <li ><a href="#">Desenho Grafico</a></li>
                      </ul>
                      <p style="color: rgba(0,0,0,0.0)">Espacamelho</p>
                  </nav>  <!--Fim da nav do Menu -->

                  <section class="portfolio-imagens col-md-122"> <!--Inicio  da Section com Imagens (Figures) -->

                      <section class="col-md-8 col-sm-8 md-e-lg-sem-padding row">
                          <section class="col-md-12 col-sm-12 row md-e-lg-sem-padding">
                              <section  class="col-md-4 col-sm-4 md-e-lg-sem-pading">
                                  <figure>
                                      <img src="img/project-vertical01.jpg" class="img-responsive" alt="Minha Primeira Imagem"/>
                                      <figcaption>
                                          <h3>Onde Tudo começou</h3>
                                          <p>A fonte das minhas ppesquisas</p>
                                      </figcaption>
                                  </figure>
                              </section>

                              <section class="col-md-8 col-sm-8 md-e-lg-sem-padding">
                                  <figure>
                                      <img src="img/project-square01.jpg" class="img-responsive" alt="Minha Primeira Imagem"/>
                                      <figcaption>
                                          <h3>Minhas realizaçoes Pessoais</h3>
                                          <p>Muitas solicitaçoes e recomendaçoes</p>
                                      </figcaption>
                                  </figure>
                              </section>
                          </section>

                          <section class="col-md-12 col-sm-12 row md-e-lg-sem-padding">
                              <section class="col-md-8 col-sm-8">
                                  <figure >
                                      <img src="img/project-horizontal01.jpg" class="img-responsive" alt="Minha Primeira Imagem"/>
                                      <figcaption>
                                          <h3>Coleçoes inesqueciveis</h3>
                                          <p>Contratos e varias bijoterias</p>
                                      </figcaption>
                                  </figure>
                              </section>

                              <section class="col-md-4 col-sm-4 md-e-lg-sem-padding">
                                  <figure>
                                      <img src="img/project-square03.jpg" class="img-responsive" alt="Minha Primeira Imagem"/>
                                      <figcaption>
                                          <h3>Meis e mais contratos</h3>
                                          <p>mais, e ainda haverão mais...</p>
                                      </figcaption>
                                  </figure>
                              </section>
                          </section>
                      </section>

                      <section class="col-md-4 col-sm-4 md-e-lg-sem-padding">
                          <section  class="col-md-12 col-sm-12">
                              <figure>
                                  <img src="img/project-vertical02.jpg" class="img-responsive" alt="Minha Primeira Imagem"/>
                                  <figcaption>
                                      <h3>Cheguei onde nunca pensei que fosse chegar</h3>
                                      <p>O crescimento, o meu lema</p>
                                  </figcaption>
                              </figure>
                          </section>

                          <section class="col-md-12 col-sm-12">
                              <figure>
                                  <img src="img/project-square02.jpg" class="img-responsive md-e-lg-sem-padding" alt="Minha Primeira Imagem"/>
                                  <figcaption>
                                      <h3>Cartas e recomendaçoes..</h3>
                                      <p>Meis e mais recomendaçoes</p>
                                  </figcaption>
                              </figure>
                          </section>
                      </section>

                  </section> <!--Fim  da Section com Imagens (Figures) -->
              </section> <!--Fim  da Section Interno com mini menu -->
          </section> <!--Fim da section 03 Portfolio -->

          <section id="s-testemunhas" class="s-testemunhas row"> <!--Inicio da section 04 Testemunhas -->

              <section class="div-oculto col-md-3 row hidden-sm hidden-xs" style="color: rgba(0,0,0,0.0);">
                  Section a Ocultar
              </section>

              <section class="s-testemunhas-testemunhas col-md-9"> <!--Inicio  da Section Interno Testesmunhas-->
                  <h1>Testemunhas</h1>

                  <section class="s-testemunho-paragrafos col-md-12 md-e-lg-sem-padding">
                      <h2><strong>Com 2 anos</strong> de experiencia - Mais de <strong>10</strong> parceiros!</h2>
                      <h4>Veja o testemunho deles</h4>
                  </section>

                  <div class="col-md-4 testimonial">
                      <div class="testimonial-content panel col-md-12">
                          O Nosso amigo José Seie, ele e mais 2 outros, somos excelentes parceiros da tecnologias de comunicacao.
                          Ja desenvolvemos alguns projectos juntos.<br/>Ele é um excelente profissional
                      </div>
                      <div class="testimonial-author md-e-lg-sem-padding">
                          <div class="testimonial-photo animated zoomIn">
                              <p style="color: rgba(0,0,0,.0); font-size: 4px">espacador...</p>
                              <img class="img-circle wow infinite zoomIn" data-wow-duration="20s" data-wow-delay="0s" src="img/foto-hele.jpg" alt="Herquiloide Hele" />
                              <div class="testimonial-author-txt">
                                  <a href="http://herquiloidehele.pancakeapps.com/" target="_blank"><span class="name">Herquiloide Hele</span></a><br/>
                                  <span class="text-secondary">Siko Inc.</span>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div class="col-md-4 testimonial">
                      <div class="testimonial-content panel col-md-12">
                          Eu e o Nosso amigo José Seie, somos excelentes parceiros da tecnologias de comunicacao. Desevovemos juntos o projecto da Fomicres
                          Um projecto Milionario. Ele é um excelente parceiro.
                      </div>
                      <div class="testimonial-author md-e-lg-sem-padding">
                          <div class="testimonial-photo animated zoomIn">
                              <p style="color: rgba(0,0,0,.0); font-size: 4px">espacador...</p>
                              <img class="img-circle wow infinite zoomIn" data-wow-duration="15s" data-wow-delay="1s" src="img/foto-sumbu.png" alt="" />
                              <div class="testimonial-author-txt">
                                  <a href="http://claudiosumburane.pancakeapps.com/" target="_blank"><span class="name">Claudio Raul Sumburane</span></a><br/>
                                  <span class="caption text-secondary">Fomices Inc.</span>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div class="col-md-4 testimonial md-e-lg-sem-padding">
                      <div class="testimonial-content panel col-md-12">
                          O Nosso amigo José Seie, ele e mais 2 outros, somos excelentes parceiros da tecnologias de comunicacao.
                          Ja desenvolvemos alguns projectos juntos.<br/>Ele é um excelente profissional
                          O Nosso amigo da Google, ele e mais 10 outros, somos excelentes parceiros da tecnologias de comunicacao.
                      </div>
                      <div class="testimonial-author">
                          <div class="testimonial-photo animated zoomIn">
                              <p style="color: rgba(0,0,0,.0); font-size: 4px">espacador...</p>
                              <img class="img-circle wow infinite zoom" data-wow-duration="10s" data-wow-delay="3s" src="img/testimonial-avatar01.jpg" alt="" />
                              <div class="testimonial-author-txt">
                                  <a href="#"><span class="name">Mark Wagner</span></a>
                                  <span class="caption text-secondary">Google Inc.</span>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div class="col-md-4 testimonial mars">
                      <div class="testimonial-content panel col-md-12">
                          O Nosso amigo da UEM, ele e mais 10 outros, somos excelentes parceiros da tecnologias de comunicacao.
                      </div>
                      <div class="testimonial-author md-e-lg-sem-padding">
                          <div class="testimonial-photo animated zoomIn">
                              <p style="color: rgba(0,0,0,.0); font-size: 4px">espacador...</p>
                              <img class="img-circle wow infinite zoomIn" data-wow-duration="10s" data-wow-delay="1s" src="img/testimonial-avatar01.jpg" alt="" />
                              <div class="testimonial-author-txt">
                                  <a href="#"><span class="name">Ercilio Manhiça</span></a><br/>
                                  <span class="caption text-secondary">Siko Inc.</span>
                              </div>
                          </div>
                      </div>
                  </div>

              </section>
          </section> <!--Fim da section 04 Testemunhas -->

          <section id="s-contactos" class="s-contactos"> <!--Inicio da section 06 Contactos -->

              <section class="contactos-principal col-md-3 container col-md-offset-3 wow "> <!--Inicio  da Section Interno Contactos-->

                  <section class="col-md-12">
                      <h2>Nao hesite em <strong>me contactar</strong></h2>
                  </section>
                  <section class="cold-md-4">
                      <ul>
                          <li>Av. Julius Nherere. Nr.: 364, Polana Caniço "A"</li>
                          <li>joseeugenioseie@hotmail.com</li>
                          <li>+ (258) 845437523</li>
                      </ul>
                      <span class="text-center">Usar o formulario</span>
                  </section>

                  <section class="text-center">
                      <h4>Veja as minhas redes sociais</h4>
                      <ul class="list-inline">
                          <li><a href="#"><span><img src="img/icons/022-facebook.png" width="30px" alt=""/></span></a></li>
                          <li><a href="#"><span><img src="img/icons/023-twitter.png" width="30px" alt=""/></span></a></li>
                          <li><a href="#"><span><img src="img/icons/020-google-plus.png" width="30px" alt=""/></span></a></li>
                      </ul>
                  </section>

              </section> <!--Fim  da Section Interno Contactos-->

              <section id="contactos-form" class="contactos-form col-md-3 col-md-offset-3 wow "> <!--Inicio  da Section Contact Form-->

                  <header class="col-md-12"> <!-- Inicio Cabecalho do formulario -->
                      <section class="col-md-1 col-xs-1">
                          <img class="imagem-contact" src="img/seie-s1.jpg">
                      </section>
                      <button class="contact-close col-md-2 col-md-offset-7 col-xs-2 col-xs-offset-7" onclick=""> <!-- Inicio Menu Button -->
                          <img src="img/png/001-stop.png" class="img-responsive" alt="Not">
                      </button> <!-- Fim Menu Button -->
                  </header><!-- Fim Cabecalho do formulario -->

                  <section class="col-md-12"> <!-- Inicio corpo do formulario -->
                      <form>
                          <fieldset>
                              <legend>Por favor preencha o formulario - Irei responder assim que possivel</legend>
                              <div class="form-group">
                                  <label for="nome">Nome completo</label>
                                  <input type="text" class="form-control" id="nome" name="nome" placeholder="Ex: Mario Carvalho Coluna">
                              </div>
                              <div class="form-group">
                                  <label for="email">Email</label>
                                  <input type="email" class="form-control" id="email" name="email"
                                         placeholder="email@exemplo.com">
                              </div>
                              <div class="form-group">
                                  <label for="msg">Mensagem</label>
                                  <textarea class="form-control" id="msg" name="msg" rows="4" cols="4" > </textarea>
                              </div>
                              <div class="checkbox">
                                  <label>
                                      <input type="checkbox" value="sim" name="spam" checked>
                                      Quero receber spam de novidades de José Seie
                                  </label>
                              </div>
                          </fieldset>

                          <button type="submit" class="btn btn-warning">
                              <span class="glyphicon glyphicon-thumbs-up"></span>
                              Confirmar Envio
                          </button>
                      </form>
                  </section> <!-- Fim corpo do formulario -->
              </section> <!--Fim  da Section Contact Form-->

              <div class="modal fade bg-sucesst" id="m-foto-viagem" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true"> <!-- Inicio do Modal contact. -->
                  <div class="modal-dialog modal-lg"> <!--Inicio do conteudo da janela modal -->

                      <div class="modal-header"><!-- Inicio do Modal Header. -->
                          <h5 class="modal-title" id="exampleModalLabelS">Minhas Fotos e Viagens</h5>
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                          </button>
                      </div> <!-- Fim do Modal Header. -->

                      <div class="modal-body"> <!-- Inicio do Modal Body (Corpo do modal). -->
                          <h4 class="text-center">Sem dados por mostar </h4>
                      </div> <!-- Fim do Modal Body (Corpo do modal). -->

                      <div class="modal-footer"> <!-- Inicio do Modal Footer. -->
                          <button type="button" class="btn btn-danger" data-dismiss="modal">Fechar</button>
                      </div> <!-- Fim do Modal Footer. -->

                  </div> <!--Fim do conteudo da janela modal -->
              </div> <!-- Fim do Modal contact. -->

              <div class="modal fade bg-sucesst" id="m-video" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true"> <!-- Inicio do Modal Video. -->
                  <div class="modal-dialog modal-lg"> <!--Inicio do conteudo da janela modal -->

                      <div class="modal-header"><!-- Inicio do Modal Header. -->
                          <h4 class="modal-title" id="exampleModalLabel2">Meu Video Favorito</h4>
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                          </button>
                      </div> <!-- Fim do Modal Header. -->

                      <div class="modal-body row col-md-12"> <!-- Inicio do Modal Body (Corpo do modal). -->
                          <video id="video" class="video" controls="controls">
                              <!--<source src="media/Escolhas.mp4" type="video/mp4"> -->

                              Desculpe, não foi possivel carregar o arquivo vídeo!
                          </video>
                      </div> <!-- Fim do Modal Body (Corpo do modal). -->

                      <div class="modal-footer"> <!-- Inicio do Modal Footer. -->
                          <button type="button" class="btn btn-danger" data-dismiss="modal">Cancelar</button>
                          <button type="button" class="btn btn-primary">Enviar</button>
                      </div> <!-- Fim do Modal Footer. -->

                  </div> <!--Fim do conteudo da janela modal -->
              </div> <!-- Fim do Modal Video. -->

              <div class="modal fade bg-sucesst" id="m-musicas" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true"> <!-- Inicio do Modal Musicas. -->
                  <div class="modal-dialog modal-lg"> <!--Inicio do conteudo da janela modal -->

                      <div class="modal-header"><!-- Inicio do Modal Header. -->
                          <h4 class="modal-title" id="exampleModalLabel">Minhas musicas  Favoritas ♪♪♪</h4>
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                          </button>
                      </div> <!-- Fim do Modal Header. -->

                      <div class="modal-body col-xs-12 col-sm-12 row"> <!-- Inicio do Modal Body (Corpo do modal). -->
                          <section class="audeo-img col-xs-12 col-sm-5 col-md-5"> <!--Audio 04 e sua imagem INICIO-->
                              <section>
                                  <img src="cdn/img-musicas/yesterday.jpg" alt="Favorite Cantic">

                              </section>
                              <audio class="musica" controls = "controls">
                                  <source src="http://joseseie-cv.pancakeapps.com/cdn/media/toni-braxton.mp3" type="audio/mpeg"/>
                                  <!--   <source src="media/Yesterday(Remix) feat. Trey Songz.mp3" type="audio/mpeg"/> -->

                                  <!--"Aqui podia colocar outras opções de audeos em outros formatos
                                   para garantir a compatipilidade com a maior parte dos navegadores">-->
                                  Desculpe, não foi possivel carregar o arquivo audeo.
                              </audio> <!--Audio 04 e sua imagem FIM-->
                          </section>

                          <section class="audeo-img col-xs-12 col-sm-5 col-md-5"> <!--Audio 01 e sua imagem INICIO-->
                              <section>
                                  <img
                                          src="cdn/img-musicas/c150.jpg" alt="Favorite Cantic">
                              </section>
                              <audio class="musica" controls = "controls">
                                  <!--<source src="http://joseseie-cv.pancakeapps.com/../cdn/media/snnw150.mp3" type="audio/mpeg"/> -->

                                  <!--"Aqui podia colocar outras opções de audeos em outros formatos
                                   para garantir a compatipilidade com a maior parte dos navegadores">-->
                                  Desculpe, não foi possivel carregar o arquivo audeo.
                              </audio> <!--Audio 01 e sua imagem FIM -->
                          </section>

                          <section class="audeo-img col-xs-12 col-sm-5 col-md-5"> <!--Audio 03 e sua imagem INICIO-->
                              <section>
                                  <img src="cdn/img-musicas/chris-brown.jpg" alt="Favorite Cantic">
                              </section>
                              <audio class="musica" controls = "controls">
                                  <!--    <source src="media/Biggest Fan[(By eleven™)].mp3" type="audio/mpeg"/>-->

                                  <!--"Aqui podia colocar outras opções de audeos em outros formatos
                                   para garantir a compatipilidade com a maior parte dos navegadores">-->
                                  Desculpe, não foi possivel carregar o arquivo audeo.
                              </audio> <!--Audio 03 e sua imagem FIM-->
                          </section>

                          <section class="audeo-img col-xs-12 col-sm-5 col-md-5"> <!--Audio 02 e sua imagem INICIO-->
                              <section>
                                  <img src="cdn/img-musicas/ne-yo.jpg" alt="Favorite Cantic">
                              </section>
                              <audio class="musica" controls = "controls">
                                  <!--   <source src="media/Should Be You (feat. Fabolous & D[(By eleven™)].m4a" type="audio/mpeg"/> -->

                                  <!--"Aqui podia colocar outras opções de audeos em outros formatos
                                   para garantir a compatipilidade com a maior parte dos navegadores">-->
                                  Desculpe, não foi possivel carregar o arquivo audeo.
                              </audio> <!--Audio 02 e sua imagem FIM-->
                          </section>

                      </div> <!-- Fim do Modal Body (Corpo do modal). -->

                      <div class="modal-footer"> <!-- Inicio do Modal Footer. -->
                          <button type="button" class="btn btn-danger" data-dismiss="modal">Cancelar</button>
                          <button type="button" class="btn btn-primary">Enviar</button>
                      </div> <!-- Fim do Modal Footer. -->

                  </div> <!--Fim do conteudo da janela modal -->
              </div> <!-- Fim do Modal Musicas. -->
              <!--Contador de visitas-->
              <!--<div align="left" style="top: 5px;">-->
                  <!--<a href='http://www.counter12.com'>-->
                      <!--<img src='http://www.counter12.com/img-CxC4bBbBbzD3x5bw-25.gif' border='0' alt='free web counter'></a>-->
                  <!--<script type='text/javascript' src='http://www.counter12.com/ad.js?id=CxC4bBbBbzD3x5bw'></script>-->
              <!--</div>-->

          </section> <!--Fim da section 06 Contactos -->

      </section> <!--Fim do corpo principal da pagina -->

  </div>
</template>

<script>
import Header from '../seie-cv/Header.vue'
export default {
  components: {
    'app-header': Header
  },
  data () {
    return {
    }
  }
}
</script>
<style></style>
