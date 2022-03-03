import { reactive } from '@vue/reactivity'
import lang from '../assets/lang.json'

export const store = reactive({
  currentLang: lang.ptBR,
  ptBR: lang.ptBR,
  enUS: lang.enUs
})
