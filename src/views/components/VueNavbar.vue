<template lang="html">
    <div>
  <b-navbar toggleable="lg" type="dark">
    <b-navbar-brand href="#">NavBar</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#">Link</b-nav-item>
        <b-nav-item href="#" disabled>Disabled</b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#">Skills</b-nav-item>
        <b-nav-item href="#">Contact</b-nav-item>

        <b-nav-item-dropdown text="Projects" right>
          <b-dropdown-item href="#">See Here</b-dropdown-item>
          <b-dropdown-item href="#">See on Github</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default {
  name: 'VueNavbar'
}
</script>

<style lang="scss" scoped>
  @import '../../assets/style/app.scss';
  nav {
    background-color: $gray-900 !important;
  }
</style>
