import { defineStore } from "pinia"
import { AppState } from "./types"
import { LocalEnum, OsEnum, ThemeEnum } from "@/enum"


export const useAppStore = defineStore({
  id: "app",
  state: (): AppState => ({ 
    // 系统配置
    system: OsEnum.Windows,
    theme: ThemeEnum.Light,
    locale: LocalEnum.CN,
    focus: false
   }),
  getters: {
    getSystem(state: AppState): string {
      return state.system
    },
    getFocus(state: AppState): boolean {
      return state.focus
    },
    getLocale(state: AppState): string {
      return state.locale
    },
    getTheme(state: AppState): string{
      return state.theme
    }
  },
  actions: {
    setSystem(system: string) {
      this.system = system
    },
    setLocale(locale: LocalEnum) {
      this.locale = locale
    },
    setTheme(theme: ThemeEnum) {
      this.theme = theme
    },
    toggleFocus(value: boolean) {
      this.focus = value
    },
  },
})
