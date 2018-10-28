<template>
  <div class="home">
    <MainMenu simplify></MainMenu>
    <MainMenu></MainMenu>
  </div>
</template>

<script>

import MainMenu from '../components/MainMenu'

export default {
  name: 'home',
  components: {
    MainMenu
  }
}
</script>
