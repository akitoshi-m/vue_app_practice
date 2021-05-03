<template>
  <div>
    <h1>
      Home
    </h1>
    <button @click="clickUrl">Usersへの切り替えボタン</button>
    <p>{{ doubleCount }}</p>
    <button @click="increseCount">ボタン</button>
  </div>
</template>

<script>

export default ({
  methods: {
    clickUrl() {
      this.$router.push("users/1/profile");
    },
    increseCount() {
      this.$store.state.count += 1
    }
  },
  computed: {
    doubleCount() {
      return this.$store.getters.doubleCount;
    }
  }
})
</script>
