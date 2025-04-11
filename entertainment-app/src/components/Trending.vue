<template>
  <main class="flex flex-col gap-5">
    <h1 class="text-white text-[20px]">Trending</h1>

    <div class="container flex gap-10 overflow-x-scroll lg:overflow-hidden">
      <div class="relative group overflow-hidden h-[140px] w-[240px] shrink-0 border rounded-md" v-for="list in trending" :key="title">
        <img :src="getImagePath(list.thumbnail.trending.large)"
          alt="" class="h-[100%] w-[100%] bg-contain"
        />

        <div class="details pl-2 bottom-8 absolute flex gap-2 text-white">
          <ul class="flex text-[10px] gap-2">
            <li>{{ list.year }}</li>

            <div class="movie">
              <li>{{ list.category }}</li>
            </div>

            <li>{{ list.rating }}</li>
          </ul>
        </div>
        <p class="title pl-2 absolute bottom-3 text-white">{{ list.title }}</p>

        <button
          class="bookmark custom-bg-opacity  rounded-full h-7 w-7 flex items-center justify-center absolute top-2 right-3"
        >
          <img :src="bookmarkIcon" alt="" />
        </button>

        
        <button class="absolute  text-white opacity-0 group-hover:opacity-100 group-hover:cursor-pointer left-[40px] top-10  md:left-[80px] lg:top-10  lg:left-[70px] h-[45px] w-[85px] lg:w-[100px] rounded-full custom-white-opacity bg-opacity-[20]">
            Play 
          </button>
      </div>
    </div>
  </main>
</template>

<script setup>
import { useDataStore } from '@/stores/data'
import { onMounted } from 'vue'
import bookmarkIcon from '@/assets/icon-bookmark-empty.svg'
const dataStorage = useDataStore()
const getImagePath = (imagePath) => {
  return new URL(imagePath, import.meta.url).href
}

const trending = dataStorage.dataStore.filter((trending) => trending.isTrending === true)
</script>
