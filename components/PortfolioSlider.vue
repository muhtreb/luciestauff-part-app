<template>
  <client-only>
    <div class="portfolio-slider">
      <slick ref="slick" :options="slickOptions">
        <div
          v-for="(image, index) in images"
          :key="`carousel-${index}`"
          @click="goToCategory()"
        >
          <img :src="require(`@/assets/img/portfolio/${image.path}`)" />
          <div class="slick-slide-information">Test</div>
        </div>
      </slick>
    </div>
  </client-only>
</template>

<script>
export default {
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
      },
      images: [
        {
          path: 'hair/1145.jpg'
        },
        {
          path: 'hair/1146.jpg'
        },
        {
          path: 'hair/1148.jpg'
        },
        {
          path: 'hair/1149.jpg'
        },
        {
          path: 'hair/1154.jpg'
        },
        {
          path: 'hair/1155.jpg'
        },
        {
          path: 'hair/1335.jpg'
        },
        {
          path: 'hair/1336.jpg'
        },
        {
          path: 'hair/1339.jpg'
        },
        {
          path: 'hair/1341.jpg'
        }
      ]
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
