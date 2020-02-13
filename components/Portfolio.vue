<template>
  <client-only>
    <masonry :cols="3" :gutter="20" class="portfolio-masonry">
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
