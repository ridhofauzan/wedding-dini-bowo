<template>
  <div>
        <input v-model="value" />
        <button v-clipboard="value">Copy</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const value = ref('lorem')

    return { value }
  },
})
</script>