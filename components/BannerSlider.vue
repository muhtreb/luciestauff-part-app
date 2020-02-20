<template>
  <div>
    <h1 class="banner-slider-title">{{ title }}</h1>
    <client-only>
      <slick ref="slick" :options="slickOptions">
        <div
          v-for="(image, index) in images"
          :key="`carousel-banner-${index}`"
          class="slide-image"
          :style="{
            backgroundImage: 'url(' + getSlideImage(image) + ')'
          }"
        ></div>
      </slick>
    </client-only>
  </div>
</template>

<script>
export default {
  props: ['title'],
  data() {
    return {
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
      },
      images: [
        {
          path: 'banner-home.jpg'
        },
        {
          path: 'banner-home-services.jpg'
        },
        {
          path: 'banner-services.jpg'
        }
      ]
    }
  },
  methods: {
    getSlideImage(image) {
      return require(`@/assets/img/${image.path}`)
    }
  }
}
</script>

<style lang="scss">
.banner-slider {
  .slick-slider {
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
</style>
