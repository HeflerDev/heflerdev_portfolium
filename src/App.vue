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
  </div>
</template>

<script>
import HomeHeader from './views/HomeHeader.vue'
import AboutSection from  './views/AboutSection.vue'
import SkillsSection from './views/SkillsSection.vue'

export default {
  data() {
    return{
      message: 'Hello Universe'
    }
  },
  components: {
    HomeHeader,
    AboutSection,
    SkillsSection
  }
}
</script>

<style lang="scss">
  #app {
    font-size: 18px;
    font-family: 'Roboto', sans-serif;
  }
</style>
