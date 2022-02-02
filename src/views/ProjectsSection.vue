<template lang="html">
    <div class="content">
          <h1>Projetos</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <div class="">
            <b-button variant="primary" pill>
              Conferir
              </b-button>
          </div>
    </div>
</template>

<script>

export default {
  name: 'ProjectsSection'
}
</script>

<style lang="scss" scoped>
  @import '../assets/style/app.scss';

  .content {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 0 10rem;
    min-height: 360px;
    h1, p {
      color: $light;
      margin: 0;
    }
    button {
      font-size: 2rem;
      padding: 0.5rem 5rem;
      font-weight: 100;
      width: auto;
    }
  }
</style>
