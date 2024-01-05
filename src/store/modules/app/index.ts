import { defineStore} from 'pinia';
import { AppState } from './types';
import { LocalEnum, ThemeEnum } from '../../../enum/index';

const useAppStore = defineStore('app', {
  state: (): AppState => ({ theme: ThemeEnum.Light, locale: LocalEnum.CN})
})

export default useAppStore