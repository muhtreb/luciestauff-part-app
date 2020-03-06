<template>
  <client-only>
    <div>
      <PortfolioLightbox
        :portfolio-category="portfolioCategory"
        :index="lightboxIndex"
      ></PortfolioLightbox>
      <masonry
        :cols="{ default: 3, 1000: 2, 700: 1 }"
        :gutter="{ default: '30px', 700: '15px' }"
        :horizontal-order="true"
        :fit-width="true"
        :column-width="80"
        class="portfolio-masonry"
      >
        <div
          class="portfolio-masonry-item"
          v-for="(media, index) in portfolioCategory.medias"
          :key="`image-${media.id}`"
          @click="lightboxIndex = index"
        >
          <img v-if="media.type === 'image'" v-lazy="media.small_image_url" />
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
    </div>
  </client-only>
</template>

<script>
import PortfolioLightbox from '@/components/PortfolioLightbox'

export default {
  components: { PortfolioLightbox },
  props: ['portfolioCategory'],
  mounted() {
    if (typeof this.$redrawVueMasonry === 'function') {
      this.$redrawVueMasonry()
    }
  },
  data() {
    return {
      lightboxIndex: null
    }
  },
  computed: {
    getLightboxMedias() {
      const medias = []
      for (const media of Object.values(this.portfolioCategory.medias)) {
        medias.push({
          title: null,
          description: null,
          thumb:
            media.type === 'image'
              ? media.small_image_url
              : media.thumbnail_url,
          src: media.type === 'image' ? media.medium_image_url : media.video_url
        })
      }
      return medias
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

<style lang="scss">
img[lazy='loading'] {
  background: #f1f1f1;
}
img[lazy='error'] {
  display: none;
}
.portfolio-masonry {
  .portfolio-masonry-item {
    position: relative;
    video,
    img {
      width: 100%;
    }
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
