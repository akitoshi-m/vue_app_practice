<template>
  <div>
    <LikeHeader></LikeHeader>
    <LikeNumber :number="number">
      <h2>totalいいね数</h2>
      <h2>{{ number }}</h2>
    </LikeNumber>
  </div>
</template>

<script>
// LikeHeaderはローカル登録
import LikeHeader from './components/LikeHeader.vue'

export default {
  data() {
    return {
      number: 20
    }
  },
  components: {
    LikeHeader
  }
}
</script>

