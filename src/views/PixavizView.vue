<template>
<div id="pixaviz" class="w-full h-full flex min-h-screen justify-center bg-white">
  <div class="container w-full">



    <div class="w-full h-full flex justify-center items-start bg-white"> 
      
      <div class="w-full h-full container bg-white flex flex-col">
      <section class="w-full h-full px-8" id="home">
        <Home/>
      </section>
      <section class="w-full h-full px-8" id="about">
        <About/>
      </section>
      <section class="w-full h-full px-8" id="skills">
        <Skills/>
      </section>
      <section class="w-full h-full px-8">
        <Qualification/>
      </section>
      <section class="w-full h-full px-8" id="services">
        <Services/>
      </section>
      <section class="w-full h-full px-8" id="portfolio">
        <Portfolio/>
      </section>
      <section class="w-full h-full px-8" id="contact">
        <Contactme/>
      </section>
      </div>
      <SideNav/>
    </div>


    <BottomNav/>

  </div>
  
</div>
</template>

<script setup>
import TopNav from '@/components/TopNav.vue'
import BottomNav from '@/components/BottomNav.vue'
import Home from '@/components/Home.vue'
import Skills from '@/components/Skills.vue'
import About from '@/components/About.vue'
import Qualification from '@/components/Qualification.vue'
import Services from '@/components/Services.vue'
import Portfolio from '@/components/Portfolio.vue'
import Contactme from '@/components/Contactme.vue'
import SideNav from '@/components/SideNav.vue'
</script>

<style>

</style>