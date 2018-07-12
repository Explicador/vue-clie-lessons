<template>
  <div class="">
      <div id="app-header"><app-header></app-header></div>
      <div id="app-overview"><app-overview></app-overview></div>
      <!--<div style="height: 10px"></div>-->
      <!--<div id="app-profile"><app-profile></app-profile></div>-->
      <div id="app-activities"><app-activities></app-activities></div>
      <div id="app-team"><app-team></app-team></div>
      <div id="app-contact"><app-contact></app-contact></div>
      <div id="app-footer"><app-footer></app-footer></div>
  </div>
</template>

<script>
import Header from './Header.vue'
import OverView from './OverView.vue'
import Profile from './Profile.vue'
import Contact from './Contact.vue'
import Actividades from './Actividades.vue'
import Team from './Team.vue'
import Footer from './Footer.vue'
export default {
  components: {
    'app-header': Header,
    'app-footer': Footer,
    'app-overview': OverView,
    'app-profile': Profile,
    'app-activities': Actividades,
    'app-team': Team,
    'app-contact': Contact
  },
  data () {
    return {
    }
  }
}
</script>
<style></style>
