<script>
  import TheHeader from './components/layouts/TheHeader.vue';
  import LearningResources from './components/learning-resources/LearningResources.vue';
  export default {
    data() {
      return {
        learningResources: [
          {
            id: 'official-guide',
            title: 'Official Guide',
            description: 'The official Vue.js documentation.',
            link: 'https://cn.vuejs.org',
          },
          {
            id: 'google',
            title: 'Google',
            description: 'Learn to google...',
            link: 'https://google.com',
          },
        ],
        message: 'Remilia Hello',
      };
    },
    methods: {},
    components: {
      LearningResources,
      TheHeader,
    },
  };
</script>
<template>
  <the-header title="RememberMe"></the-header>
  <learning-resources :resources="learningResources"></learning-resources>
</template>
