<template lang="html">
  <div class="content">
    <b-row no-gutter>
      <b-col
        lg="6"
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
        lg="6"
        class="d-flex flex-column justify-content-center"
      >
        <div class="image-column">
          <b-img
            fluid
            :src="profilePic"
          />
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>

import LocationIcon from '../assets/icons/LocationIcon.vue'
import { store } from '../state/store.js'
import ProfilePic from '../assets/images/prof.png'

export default {
  name: 'AboutMeSection',
  components: {
    LocationIcon
  },
  data () {
    return {
      iconColor: '#db3513',
      size: '100%',
      profilePic: ProfilePic,
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
      padding: 0 1rem;
      @include media-breakpoint-up(md) {
        padding: 0 2rem 1rem 2rem;
      }
    }
    @include media-breakpoint-up(lg) {
      padding: 1rem 2rem;
    }
    .image-column {
      img {
        width: 310px;
        border-radius: 10px;
      }
      @include media-breakpoint-up(sm) {
        width: 310px;
        height: 310px;
        overflow: hidden;
        border-radius: 100%;
        margin: auto;
      }
    }
  }

  .subtitle {
    h6{
      margin: auto 10px;
      @include media-breakpoint-up(lg) {
        font-size: 1.5rem;
      }
    }
    @include media-breakpoint-up(lg) {
      display: flex;
       justify-content: center;
    }
  }

  .location-icon {
    height: 5rem;
    @include media-breakpoint-up(lg) {
      height: 2rem;
    }
  }
</style>
