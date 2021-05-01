<template>
  <div>
    <LikeHeader></LikeHeader>
    <LikeNumber>
      <h2>こんにちは</h2>
    </LikeNumber>
    <button @click="currentComponent = 'Home'">HOMEボタン</button>
    <button @click="currentComponent = 'About'">ABOUTボタン</button>
    <component :is="currentComponent"></component>

    <!-- テキストエリア1行 -->
    <h2>イベント</h2>
    <label>タイトル</label>
    <input
      id="title"
      type="text"
      v-model="eventObject.text"
    >
    <p>{{ eventObject.title }}</p>

    <!-- テキストエリア複数行 -->
    <textarea
      id="content"
      type="text"
      v-model="eventObject.content"
    ></textarea>
    <pre>{{ eventObject.content }}</pre>
   
    <!-- チェックボックス -->
    <input
      id="check"
      type="checkbox"
      v-model="eventObject.check"
    >
    <p>{{ eventObject.check }}</p>
    <hr>
    <input
      id="ten"
      type="checkbox"
      value="10代"
      v-model="eventObject.target"
    >
    <label for="10代">10代</label>
    <br>
    <input
      id="twenty"
      type="checkbox"
      value="20代"
      v-model="eventObject.target"
    >
    <label for="20代">20代</label>
    <br>
    <input
      id="thirty"
      type="checkbox"
      value="30代"
      v-model="eventObject.target"
    >
    <label for="30代">30代</label>
    <p>{{ eventObject.target }}</p>

    <!-- ラジオボタン -->
    <input
      type="radio"
      id="free"
      value="無料"
      v-model="eventObject.price"
    >
    <label for="paid">無料</label>

    <input
      type="radio"
      id="free"
      value="有料"
      v-model="eventObject.price"
    >
    <label for="paid">有料</label>
    <br>

    <!-- セレクトボックス -->
    <select v-model="eventObject.location">
      <option v-for="location in locations" :key="location.id">
        {{ location }}
      </option>
    </select>
    <p>{{ eventObject.location }}</p>
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
      currentComponent: "Home",
      eventObject: {
        title: "タイトル",
        content: "内容",
        check: false,
        target: [],
        price: "無料",
        location: []
      },
      locations: ["東京", "大阪", "福岡"]
    }
  },
  components: {
    LikeHeader,
    Home,
    About
  }
}
</script>

