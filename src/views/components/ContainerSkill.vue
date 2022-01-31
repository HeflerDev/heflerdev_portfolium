<template lang="html">
  <div class="content">
    <div class="">
      {{icon}}
    </div>
    <h2>{{title}}</h2>
    <p>
      {{text}}
    </p>
  </div>
</template>

<script>
export default {
  name: "ContainerSkill",
  props: ['icon', 'title', 'text']
}
</script>

<style lang="scss" scoped>
  @import '../../assets/style/app.scss';

  .content {
    width: 100%;
    min-height: 15rem;
    height: fit-content;
    border: solid $gray-600 3px;
    border-radius: 20px;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h2, p {
      text-align: left;
    }
  }
</style>
