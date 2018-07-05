<template>
  <div class="">
      <header></header>
      <overview></overview>
  </div>
</template>

<script>
import Header from './Header.vue'
import OverView from './OverView.vue'
export default {
  components: {
    'header': Header,
    'overview': OverView
  },
  data () {
    return {
    }
  }
}
</script>
<style></style>
