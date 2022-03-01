<template lang="html">
  <b-col
    col
    sm="2"
    class="d-flex justify-content-end"
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

  ul {
    margin-top: auto;
    margin-bottom: 8rem;
    list-style: none;
    color: $light;
    opacity: (0.2);
    font-weight: 900;
    padding: 0;
    cursor: default;
    transition: 0.2s;
    &:hover{
      opacity: (1);
      text-shadow: 0 0 5px $light;
      transition: 0.3s;
    }
  }
</style>
