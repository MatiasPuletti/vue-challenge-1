const app = Vue.createApp({
  data() {
    return {
      name: "Matias",
      age: 31,
      imageUrl:
        "https://images.axios.com/PqYTXWvBuNVI_y-lPwofe7UUlZc=/0x140:3596x2163/1920x1080/2022/01/30/1643556076319.jpg?w=1920",
    };
  },
  methods: {
    calculateAge() {
      return this.age + 5;
    },
    outputRandomNumber() {
      const randomNumber = Math.random();
      return randomNumber;
    },
  },
});

app.mount("#assignment");
