<template>
  <div class="home">
    <MainMenu simplify></MainMenu>
    <MainMenu></MainMenu>
    <TextComponent></TextComponent>
  </div>
</template>

<script>

import MainMenu from '../components/MainMenu'
import TextComponent from '@/components/TextComponent'

export default {
  name: 'home',
  components: {
    MainMenu,
    TextComponent
  }
}
</script>
