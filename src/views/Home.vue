<template>
  <div>
    <h1>
      Home
    </h1>
    <button @click="clickUrl">Usersへの切り替えボタン</button>
  </div>
</template>

<script>

export default ({
  methods: {
    clickUrl() {
      this.$router.push("users");
    }
  }
})
</script>
