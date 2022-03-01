<template lang="html">
  <div class="content">
    <b-row no-gutter>
      <b-col
        cols="12"
      >
        <h1>{{ content.title }}</h1>
        <div class="subtitle">
          <div class="location-icon">
            <LocationIcon
              :size="size"
              :color="iconColor"
            />
          </div>
          <h6>{{ content.location }}</h6>
        </div>
        <p>
          {{ content.text }}
        </p>
      </b-col>
      <b-col
        cols="12"
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
      size: '100%',
      content: store.currentLang.content.body.aboutMe

    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../assets/style/app.scss';

  .content {
    background-color: #eef2f7;
    text-align: center;
    padding: 5px;
    h1 {
      margin: 1rem 0;
    }
    p {
      margin-top: 3rem;
    }
  }

  .subtitle {
    h6{
      margin: auto 10px;
    }
  }

  .location-icon {
    height: 10rem;
  }
</style>
