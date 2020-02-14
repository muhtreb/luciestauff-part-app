<template>
  <div class="container">
    <div class="flex justify-center">
      <div class="w-full xl:w-5/6">
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

          <div class="flex flex-wrap -mx-2">
            <div class="w-full px-2 mb-4">
              <div
                class="flex flex-wrap contact-form-services justify-center items-center"
              >
                <span class="flex-grow mb-2 w-full desktop:w-auto desktop:mb-0">
                  How many services would you need
                </span>
                <div
                  class="flex justify-center ml-0 desktop:ml-4 w-full desktop:w-auto"
                >
                  <div class="flex items-center mr-4">
                    <label class="mr-2">Makeup</label>
                    <input type="number" v-model="contact.count_makeup" />
                  </div>
                  <div class="flex items-center">
                    <label class="mr-2">Hair</label>
                    <input type="number" v-model="contact.count_hair" />
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full desktop:w-1/3 px-2">
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
                  v-model="contact.time"
                  type="time"
                  placeholder="Ready By Time"
                />
              </div>
              <div class="form-group">
                <input
                  v-model="contact.location"
                  type="text"
                  placeholder="Location"
                />
              </div>
            </div>
            <div class="w-full desktop:w-2/3 mt-4 desktop:mt-0 px-2">
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
