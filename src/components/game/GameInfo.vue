<template>
  <div class="info">
    <div class="scores">
      <div class="score-box current-score">
        Scores: 00023
      </div>

      <div class="score-box best-score">
        Best: 00222
      </div>
    </div>
    

    <div class="control-buttons">
      <button class="button" @click="reset">New game</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    reset: { 
      type: Function,
      required: true,
    },
  },
}
</script>

<style scoped>
.info {
  flex: 1;
  margin: 15px 0;
  display: flex;
  justify-content: space-around;
}

.scores {
  display: flex;
}

.score-box {
  padding: 10px;
  margin: 4px;
  font-size: 20px;
  display: flex;
  justify-content: center;
  border-radius: 5px;
}

.current-score {
  background: #6b6900;
  color: #d1d1d1;
}

.best-score {
  background: #575757;
  color: #d1d1d1;
}

.control-buttons {
  display: flex;
  flex-direction: column;
}

.button {
  background-color: #c95000;
  font-size: 20px;
  color: #ebebeb;
}

.button:hover {
  background-color: #6e2c00
}
</style>