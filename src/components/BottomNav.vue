<template>
  <div class="w-full h-full fixed z-10 inset-0" :class="{'invisible' : !openBottomMenu, 'visible' : openBottomMenu}">
    <div class="bg-gray-700 opacity-80 absolute z-10 inset-0 ease-in transition-all overflow-x-hidden overflow-y-auto duration-500" :class="{'opacity-0' : !openBottomMenu, 'opacity-80' : openBottomMenu}" @click="openBottomMenu = false"></div>
  
    <div class="w-full bg-white fixed bottom-16 left-0 z-10 transition-all duration-1000 rounded-t-xl px-4 py-6" :class="{'translate-y-full h-16' : !openBottomMenu , 'translate-y-0 h-64': openBottomMenu}">
      <div class="w-full h-full grid grid-cols-3 text-indigo-500">
        <a data-mdb-ripple="true"
    data-mdb-ripple-color="light" class="w-full h-full flex flex-col justify-center items-center gap-2"   href="#home">
          <UilEstate class="w-6 h-6" />
          <span class="text-sm font-medium">Home</span>
        </a>
        <a data-mdb-ripple="true"
    data-mdb-ripple-color="light" class="w-full h-full flex flex-col justify-center items-center gap-2"  href="#about">
          <UilUser class="w-6 h-6" />
          <span class="text-sm font-medium">About</span>
        </a>
        <a data-mdb-ripple="true"
    data-mdb-ripple-color="light" class="w-full h-full  flex flex-col justify-center items-center gap-2"   href="#skills">
          <UilFileAlt class="w-6 h-6" />
          <span class="text-sm font-medium">Skills</span>
        </a>
        <a data-mdb-ripple="true"
    data-mdb-ripple-color="light" class="w-full h-full  flex flex-col justify-center items-center gap-2" href="#services">
          <UilBriefcaseAlt class="w-6 h-6" />
          <span class="text-sm font-medium">Services</span>
        </a>
        <a data-mdb-ripple="true"
    data-mdb-ripple-color="light" class="w-full h-full  flex flex-col justify-center items-center gap-2" href="#portfolio">
          <UilScenery class="w-6 h-6" />
          <span class="text-sm font-medium">Portfolio</span>
        </a>
        <a data-mdb-ripple="true"
    data-mdb-ripple-color="light" class="w-full h-full  flex flex-col justify-center items-center gap-2" href="#contact">
          <UilMessage class="w-6 h-6" />
          <span class="text-sm font-medium">Contact me</span>
        </a>
      </div>
      
    </div>

    

  </div>

  <div class="w-full h-16 sticky z-50 bottom-0 bg-white left-0 flex items-center justify-between px-4 lg:hidden">
    <span class="text-lg font-bold text-gray-800">pixa<span class="text-indigo-500">viz.</span></span>
    <button data-mdb-ripple="true"
    data-mdb-ripple-color="light" @click="openBottomMenu = !openBottomMenu" class="w-8 h-8 flex items-center justify-center">
      <UilApps class="w-6 h-6 text-indigo-500"/>
    </button>
  </div>


</template>

<script setup>
import { UilApps ,  UilEstate , UilUser , UilFileAlt ,UilBriefcaseAlt ,UilScenery ,UilMessage } from '@iconscout/vue-unicons'
const { ref }=require("@vue/reactivity");

const openBottomMenu = ref(false)
</script>

<style>

</style>