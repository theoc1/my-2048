<template>
  <div id="app">
    <Main/>
  </div>
</template>

<script>
import Main from './components/Main';

export default {
  name: 'app',
  components: {
    Main,
  }
}
</script>

<style>
#app {
  font-family: 'Courier New', Courier, monospace;
}

button {
  padding: 10px;
  font-family: 'Courier New', Courier, monospace;
  border-radius: 5px;
  outline: none;
  box-shadow: none;
  border: none;
}
</style>
