<template>
  <router-view/>
</template>

<script setup>
import AOS from 'aos'
import { useRouter } from 'vue-router';
const { onMounted, reactive }=require("vue-demi");
const router = useRouter()

setTimeout(() => {
  router.push('/pixaviz')
}, 9000)

onMounted(() => {
  AOS.init();
})
</script>

<style lang="scss">
html {
  scroll-behavior: smooth;
}
#app {
  font-family: 'Poppins', sans-serif;
}
</style>
