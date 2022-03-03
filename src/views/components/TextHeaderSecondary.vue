<template lang="html">
  <b-col
    cols="12"
    class="content"
  >
    <ul>
      <li>{{ store['line-one'] }}</li>
      <li>{{ store['line-two'] }}</li>
      <li>{{ store['line-three'] }}</li>
      <li>{{ store['line-four'] }}</li>
    </ul>
  </b-col>
</template>

<script>
import { store } from '../../state/store.js'

export default {
  name: 'TextHeaderSecondary',
  data () {
    return {
      store: store.currentLang.content.header.secondary
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../assets/style/app.scss";

  .content {
    display: flex;
    justify-content: end;
    @include media-breakpoint-up(md) {
      position:absolute;
      top: -300px;
      right: -25px;
    }
    @include media-breakpoint-up(lg) {
      position:absolute;
      top: -400px;
      right: 0;
    }
  }

  ul {
    list-style: none;
    color: $light;
    opacity: (0.1);
    font-weight: 900;
    padding: 0;
    cursor: default;
    transition: 0.2s;
    &:hover{
      opacity: (0.5);
      text-shadow: 0 0 5px $light;
      transition: 0.3s;
    }
  }
</style>
