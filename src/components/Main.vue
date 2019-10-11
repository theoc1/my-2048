<template>
  <div class="main-container">
    <div class="item">
      <GameTitle/>
    </div>

    <div class="item">
      <GameInfo/>
    </div>

    <div class="item" :style="{ flex: 1 }">
      <GameGrid/>
    </div>

    <div class="item">
      <GameBottom/>
    </div>
  </div>
</template>

<script>
import GameTitle from './game/GameTitle';
import GameInfo from './game/GameInfo';
import GameGrid from './game/grid/GameGrid';
import GameBottom from './game/GameBottom';

export default {
  components: {
    GameTitle,
    GameInfo,
    GameGrid,
    GameBottom,
  },
}
</script>

<style scoped>
.main-container {
  display: flex;
  flex-direction: column;
}

.item {
  display: flex;
  justify-content: center;
}

</style>