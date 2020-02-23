<template>
  <client-only>
    <div class="portfolio-slider">
      <slick ref="slick" :options="slickOptions">
        <div
          v-for="image in portfolioCategory.images"
          :key="`carousel-${image.id}`"
          @click="goToCategory()"
        >
          <img :src="image.image_url" />
          <div class="slick-slide-information">Test</div>
        </div>
      </slick>
    </div>
  </client-only>
</template>

<script>
export default {
  props: ['portfolioCategory'],
  data() {
    return {
      slickOptions: {
        infinite: true,
        speed: 800,
        slidesToShow: 3,
        centerMode: true,
        variableWidth: true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        adaptiveHeight: true,
        appendArrows: false
      }
    }
  },
  methods: {
    goToCategory(category) {}
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
      img {
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
    }
  }
}
</style>
