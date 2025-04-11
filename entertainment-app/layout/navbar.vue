<template>
  <main class="h-[56px] md:rounded-md md:[719px] md:[72px] m-[20px] lg:flex lg:flex-col bg-[var(--semi-dark-blue)] flex items-center justify-between px-10 lg:h-[800px] lg:w-[96px] lg:py-20 lg:rounded-lg">
  
    <div class="movie-logo flex  gap-10">
          <img :src="movie" alt="" class="h-[20px] lg:h-[25.6px] "/>
  
    <div class="routers flex lg:flex-col gap-5 items-center ">

       
  
      <router-link to="/" exact-active-class="active">
        <img :src="activeHome" alt="" class="h-[16px]"/>
      </router-link>
      <router-link to="/" exact-active-class="active">
        <img :src="movies" alt="" />
      </router-link>

      <router-link to="/" exact-active-class="active">
        <img :src="tvSeries" alt="" />
      </router-link>
      <router-link to="/" exact-active-class="active">
        <img :src="bookmark" alt="" />
      </router-link>
    </div>
    </div>
 

    <img :src="avatar" alt="" class="h-[24px]">
  </main>
</template>

<script setup>
import movie from '@/assets/logo.svg'
import home from '@/assets/icon-nav-home.svg'
import bookmark from '@/assets/icon-nav-bookmark.svg'
import movies from '@/assets/icon-nav-movies.svg'
import tvSeries from '@/assets/icon-nav-tv-series.svg'
import activeHome from '@/assets/icon-home-active.svg'
import avatar from '@/assets/image-avatar.png'
</script>

<style>
</style>