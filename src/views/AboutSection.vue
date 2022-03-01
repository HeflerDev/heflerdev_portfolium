<template lang="html">
  <b-container class="my-4">
    <div class="content">
      <h1>{{ content.title }}</h1>
      <p>{{ content.text }}</p>
    </div>
    <div class="divider" />
  </b-container>
</template>

<script>
import { store } from '../state/store.js'
export default {
  name: 'AboutSection',
  data () {
    return {
      content: store.currentLang.content.body.about
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../assets/style/app.scss";

  .content {
    text-align: center;
    margin: 15rem auto 5rem auto;
    h1 {
      color: $gray-800;
      font-weight: bold;
      margin-bottom: 30px;
    }
    p {
      color: $gray-600;
    }
  }

  .divider {
    width: 10rem;
    border-bottom: solid $orange 5px;
    margin: 0 auto;
  }
</style>
