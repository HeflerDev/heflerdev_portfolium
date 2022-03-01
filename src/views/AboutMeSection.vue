<template lang="html">
  <div class="content">
    <b-row no-gutter>
      <b-col
        col
        sm="6"
      >
        <h1>{{ content.title }}</h1>
        <div class="subtitle">
          <LocationIcon :color="iconColor" /><h6>{{ content.location }}</h6>
        </div>
        <p>
          {{ content.text }}
        </p>
      </b-col>
      <b-col
        col
        sm="6"
      />
    </b-row>
  </div>
</template>

<script>

import LocationIcon from '../assets/icons/LocationIcon.vue'
import { store } from '../state/store.js'

export default {
  name: 'AboutMeSection',
  components: {
    LocationIcon
  },
  data () {
    return {
      iconColor: '#db3513',
      content: store.currentLang.content.body.aboutMe

    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../assets/style/app.scss';

  .content {
    background-color: #eef2f7;
    padding:5rem 3rem;
    h1 {
      margin: 1rem 0;
    }
    p {
      margin-top: 3rem;
    }
  }

  .subtitle {
    display: flex;
    h6{
      margin: auto 10px;
    }
  }
</style>
