<script setup>
  import { ref } from 'vue';
  const userName = ref('Remilia Scarlet');
  const userAge = ref(500);
  const firstName = ref('');
  const lastName = ref('');
</script>

<template>
  <section>
    <h2>{{ userName }}</h2>
    <h3>{{ userAge }}</h3>
    <p>{{ firstName }} {{ lastName }}</p>
    <div>
      <input type="text" placeholder="First Name" v-model="firstName" />
      <input type="text" placeholder="Last Name" v-model="lastName" />
    </div>
  </section>
</template>
<style scoped>
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 10rem auto;
    background-color: lightgray;
    width: 30rem;
    height: 20rem;
    border-radius: 10px;
  }
</style>
