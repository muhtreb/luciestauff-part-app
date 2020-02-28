<template>
  <div>
    <div class="banner-content">
      <h1 class="banner-slider-title" v-html="title"></h1>
      <h2 class="banner-slider-subtitle" v-if="subtitle" v-html="subtitle"></h2>
    </div>

    <client-only>
      <slick
        :ref="`bannerSlick`"
        :options="slickOptions"
        :key="$route.name"
        v-if="medias.length > 0"
      >
        <div
          v-for="media in medias"
          :key="`carousel-banner-${$route.name}-${media.id}`"
          class="slide-image"
          :style="{
            backgroundImage: `url(${media.image_url})`
          }"
        ></div>
      </slick>
    </client-only>
  </div>
</template>

<script>
export default {
  props: ['title', 'subtitle', 'medias'],
  data() {
    return {
      init: true,
      slickOptions: {
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: false,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        appendArrows: false
      }
    }
  },
  watch: {
    medias(oldValue, newValue) {
      if (this.medias.length > 0 && this.$refs.bannerSlick) {
        const currIndex = this.$refs.bannerSlick.currentSlide()
        this.$refs.bannerSlick.destroy()
        this.$nextTick(() => {
          this.$refs.bannerSlick.create()
          this.$refs.bannerSlick.goTo(currIndex, true)
        })
      }
    }
  }
}
</script>

<style lang="scss">
.banner-slider {
  position: relative;
  transition: 1s ease background-image, 0.5s ease height, 0.5s ease opacity,
    0.5s ease background-color;
  background-color: #f5e6df;
  height: 300px;
  &.banner-slider--hidden {
    height: 0 !important;
    opacity: 0;
  }

  .banner-content {
    position: absolute;
    display: flex;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    align-items: center;
    justify-content: center;
    z-index: 100;
    flex-direction: column;
    .banner-slider-title {
      color: white;
      font-size: 24px;
      text-transform: uppercase;
      letter-spacing: 2px;
      text-align: center;
    }

    .banner-slider-subtitle {
      color: white;
      font-size: 20px;
      text-transform: uppercase;
      letter-spacing: 2px;
      text-align: center;
    }
  }
  .slick-slider {
    height: 100%;

    margin-bottom: 100px;
    .slick-list {
      padding: 0 !important;
      .slick-slide {
        height: 300px;
        .slide-image {
          height: 300px;
          background-position: center center;
          background-size: cover;
        }
      }
    }
  }
}

@media screen and (max-width: 1279px) {
  .banner-slider {
    height: 150px;
    .slick-slider {
      .slick-list {
        .slick-slide {
          height: 150px;
        }
      }
    }
  }
}
</style>
