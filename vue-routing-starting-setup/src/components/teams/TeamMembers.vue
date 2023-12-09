<script>
  import UserItem from '../users/UserItem.vue';
  export default {
    data() {
      return {
        teamName: '',
        members: [],
      };
    },
    inject: ['teams', 'users'],
    components: {
      UserItem,
    },
    methods: {
      loadMembers(teamId) {
        const team = this.teams.find((t) => t.id === teamId);
        if (team && team.members) {
          this.teamName = team.name;
          const selectedMembers = [];
          team.members.forEach((memberId) => {
            const user = this.users.find((u) => u.id === memberId);
            if (user) {
              selectedMembers.push(user);
            }
          });
          this.members = selectedMembers;
        } else {
          this.teamName = '';
          this.members = [];
        }
      },
    },
    watch: {
      $route(newRoute) {
        this.loadMembers(newRoute.params.teamId);
      },
    },
    created() {
      this.loadMembers(this.$route.params.teamId);
      this.$watch('$route', (newRoute, oldRoute) => {
        console.log(newRoute);
        console.log(oldRoute);
      });
    },
  };
</script>
<template>
  <div>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item v-for="member in members" :key="member.id" :fullName="member.fullName" :role="member.role"></user-item>
    </ul>
    <router-link to="/teams/t2">Go to team 2</router-link>
  </div>
</template>
<style scoped>
  div {
    margin: 2rem auto;
    max-width: 40rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 1rem;
    border-radius: 12px;
  }

  h2 {
    margin: 0.5rem 0;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
</style>
