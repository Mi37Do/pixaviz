<template>
    <div class="w-full h-full flex justify-center relative">
        <div class="w-full lg:w-96 h-auto flex gap-2 flex-col transition-all duration-1000" :class="{'opacity-0 invisible absolute' : props.qualificationShow.qualificationShow === 'work', 'sticky' : props.qualificationShow.qualificationShow === 'education'}">
                        <div class="w-full h-auto rounded-md bg-gray-100 p-3 flex flex-col justify-between"  v-for='education in educations' :key="education.id">
                            <div class="w-full h-full  flex flex-col">
                            <span class="text-lg font-medium text-gray-700">{{education.title}}</span>
                            <span class="text-sm font-normal text-gray-500">{{education.place}}</span> 
                            </div>
                            <div class="w-full h-full flex gap-2 mt-8 text-xs font-medium text-indigo-500 items-center">
                                <div class="rounded-full h-5 w-5 p-1 bg-indigo-500 bg-opacity-20  flex items-center justify-center">
                                 <UilCalendarAlt class="w-full h-full"/>   
                                </div>
                                <span>{{education.date}}</span>
                            </div>
                            
                            </div>  
            </div>

        <div  class="w-full lg:w-96 h-auto flex gap-2 flex-col transition-all duration-1000" 
        :class="{'opacity-0 invisible absolute' : props.qualificationShow.qualificationShow === 'education', 'sticky' : props.qualificationShow.qualificationShow === 'work'}">
            <div class="w-full h-auto rounded-md bg-gray-100 p-3 flex flex-col justify-between"  v-for='experience in experiences' :key="experience.id">
                            <div class="w-full h-full  flex flex-col">
                            <span class="text-lg font-medium text-gray-700">{{experience.title}}</span>
                            <span class="text-sm font-normal text-gray-500">{{experience.place}}</span> 
                            </div>
                            <div class="w-full h-full flex gap-2 mt-8 text-xs font-medium text-indigo-500 items-center">
                                <div class="rounded-full h-5 w-5 p-1 bg-indigo-500 bg-opacity-20  flex items-center justify-center">
                                 <UilCalendarAlt class="w-full h-full"/>   
                                </div>
                                
                                <span>{{experience.date}}</span>
                                
                            </div>
                            
                            
                        </div>

        </div>
    </div>
    

 

</template>

<script setup>
import { UilCalendarAlt } from '@iconscout/vue-unicons'
const { onUpdated, ref, onMounted }=require("@vue/runtime-core")


const props = defineProps(
    ['qualificationShow']
)

onMounted(() => {
    console.log(props.qualificationShow.qualificationShow);
})
onUpdated(() => {
    console.log(props.qualificationShow.qualificationShow);
})

const educations = ([
    {
        id: 1,
        title: 'Digital Marketing',
        place:'Algeria - Le Phare HASNAOUI',
        date:'2022'
        
    },
    {
        id: 2,
        title: 'Master\'s degree in web and knowledge engineering',
        place:'Algeria - Djilali Liabes University',
        date:'2018 - 2020'
        
    },
    {
        id: 3,
        title: 'Bachelor\'s degree in Computer Science',
        place:'Algeria - Djilali Liabes University',
        date:'2015 - 2018'
    },
    {
        id: 4,
        title: 'scientific baccalaureate',
        place:'Algeria - Si El Haoues High School',
        date:'2012 - 2015'
    }
])
const experiences = ([
    {
        id: 1,
        title: 'UI/UX Designer & Front-end Developer',
        place:'Algeria - Egide Consulting',
        date:'2022 - present'
        
    },
    {
        id: 2,
        title: 'UI/UX Designer & Front-end Developer',
        place:'Algeria - Groupe des Sociétés Hasnaoui',
        date:'2022'
        
    },
    {
        id: 3,
        title: 'Graphic Designer & Community Manager',
        place:'Algeria - Groupe des Sociétés Hasnaoui',
        date:'2021 - 2022'
    },
    {
        id: 4,
        title: 'Vice President & Graphic Designer',
        place:'Algeria - United Technologie Club ( Scientific club in Djilali Liabes University )',
        date:'2022'
    }
])
</script>

<style>

</style>