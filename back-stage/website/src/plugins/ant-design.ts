import { App } from 'vue'
import AntDesignVue from 'ant-design-vue'

export default function AntDesignPlugin(app: App) {
  app.use(AntDesignVue)
}
