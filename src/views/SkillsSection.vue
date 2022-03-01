<template lang="html">
  <b-container>
    <div class="content">
      <h1>{{ content.title }}</h1>
      <b-row class="justify-content-between">
        <b-col
          col
          lg="3"
        >
          <ContainerSkill
            icon="BrowserIcon"
            :icon-color="iconColor"
            :title="content.webdev.title"
            :text="content.webdev.text"
            :technologies="['HtmlIcon', 'CSSIcon', 'WebpackIcon', 'GitIcon']"
            :icon-size="size"
          />
        </b-col>

        <b-col
          col
          lg="3"
        >
          <ContainerSkill
            icon="FrontIcon"
            :icon-color="iconColor"
            :title="content.frontend.title"
            :text="content.frontend.text"
            :technologies="['ReactIcon', 'VueIcon', 'SASSIcon', 'BootstrapIcon']"
            :icon-size="size"
          />
        </b-col>

        <b-col
          col
          lg="3"
        >
          <ContainerSkill
            icon="BackIcon"
            :icon-color="iconColor"
            :title="content.backend.title"
            :text="content.backend.text"
            :technologies="['RubyIcon', 'RailsIcon']"
            :icon-size="size"
          />
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>

<script>
import ContainerSkill from './components/ContainerSkill.vue'
import { store } from '../state/store.js'

export default {
  name: 'SkillsSection',
  components: {
    ContainerSkill
  },
  data () {
    return {
      iconColor: '#db3513',
      content: store.currentLang.content.body.skills,
      size: '100%'
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../assets/style/app.scss';
  .content {
    text-align: center;
  }
</style>
