<template>
  <header>
    <div class="image-box">
      <img alt="Tech background" src="tech.jpg" />
    </div>
  </header>
  <main>
    <ExchangeWindow changeToCurrency="changeToCurrency" />
  </main>
</template>
<script lang="ts">
import ExchangeWindow from './components/ExchangeWindow.vue'
export default {
  name: 'App',
  components: {
    ExchangeWindow
  }
}
</script>

<style scoped>
.image-box {
  position: relative;
  width: 100%;
  height: 50vh;
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
