export const fruitMixin = {
  data() {
    return {
      text: "papper",
      fruits: ["Apple", "mango", "banana", "orange", "melon"],
      filterText: ""
    };
  },
  computed: {
    filteredFruits() {
      return this.fruits.filter(element => {
        return element.match(this.filterText);
      });
    }
  }
};
