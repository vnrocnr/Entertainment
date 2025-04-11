import { defineStore } from "pinia";
import data from './data.json'
export const useDataStore = defineStore('data', {

state: () => {
    return{
        dataStore: data
    }
},
    getters: {
        
    },

    actions: {
      
    }
})