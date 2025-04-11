<template>
 
    <main class="bg-[var(--dark-blue)] md:p-10 overflow-hidden   h-screen w-screen flex  flex-col md:flex-col lg:flex-row gap-10 ">
      
           
        <Navbar/>
     
        <router-view/>

    </main>
</template>

<script setup>
import Navbar from '../layout/Nav.vue'
import Trending from '../src/components/Trending.vue'
</script>