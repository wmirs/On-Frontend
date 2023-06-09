<!-- <script setup>
import { ref, watch } from 'vue'
const count = ref(0)
const name = ref("Remilia")
const increCount = () => count.value++
const updateName = () => {
  name.value = name.value + "_" + count.value
}

// 侦听
// watch(count, (newValue, oldValue) => {
//   console.log("newValue: " + newValue + ", oldValue: " + oldValue)
// })
watch([count, name],
  ([newCount, newName], [oldCount, oldName]) => {
    console.log("Count: " + oldCount + " => " + newCount)
    console.log("Name: " + oldName + " => " + newName)
  },
  {
    // 立即执行
    immediate: true
  })

</script>

<template>
  <button @click="increCount">{{ count }}</button>
  <button @click="updateName">{{ name }}</button>
</template> -->

<script setup>
import { ref, watch } from 'vue'
const state = ref({ count: 1, age: 18 })
const updateStateCount = () => state.value.count++

watch(state, (newValue, oldValue) => {
  console.log("State: " + JSON.stringify(oldValue) + " => " + JSON.stringify(newValue))
}, {
  deep: true
})
</script>

<template>
  <button @click="updateStateCount">{{ state.count }}</button>
</template>

<style>
button {
  width: 150px;
  height: 50px;
  font-size: 20px;
  font-weight: 800;
  color: blue;
}
</style>