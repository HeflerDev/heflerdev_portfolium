<template lang="html">
  <b-col
    cols="10"
    class="positioning"
  >
    <div class="content">
      <b-img
        fluid
        :src="ComputerImage"
        alt="computer_image"
        class="computer-image"
      />
    </div>
  </b-col>
</template>

<script>
import ComputerImage from '../../assets/images/COMPUTER.png'

export default {
  name: 'ImageComputer',
  data () {
    return {
      ComputerImage: ComputerImage
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../assets/style/app.scss';

  .positioning {
    @include media-breakpoint-up(md) {
      top: -4rem;
    }
    @include media-breakpoint-up(lg) {
      position: absolute;
      top: -8rem;
    }
    @include media-breakpoint-up(lg) {
      position: absolute;
      top: -8rem;
    }
    @include media-breakpoint-up(xl) {
      left: 100px;
    }
  }
  .content {
    margin-top: 1rem;
    img {
      transform: scale(1.3);
      @include media-breakpoint-up(md) {
        width: 700px;
      }
    }
  }
</style>
