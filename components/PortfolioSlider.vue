<template>
  <client-only>
    <div>
      <PortfolioLightbox
        :portfolio-category="portfolioCategory"
        :index="lightboxIndex"
      ></PortfolioLightbox>
      <div class="portfolio-slider">
        <slick
          :ref="`slick`"
          :key="`slick-${portfolioCategory.id}`"
          :options="slickOptions"
          @init="handleInit"
        >
          <div
            v-for="(media, index) in portfolioCategory.medias"
            :key="`carousel-${media.id}`"
            class="portfolio-media"
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
        </slick>
      </div>
    </div>
  </client-only>
</template>

<script>
import PortfolioLightbox from '@/components/PortfolioLightbox'
export default {
  components: { PortfolioLightbox },
  props: ['portfolioCategory'],
  data() {
    return {
      init: false,
      lightboxIndex: null,
      slickOptions: {
        speed: 800,
        slidesToShow: 3,
        centerMode: false,
        variableWidth: true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        adaptiveHeight: true,
        appendArrows: false,
        swipe: false
      }
    }
  },
  methods: {
    handleInit(event, slick) {
      setTimeout(() => {
        this.$refs.slick.next()
      }, 200)
    },
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
.portfolio-slider {
  .slick-slider {
    margin-bottom: 100px;
    .slick-slide {
      height: 500px;
      margin-right: 20px;
      position: relative;
      img,
      video {
        height: 500px;
      }

      .slick-slide-information {
        opacity: 0;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(255, 255, 255, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        text-transform: uppercase;
        color: black;
        letter-spacing: 2px;
        font-size: 32px;
        transition: 0.5s ease opacity;
        cursor: pointer;
      }

      &:hover {
        .slick-slide-information {
          opacity: 1;
        }
      }

      .portfolio-media {
        position: relative;
        cursor: pointer;
        .portfolio-media-icon {
          position: absolute;
          top: 3px;
          right: 10px;
          color: white;
          opacity: 0.8;
        }
      }
    }
  }
}
</style>
