

<template>
  <main class="flex flex-col gap-10 pt-3 px-5">
    <SearchBar v-model="searchText" />

    <div v-for="data in searchResult" :key="data.title"  class="search-container relative h-[154px] w-[164px] md:h-[192px] md:w-[220px] lg:h-[226px] lg:w-[280px] shrink-0 border rounded-md ">
      <img src="" alt="" class="h-[110px] w-[164px] md:h-[140px] md:w-full lg:h-[174px] lg:w-[280px]"/>

      <div class="description">
        <p>{{ data.year }}</p>
        <p></p>
        <p></p>
      </div>
      <p class="title"></p>

    </div>

    <Trending />
    <Recommended />
  </main>
</template>
<script setup lang="ts">
import {ref, reactive, onMounted, computed} from 'vue'
import Trending from '@/components/Trending.vue'
import SearchBar from '@/components/SearchBar.vue'
import Recommended from '@/components/Recommended.vue'
import { useDataStore } from '@/stores/data'
const searchText = ref('')
const display = 'visibile';
const dataHolder = useDataStore()
const isTyping = ref(false)
const searchStore = ref([])

const searchResult = computed(() => {
  return dataHolder.dataStore.filter((data) => {
            data.title.toLowerCase().includes(searchText.value.toLowerCase())
        })

})
 
      

      


</script>