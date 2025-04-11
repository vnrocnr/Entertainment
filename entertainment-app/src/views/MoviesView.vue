<template>
    <main class="flex flex-col gap-5 h-[850px] lg:h-[850px] lg:w-screen px-4">
      <h1 class="text-white text-[20px]">Movies</h1>
  
     
      <div class="container   h-screen overflow-scroll no-scrollbar  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 w-screen  flex-wrap">
  
          
        <div class="relative group text-white overflow-hidden  h-[154px] w-[164px] md:h-[192px] md:w-[220px] lg:h-[226px] lg:w-[280px] shrink-0  rounded-md "
          v-for="list in filteredMovies" :key="title">
   <img :src="getImagePath(list.thumbnail.regular.large)" alt="" class="h-[110px] w-[164px] md:h-[140px] md:w-[220px] lg:h-[174px] lg:w-[280px] rounded-md"/>
  
          <div class="details text-[12px] bottom-10  flex gap-2">
            <p>{{ list.year }}</p>
            <p>{{ list.category }}</p>
            <p>{{ list.rating }}</p>
          </div>
          <p class="title  bottom-3 ">{{ list.title }}</p>
        
        
         <button class="bookmark group custom-bg-opacity hover:bg-white  hover:text-black bg-opacity-5 absolute h-10 w-10 top-2 right-2  rounded-full flex items-center justify-center">
            <img :src="bookmarkIcon" alt="" class="group-hover:text-black h-4 w-4 ">
        </button>

          <button class="absolute opacity-0 group-hover:opacity-100 group-hover:cursor-pointer left-[40px] top-10 lg:top-17 lg:left-[90px] h-[45px] w-[85px] lg:w-[100px] rounded-full custom-white-opacity bg-opacity-[20]">
            Play 
          </button>

        </div>

       
      </div>
    </main>
  </template>
  
  <script setup>
  import { useDataStore } from '@/stores/data'
  import { onMounted, computed } from 'vue'

  import bookmarkIcon from '@/assets/icon-bookmark-empty.svg'
  
  const dataStorage = useDataStore()
  
  const getImagePath = (imagePath) => {
    return new URL(imagePath, import.meta.url).href
  }

  const filteredMovies = computed(() => {
        return dataStorage.dataStore.filter((x) => x.category === 'Movie')
  })
  </script>
  