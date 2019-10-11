<template>
  <div>
    <GameTitle/>

    <GameInfo/>

    <GameGrid/>

    <GameBottom/>
  </div>
</template>

<script>
import GameTitle from './game/GameTitle';
import GameInfo from './game/GameInfo';
import GameGrid from './game/GameGrid';
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

<style>

</style>