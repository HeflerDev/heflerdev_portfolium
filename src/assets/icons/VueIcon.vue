<template lang="html">
  <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" :width="size" :height="size" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M1 3h4l7 12l7-12h4L12 22L1 3zm8.667 0L12 7l2.333-4h4.035L12 14L5.632 3h4.035z" :fill="color"/></svg>
</template>

<script>

export default {
  name: 'VueIcon',
  props: {
    size: {
      default: 24,
      type: Number
    },
    color: {
      default: 'black',
      type: String
    }
  }
}
</script>
