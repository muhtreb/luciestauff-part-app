import Vue from 'vue'
import Slick from 'vue-slick'
const SlickSlide = {
  install(Vue, options) {
    Vue.component('slick', Slick)
  }
}

Vue.use(SlickSlide)
export default SlickSlide
