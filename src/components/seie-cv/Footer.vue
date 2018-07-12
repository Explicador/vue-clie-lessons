<template>
    <div>
        <footer class="footer section-dark">
            <div class="container">
                <div class="row">
                    <nav class="footer-nav">
                    <ul>
                    <li><a href="/seie-full-portfolio">Portfolio Completo</a></li>
                    <!--<li><a href="http://blog.creative-tim.com">Blog</a></li>-->
                    <!--<li><a href="https://www.creative-tim.com/license">Licenses</a></li>-->
                    </ul>
                    </nav>
                    <div class="credits ml-auto">
                    <span class="copyright">
                    © {{ year }} , desenvolvido por <b style="color: black">José  Seie</b> <a href="#" style="color: orangered">conheca-o</a>
                    </span>
                    </div>
                </div>
            </div>
        </footer>
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
