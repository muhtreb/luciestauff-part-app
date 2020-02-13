<template>
  <client-only>
    <masonry
      :cols="{ default: 3, 1000: 2, 700: 1 }"
      :gutter="{ default: '30px', 700: '15px' }"
      class="portfolio-masonry"
    >
      <div
        class="portfolio-masonry-item"
        v-for="(image, id) in images"
        :key="`image-${id}`"
      >
        <img :src="require(`@/assets/img/portfolio/${image.path}`)" />
      </div>
    </masonry>
  </client-only>
</template>

<script>
export default {
  props: ['images'],
  mounted() {
    if (typeof this.$redrawVueMasonry === 'function') {
      this.$redrawVueMasonry()
    }
  }
}
</script>
