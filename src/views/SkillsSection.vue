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
            <ContainerSkill />
          </b-col>
          <b-col col lg="3">
            <ContainerSkill />
          </b-col>
          <b-col col lg="3">
            <ContainerSkill />
          </b-col>
        </b-row>
    </div>
  </b-container>

</template>

<script>
import ContainerSkill from './components/ContainerSkill.vue'


export default {
  name: "SkillsSection",
  components: {
    ContainerSkill
  }
}
</script>

<style lang="scss" scoped>
  @import '../assets/style/app.scss';
  .content {
    text-align: center;
  }
</style>
