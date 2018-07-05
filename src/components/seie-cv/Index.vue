<template>
  <div class="">
      <div id="app-header"><app-header></app-header></div>
      <div id="app-overview"><app-overview></app-overview></div>
  </div>
</template>

<script>
import Header from './Header.vue'
import OverView from './OverView.vue'
export default {
  components: {
    'app-header': Header,
    'app-overview': OverView
  },
  data () {
    return {
    }
  }
}
</script>
<style></style>
