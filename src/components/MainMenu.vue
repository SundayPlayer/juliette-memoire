<template>
    <div class="main-menu">
        <p v-if="simplify">Lecture simplifiée</p>
        <p v-else>Lecture augmentée</p>
    </div>
</template>

<script>
  export default {
    name: 'MainMenu',
    props: {
      simplify: Boolean
    }
  }
</script>

<style scoped lang="scss">

</style>
