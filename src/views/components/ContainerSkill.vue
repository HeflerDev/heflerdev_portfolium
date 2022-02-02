<template lang="html">
  <div class="content" :class="{open: active}">
    <div class="icon-container">
      <div :is="icon"
        color="white"
        :size="iconSize"
      />
    </div>
    <h2>{{title}}</h2>
    <p>
      {{text}}
      <VueSlideUpDown :active="active" >
        <b-row>
          <b-col col sm="4" v-for="technology in technologies" :key="technology">
            <div class='aux-icon' :is="technology" :size="iconSize" :color="iconColor"></div>
          </b-col>
        </b-row>
      </VueSlideUpDown>
    </p>
    <b-button class="btn see-more-button" :class="{isActive: active}" @click="expandButton">
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
  props: {
    icon: String,
    iconColor: String,
    iconSize: Number,
    title: String,
    text: String,
    technologies: Array,
    iconSize: Number
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
  },
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
  }
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
    position: relative;
    flex-direction: column;
    overflow: hidden;
    transition: 0.1s;
    h2, p {
      text-align: left;
    }

    .icon-container {
        background-color: $orange;
        width: fit-content;
        padding: 10px;
        border-radius: 50%;
    }
  }

  .see-more-button {
    margin-top: auto;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    border-radius: 0;
  }

  .aux-icon {
    margin: 1rem auto;
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
