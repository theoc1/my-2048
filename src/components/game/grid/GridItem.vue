<template>
  <div class="item" :style="itemStyle">
    <div v-if="item !== 0">{{ item }}</div>
  </div>
</template>

<script>
import colorPicker from '../../../lib/color-picker';
export default {
  props: {
    item: {
      type: Number,
      required: true,
    }
  },

  computed: {
    itemStyle() {
      const { color, bgColor } = colorPicker(this.item);
      return {
        color,
        'background-color': bgColor,
      };
    },
  }
}
</script>

<style scoped>
.item {
  font-size: 20px;
  background-color: grey;
  border-radius: 4px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  color: #818181;
}
</style>