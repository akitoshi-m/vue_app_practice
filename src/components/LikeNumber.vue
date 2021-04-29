<template>
  <div>
    <p>いいね{{ number }}</p>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
export default {
  methods: {
    increment() {
      this.number += 1;
    }
  },
  props: {
    totalNumber: String
  }
}
</script>
