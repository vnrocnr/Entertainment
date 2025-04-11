<template>
    <main class="w-screen px-3 relative">
        <input  type="search" :value="modelValue"  placeholder="Search for movies or TV series"
        class="text-white w-[257px]  md:w-[381px] px-10 " @input="$emit('update:modelValue', $event.target.value)">
        <img :src="search" alt="search icon" class="absolute -top-1">
    </main>
</template>

<script setup>
import search from '@/assets/icon-search.svg'
defineProps(['modelValue'])
</script>