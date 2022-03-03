<template lang="html">
  <header>
    <b-container class="b-cont">
      <b-row class="ro justify-content-center">
        <TextPresentation :text="store.currentLang.content.header.call" />
        <ImageComputer />
        <TextHeaderSecondary />
      </b-row>
      <div class="icons">
        <GithubIcon :size="size" />
        <LinkedinIcon :size="size" />
        <InstagramIcon :size="size" />
      </div>
    </b-container>
    <div class="black" />
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
    @include media-breakpoint-up(md) {
      min-height:initial;
      height: 500px;
    }
    @include media-breakpoint-up(lg) {
      height: 500px;
    }
  }

  .b-cont {
    display: relative;
    @media (min-width: 1200px) {
      max-width: 1200px !important;
    }
  }

  .ro {
    height: 100vh;
    max-width: 450px;
    margin: auto;
    position: relative;
    @include media-breakpoint-up(md) {
      max-width: initial;
    }
  }

  .black {
    position: absolute;
    top: 0;
    z-index: -1;
    width: 100%;
    height: 100vh;
    background-color: $dark;
    @include media-breakpoint-up(md) {
      height: 400px;
    }
    @include media-breakpoint-up(lg) {
      height: 425px;
    }
  }

  .icons {
    display: flex;
    justify-content: space-around;
    height: 2.5rem;
    bottom: -3rem;
    left:0;
    width: 100%;
    position: absolute;
    svg {
      width: fit-content;
    }

    @include media-breakpoint-up(lg) {
      justify-content: end;
      position: absolute;
      bottom: 0;
      width: 930px;
      left: auto;
      svg {
        width: fit-content;
        margin: 1.5rem;
      }
    }

    @include media-breakpoint-up(xl) {
      width: 1124px;
    }
  }

</style>
