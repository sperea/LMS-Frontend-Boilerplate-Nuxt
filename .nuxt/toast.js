import Vue from 'vue'
import Toasted from 'vue-toasted'

Vue.use(Toasted, {"position":"top-center","iconPack":"fontawesome","duration":3000})

const globals = [{"name":"defaultSuccess","message":(payload) =>
      !payload.msg ? 'Operación realizada con éxito' : payload.msg,"options":{"type":"success","icon":"check"}},{"name":"defaultError","message":(payload) =>
      !payload.msg ? 'Oops.. Error inesperado' : payload.msg,"options":{"type":"error","icon":"times"}}]
if(globals) {
  globals.forEach(global => {
    Vue.toasted.register(global.name, global.message, global.options)
  })
}

export default function (ctx, inject) {
  inject('toast', Vue.toasted)
}
