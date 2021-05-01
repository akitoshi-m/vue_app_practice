<template>
  <div>
    <LikeHeader></LikeHeader>
    <LikeNumber>
      <h2>こんにちは</h2>
    </LikeNumber>
    <button @click="currentComponent = 'Home'">HOMEボタン</button>
    <button @click="currentComponent = 'About'">ABOUTボタン</button>
    <component :is="currentComponent"></component>
  </div>
</template>

<script>
// LikeHeaderはローカル登録
import LikeHeader from './components/LikeHeader.vue';
import Home from './components/Home.vue';
import About from './components/About.vue';

export default {
  data() {
    return {
      number: 20,
      currentComponent: "Home"
    }
  },
  components: {
    LikeHeader,
    Home,
    About
  }
}
</script>

