import { ButtonDesign } from '../Button'

import {
  type ChipPropsBasic
} from './props'
import {
  type ChipClasses,
  type ChipComponents,
  type ChipExpose
} from './types'

/**
 * ChipDesign
 */
export class ChipDesign<
  COMP extends ChipComponents,
  EXPOSE extends ChipExpose,
  CLASSES extends ChipClasses,
  P extends ChipPropsBasic
> extends ButtonDesign<
    COMP,
    EXPOSE,
    CLASSES,
    P
  > {
}
