<template>
  <div class="bg-[var(--semi-dark-blue)] p-5 flex relative  gap-10 rounded-md h-[24px] w-screen md:w-[719px]  lg:h-[800px] lg:w-[96px] shrink-0"
  >
    <div class="top flex items-center w-screen md:flex-row lg:flex-col gap-10">
      <img :src="movie" alt="" class="h-5" />

      <div class="routers flex flex-row md:flex-row lg:flex-col items-center gap-2">
        <router-link to="/" exact-active-class="active group">
          <img :src="$route.path === '/' ? activeHome : home" alt="" class="h-[16px]  group hover:brightness-75  hover:hue-rotate-[360deg] transition duration-300" />
        </router-link>

    
        <router-link to="/movies" exact-active-class="active">
          <img :src="$route.path === '/movies' ? activeMovies : movies" alt="" />
        </router-link>

        <router-link to="/tv-series" exact-active-class="active">
          <img :src="$route.path === '/tv-series' ? activeSeries : tvSeries" alt="" />
        </router-link>
        <router-link to="/bookmarked" exact-active-class="active">
          <img :src="$route.path === '/bookmarked' ? bookmarked :bookmark" alt="" />
        </router-link>
      </div>
 <img :src="avatar" alt="" class="h-8 absolute right-2 lg:bottom-20 lg:right-8">
    </div>

   
  </div>
</template>

<script setup>
import {useRoute} from 'vue-router'
import movie from '@/assets/logo.svg'
import home from '@/assets/icon-nav-home.svg'
import bookmark from '@/assets/icon-nav-bookmark.svg'
import bookmarked from '@/assets/icon-bookmark-full.svg'
import movies from '@/assets/icon-nav-movies.svg'
import activeMovies from '@/assets/icon-movies-active.svg'
import activeSeries from '@/assets/icon-series-active.svg'
import tvSeries from '@/assets/icon-nav-tv-series.svg'
import activeHome from '@/assets/icon-home-active.svg'
import avatar from '@/assets/image-avatar.png'

</script>


<style scoped>

</style>