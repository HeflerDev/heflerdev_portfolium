<template lang="html">
  <div id="app">
    <!--
      <input
        v-model="message"
        type="text"/>
      <h2>{{message}}</h2>
      <h3>Some Other Message</h3>
    -->
      <HomeHeader />
      <AboutSection />
      <SkillsSection />
      <div class="image-container">
        <b-container>
          <ProjectsSection />
        </b-container>
        <b-img :src="BG" />
      </div>
      <b-container>
        <AboutMeSection />
      </b-container>
      <div class="footer">
        <FooterSection />
        <b-img :src="FooterBG"  />
      </div>
  </div>
</template>

<script>
import HomeHeader from './views/HomeHeader.vue'
import AboutSection from './views/AboutSection.vue'
import SkillsSection from './views/SkillsSection.vue'
import ProjectsSection from './views/ProjectsSection.vue'
import AboutMeSection from './views/AboutMeSection.vue'
import FooterSection from './views/FooterSection.vue'

import BG from './assets/images/PROJECTS.png'
import FooterBG from './assets/images/CONTACT.png'

export default {
  data () {
    return {
      message: 'Hello Universe'
    }
  },
  components: {
    HomeHeader,
    AboutSection,
    SkillsSection,
    ProjectsSection,
    AboutMeSection,
    FooterSection
  },
  data () {
    return {
      BG,
      FooterBG
    }
  }
}
</script>

<style lang="scss">
  @import './assets/style/app.scss';
  #app {
    font-size: 18px;
    font-family: 'Roboto', sans-serif;
  }

  .image-container {
    position: relative;
    display: flex;
    justify-content: center;
    overflow: hidden;
    img {
      position:absolute !important;
      top:0;
      z-index: -1;
      width: 1400px;
    }
  }

  .footer {
    position: relative;
    display: flex;
    justify-content: center;
    overflow: hidden;
    img {
      position: absolute !important;
      top: 0;
      z-index: -1;
    }

  }

  .project-section {
    margin: 2rem 0;

    @media (min-width:map-get($grid-breakpoints, "lg")) {
      margin: 3rem;
    }

    @media (min-width:map-get($grid-breakpoints, "xl")) {
      margin:5rem;
    }
  }
</style>
