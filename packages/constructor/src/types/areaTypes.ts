import type { InjectionKey } from 'vue'
import type { RefOrNormal } from '@dxtmisha/functional'

/** Area default property / Свойство по умолчанию для области */
export type AreaPropsInclude = {
  /** Default area value / Значение области по умолчанию */
  area?: string
}

/** Area property name / Название свойства области */
export const AREA_PROP_NAME: InjectionKey<RefOrNormal<string | undefined>> = /* #__PURE__ */ Symbol('UI_AREA_VALUE')
