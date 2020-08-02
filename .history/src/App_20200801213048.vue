<template>
  <div id="app">
    <Menu class="menu" />
    <router-view />
  </div>
</template>

<script>
import Menu from './components/menu/menu'

export default {
  name: 'App',

  components: {
    Menu
  },

  data: () => ({

  })
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;0,900;1,900&display=swap');

body {
  margin: 0;
}

#app {
  font-family: 'Lato', sans-serif;;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.menu {
    position: absolute;
    width: 100%;
}
</style>
