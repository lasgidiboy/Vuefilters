<template>
  <div>
    <h1>filters and mixins</h1>
    <input v-model="filterText">
    <ul>
      <li v-for="(fruit, index) in filteredFruits" :key="index">{{fruit}}</li>
    </ul>
  </div>
</template>

<script>
import {fruitMixin} from './fruitMixin.js'
export default{
  mixins: [fruitMixin]
};
</script>
