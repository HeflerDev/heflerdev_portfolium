<template lang="html">
  <b-col col sm="12" class="">
    <div class="content">
      <b-img fluid :src="ComputerImage" alt="computer_image"/>
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

  .content {
    margin-top: 5rem;
    img {
      transform: scale(1.3);
    }
  }
</style>
