<script>
  export default {
    setup() {
      const messages = [
        { id: 1, content: 'hello world1' },
        { id: 2, content: 'hello world2' },
        { id: 3, content: 'hello world3' },
        { id: 4, content: 'hello world4' },
      ];

      return { messages };
    },
  };
</script>
<template>
  <ul>
    <li v-for="message in messages" :key="message.id">{{ message.id }}: {{ message.content }}</li>
  </ul>
</template>
