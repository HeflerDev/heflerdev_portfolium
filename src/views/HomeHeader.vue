<template lang="html">
  <header>
    <b-container class="b-cont">
      <b-row class="ro">
        <TextPresentation :text="store.currentLang.content.header.call" />
        <ImageComputer />
        <TextHeaderSecondary />
      </b-row>
    </b-container>
    <div class="black" />
    <div class="icons">
      <GithubIcon :size="size" />
      <LinkedinIcon :size="size" />
      <InstagramIcon :size="size" />
    </div>
  </header>
</template>

<script>
// import VueNavbar from './components/VueNavbar.vue'
import TextPresentation from './components/TextPresentation.vue'
import ImageComputer from './components/ImageComputer.vue'
import TextHeaderSecondary from './components/TextHeaderSecondary.vue'

import GithubIcon from '../assets/icons/GithubIcon.vue'
import InstagramIcon from '../assets/icons/InstagramIcon.vue'
import LinkedinIcon from '../assets/icons/LinkedinIcon.vue'

import { store } from '../state/store.js'

const iconSize = '100%'

export default {
  name: 'HomeHeader',
  components: {
    TextPresentation,
    ImageComputer,
    TextHeaderSecondary,
    GithubIcon,
    InstagramIcon,
    LinkedinIcon
  },
  data () {
    return {
      size: iconSize,
      store
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../assets/style/app.scss';

  header {
    position: relative;
    min-height: 100vh;
  }

  .b-cont {
    @media (min-width: 1200px) {
      max-width: 1200px !important;
    }
  }

  .ro {
    height: 100vh;
  }

  .black {
    position: absolute;
    top: 0;
    z-index: -1;
    width: 100%;
    height: 100vh;
    background-color: $dark;
  }

  .icons {
    position: absolute;
    display: flex;
    justify-content: space-around;
    height: 6rem;
    width: 100%;
    bottom: -10rem;
  }

</style>
