<script>
  import TeamItem from './TeamItem.vue';
  export default {
    inject: ['teams'],
    components: {
      TeamItem,
    },
  };
</script>

<template>
  <ul>
    <team-item v-for="team in teams" :key="team.id" :teamId="team.id" :name="team.name" :members="team.members"></team-item>
  </ul>
</template>
<style scoped>
  ul {
    list-style: none;
    margin: 2rem auto;
    max-width: 40rem;
    padding: 0;
  }
</style>
