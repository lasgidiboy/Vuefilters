<template>
  <div>
    <h1>filters and mixins</h1>
    <p>{{ text | toUppercase }}</p>
    <input v-model="filterText" />
    <ul>
      <li v-for="(fruit, index) in filteredFruits" :key="index">{{ fruit }}</li>
    </ul>
    <hr />
    <app-list></app-list>
  </div>
</template>

<script>
import List from "./List.vue";
import { fruitMixin } from "./fruitMixin.js";
export default {
  mixins: [fruitMixin],
  filters: {
    toUppercase(value) {
      return value.toUpperCase();
    }
  },
  components: {
    appList: List
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
