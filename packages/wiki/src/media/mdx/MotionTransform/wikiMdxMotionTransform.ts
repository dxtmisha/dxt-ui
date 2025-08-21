import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import motionTransformEn from './motionTransform.en.mdx'
import motionTransformRu from './motionTransform.ru.mdx'
import animationHeadPositionEn from './animationHeadPosition.en.mdx'
import animationHeadPositionRu from './animationHeadPosition.ru.mdx'
import ignoreEn from './ignore.en.mdx'
import ignoreRu from './ignore.ru.mdx'

export const wikiMdxMotionTransform: StorybookComponentsMdxItem = {
  name: 'MotionTransform',
  descriptions: {
    animationHeadPosition: {
      en: animationHeadPositionEn,
      ru: animationHeadPositionRu
    },
    ignore: {
      en: ignoreEn,
      ru: ignoreRu
    },
    motionTransform: {
      en: motionTransformEn,
      ru: motionTransformRu
    }
  }
}
