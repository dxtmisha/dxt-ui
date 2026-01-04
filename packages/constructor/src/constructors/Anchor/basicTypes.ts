import type { NumberOrString } from '@dxtmisha/functional'

/** Anchor scroll properties/ Свойства прокрутки якоря */
export interface AnchorScrollProps {
  shift?: NumberOrString
  behavior?: ScrollIntoViewOptions['behavior']
  block?: ScrollIntoViewOptions['block']
  inline?: ScrollIntoViewOptions['inline']
}
