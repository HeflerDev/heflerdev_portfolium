<template lang="html">
    <b-col col sm="3" class="mt-4">
      <div class="content">
        <h1>{{text}}</h1>
        <span><b>|</b> Desenvolvedor FullStack</span>
      </div>
    </b-col>
</template>

<script>
export default {
  name: "TextPresentation",
  props: {
    text: String
  }
}
</script>

<style lang="scss" scoped>
  @import '../../assets/style/app.scss';

  .content  {
    width: 20rem;
    margin-top: 8rem;
  }

  h1 {
    color: $light;
    font-weight: 900;
  }

  span {
    color: $light;
    font-weight: 100;
  }

  b {
    color: $orange;
  }


</style>
