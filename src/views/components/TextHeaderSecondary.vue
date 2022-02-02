<template lang="html">
  <b-col col sm="2" class="d-flex justify-content-end">
        <ul>
          <li>Desenvolver</li>
          <li>Programar</li>
          <li>Solucionar</li>
          <li>Criar</li>
        </ul>
  </b-col>
</template>

<script>
export default {
  name: 'TextHeaderSecondary'
}
</script>

<style lang="scss" scoped>
  @import "../../assets/style/app.scss";

  ul {
    margin-top: auto;
    margin-bottom: 8rem;
    list-style: none;
    color: $light;
    opacity: (0.2);
    font-weight: 900;
    padding: 0;
    cursor: default;
    transition: 0.2s;
    &:hover{
      opacity: (1);
      text-shadow: 0 0 5px $light;
      transition: 0.3s;
    }
  }
</style>
