<template lang="html">
  <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" :width="size" :height="size" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M6 6a2 2 0 0 1 2-2a1 1 0 0 0 0-2a4 4 0 0 0-4 4v3a2 2 0 0 1-2 2a1 1 0 0 0 0 2a2 2 0 0 1 2 2v3a4 4 0 0 0 4 4a1 1 0 0 0 0-2a2 2 0 0 1-2-2v-3a4 4 0 0 0-1.38-3A4 4 0 0 0 6 9zm16 5a2 2 0 0 1-2-2V6a4 4 0 0 0-4-4a1 1 0 0 0 0 2a2 2 0 0 1 2 2v3a4 4 0 0 0 1.38 3A4 4 0 0 0 18 15v3a2 2 0 0 1-2 2a1 1 0 0 0 0 2a4 4 0 0 0 4-4v-3a2 2 0 0 1 2-2a1 1 0 0 0 0-2z" :fill="color"/></svg>
</template>

<script>

export default {
  name: 'BackIcon',
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
