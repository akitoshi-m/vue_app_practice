<template>
  <div>
    <h1>
      Home
    </h1>
    <button @click="clickUrl">Usersへの切り替えボタン</button>
    <p>{{ doubleCount }}</p>
    <button @click="increment(20)">+1ボタン</button>
    <button @click="decrement(2)">-1ボタン</button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default ({
  methods: {
    ...mapMutations(["increment", "decrement"]),
    clickUrl() {
      this.$router.push("users/1/profile");
    }
  },
  computed: {
    doubleCount() {
      return this.$store.getters.doubleCount;
    }
  }
})
</script>
