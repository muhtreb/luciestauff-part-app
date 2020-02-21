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
  position: relative;
  transition: 1s ease background-image, 0.5s ease height, 0.5s ease opacity,
    0.5s ease background-color;
  background-color: #f5e6df;
  height: 300px;
  &.banner-slider--hidden {
    height: 0 !important;
    opacity: 0;
  }

  .banner-slider-title {
    color: white;
    font-size: 24px;
    text-transform: uppercase;
    letter-spacing: 2px;
    text-align: center;
    position: absolute;
    display: flex;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    align-items: center;
    justify-content: center;
    z-index: 100;
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
