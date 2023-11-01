<script>
  export default {
    data() {
      return {
        learningResources: [
          {
            id: 'official-guide',
            title: 'Official Guide',
            description: 'The official Vue.js documentation.',
            link: 'https://vuejs.org',
          },
          {
            id: 'google',
            title: 'Google',
            description: 'Learn to google...',
            link: 'https://google.org',
          },
        ],
      };
    },
  };
</script>
<template>
  <ul>
    <li
      v-for="learningResource in learningResources"
      :key="learningResource.id"
    >
      {{ learningResource }}
    </li>
  </ul>
</template>
<style></style>
