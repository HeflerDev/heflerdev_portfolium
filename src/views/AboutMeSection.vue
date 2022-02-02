<template lang="html">
  <div class="content">
    <b-row no-gutter>
      <b-col col sm="6">
        <h1>Sobre Mim</h1>
        <div class="subtitle">
            <LocationIcon :color="iconColor"/><h6>Porto Alegre, Rio Grande do Sul</h6>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </b-col>
      <b-col col sm="6">

      </b-col>
    </b-row>
  </div>
</template>

<script>

import LocationIcon from '../assets/icons/LocationIcon.vue'

export default {
  name: 'AboutMeSection',
  components: {
    LocationIcon
  },
  data () {
    return {
      iconColor: '#db3513'
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
