<template>
  <client-only>
    <CoolLightBox
      :items="getLightboxMedias"
      :index="index"
      @close="index = null"
    >
      <template v-slot:icon-previous>
        <div class="cool-lightbox-prev">
          <img src="~/assets/img/triangle-small.png" />
        </div>
      </template>
      <template v-slot:icon-next>
        <div class="cool-lightbox-next">
          <img src="~/assets/img/triangle-small.png" />
        </div>
      </template>
      <template v-slot:close>
        <div class="cool-lightbox-close"></div>
      </template>
    </CoolLightBox>
  </client-only>
</template>

<script>
import CoolLightBox from 'vue-cool-lightbox'

export default {
  components: { CoolLightBox },
  props: ['portfolioCategory', 'index'],
  computed: {
    getLightboxMedias() {
      const medias = []
      for (const media of Object.values(this.portfolioCategory.medias)) {
        medias.push({
          title: null,
          description: null,
          thumb:
            media.type === 'image'
              ? media.small_image_url
              : media.thumbnail_url,
          src: media.type === 'image' ? media.image_url : media.video_url
        })
      }
      return medias
    }
  }
}
</script>
