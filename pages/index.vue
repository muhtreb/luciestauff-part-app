<template>
  <div>
    <div class="container">
      <div class="about">
        <div class="about-picture">
          <img src="~/assets/img/profile.jpg" />
        </div>
        <nav class="about-nav">
          <a href="">Biography</a>
          <a href="">References</a>
        </nav>
        <div class="about-content-wrapper">
          <h2 class="about-content-title">About L'atelier</h2>
          <div class="about-content">
            Lucie STAUFF is a Freelance International Hairstylist & Make-up
            Artist with over 10 Years Experience.<br />
            French-born & Melbourne-based.<br /><br />

            All started when she was 16 yo and decided to become a Make-up
            Artist<br />
            The art of make-up to create an image was a revelation for her.<br /><br />

            After followed training in Beauty Therapy, she realized her dream at
            21 yo<br />
            by doing the make-up school international "Make-up Atelier" in
            Paris.<br /><br />

            She lived and worked as a freelance hair & make-up artist in Paris
            for 3 years.<br /><br />

            Worked in audiovisual, doing advertising TV, Celebrities Interview,
            Video clip, short movie...<br />
            Catwalk for Miasuki, Gellé Frères , Hermès & Naf-Naf<br />
            And done some editorials such LUI Italy, Conde Nast Traveler, Luxe
            Infinity, Fashizblack...<br /><br />

            Quickly during her work, she's become passionate about hair too so
            she followed the full<br />
            training of Agathe Segura in Paris, specialist of hairstyling
            studio.<br /><br />

            After that, she moved to Melbourne, working for campaign, lookbook,
            video & events<br />
            for some of well known Australian brands.<br /><br />

            She is a creative, passionate & energic artist using the makeup and
            hairstyle to tell a story, revealing emotions, sublimate the model
            ...<br />
            During her free time, she's doing abstract & colourful painting on
            canvas and she likes to explore nature.
          </div>
          <div class="about-content-sign">
            <img src="~/assets/img/sign.png" />
          </div>
        </div>
      </div>
    </div>

    <div class="banner banner--homepage-services">
      <h2 class="banner-title">Services</h2>
    </div>

    <div class="container">
      <div class="services">
        <h3 class="services-title">
          We do make up & hair fashion every<br />
          special occasion
        </h3>
      </div>
    </div>

    <div class="portfolio">
      <div class="container">
        <h2 class="portfolio-title">
          <span>Portfolio</span>
        </h2>
      </div>

      <client-only>
        <slick ref="slick" :options="slickOptions">
          <div
            v-for="(portfolioImage, index) in portfolioImages"
            :key="`carousel-${index}`"
          >
            <img
              :src="require(`@/assets/img/portfolio/${portfolioImage.path}`)"
            />
          </div>
        </slick>
      </client-only>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      bodyAttrs: {
        class: ['page-homepage']
      }
    }
  },
  mounted() {
    this.$store.commit('banner/setBanner', {
      show: true,
      title: "L'atelier hair & make up"
    })
  },
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
        autoplaySpeed: 2000,
        adaptiveHeight: true,
        appendArrows: false
        // Any other options that can be got from plugin documentation
      },
      portfolioImages: [
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
