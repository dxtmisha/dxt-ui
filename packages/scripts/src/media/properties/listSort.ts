import type { Item } from '@dxt-ui/functional'

import {
  PropertyCategory,
  PropertyType
} from '../../types/propertyTypes'

import {
  cssBackgrounds,
  cssBorder,
  cssColor,
  cssColumns,
  cssContent,
  cssDeprecated,
  cssDifferent,
  cssEffects,
  cssExperimental,
  cssFlexbox,
  cssInteractivity,
  cssLayout,
  cssMath,
  cssOther,
  cssPrint,
  cssScrolls,
  cssSizing,
  cssSpacing,
  cssSVG,
  cssTables,
  cssTransforms,
  cssTransitions,
  cssTypography
} from './css'
import { cssSelector } from './cssSelector'
import { cssVirtual } from './cssVirtual'

export const sortList: Item<string[][]>[] = [
  {
    index: PropertyType.var,
    value: []
  },
  {
    index: PropertyType.property,
    value: [
      cssLayout,
      cssFlexbox,
      cssColumns,
      cssSpacing,
      cssSizing,
      cssContent,
      cssTypography,
      cssMath,
      cssColor,
      cssBackgrounds,
      cssBorder,
      cssEffects,
      cssTransforms,
      cssTables,
      cssTransitions,
      cssInteractivity,
      cssScrolls,
      cssSVG,
      cssPrint,
      cssOther,
      cssExperimental,
      cssDifferent,
      cssDeprecated
    ]
  },
  {
    index: PropertyType.virtual,
    value: [
      cssVirtual
    ]
  },
  {
    index: PropertyType.subclass,
    value: []
  },
  {
    index: PropertyType.selector,
    value: [
      cssSelector
    ]
  },
  {
    index: PropertyType.state,
    value: []
  },
  {
    index: `category-${PropertyCategory.theme}`,
    value: []
  },
  {
    index: `category-${PropertyCategory.class}`,
    value: []
  },
  {
    index: PropertyType.classType,
    value: []
  },
  {
    index: PropertyType.component,
    value: []
  },
  {
    index: PropertyType.scss,
    value: []
  },
  {
    index: PropertyType.other,
    value: []
  }
]
