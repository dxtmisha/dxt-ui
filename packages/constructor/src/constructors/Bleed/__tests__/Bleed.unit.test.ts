// @vitest-environment jsdom
import { describe, expect, it } from 'vitest'
import { reactive, ref } from 'vue'
import { DesignName } from '@dxtmisha/functional'

import { Bleed } from '../Bleed'
import type { BleedProps } from '../props'

describe('Bleed (isolated class)', () => {
  describe('Standard functional requirements (Happy path & Usage scenarios)', () => {
    it('should default tag to div when tag prop is omitted', () => {
      const props = reactive<BleedProps>({})
      const element = ref<HTMLDivElement | undefined>(undefined)
      const naming = new DesignName('d1.bleed')
      const instance = new Bleed(props, element, naming)

      expect(instance.tag).toBe('div')
    })

    it('should return custom tag prop reactively', () => {
      const props = reactive<BleedProps>({ tag: 'section' })
      const element = ref<HTMLDivElement | undefined>(undefined)
      const naming = new DesignName('d1.bleed')
      const instance = new Bleed(props, element, naming)

      expect(instance.tag).toBe('section')

      props.tag = 'article'
      expect(instance.tag).toBe('article')

      props.tag = undefined
      expect(instance.tag).toBe('div')
    })
  })
})
