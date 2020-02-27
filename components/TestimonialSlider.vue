<template>
  <div>
    <client-only>
      <slick ref="slick" :options="slickOptions">
        <div
          v-for="(testimonial, index) in testimonials"
          :key="`carousel-banner-${index}`"
        >
          <div class="slide-testimonial">
            <div class="slide-testimonial-stars">
              <img src="~/assets/img/stars.svg" />
            </div>
            <div class="slide-testimonial-content">
              <span class="quote quote--left">“</span>{{ testimonial.content
              }}<span class="quote quote--right">”</span>
            </div>
            <div class="slide-testimonial-name">{{ testimonial.name }}</div>
          </div>
        </div>
      </slick>
    </client-only>
  </div>
</template>

<script>
export default {
  props: ['testimonials'],
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
        adaptiveHeight: true,
        prevArrow:
          '<button class="slick-prev slick-arrow" aria-label="Previous" type="button" style=""></button>',
        nextArrow:
          '<button class="slick-next slick-arrow" aria-label="Next" type="button" style=""></button>'
      }
    }
  }
}
</script>

<style lang="scss">
.testimonial-slider {
  .quote {
    font-size: 38px;
    font-weight: bold;
    &.quote--left {
      margin-right: 10px;
    }
    &.quote--right {
      margin-left: 10px;
    }
  }
  .slick-arrow {
    position: absolute;
    top: 50%;
    margin-top: -20px;
    height: 40px;
    &.slick-prev {
      left: 0;
      &:after {
        content: '<';
        font-size: 32px;
      }
    }
    &.slick-next {
      right: 0;
      &:after {
        content: '>';
      }
    }
    &:after {
      font-size: 32px;
    }
  }
  .slick-slider {
    margin-bottom: 100px;
    .slick-list {
      padding: 0 !important;
      .slick-slide {
        display: flex;
        align-items: center;
        justify-content: center;
        .slide-testimonial {
          max-width: 900px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          .slide-testimonial-stars {
            display: flex;
            color: #d2d09d;
            img {
              height: 73px;
            }
          }
          .slide-testimonial-content {
            margin-top: 40px;
            font-size: 24px;
            text-transform: uppercase;
            letter-spacing: 4px;
            text-align: center;
            font-weight: lighter;
            line-height: 35px;
          }

          .slide-testimonial-name {
            color: #455957;
            font-size: 20px;
            margin-top: 20px;
            text-transform: uppercase;
          }
        }
      }
    }
  }
}

@screen sm {
  .testimonial-slider {
    .slick-slider {
      .slick-list {
        .slick-slide {
          .slide-testimonial {
            .slide-testimonial-content {
              font-size: 18px;
            }
          }
        }
      }
    }
  }
}
</style>
