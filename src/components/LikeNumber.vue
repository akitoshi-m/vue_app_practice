<template>
  <div>
    <slot></slot>
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
