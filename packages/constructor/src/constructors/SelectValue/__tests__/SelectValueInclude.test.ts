// @vitest-environment jsdom
import { describe, expect, it } from 'vitest'
import { DesignComponents, DesignName } from '@dxtmisha/functional'

import { SelectValueInclude } from '../SelectValueInclude'
import type { SelectValueComponentInclude, SelectValuePropsInclude } from '../basicTypes'

describe('SelectValueInclude', () => {
  it('evaluates is based on disabled prop and components presence', () => {
    const naming = new DesignName('d1.select')
    const components = new DesignComponents<SelectValueComponentInclude, SelectValuePropsInclude>({
      selectValue: () => null
    } as never)

    const enabledInstance = new SelectValueInclude({}, naming, components)
    expect(enabledInstance.is).toBe(true)

    const disabledInstance = new SelectValueInclude({ disabled: true }, naming, components)
    expect(disabledInstance.is).toBe(false)

    const withoutComponents = new SelectValueInclude({}, naming)
    expect(withoutComponents.is).toBe(false)
  })

  it('resolves bindings and forwards disabled attribute and selectValueAttrs', () => {
    const naming = new DesignName('d1.select')
    const components = new DesignComponents<SelectValueComponentInclude, SelectValuePropsInclude>({
      selectValue: () => null
    } as never)

    const instance = new SelectValueInclude(
      {
        disabled: true,
        selectValueAttrs: {
          placeholder: 'Pick one'
        }
      },
      naming,
      components
    )

    expect(instance.binds.value).toMatchObject({
      disabled: true,
      placeholder: 'Pick one'
    })
  })
})
