<template lang="html">
  <div class="content">
    <h1>{{ content.title }}</h1>
    <p>{{ content.text }}</p>
    <a href="https://www.github.com/heflerdev" target="_blank">
      <b-button
        variant="primary"
        pill
      >
        {{ content.button }}
      </b-button>
    </a>
  </div>
</template>

<script>
import { store } from '../state/store.js'

export default {
  name: 'ProjectsSection',
  data () {
    return {
      content: store.currentLang.content.body.projects
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../assets/style/app.scss';

  .content {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    min-height: 360px;
    @include media-breakpoint-up(lg) {
      width: 50vw;
      margin: auto;
    }
    h1, p {
      color: $light;
      margin: 2rem 0;
    }
    button {
      font-size: 1rem;
      padding: 0.5rem 5rem;
      font-weight: 100;
      width: auto;
      margin: 2rem 0;
    }
  }
</style>
