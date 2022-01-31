<template lang="html">
  <b-container class="my-4"i>
    <div class="content">
      <h1>COMO POSSO TE AJUDAR?</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
    <div class="divider">

    </div>
  </b-container>
</template>

<script>
export default {
  name: "AboutSection"
}
</script>

<style lang="scss" scoped>
  @import "../assets/style/app.scss";

  .content {
    text-align: center;
    margin: 3rem auto;
    h1 {
      color: $gray-800;
      font-weight: bold;
      margin-bottom: 30px;
    }
    p {
      color: $gray-600;
    }
  }

  .divider {
    width: 10rem;
    border-bottom: solid $orange 5px;
    margin: 0 auto;
  }
</style>
