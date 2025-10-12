import type { ConstrBind } from '@dxtmisha/functional'

import type { LabelProps } from '../../types/labelTypes'
import type { DescriptionProps } from '../../types/descriptionTypes'

import type { IconLitePropsInclude, IconPropsBasic, IconValue } from '../Icon'
import type { CellPropsBasic } from '../Cell'
import type { MotionTransformPropsBasic, MotionTransformPropsInclude } from '../MotionTransform'

interface AccordionPropsToken {
  // :type [!] System label / Системная метка
  divider?: boolean
  // :type [!] System label / Системная метка
}

export interface AccordionPropsBasic<
  Icon extends IconPropsBasic = IconPropsBasic,
  Cell extends CellPropsBasic = CellPropsBasic,
  MotionTransform extends MotionTransformPropsBasic = MotionTransformPropsBasic
> extends LabelProps,
  DescriptionProps,
  IconLitePropsInclude<Icon>,
  MotionTransformPropsInclude<MotionTransform> {
  // Style
  'cellAttrs'?: ConstrBind<Cell>
  'iconArrowDown'?: IconValue<Icon>

  // Event
  'modelOpen'?: boolean
  'onUpdate:open'?: (value: boolean) => void
  'onUpdate:modelOpen'?: (value: boolean) => void
}

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export interface AccordionProps extends AccordionPropsBasic, AccordionPropsToken {
}

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsAccordion = {
  clickOpen: true,
  autoClose: true,
  ...{
    // :default [!] System label / Системная метка
    divider: true
    // :default [!] System label / Системная метка
  }
}
