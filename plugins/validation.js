import Vue from 'vue'
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate'

import { required, email } from 'vee-validate/dist/rules'

extend('email', email)
extend('required', required)

const VeeValidate = {
  install(Vue, options) {
    Vue.component('ValidationProvider', ValidationProvider)
    Vue.component('ValidationObserver', ValidationObserver)
  }
}

Vue.use(VeeValidate, {
  behavior: 'eager'
})
export default VeeValidate
