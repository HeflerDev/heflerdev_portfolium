<template lang="html">
  <b-col
    col
    sm="12"
    class="mt-4"
  >
    <div class="content">
      <h1>{{ text }}</h1>
      <span>
        <b>|</b>{{ store.currentLang.content.header.subtitle }}
      </span>
    </div>
  </b-col>
</template>

<script>
import { store } from '../../state/store.js'

export default {
  name: 'TextPresentation',
  props: {
    text: {
      default: '',
      type: String
    }
  },
  data () {
    return {
      store
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../assets/style/app.scss';

  .content  {
    margin-top: 3rem;
  }

  h1 {
    color: $light;
    font-weight: 900;
    margin-bottom: 0;
  }

  span {
    color: $light;
    font-weight: 100;
  }

  b {
    color: $orange;
  }

</style>
