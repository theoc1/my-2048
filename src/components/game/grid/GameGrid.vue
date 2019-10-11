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
// eslint-disable-next-line
import { collapseRow, calculate } from '../../../lib/game';

export default {
  components: {
    GridItem,
  },

  data() {
    return {
      grid: [],
    }
  },

  methods: {
    keydownHandler(event) {
      const keys = ['ArrowUp', 'ArrowRight', 'ArrowLeft', 'ArrowDown'];

      if (!keys.includes(event.key)) return;
      // eslint-disable-next-line
      console.log(event.key);

      const result = calculate(this.grid, event.key);

      if (result === 'eog') {
        window.alert('End of game');
        this.reset();
        return;
      }
      
      this.$set(this, 'grid', result);
    },

    reset() {
      this.$set(this, 'grid', [
        [2, 8, 2, 0],
        [0, 0, 0, 4],
        [0, 0, 2, 0],
        [0, 2, 0, 0],
      ]);
    },

    getItemStyle(i, j) {
      return {
        'grid-row': `${i + 1} / ${i + 2}`,
        'grid-column': `${j + 1} / ${j + 2}`,
        'padding': '2px',
      };
    },
  },

  beforeMount() {
    this.reset();
  },

  created() {
    window.addEventListener('keydown', this.keydownHandler);
  },

  destroyed() {
    window.removeEventListener('keydown', this.keydownHandler);
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