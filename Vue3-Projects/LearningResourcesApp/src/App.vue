<script>
  import TheHeader from './components/layouts/TheHeader.vue';
  import TheResources from './components/learning-resources/TheResources.vue';
  export default {
    methods: {},
    components: {
      TheResources,
      TheHeader,
    },
  };
</script>
<template>
  <the-header title="RememberMe"></the-header>
  <the-resources></the-resources>
</template>
