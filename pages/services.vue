<template>
  <div>
    <div class="container">
      <div class="about">
        <div class="about">
          <nav class="about-nav">
            <a
              href="#"
              class="about-nav-link"
              @click.prevent="showAbout('conditions')"
              :class="{ 'about-nav-link--active': aboutNav === 'conditions' }"
              >Conditions</a
            >
            <a
              href="#"
              class="about-nav-link"
              @click.prevent="showAbout('questions')"
              :class="{ 'about-nav-link--active': aboutNav === 'questions' }"
              >Questions</a
            >
            <a
              href="#"
              class="about-nav-link"
              @click.prevent="showAbout('blabla')"
              :class="{ 'about-nav-link--active': aboutNav === 'blabla' }"
              >Bla Bla</a
            >
          </nav>
          <div class="about-content-wrapper">
            <h2 class="about-content-title">Services</h2>
            <div class="about-content">
              <div v-if="aboutNav === 'conditions'">
                <div id="lipsum">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    molestie justo sed risus interdum interdum. Suspendisse
                    dapibus vestibulum tellus, rutrum rutrum quam rutrum
                    pretium. Nunc libero sapien, suscipit quis posuere ut,
                    pretium a nisi. Proin aliquam tincidunt dui, sit amet
                    laoreet urna egestas consequat. Donec lacus dolor, mattis
                    vitae vestibulum a, molestie ut dolor. Vivamus arcu leo,
                    tincidunt ut dui fringilla, fringilla placerat velit. Nunc
                    ut viverra nulla. Sed suscipit vel massa vulputate
                    tincidunt. Integer blandit, sapien commodo pulvinar
                    malesuada, risus libero suscipit libero, non ultricies odio
                    urna eget nisi. Ut tristique mattis ligula, ut maximus ante
                    dignissim eget.
                  </p>
                  <p>
                    Curabitur dolor ante, auctor at dolor eget, finibus laoreet
                    metus. Aliquam id nisl in lorem auctor aliquet. Sed
                    tincidunt ligula sit amet nisl feugiat, bibendum condimentum
                    leo laoreet. Nunc molestie turpis eu lacinia aliquam.
                    Pellentesque ante leo, tempus tincidunt ornare vel, blandit
                    id elit. Quisque in mollis odio, ac auctor dui. Maecenas vel
                    libero eu arcu condimentum tincidunt nec ut tellus. Integer
                    et purus et nibh viverra efficitur sit amet eu neque.
                    Pellentesque sit amet erat a nulla efficitur bibendum ut ut
                    urna.
                  </p>
                  <p>
                    Aenean commodo eros orci, in viverra magna fermentum vitae.
                    Duis mi lacus, lacinia vestibulum laoreet non, sodales in
                    dui. Donec nulla risus, elementum suscipit orci in, ultrices
                    lacinia nibh. Nam blandit tempor sollicitudin. Sed fringilla
                    justo in gravida condimentum. Nam mattis sit amet quam in
                    efficitur. Nulla varius ligula sit amet leo eleifend
                    egestas. Fusce porta sem vitae est mollis, in maximus metus
                    egestas. Vestibulum quis dui porta, elementum sapien ac,
                    pharetra lorem.
                  </p>
                  <p>
                    Praesent tempor, risus a iaculis volutpat, metus nulla
                    dictum ipsum, id hendrerit neque velit vel quam. Curabitur
                    et metus arcu. Donec placerat imperdiet efficitur. Aenean
                    malesuada volutpat justo, mollis molestie nulla sagittis
                    nec. Praesent ultrices vitae dolor et efficitur. Ut sodales
                    efficitur mollis. Suspendisse vestibulum ullamcorper
                    suscipit. Etiam hendrerit sagittis felis, non consequat
                    tortor condimentum vitae. Phasellus maximus lectus arcu, ut
                    tristique ex euismod in. Sed ut quam tempor, malesuada enim
                    eu, mattis magna. Suspendisse suscipit nibh mauris, ac
                    luctus est finibus quis.
                  </p>
                  <p>
                    Etiam hendrerit commodo lorem vitae ultricies. Maecenas
                    maximus, ante at vehicula rutrum, orci felis porta magna, in
                    molestie mauris est nec nibh. Sed sit amet pulvinar velit.
                    Pellentesque consectetur nulla sit amet vehicula ultricies.
                    In sed purus in ante placerat euismod. Sed ac facilisis
                    nulla, nec dapibus mi. Mauris luctus, magna sit amet
                    bibendum iaculis, lectus nibh semper massa, non placerat
                    tortor odio nec enim. Pellentesque quis libero semper, porta
                    ligula vel, cursus tortor.
                  </p>
                </div>
              </div>
              <div v-if="aboutNav === 'questions'">
                Questions
              </div>
              <div v-if="aboutNav === 'blabla'">
                Bla Bla
              </div>
            </div>
          </div>
          <div class="about-picture">
            <div class="about-picture-image-container">
              <div
                class="about-picture-image"
                :style="{
                  backgroundImage: 'url(' + getAboutPicture() + ')'
                }"
              />
            </div>
            <div class="about-picture-category-color"></div>
            <h2 class="about-picture-title">
              <span>Services</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
    <div class="portfolio">
      <div class="container">
        <h2 class="title title--right-lined">
          <span>My Work</span>
        </h2>
      </div>

      <PortfolioSlider></PortfolioSlider>
    </div>
  </div>
</template>

<script>
import PortfolioSlider from '@/components/PortfolioSlider'

export default {
  components: { PortfolioSlider },
  data() {
    return {
      aboutNav: 'conditions'
    }
  },
  head() {
    return {
      bodyAttrs: {
        class: ['page-services']
      }
    }
  },
  mounted() {
    this.$store.commit('banner/setBanner', {
      show: true,
      title: 'Services'
    })
  },
  methods: {
    showAbout(nav) {
      this.aboutNav = nav
    },
    getAboutPicture() {
      return require(`@/assets/img/21.jpg`)
    }
  }
}
</script>
