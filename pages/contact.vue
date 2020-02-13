<template>
  <div class="container">
    <div class="flex justify-center">
      <div class="w-5/6">
        <div class="banner banner--contact">
          <h2 class="banner-title">
            Let's connect,<br />
            I will get back to you !
          </h2>
        </div>
        <h1 class="title title--left-lined"><span>Contact & Booking</span></h1>

        <form v-if="!success" class="contact-form" @submit.prevent="submit">
          <div v-for="(error, key) in errors" :key="key">
            {{ error }}
          </div>
          <div class="flex -mx-2">
            <div class="w-1/3 px-2">
              <div class="form-group">
                <input
                  v-model="contact.name"
                  type="text"
                  placeholder="Name"
                  required
                />
              </div>
              <div class="form-group">
                <input
                  v-model="contact.email"
                  type="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div class="form-group">
                <input v-model="contact.date" type="date" placeholder="Date" />
              </div>
              <div class="form-group">
                <input
                  v-model="contact.readyByTeam"
                  type="text"
                  placeholder="Ready By Team"
                />
              </div>
              <div class="form-group">
                <input
                  v-model="contact.location"
                  type="text"
                  placeholder="location"
                />
              </div>
            </div>
            <div class="w-2/3 px-2">
              <div class="form-group h-full">
                <textarea
                  v-model="contact.message"
                  placeholder="Message"
                  class="h-full"
                ></textarea>
              </div>
            </div>
          </div>
          <div class="flex justify-end mb-10 mt-4">
            <button type="submit">Send</button>
          </div>
        </form>
        <div v-else>
          Votre message a bien été envoyé
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      bodyAttrs: {
        class: ['page-contact']
      }
    }
  },
  data() {
    return {
      contact: {},
      success: false,
      errors: []
    }
  },
  methods: {
    async submit() {
      const formData = new FormData()
      for (const [key, value] of Object.entries(this.contact)) {
        formData.append(key, value)
      }
      try {
        await this.$contactRepository.createContactMessage(formData)

        this.contact = {}
        this.success = true
      } catch (error) {
        this.errors = error.response.data.errors
      }
    }
  },
  mounted() {
    this.$store.commit('banner/setBanner', {
      show: false
    })
  }
}
</script>
