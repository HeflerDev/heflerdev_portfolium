<template lang="html">
  <div
    class="content"
    :class="{open: active}"
  >
    <div class="icon-container">
      <div
        :is="icon"
        color="white"
        :size="iconSize"
      />
    </div>
    <h2>{{ title }}</h2>
    <p>
      {{ text }}
      <VueSlideUpDown :active="active">
        <b-row>
          <b-col
            v-for="technology in technologies"
            :key="technology"
            col
            sm="4"
          >
            <div
              :is="technology"
              class="aux-icon"
              :size="iconSize"
              :color="iconColor"
            />
          </b-col>
        </b-row>
      </VueSlideUpDown>
    </p>
    <b-button
      class="btn see-more-button"
      :class="{isActive: active}"
      @click="expandButton"
    >
      Technologies
    </b-button>
  </div>
</template>

<script>
import VueSlideUpDown from 'vue-slide-up-down'

import FrontIcon from '../../assets/icons/FrontIcon.vue'
import BackIcon from '../../assets/icons/BackIcon.vue'
import BrowserIcon from '../../assets/icons/BrowserIcon.vue'
import CSSIcon from '../../assets/icons/CSSIcon.vue'
import BootstrapIcon from '../../assets/icons/BootstrapIcon.vue'
import GitIcon from '../../assets/icons/GitIcon.vue'
import HtmlIcon from '../../assets/icons/HtmlIcon.vue'
import JSIcon from '../../assets/icons/JSIcon.vue'
import RailsIcon from '../../assets/icons/RailsIcon.vue'
import ReactIcon from '../../assets/icons/ReactIcon.vue'
import RubyIcon from '../../assets/icons/RubyIcon.vue'
import SASSIcon from '../../assets/icons/SASSIcon.vue'
import VueIcon from '../../assets/icons/VueIcon.vue'
import WebpackIcon from '../../assets/icons/WebpackIcon.vue'

export default {
  name: 'ContainerSkill',
  components: {
    FrontIcon,
    BackIcon,
    BrowserIcon,
    CSSIcon,
    BootstrapIcon,
    GitIcon,
    HtmlIcon,
    JSIcon,
    RailsIcon,
    ReactIcon,
    RubyIcon,
    SASSIcon,
    VueIcon,
    WebpackIcon,
    VueSlideUpDown
  },
  props: {
    icon: String,
    iconColor: String,
    iconSize: Number,
    title: String,
    text: String,
    technologies: Array,
  },
  data () {
    return {
      active: false
    }
  },
  methods: {
    expandButton () {
      this.active ? this.active = false : this.active = true
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../assets/style/app.scss';

  p {
    margin-bottom: 6rem;
  }

  .content {
    width: 100%;
    min-height: 15rem;
    height: fit-content;
    border: solid $gray-600 3px;
    border-radius: 20px;
    padding: 2rem;
    display: flex;
    position: relative;
    flex-direction: column;
    overflow: hidden;
    transition: 0.1s;
    margin: 3rem 0;
    h2, p {
      text-align: left;
    }

    .icon-container {
        background-color: $orange;
        padding: 30px;
        border-radius: 50%;
        width: 10rem;
        height: 10rem;
    }
  }

  .see-more-button {
    margin-top: auto;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    border-radius: 0;
    font-size: 3.5rem;
  }

  .aux-icon {
    display: flex ;
    justify-content: center;
    margin: 1rem auto;
    width: 8rem;
    height: 8rem;
    transition: 0.2s;
    &:hover {
      transform: scale(1.3);
      transition: 0.5s;
    }
  }

  .isActive {
    background-color: $orange !important;
    border: none;
  }

  .open {
    border: solid $gray-400 1px;
    transition: 0.2s;
  }

</style>
