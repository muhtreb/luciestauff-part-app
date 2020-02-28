<template>
  <div class="container">
    <div class="flex justify-center">
      <div class="w-full mb-20">
        <div class="banner banner--contact">
          <h2 class="banner-title" v-html="getTitle"></h2>
        </div>
        <h1 class="title title--left-lined"><span>Contact & Booking</span></h1>

        <ValidationObserver
          ref="form"
          v-slot="{ handleSubmit }"
          v-if="!success"
        >
          <form class="contact-form" @submit.prevent="handleSubmit(submit)">
            <div class="flex flex-wrap -mx-2">
              <div class="w-full px-2 mb-4">
                <div
                  class="flex flex-wrap contact-form-services justify-center items-center"
                >
                  <span
                    class="flex-grow mb-2 w-full desktop:w-auto desktop:mb-0"
                  >
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
                <ValidationProvider
                  name="name"
                  rules="required"
                  v-slot="{ errors, classes }"
                  class="form-group"
                >
                  <div :class="classes">
                    <input
                      v-model="contact.name"
                      type="text"
                      placeholder="Name"
                    />
                    <div class="errors">{{ errors[0] }}</div>
                  </div>
                </ValidationProvider>
                <ValidationProvider
                  name="email"
                  rules="required|email"
                  v-slot="{ errors, classes }"
                  class="form-group"
                >
                  <div :class="classes">
                    <input
                      v-model="contact.email"
                      placeholder="Email"
                      type="text"
                    />
                    <div class="errors">{{ errors[0] }}</div>
                  </div>
                </ValidationProvider>
                <ValidationProvider
                  class="form-group"
                  name="date"
                  v-slot="{ errors, classes }"
                >
                  <div :class="classes">
                    <datetime
                      v-model="contact.date"
                      placeholder="Event Date"
                      format="yyyy-MM-dd"
                      auto
                    ></datetime>

                    <div class="errors">{{ errors[0] }}</div>
                  </div>
                </ValidationProvider>
                <ValidationProvider
                  name="time"
                  v-slot="{ errors, classes }"
                  class="form-group"
                >
                  <div :class="classes">
                    <datetime
                      v-model="contact.time"
                      placeholder="Ready By Time"
                      type="time"
                      auto
                    ></datetime>
                    <div class="errors">{{ errors[0] }}</div>
                  </div>
                </ValidationProvider>
                <ValidationProvider
                  name="location"
                  class="form-group"
                  v-slot="{ errors, classes }"
                >
                  <div :class="classes">
                    <input
                      v-model="contact.location"
                      type="text"
                      placeholder="Location"
                    />
                    <div class="errors">{{ errors[0] }}</div>
                  </div>
                </ValidationProvider>
              </div>
              <div class="w-full desktop:w-2/3 mt-4 desktop:mt-0 px-2">
                <ValidationProvider
                  class="form-group h-full"
                  name="message"
                  rules="required"
                  v-slot="{ errors, classes }"
                >
                  <div :class="classes" class="h-full">
                    <textarea
                      v-model="contact.message"
                      placeholder="Message"
                      class="h-full"
                    ></textarea>
                    <div class="errors">{{ errors[0] }}</div>
                  </div>
                </ValidationProvider>
              </div>
            </div>
            <div class="flex justify-end mb-10 mt-4">
              <button type="submit">Send</button>
            </div>
          </form>
        </ValidationObserver>
        <div v-else class="uppercase my-10 text-center">
          Votre message a bien été envoyé
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import nl2br from 'nl2br'
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
  computed: {
    ...mapState('setting', ['settings']),
    getTitle() {
      return nl2br(this.settings.contact.title)
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
        this.$refs.form.setErrors(error.response.data.errors)
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
