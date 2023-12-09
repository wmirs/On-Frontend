import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import axios from 'axios'

export const useCounterStore = defineStore("counter", () => {
    const count = ref(0)
    const doubleCount = computed(() => count.value * 2)
    const increment = () => count.value++

    const list = ref([])
    const API_URL = 'http://geek.itheima.net/v1_0/channels'
    const loadList = async() => {
        const resp = await axios.request(API_URL)
        console.log(resp)
        list.value = resp.data.data.channels
    }

    return {
        count, doubleCount, list,
        increment, loadList
        
    }
})