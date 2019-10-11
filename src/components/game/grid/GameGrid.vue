<template>
  <div class="game-grid-container">
    <div class="game-grid">
      <div v-for="(item, k) in flatGrid" :key="k" :style="getItemStyle(item.i, item.j)">
        <GridItem :item="item.el"/>
      </div>
    </div>
  </div>
</template>

<script>
import GridItem from './GridItem';

export default {
  components: {
    GridItem,
  },

  data() {
    return {
      grid: [
        [1, 2048, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11456, 12],
        [13, 14, 15, 16],
      ],
    }
  },

  methods: {
    getItemStyle(i, j) {
      return {
        'grid-row': `${i + 1} / ${i + 2}`,
        'grid-column': `${j + 1} / ${j + 2}`,
        padding: '2px',
      };
    },
  },

  computed: {
    flatGrid() {
      const result = [];

      this.grid.forEach((row, i) => {
        row.forEach((el, j) => result.push({ el, i, j }));
      });

      return result;
    }
  }
}
</script>

<style scoped>
.game-grid-container {
  margin: 20px;
  padding: 10px;
  background-color: #e7e7e7;
  border-radius: 5px;
}

.game-grid {
  display: grid;
  width: 440px;
  height: 440px;
  grid-template-rows: repeat(4, 25%);
  grid-template-columns: repeat(4, 25%);
}
</style>