<template lang="html">
    <header>
      <VueNavbar/>
      <b-container class="b-cont">
        <b-row>
          <TextPresentation text="OLÁ, ME CHAMO HEFLER" />
          <ImageComputer />
          <TextHeaderSecondary />
        </b-row>
      </b-container>
      <div class="black"></div>
      <div class="icons">
        <GithubIcon :size="size"/>
        <LinkedinIcon :size="size"/>
        <InstagramIcon :size="size"/>
      </div>
    </header>
</template>

<script>
import VueNavbar from './components/VueNavbar.vue'
import TextPresentation from './components/TextPresentation.vue'
import ImageComputer from './components/ImageComputer.vue'
import TextHeaderSecondary from './components/TextHeaderSecondary.vue'

import GithubIcon from '../assets/icons/GithubIcon.vue'
import InstagramIcon from '../assets/icons/InstagramIcon.vue'
import LinkedinIcon from '../assets/icons/LinkedinIcon.vue'

const iconSize = 36

export default {
  name: 'HomeHeader',
  data () {
    return {
      size: iconSize
    }
  },
  components: {
    VueNavbar,
    TextPresentation,
    ImageComputer,
    TextHeaderSecondary,
    GithubIcon,
    InstagramIcon,
    LinkedinIcon
  }
}
</script>

<style lang="scss" scoped>
  @import '../assets/style/app.scss';

  header {
    position: relative;
  }

  .b-cont {
    @media (min-width: 1200px) {
      max-width: 1200px !important;
    }
  }

  .black {
    position: absolute;
    top: 0;
    z-index: -1;
    width: 100%;
    height: 60vh;
    background-color: $dark;
  }

  .icons {
    position: absolute;
    display: flex;
    justify-content: space-between;
    width: 200px;
    right: 100px;
    bottom: 30px;
  }

</style>
