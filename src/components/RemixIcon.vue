<template>
  <component
    v-if="icon"
    :is="
      require(`vue-remix-icons/icons/ri-${icon}-${fill ? 'fill' : 'line'}.js`)
        .default
    "
  />
</template>

<script>
export default {
  props: {
    icon: String,
    fill: Boolean,
  },
}
</script>