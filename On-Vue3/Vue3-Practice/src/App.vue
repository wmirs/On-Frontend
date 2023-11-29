<script>
  import TheForm from './components/TheForm.vue';

  export default {
    data() {
      return {
        message: '',
      };
    },
    components: {
      TheForm,
    },
  };
</script>

<template>
  <p>Message is: {{ message }}</p>
  <input v-model="message" type="text" />
  <input type="password" />
  <input type="search" />
  <the-form></the-form>
</template>

<style scoped>
  p {
    font-size: 1rem;
    color: white;
  }
</style>
