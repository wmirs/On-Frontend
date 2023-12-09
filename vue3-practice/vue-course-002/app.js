const app = Vue.createApp({
  data: function() {
    return {
      courseGoalA: "Finish the course and learn Vue!",
      courseGoalB: "Master Vue and build amazing apps!",
      vueLink: "https://cn.vuejs.org/"
    }
  },
  methods: {
    outputGoal: function() {
      const randomNum = Math.random();
      if(randomNum < 0.5) {
        return this.courseGoalA;
      }else {
        return this.courseGoalB;
      }
    }
  }
});

app.mount("#user-goal")