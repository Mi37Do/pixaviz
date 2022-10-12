<template>
    <div class="h-full w-full flex justify-center items-center py-20">
    <div class="w-full h-full container px-2 lg:px-0  flex flex-col items-center gap-20">
        <div class="w-full  flex flex-col justify-center items-center">
            <span data-aos="fade-up" data-aos-delay="1400" data-aos-duration="1070" class="text-3xl font-semibold text-gray-700">Contact Me</span>
            <span data-aos="fade-up" data-aos-delay="1000" data-aos-duration="1270" class="text-lg text-gray-500">Get in touch</span>
        </div>
        <div class="w-full h-full grid grid-cols lg:grid-cols-2 gap-y-8 gap-x-10">
            <div class="w-full h-auto flex flex-col gap-12 items-center xl:items-end">
                <div class="w-auto h-auto flex gap-4 items-center" v-for="contact in contacts" :key="contact">
                    <div data-aos="fade-up" data-aos-delay="1200" data-aos-duration="1270" class="w-10 h-10 flex-none">
                        <UilPhoneAlt v-if="contact.title === 'Phone Number'" class="h-full w-full text-indigo-500"/>
                        <UilEnvelope v-if="contact.title === 'Email'" class="h-full w-full text-indigo-500"/>
                        <UilLocationPoint  v-if="contact.title === 'Location'" class="h-full w-full text-indigo-500"/>
                    </div>
                    <a data-aos="fade-up" data-aos-delay="1300" data-aos-duration="1000" class="w-[270px] h-full flex flex-col" :href="contact.link">
                        <span class="text-gray-700 text-lg font-medium">{{contact.title}}</span>
                        <a class="text-gray-500 text-md " :href="contact.link">{{contact.data}}</a>
                    </a>
                </div>
            </div>
            <div class="w-full h-auto flex flex-col gap-6 items-center xl:items-start">
                <div class="w-full flex flex-col gap-2 items-center lg:items-start justify-start">
                    <div class="w-full flex items-start">
                       <span data-aos="fade-up" data-aos-delay="1000" data-aos-duration="800" class="text-lg text-gray-700">Name</span> 
                    </div>
                    
                    <input data-aos="fade-up" data-aos-delay="1200" data-aos-duration="1000" type="text" class="w-full lg:w-96 h-14 border-2 rounded-md focus:outline-indigo-500 px-4"/>
                </div>
                <div class="w-full flex flex-col gap-2 items-center lg:items-start justify-start">
                    <div class="w-full flex items-start">
                       <span data-aos="fade-up" data-aos-delay="1000" data-aos-duration="900" class="text-lg text-gray-700">Email</span> 
                    </div>
                    
                    <input data-aos="fade-up" data-aos-delay="1000" data-aos-duration="1200" type="email" class="w-full lg:w-96 h-14 border-2 rounded-md focus:outline-indigo-500 px-4"/>
                </div>
                <div class="w-full flex flex-col gap-2 items-center lg:items-start justify-start">
                    <div class="w-full flex items-start">
                       <span data-aos="fade-up" data-aos-delay="1300" data-aos-duration="800" class="text-lg text-gray-700">Project</span> 
                    </div>
                    
                    <input data-aos="fade-up" data-aos-delay="1300" data-aos-duration="1200" type="text" class="w-full lg:w-96 h-14 border-2 rounded-md focus:outline-indigo-500 px-4"/>
                </div>
                <div class="w-full flex flex-col gap-2 items-center lg:items-start justify-start">
                    <div class="w-full flex items-start">
                       <span data-aos="fade-up" data-aos-delay="900" data-aos-duration="1000" class="text-lg text-gray-700">Message</span> 
                    </div>
                    
                    <textarea data-aos="fade-up" data-aos-delay="1000" data-aos-duration="1200" type="text" class="w-full lg:w-96 border-2 rounded-md focus:outline-indigo-500 p-4"/>
                </div>
                <div class="w-full flex justify-center lg:justify-start">
                  <button data-mdb-ripple="true"
           data-mdb-ripple-color="light" data-aos="fade-up" data-aos-delay="1300" data-aos-duration="1000" class="bg-indigo-500 flex py-3 px-6 rounded-md text-white gap-6 items-center">Send Message <UilMessage class="w-5 h-5"/></button>  
                </div>
                
            </div>
        </div>
        <div class="w-full h-24 text-indigo-600 bg-white flex flex-col gap-10 items-center justify-center py-20">
    <span  data-aos="fade-up" data-aos-delay="1400" data-aos-duration="1070" class="font-base">Copyright © pixaviz. 2022</span>
    <div data-aos="fade-up" data-aos-delay="1200" data-aos-duration="1400" class="w-full h-10 flex items-center justify-center gap-4">
        <a data-mdb-ripple="true"
           data-mdb-ripple-color="light" data-aos="fade-up" data-aos-delay="800" data-aos-duration="1200" class="w-10 h-10 flex items-center justify-center p-2 border border-slate-300 rounded-lg">
          <UilLinkedinAlt class="w-full h-full" href="https://www.linkedin.com/in/salah-eddine-laksari/"/>
        </a>
        <a data-mdb-ripple="true"
           data-mdb-ripple-color="light" data-aos="fade-up" data-aos-delay="1000" data-aos-duration="1200" class="w-10 h-10 flex items-center justify-center p-2 border border-slate-300 rounded-lg" href="https://www.behance.net/midolaksari">
          <UilBehance class="w-full h-full"/>
        </a>
        <a data-mdb-ripple="true"
           data-mdb-ripple-color="light" data-aos="fade-up" data-aos-delay="1100" data-aos-duration="900" class="w-10 h-10 flex items-center justify-center p-2 border border-slate-300 rounded-lg"  href="https://dribbble.com/laksari">
          <UilDribbble class="w-full h-full"/>
        </a>
    </div>
  </div>
    </div>
    </div>
</template>
        
<script setup>
import { UilPhoneAlt , UilEnvelope ,UilLocationPoint ,UilLinkedinAlt , UilBehance , UilDribbble ,UilMessage } from '@iconscout/vue-unicons'
const { ref }=require("@vue/reactivity");


const contacts = ref([
{
title :'Phone Number',
data:'(+213) 057-78-56-77',
link:'#contact'
},
{
title :'Email',
data:'mido37mido37@gmail.com',
link:'#contact'
},
{
title :'Location',
data:'Sidi Bel Abbes - ALGERIA',
link:'https://goo.gl/maps/7bgSnumcdPhYrTnWA'
},
])
</script>
        
<style>
        
</style>