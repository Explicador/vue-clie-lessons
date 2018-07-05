<template>
  <div class="">
      <div id="app-header"><app-header></app-header></div>
      <div id="app-profile"><app-profile></app-profile></div>
      <div id="app-overview"><app-overview></app-overview></div>
      <div id="app-footer"><app-footer></app-footer></div>
  </div>
</template>

<script>
import Header from './Header.vue'
import OverView from './OverView.vue'
import Profile from './Profile.vue'
import Footer from './Footer.vue'
export default {
  components: {
    'app-header': Header,
    'app-footer': Footer,
    'app-overview': OverView,
    'app-profile': Profile
  },
  data () {
    return {
    }
  }
}
</script>
<style></style>
