// @vitest-environment node
import './testWarnings'
import { describe, expect, it } from 'vitest'
import { effectScope, reactive, ref } from 'vue'
import { DesignName } from '@dxtmisha/functional'

import { Button } from '../Button'
import type { ButtonPropsBasic } from '../props'

describe('Button (SSR)', () => {
  const naming = new DesignName('d1.button')

  it('should initialize and evaluate bindings in a server-side Node environment without DOM globals', () => {
    const scope = effectScope()
    const element = ref<HTMLDivElement>()
    const props = reactive<ButtonPropsBasic>({
      ariaLabel: 'Submit action',
      label: 'Submit',
      value: 'data-123'
    })

    scope.run(() => {
      const button = new Button(props as ButtonPropsBasic, element, naming)

      expect(button.tag).toBe('button')
      expect(button.binds.type).toBe('button')
      expect(button.binds['data-value']).toBe('data-123')
      expect(button.binds['aria-label']).toBe('Submit action')
      expect(button.classes[naming.getStatusClass('icon')]).toBe(false)
    })

    scope.stop()
  })

  it('should resolve non-button tags in SSR correctly', () => {
    const scope = effectScope()
    const element = ref<HTMLDivElement>()
    const props = reactive<ButtonPropsBasic>({
      tag: 'span'
    })

    scope.run(() => {
      const button = new Button(props as ButtonPropsBasic, element, naming)

      expect(button.tag).toBe('span')
      expect(button.aria.role).toBe('button')
      expect(button.aria.tabindex).toBe('0')
    })

    scope.stop()
  })
})
