<template lang="html">
  <b-container>
    <div class="content">
      <div>
        <div class="contact">
          {{ content.title }}
        </div>
      </div>
      <p>
        {{ content.text }}
      </p>
      <div class="item">
        <LinkedinIcon
          :color="iconColor"
          :size="iconSize"
          class="icn"
        />
        <div class="item-description">
          <p>
            {{ content.linkedin }} <b> Linkedin.</b>
          </p>
        </div>
      </div>
      <div class="item">
        <GMailIcon
          :color="iconColor"
          :size="iconSize"
          class="icn"
        />
        <div class="item-description">
          <p>
            {{ content.email }} <b>Gmail.</b>
          </p>
        </div>
      </div>
    </div>
  </b-container>
</template>

<script>
import LinkedinIcon from '../assets/icons/LinkedinIcon.vue'
import GMailIcon from '../assets/icons/GMailIcon.vue'
import { store } from '../state/store.js'

export default {
  name: 'FooterSection',
  components: {
    LinkedinIcon,
    GMailIcon
  },
  data () {
    return {
      iconColor: '#db3513',
      iconSize: 36,
      content: store.currentLang.content.body.footer
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../assets/style/app.scss';

  svg {
    margin: auto 0;
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: center;
    padding: 2rem 0;
    .contact {
      color: $orange;
      border: solid $orange 2px;
      width: fit-content;
      margin: auto auto 2rem auto;
      padding: 1rem 2rem;
      font-size: 2rem;
      font-weight: 900;
    }
    @include media-breakpoint-up(lg) {
      width: 50rem;
      margin: auto;
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
        font-size: 1rem;
      }
    }
  }

  b{
    color: $primary;
    margin: auto;
  }
</style>
