<template lang="html">
  <b-container>
  <div class="content">
    <div>
      <div class="contact">
        CONTATO
      </div>
    </div>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <div class="item">
        <LinkedinIcon :color="iconColor" :size="iconSize" class="icn"/>
        <div class="item-description">
            <p>
              Contact me on <b> Linkedin.</b>
            </p>
        </div>
    </div>
    <div class="item">
      <GMailIcon :color="iconColor" :size="iconSize" class="icn"/>
      <div class="item-description">
        <p>
          Reach me through <b>Gmail.</b>
        </p>
      </div>
    </div>
  </div>
  </b-container>
</template>

<script>
import LinkedinIcon from '../assets/icons/LinkedinIcon.vue'
import GMailIcon from '../assets/icons/GMailIcon.vue'

export default {
  name: 'FooterSection',
  components: {
    LinkedinIcon,
    GMailIcon
  },
  data () {
    return {
      iconColor: '#db3513',
      iconSize: 36
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../assets/style/app.scss';

  .content {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: center;
    padding: 5rem 10rem;
    .contact {
      color: $orange;
      border: solid $orange 2px;
      width: fit-content;
      margin: auto;
      padding: 1rem 2rem;
      font-size: 36px;
      font-weight: 900;
    }
  }

  .item {
    display: flex;
    justify-content: center;
    .icn {
      margin-right: 4px;
    }
    .item-description {
      display: flex;
      flex-direction: column;
      justify-content: center;
      p {
        margin: 0;
      }
    }
  }

  b{
    color: $primary;
    margin: auto;
  }
</style>
