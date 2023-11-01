<script>
  import { computed } from 'vue';
  import LearningResources from './components/learning-resources/LearningResources.vue';
  import L0SFC from './components/pi/L0SFC.vue';
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
    methods: {
      updateMessage() {
        this.message = 'HelloWorld' + new Date();
      },
    },
    components: {
      LearningResources,
      L0SFC,
    },
    provide() {
      return {
        message: computed(() => this.message),
      };
    },
  };
</script>
<template>
  <learning-resources :resources="learningResources"></learning-resources>
  <L0SFC />
  <button @click="updateMessage">Update Message</button>
</template>
