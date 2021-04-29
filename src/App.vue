<template>
  <div>
    <LikeHeader></LikeHeader>
    <LikeNumber :number="number"></LikeNumber>
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

