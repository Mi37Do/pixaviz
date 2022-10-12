<template>
<div class="w-full h-full  flex flex-col gap-2 py-32">
    <div class="w-full h-auto  text-3xl font-semibold text-gray-700 flex flex-col items-center">
        <span data-aos="fade-up" data-aos-delay="700" data-aos-duration="1000">About Me</span>
        <span data-aos="fade-up" data-aos-delay="1000" data-aos-duration="1200" class="text-lg text-gray-500 font-normal">My introduction</span>
    </div>
    <div class="w-full h-full flex flex-col lg:flex-row items-center justify-center gap-x-16 gap-y-6 lg:py-20 py-10">
        <div class="w-full h-full flex items-center justify-center lg:justify-end">
            <img data-aos="fade-up" data-aos-delay="1100" data-aos-duration="1600" src="@/assets/oud.jpg" class="rounded-md w-3/4 lg:w-[400px] h-5/6 lg:h-1/3 object-cover object-top" alt="">
        </div>
        <div class="w-full h-full flex flex-col justify-center items-center lg:items-start gap-6">
            <p   data-aos="fade-up" data-aos-delay="1400" data-aos-duration="1000" class="lg:w-3/4 text-sm text-gray-700 leading-relaxed">I am a graphic designer/web developer who has an academic background in web development and has been working in the field of design since 2017 both in university clubs and as a freelancer on several professional projects.
            <br>
            <br>
            Skilled in graphic design, UI/UX design, Brand design, packaging design, as well as other design fields, without forgetting the skills in web development as a flutter developer.
            <br>
            <br>
            My passion lies on designing and navigating the world of visuals and UI. with my large imagination, I can create designs that provide comfort to the eye of the customers or the users. 
            <br>
            <br>
            Willing to build a challenging and advanced career in web development and graphic design fields, I am always looking for companies that have an incentive environment for personal, intellectual, and skill growth which would give me the opportunity to embrace my ambitions and job satisfaction.
            </p>
            <div class="lg:w-3/4 w-full h-full grid grid-cols-3">
            <div class="w-[100px] h-full flex flex-col gap-2 items-center justify-center p-6" v-for="item in aboutItems" :key="item.id">
                <p  data-aos="fade-up" data-aos-delay="800" data-aos-duration="1200" class="text-2xl font-bold text-gray-700" v-if="item.id === 1">0{{new Date().getFullYear()-2015}} +</p>
                <p   data-aos="fade-up" data-aos-delay="1000" data-aos-duration="900" class="text-2xl font-bold text-gray-700" v-else>{{item.header}}</p>
                <span   data-aos="fade-up" data-aos-delay="1100" data-aos-duration="1100" class="text-center text-sm text-gray-700">{{item.title}}</span>
            </div>
                
            </div>
            <button data-aos="fade-up" data-aos-delay="800" data-aos-duration="1300" class="bg-indigo-500 flex py-3 px-6 rounded-md text-white gap-6 items-center">Download CV <UilFileDownloadAlt class="w-5 h-5"/></button>
        </div>
    </div>
</div>
</template>

<script setup>
import { UilFileDownloadAlt } from '@iconscout/vue-unicons'
const { ref }=require("@vue/reactivity");

const aboutItems = ref([
    {
        id:1,
        header:'',
        title:'Years experience'

},
{
        id:2,
        header:'20 +',
        title:'Completed projects'

},
{
        id:3,
        header:'05 +',
        title:'Companies worked'

},

])


</script>

<style>

</style>