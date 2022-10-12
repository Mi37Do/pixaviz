<template>
  <div class="h-[100vh] xl:h-[80vh] w-full flex justify-center items-center py-32">
    <div class="w-full h-full container px-2 lg:px-0  flex flex-col items-center gap-20">
        <div class="w-full  flex flex-col justify-center items-center">
            <span  data-aos="zoom-out-up" data-aos-delay="700" data-aos-duration="1000" class="text-3xl font-semibold text-gray-700">Skills</span>
            <span data-aos="zoom-out-up" data-aos-delay="1000" data-aos-duration="1200" class="text-lg text-gray-500">My technical level</span>
        </div>
        <div class="w-full flex flex-col-reverse justify-start lg:flex-row">
          <div class="flex flex-col w-full">
            <div v-auto-animate class="w-full h-auto  flex items-center flex-col py-6 gap-6">
            <div data-aos="zoom-out-up" data-aos-delay="1000" data-aos-duration="900" class="w-[300px] lg:w-[400px] h-auto flex justify-between flex-row items-center gap-4 cursor-pointer" @click="openFrontMenu">
                <UilBracketsCurly class="w-10 h-auto  text-indigo-500"/>
                <div class="w-full gap-1 flex flex-col">
                    <p data-aos="zoom-out-up" data-aos-delay="1200" data-aos-duration="1180" class="text-xl lg:2xl font-semibold text-gray-700">Frontend Developement</p>
                    <p data-aos="zoom-out-up" data-aos-delay="1000" data-aos-duration="1400" class="text-sm text-gray-500">More then 3 years experience</p>
                </div>
                <UilAngleDown data-aos="zoom-out-up" data-aos-delay="1000" data-aos-duration="900" class="w-8 h-auto  text-indigo-500 duration-300 transition-all"/>
            </div> 
            <div  v-if="openedFrontMenu"  class="w-[300px] lg:w-[400px] h-auto bg-white">
                <div class="w-full h-16 py-2 flex flex-col gap-2">
                    <div class="w-full flex flex-row justify-between items-center font-normal text-gray-600">
                        <p>HTML</p>
                        <p>80%</p>
                    </div>
                    <div class="w-full rounded-full h-[5px] bg-indigo-300">
                        <div class="w-[80%] rounded-full h-[5px] bg-indigo-500"></div>
                    </div>
                </div>
                <div class="w-full h-16 py-2 flex flex-col gap-2">
                    <div class="w-full flex flex-row justify-between items-center font-normal text-gray-600">
                        <p>CSS</p>
                        <p>87%</p>
                    </div>
                    <div class="w-full rounded-full h-[5px] bg-indigo-300">
                        <div class="w-[87%] rounded-full h-[5px] bg-indigo-500"></div>
                    </div>
                </div>
                <div class="w-full h-16 py-2 flex flex-col gap-2">
                    <div class="w-full flex flex-row justify-between items-center font-normal text-gray-600">
                        <p>Vue JS</p>
                        <p>82%</p>
                    </div>
                    <div class="w-full rounded-full h-[5px] bg-indigo-300">
                        <div class="w-[80%] rounded-full h-[5px] bg-indigo-500"></div>
                    </div>
                </div>
            </div>
        </div>
        <div v-auto-animate class="w-full h-auto  flex items-center flex-col py-6 gap-4">
            <div data-aos="zoom-out-up" data-aos-delay="1000" data-aos-duration="1050" class="w-[300px] lg:w-[400px] h-auto flex justify-between flex-row items-center gap-4 cursor-pointer" @click="openBackMenu">
                <UilServerNetwork  class="w-10 h-auto  text-indigo-500" />
                <div class="w-full gap-1 flex flex-col">
                    <p data-aos="zoom-out-up" data-aos-delay="1200" data-aos-duration="1200" class="text-xl lg:2xl font-semibold text-gray-700">Backend Developement</p>
                    <p data-aos="zoom-out-up" data-aos-delay="900" data-aos-duration="970" class="text-sm text-gray-500">More then 2 years experience</p>
                </div>
                <UilAngleDown data-aos="zoom-out-up" data-aos-delay="1500" data-aos-duration="900" class="w-8 h-auto  text-indigo-500 duration-300 transition-all"/>
            </div> 
            <ul v-if="openedBackMenu" class="w-[300px] lg:w-[400px] h-auto  bg-white">
                <li class="w-full h-16 py-2 flex flex-col gap-2">
                    <div class="w-full flex flex-row justify-between items-center font-normal text-gray-600">
                        <p>Django</p>
                        <p>54%</p>
                    </div>
                    <div class="w-full rounded-full h-[5px] bg-indigo-300">
                        <div class="w-[54%] rounded-full h-[5px] bg-indigo-500"></div>
                    </div>
                </li>
            </ul>
        </div>
        </div>  
        <div  v-auto-animate class="w-full h-auto flex items-center flex-col py-6 gap-4">
            <div  data-aos="zoom-out-up" data-aos-delay="1400" data-aos-duration="1070" class="w-[300px] lg:w-[400px] h-auto flex justify-between flex-row items-center gap-4 cursor-pointer" @click="openDesignMenu">
                <UilSwatchbook class="w-10 h-auto  text-indigo-500"/>
                <div class="w-full gap-1 flex flex-col">
                    <p data-aos="zoom-out-up" data-aos-delay="1200" data-aos-duration="900" class="text-xl lg:2xl font-semibold text-gray-700">Designer</p>
                    <p data-aos="zoom-out-up" data-aos-delay="1000" data-aos-duration="1100" class="text-sm text-gray-500">More then 8 years experience</p>
                </div>
                <UilAngleDown data-aos="zoom-out-up" data-aos-delay="1250" data-aos-duration="1120" class="w-8 h-auto  text-indigo-500 duration-300 transition-all"/>
            </div> 
            <div  v-if="openedDesignMenu" class="w-[300px] lg:w-[400px] h-auto  bg-white">
                <div class="w-full h-16 py-2 flex flex-col gap-2">
                    <div class="w-full flex flex-row justify-between items-center font-normal text-gray-600">
                        <p>Figma</p>
                        <p>94%</p>
                    </div>
                    <div class="w-full rounded-full h-[5px] bg-indigo-300">
                        <div class="w-[94%] rounded-full h-[5px] bg-indigo-500"></div>
                    </div>
                </div>
                <div class="w-full h-16 py-2 flex flex-col gap-2">
                    <div class="w-full flex flex-row justify-between items-center font-normal text-gray-600">
                        <p>Adobe Illustrator</p>
                        <p>90%</p>
                    </div>
                    <div class="w-full rounded-full h-[5px] bg-indigo-300">
                        <div class="w-[90%] rounded-full h-[5px] bg-indigo-500"></div>
                    </div>
                </div>
                <div class="w-full h-16 py-2 flex flex-col gap-2">
                    <div class="w-full flex flex-row justify-between items-center font-normal text-gray-600">
                        <p>Adobe Photoshop</p>
                        <p>88%</p>
                    </div>
                    <div class="w-full rounded-full h-[5px] bg-indigo-300">
                        <div class="w-[88%] rounded-full h-[5px] bg-indigo-500"></div>
                    </div>
                </div>
                <div class="w-full h-16 py-2 flex flex-col gap-2">
                    <div class="w-full flex flex-row justify-between items-center font-normal text-gray-600">
                        <p>Adobe XD</p>
                        <p>82%</p>
                    </div>
                    <div class="w-full rounded-full h-[5px] bg-indigo-300">
                        <div class="w-[82%] rounded-full h-[5px] bg-indigo-500"></div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        
    </div>
  </div>
</template>

<script setup>
import { UilSwatchbook , UilDownloadAlt , UilAngleDown , UilBracketsCurly , UilServerNetwork } from '@iconscout/vue-unicons'
import { ref } from '@vue/reactivity'

const openedDesignMenu = ref(false)
const openedFrontMenu = ref(false)
const openedBackMenu = ref(false)

const bindedclass = ref('')

function openDesignMenu(){
    if (openedDesignMenu.value === true){
        openedDesignMenu.value = false
    }
    else {
        openedDesignMenu.value = true
        openedFrontMenu.value = false
        openedBackMenu.value = false
    }
    
    console.log(openedDesignMenu.value);
}
function openFrontMenu(){
if (openedFrontMenu.value === true){
        openedFrontMenu.value = false
    }
    else {
        openedFrontMenu.value = true
        openedBackMenu.value = false
        openedDesignMenu.value = false
    }
}
function openBackMenu(){
if (openedBackMenu.value === true){
        openedBackMenu.value = false
    }
    else {
        openedBackMenu.value = true
        openedDesignMenu.value = false
        openedFrontMenu.value = false
    }
}
</script>

<style>
.blur-backdrop-filter{
  backdrop-filter: blur(6px);
  --webkit-backdrop-filter: blur(5px)
}
</style>