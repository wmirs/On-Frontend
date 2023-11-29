<script>
  import LearningResourceItem from './LearningResourceItem.vue';
  export default {
    inject: ['resources'],
    components: {
      LearningResourceItem,
    },
  };
</script>
<template>
  <ul>
    <learning-resource-item
      v-for="resource in resources"
      :key="resource.id"
      :id="resource.id"
      :resource="resource"
    ></learning-resource-item>
  </ul>
</template>
<style scoped>
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    margin: auto;
    max-width: 40rem;
  }
</style>
