<template>
  <div>
    <!-- On appel la fonction "left" sur l'événement "afterLeave" -->
    <transition name="anime" v-on:afterLeave="left">
      <p v-show="show">
        {{ items[current].txt }}
      </p>
    </transition>
    <button @click="animate(true)"><</button>
    &nbsp;
    <button @click="animate(false)">></button>
  </div>
</template>

<script>
export default {
  name: "TextComponent",
  data: function() {
    return {
      items: [
        { txt: "Le texte 1" },
        { txt: "Le texte 2" },
        { txt: "Le texte 3" }
      ],
      show: true,
      current: 0,
      sens: false
    }
	},
	methods: {
		animate: function(sens) {
      // Définit le sens
      this.sens = sens
			// Cache le texte pour déclencher l'animation "leave"
			this.show = false
    },
    left: function(el) {
      // Parcourt le tableau de texte en fonction du sens
			if (this.sens) {
				this.current <= 0 ? this.current = 2 : this.current--
			} else {
				this.current >= 2 ? this.current = 0 : this.current++
			}
      // Réaffiche le nouveau texte
      // Ce qui déclenche l'animation "enter"
      this.show = !this.show;
    }
	}
}
</script>

<style scoped>
/**
  * v-enter: état de départ pour enter. Ajouter avant que l'élément ne soit inséré, supprimé une fois l'élement inséré
  * v-enter-active: état actif pour enter. Ajouté avant que l'élément ne soit inséré, supprimé une fois la transition finie
  * v-enter-to: état de fin. Ajouté une fois l'élément inséré (au moment où v-enter est supprimé), supprimé une fois la transition finie
  * v-leave: état de départ. Ajouté dèq qu'une transition sortante est déclenché
  * v-leave-active: état actif pour leave. Ajouté dès qu'une transition sortantes est déclenchée, supprimé lorsque la transtion est terminée
  * v-leave-to: état de fin pour leave. Ajouté après la transition sortante (au moment où v-leave est supprimé), supprimé lorsque la transtion est fini
*/

/* Les class a passer sont définies par le nom de la transition */
.anime-enter-active {
  transition: all .5s ease-in-out;
}
.anime-leave-active {
  transition: all 1s ease-in;
}
.anime-leave-to {
  opacity: 0;
  transform: translate(10px);
}
.anime-enter {
  opacity: 0;
  transform: translate(-10px);
}
</style>
