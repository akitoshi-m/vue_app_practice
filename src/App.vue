<template>
  <div>
    <LikeHeader></LikeHeader>
    <LikeNumber :number="number">
      <h3>デフォルトスロットその1</h3>
      <template v-slot:title>
        <h2>こんにちは</h2>
      </template>
      <h3>デフォルトスロット</h3>
      <template v-slot:number>
        <h2>totalいいね数</h2>
        <h2>{{ number }}</h2>
      </template>
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

