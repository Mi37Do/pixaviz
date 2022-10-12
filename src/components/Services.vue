<template>
  <div class="w-full  flex flex-col gap-2 py-20">
    <div class="w-full h-auto  text-3xl font-semibold text-gray-700 flex flex-col items-center">
        <span data-aos="zoom-out-up" data-aos-delay="1400" data-aos-duration="1070">Services</span>
        <span data-aos="zoom-out-up" data-aos-delay="1000" data-aos-duration="1270" class="text-lg text-gray-500 font-normal">What i offre</span>
    </div>
    <div data-aos="fade-up" data-aos-delay="1300" data-aos-duration="1270" class="w-full h-full flex flex-col lg:flex-row items-center justify-center gap-x-16 gap-y-6 py-10 lg:py-20"  data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
        <div class="w-[300px] h-[270px] bg-white rounded-md p-3 flex flex-col justify-end border border-indigo-400 gap-4 cursor-pointer" v-for="service in services" :key="service.id"  @click="ModelShow(service.title, service.content)">
            <UilWindowGrid v-if="service.id === 1" class="w-12 h-12 text-indigo-500"/>
            <UilArrow v-if="service.id === 2" class="w-12 h-12 text-indigo-500"/>
            <UilPen v-if="service.id === 3" class="w-12 h-12 text-indigo-500"/>
            <span class="text-xl font-semibold text-gray-800 mb-6">{{service.title}}</span>
            <button  class="flex gap-2 items-center text-indigo-500 font-medium" type="button"  data-bs-toggle="modal" data-bs-target="#exampleModalCenter">more details <UilArrowRight class="w-4 h-4"/></button>
            
            <teleport to="body"> 
            <div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto bg-gray-800 bg-opacity-80" id="exampleModalCenter" tabindex="-1" aria-labelledby="exampleModalCenterTitle" aria-modal="true" role="dialog">
            <div class="modal-dialog modal-dialog-centered relative w-auto pointer-events-none flex justify-center">
            <div class="modal-content border-none shadow-lg relative flex flex-col w-[300px] lg:w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
              <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-gray-200 rounded-t-md">
                <h5 class="text-xl font-medium leading-normal text-gray-800" id="exampleModalScrollableLabel">
                    {{modelInfos.title}}
                </h5>
                <button type="button"
                  class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                  data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body relative p-4 flex flex-col">
                <div class="text-gray-600 flex flex-row gap-2 mb-2 items-center" v-for="(item , index) in modelInfos.content" :key="index">
                    <UilCheckCircle class="w-4 h-4 text-indigo-500"/>{{item}}</div>
              </div>
      
                </div>
              </div>
            </div>
            </teleport>

        </div>
    </div>
  </div>





</template>

<script setup>
import { UilArrowRight ,  UilWindowGrid ,  UilArrow , UilPen , UilCheckCircle } from '@iconscout/vue-unicons'
import { ref } from '@vue/reactivity'

const services = ref([
    {
        id:1,
        title:'UI/UX Designer',
        content:[
            'I develop the user interface.',
            'web Page developement.',
            'I create ux element iteractions.',
            'I position your company brand.'
        ]
    },
    {
        id:2,
        title:'Front-end Developer',
        content:[
            'I develop the user interface.',
            'web Page developement.',
            'I create ux element iteractions.',
            'I position your company brand.'
        ]
    },
    {
        id:3,
        title:'Branding Designer',
        content:[
            'I develop the user interface.',
            'web Page developement.',
            'I create ux element iteractions.',
            'I position your company brand.'
        ]
    },

])
 
const modelInfos = ref(
  {
    id:0,
    title:'',
    content: [''] 
  }
)

function ModelShow(e, r) {
  modelInfos.value.title = e
  modelInfos.value.content = r
  console.log(e)
}
</script>

<style>

</style>