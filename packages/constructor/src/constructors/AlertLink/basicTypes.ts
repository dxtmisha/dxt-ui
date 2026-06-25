import type { ConstrBind } from '@dxtmisha/functional'

import type { EventClickValue } from '../../types/eventClickTypes'
import type { AlertLinkPropsBasic } from './props'

/** Type describing emitted events for nested alert links / Тип, описывающий генерируемые события для вложенных ссылок оповещения */
export type AlertLinkEmitsInclude = {
  /** Event triggered on clicking an alert link / Событие, вызываемое при клике на ссылку оповещения */
  link: [event: MouseEvent, value: EventClickValue]
}

/** Type describing properties for nested alert links / Тип, описывающий свойства для вложенных ссылок оповещения */
export type AlertLinkPropsInclude<
  AlertLinkProps extends AlertLinkPropsBasic = AlertLinkPropsBasic
> = {
  /** List of link configurations / Список настроек ссылок */
  links?: ConstrBind<AlertLinkProps>[]

  /** Additional attributes for links component / Дополнительные атрибуты для компонента ссылок */
  linksAttrs?: ConstrBind<AlertLinkProps>
}
