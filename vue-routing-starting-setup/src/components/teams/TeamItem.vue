<script>
  export default {
    props: ['teamId', 'name', 'members'],
    computed: {
      teamMembersLink() {
        return '/teams/' + this.teamId;
      },
    },
  };
</script>
<template>
  <li>
    <h3>{{ name }}</h3>
    <p>{{ members.length }} Members</p>
    <router-link :to="teamMembersLink">View Members</router-link>
  </li>
</template>
<style scoped>
  li {
    margin: 1rem 0;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    border-radius: 12px;
    padding: 1rem;
  }

  li h3 {
    margin: 0.5rem 0;
    font-size: 1.25rem;
  }

  li p {
    margin: 0.5rem 0;
  }

  a {
    text-decoration: none;
    color: white;
    display: inline-block;
    padding: 0.5rem 1.5rem;
    background-color: #11005c;
  }

  a:hover,
  a:active {
    background-color: #220a8d;
  }
</style>
