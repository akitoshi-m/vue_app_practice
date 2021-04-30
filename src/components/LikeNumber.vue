<template>
  <div>
    <slot>デフォルトのタイトル</slot>
    <p>いいね{{ number }}</p>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      number: 10
    }
  },
  methods: {
    increment() {
      this.number += 1
    }
  },
  props: {
    totalNumber: String
  }
}
</script>
