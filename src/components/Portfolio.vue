<template>
    <div class="h-full w-full flex justify-center items-center py-20">
    <div class="w-full h-full container px-2 lg:px-0  flex flex-col items-center gap-20">
        <div class="w-full  flex flex-col justify-center items-center">
            <span data-aos="fade-up" data-aos-delay="1400" data-aos-duration="1070"  class="text-3xl font-semibold text-gray-700">Portfolio</span>
            <span data-aos="fade-up" data-aos-delay="1000" data-aos-duration="1270"  class="text-lg text-gray-500">Most recent Work</span>
        </div>

        <div data-aos="fade-up" data-aos-delay="1500" data-aos-duration="1470"  class="w-full flex justify-center">
          <div class="w-full h-full hidden xl:grid grid-cols-2 gap-y-10">
            <div class="w-full flex justify-center" v-for="(portfolio, index) in portfolios" :key="index">
                <div class="w-auto flex flex-col lg:flex-row gap-6">
                <img
                    :src="portfolio.source"
                    class="block rounded-md w-[300px] h-[150px] lg:w-[230px] lg:h-[230px] object-cover border border-slate-300"
                    alt="Camera"
                />  
                <div class="w-[300px] h-[230px] flex flex-col gap-x-4 justify-between items-start px-2">
                    <div class="w-full h-auto flex flex-col gap-2">
                       <a class="text-2xl lg:text-xl font-semibold text-gray-700" :href="portfolio.link">{{portfolio.title}}</a>
                       <span class="text-sm text-indigo-500 mb-2">Category : {{portfolio.category}}</span>
                        <p class="text-gray-600 text-sm">{{portfolio.content}}</p> 
                    </div>
                    
                        <a data-mdb-ripple="true"
           data-mdb-ripple-color="light" :href="portfolio.link" class="px-4 py-2 bg-indigo-500 rounded text-white">Full Project</a>

                    
                </div>
                </div>
            </div>
        </div>  
        </div>
        
        <div class="w-full h-full flex lg:flex-row xl:hidden">
           <div data-aos="fade-up" data-aos-delay="1500" data-aos-duration="1670" class="w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-x-2 gap-y-8">
            <div class="w-full" v-for="(portfolio, index) in portfolios" :key="index">
                <div  class="w-full h-40 flex flex-row gap-4 items-center justify-center lg:justify-start">
                    <div class="w-32 h-32 rounded-lg bg-gray-200 flex-none  border border-slate-300">
                        <img
                    :src="portfolio.source"
                    class="block rounded-lg w-full h-full object-cover "
                    alt="Camera"
                />  
                    </div>
                    <div class="w-64 h-32 flex flex-col justify-between items-start">
                        <div class="w-full h-auto flex flex-col gap-1">
                       <span class="text-sm font-semibold text-gray-700">{{portfolio.title}}</span>
                       <span class="text-xs text-indigo-500 mb-2">Category : {{portfolio.category}}</span> 
                    </div>
                        <a data-mdb-ripple="true"
           data-mdb-ripple-color="light" :href="portfolio.link" class="px-4 py-2 bg-indigo-500 rounded text-sm text-white">Full Project</a> 
                    </div>
                </div>
            </div>
        </div>
        </div>
        
        
        


    </div>
    </div>
</template>

<script setup>
import { UilArrowRight ,  UilArrowLeft  } from '@iconscout/vue-unicons'
import { ref } from '@vue/reactivity'

const portfolios = ref([
    {
        source:require('@/assets/project01.jpg'),
        title:'Freshka Packaging and Logo Design',
        category:'Branding Design',
        content:'I\'m Glad to Share With You Today One of My Projects "Freshka", I\'ll be Happy to See Your Feedbacks',
        link:'https://www.behance.net/gallery/145756577/Freshka-Packaging-and-Logo-Design'
    },
    {
        source:require('@/assets/project02.jpg'),
        title:'Congelado Helado Branding Design',
        category:'Branding Design',
        content:'I\'m Glad to Share With You Today One of My Projects "Pais de Las Maravillas Congelado", I\'ll be Happy to See Your Feedbacks',
        link:'https://www.behance.net/gallery/145676485/Ice-Cream-Brand-Identity'
    },
    {
        source:require('@/assets/pasta01.jpg'),
        title:'La fattoria del sol - packaging design',
        category:'Packaging Design',
        content:'I\'m Glad to Share With You Today One of My Projects "La fattoria del sol", I\'ll be Happy to See Your Feedbacks',
        link:'https://www.behance.net/gallery/139287037/La-fattoria-del-sol-packaging-design'
    },
    {
        source:require('@/assets/travelapp.png'),
        title:'Travel App Website',
        category:'UI/UX Design',
        content:'I\'m Glad to Share With You Today One of My Projects "Pixa.tour", I\'ll be Happy to See Your Feedbacks',
        link:'https://www.behance.net/gallery/144235109/Travel-App-Website'
    },
    {
        source:require('@/assets/all.png'),
        title:'Dahsboard Design',
        category:'UI/UX Design',
        content:'I\'m Glad to Share With You Today One of My Projects Dashboard design, I\'ll be Happy to See Your Feedbacks',
        link:'https://www.behance.net/gallery/143235469/UI-UX-Task-ManagerDashboard-conception'
    },
    {
        source:require('@/assets/01.png'),
        title:'Gaming Dahsboard Design',
        category:'UI/UX Design',
        content:'I\'m Glad to Share With You Today One of My Projects Gaming Dashboard design, I\'ll be Happy to See Your Feedbacks',
        link:'https://www.behance.net/gallery/143594303/Gaming-Launcher-Dashboard'
    },
    
    {
        source:require('@/assets/desktop.png'),
        title:'Social Media Design',
        category:'UI/UX Design',
        content:'I\'m Glad to Share With You Today One of My Projects Social Media design, I\'ll be Happy to See Your Feedbacks',
        link:'https://www.behance.net/gallery/142969293/UI-UX-Social-Media-Website-Design'
    },
    
    {
        source:require('@/assets/nextus.jpg'),
        title:'Nextus Logistics Branding Design',
        category:'Branding Design',
        content:'I\'m Glad to Share With You Today One of My Projects "Nextus Logistics", I\'ll be Happy to See Your Feedbacks',
        link:'https://www.behance.net/gallery/139490667/Nextus-logistics-brand-identity'
    },
    
    {
        source:require('@/assets/02.png'),
        title:'EL RYADH Branding Design',
        category:'Branding Design',
        content:'I\'m Glad to Share With You Today One of My Projects "EL RYADH", I\'ll be Happy to See Your Feedbacks',
        link:'https://www.behance.net/gallery/139233607/EL-RYADH-Brand-Identity'
    },
    {
        source:require('@/assets/04.jpg'),
        title:'Western Beer Branding Design',
        category:'Branding Design',
        content:'I\'m Glad to Share With You Today One of My Projects "Western Beer", I\'ll be Happy to See Your Feedbacks',
        link:'https://www.behance.net/gallery/138651655/Western-Beer-Brand-Identity'
    },
    {
        source:require('@/assets/bande.jpg'),
        title:'Osaka Food Branding Design',
        category:'Branding Design',
        content:'I\'m Glad to Share With You Today One of My Projects "Osaka Food", I\'ll be Happy to See Your Feedbacks',
        link:'https://www.behance.net/gallery/137792503/OSAKA-FOOD-Brand-Identity'
    },
    {
        source:require('@/assets/burger.png'),
        title:'Lucifer Burger logo design & food packaging',
        category:'Packaging Design',
        content:'I\'m Glad to Share With You Today One of My Projects "Lucifer Burger", I\'ll be Happy to See Your Feedbacks',
        link:'https://www.behance.net/gallery/137366823/Lucifer-Burger-logo-design-food-packaging'
    },
    {
        source:require('@/assets/divine21.png'),
        title:'Mr Chef Branding Design',
        category:'Branding Design',
        content:'I\'m Glad to Share With You Today One of My Projects "Mr Chef", I\'ll be Happy to See Your Feedbacks',
        link:'https://www.behance.net/gallery/137376323/Mr-chef-brand-identity'
    },
    {
        source:require('@/assets/apps.png'),
        title:'UI UX Booking App design',
        category:'UI/UX Design',
        content:'I\'m Glad to Share With You Today One of My Projects UI/UX Booking App Design, I\'ll be Happy to See Your Feedbacks',
        link:'https://www.behance.net/gallery/142924505/UI-UX-App-design'
    },
    {
        source:require('@/assets/dogfood.png'),
        title:'CAZANIMO Dog Food packaging design',
        category:'Packaging Design',
        content:'I\'m Glad to Share With You Today One of My Projects "CAZANIMO", I\'ll be Happy to See Your Feedbacks',
        link:'#'
    },
    
    
])
</script>

<style>

</style>