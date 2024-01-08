import { createPinia} from 'pinia'
import piniaPluginPersist from 'pinia-plugin-persist'
// import useAppStore from './modules/app'
const pinia = createPinia()
pinia.use(piniaPluginPersist)

// export { useAppStore }

export default pinia;