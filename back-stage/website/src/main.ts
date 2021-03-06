import { createApp } from 'vue'
import App from './App.vue'
import AntDesignPlugin from './plugins/ant-design'
// import Layouts from './plugins/layouts'
import Layouts from './plugins/layouts'
import Components from './plugins/components'
import './registerServiceWorker'
import router from './router'
import store from './store'

createApp(App)
  .use(store)
  .use(router)
  .use(AntDesignPlugin)
  .use(Layouts)
  .use(Components)
  .mount('#app')
