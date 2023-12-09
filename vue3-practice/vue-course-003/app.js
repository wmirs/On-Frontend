const app = Vue.createApp({
  data() {
    return {
      name: "WangMu",
      age: 34,
      favoriteNum: this.getMyFavoriteNum(),
      imageUrl: "https://picx.zhimg.com/70/v2-3b4fc7e3a1195a081d0259246c38debc_1440w.avis?source=172ae18b&biz_tag=Post"
    }
  },
  methods: {
    getMyFavoriteNum() {
      return Math.random();
    }
  }
});
app.mount("#personal")