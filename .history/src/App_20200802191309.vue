<template>
  <div id="app">
    <Menu class="menu" />
    <router-view />
    <Footer>
      <span>Terms and Conditions</span>
      <span>Privacy Policy</span>
      <span>Contact Us</span>
      <span class="follow">Follow Us:</span>
      <i class="material-icons">facebook</i>
    </Footer>
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
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700&display=swap');

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

footer {
  display: flex;
  max-width: 1024px;
  margin: 50px auto;
  align-items: center;

  span {
    font-size: 10px;
    margin-right: 20px;
  }

  .follow {
    margin: 0 5px 0 0;
    width: 70%;
    text-align: right;
  }
}
</style>
