<script>
  import AddResource from './AddResource.vue';
  import LearningResources from './LearningResources.vue';

  export default {
    data() {
      return {
        selectedTab: 'learning-resources',
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
      };
    },
    computed: {
      listResButtonStyle() {
        return this.selectedTab === 'learning-resources' ? null : 'flat';
      },
      addResButtonStyle() {
        return this.selectedTab === 'add-resource' ? null : 'flat';
      },
    },
    methods: {
      setSelectedTab(newTab) {
        this.selectedTab = newTab;
      },
      addResource(res) {
        this.learningResources.unshift(res);
        this.selectedTab = 'learning-resources';
      },
    },
    provide() {
      return {
        resources: this.learningResources,
        addResource: this.addResource,
      };
    },
    components: {
      AddResource,
      LearningResources,
    },
  };
</script>

<template>
  <base-card>
    <base-button
      @click="setSelectedTab('learning-resources')"
      :mode="listResButtonStyle"
      >Stored Learning Resources</base-button
    >
    <base-button
      @click="setSelectedTab('add-resource')"
      :mode="addResButtonStyle"
      >Add New Learning Resource</base-button
    >
  </base-card>
  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
</template>
