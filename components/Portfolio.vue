<template>
  <client-only>
    <masonry
      :cols="{ default: 3, 1000: 2, 700: 1 }"
      :gutter="{ default: '30px', 700: '15px' }"
      class="portfolio-masonry"
    >
      <div
        class="portfolio-masonry-item"
        v-for="media in portfolioCategory.medias"
        :key="`image-${media.id}`"
      >
        <img v-if="media.type === 'image'" :src="media.image_url" />
        <video
          muted="muted"
          loop
          v-else
          :ref="`video-${media.id}`"
          :poster="media.thumbnail_url"
          @mouseover="playVideo(media)"
          @mouseleave="pauseVideo(media)"
        >
          <source :src="media.video_url" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div class="portfolio-media-icon" v-if="media.type === 'video'">
          <fa-layer class="fa-2x"> <fa :icon="['fas', 'video']"/></fa-layer>
        </div>
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
  },
  methods: {
    playVideo(media) {
      this.$refs[`video-${media.id}`][0].play()
    },
    pauseVideo(media) {
      this.$refs[`video-${media.id}`][0].pause()
    }
  }
}
</script>

<style scoped lang="scss">
.portfolio-masonry {
  .portfolio-masonry-item {
    position: relative;
    .portfolio-media-icon {
      position: absolute;
      top: 3px;
      right: 10px;
      color: white;
      opacity: 0.8;
    }
  }
}
</style>
