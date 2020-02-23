<template>
  <client-only>
    <masonry
      :cols="{ default: 3, 1000: 2, 700: 1 }"
      :gutter="{ default: '30px', 700: '15px' }"
      class="portfolio-masonry"
    >
      <div
        class="portfolio-masonry-item"
        v-for="image in portfolioCategory.images"
        :key="`image-${image.id}`"
      >
        <img :src="image.image_url" />
      </div>
    </masonry>
  </client-only>
</template>

<script>
export default {
  props: ['portfolioCategory'],
  mounted() {
    if (typeof this.$redrawVueMasonry === 'function') {
      this.$redrawVueMasonry()
    }
  }
}
</script>
