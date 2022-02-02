<template lang="html">
  <b-container>
    <div class="content">
        <h1>MINHAS HABILIDADES</h1>
        <b-row class="justify-content-between" >
  <!--
    TODO: Adicionar Ícones:
    - BootstrapIcon
    - CSSIcon
    - GitIcon
    - HTMLIcon
    - JSIcon
    - RailsIcon
    - ReactIcon
    - RubyIcon
    - SASSIcon
    - VueIcon
    - WebpackIcon
  -->
          <b-col col lg="3">
            <ContainerSkill
              icon="BrowserIcon"
              v-bind:iconSize="36"
              :iconColor="iconColor"
              title="Web Dev"
              text="Web-driven knowledge to develop, build, deploy and maintain a website."
              :technologies="['HtmlIcon', 'CSSIcon', 'WebpackIcon', 'GitIcon']"
              :iconSize="44"
            />
          </b-col>

          <b-col col lg="3">
            <ContainerSkill
              icon="FrontIcon"
              v-bind:iconSize="36"
              :iconColor="iconColor"
              title="Frontend"
              text="Knowledge focused in using the latest of technologies avaiable when it comes to interface design."
              :technologies="['ReactIcon', 'VueIcon', 'SASSIcon', 'BootstrapIcon']"
              :iconSize="44"
            />
          </b-col>

          <b-col col lg="3">
            <ContainerSkill
              icon="BackIcon"
              v-bind:iconSize="36"
              :iconColor="iconColor"
              title="Backend"
              text="Knowledge focused in managing the operations wich the final user don't see, but need it."
              :technologies="['RubyIcon', 'RailsIcon']"
              :iconSize="44"
              />
          </b-col>

        </b-row>
    </div>
  </b-container>

</template>

<script>
import ContainerSkill from './components/ContainerSkill.vue'

export default {
  name: 'SkillsSection',
  components: {
    ContainerSkill
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
    text-align: center;
  }
</style>
