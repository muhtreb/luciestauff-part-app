<template>
  <client-only>
    <div class="portfolio-slider">
      <slick ref="slick" :options="slickOptions">
        <div v-for="(image, index) in images" :key="`carousel-${index}`">
          <img :src="require(`@/assets/img/portfolio/${image.path}`)" />
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
        speed: 300,
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
      img {
        height: 500px;
      }
    }
  }
}
</style>
