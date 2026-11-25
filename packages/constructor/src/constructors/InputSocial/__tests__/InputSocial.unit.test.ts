// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { effectScope, reactive, ref } from 'vue'
import { DesignName } from '@dxtmisha/functional'

import { InputSocial } from '../InputSocial'
import type { InputSocialProps } from '../props'

describe('InputSocial (Unit)', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('resolves social metadata, custom socialIcons fallback, and lazy form guard', () => {
    const props = reactive<InputSocialProps>({
      socialType: 'telegram',
      socialIcons: {
        github: 'custom-github'
      }
    })

    const scope = effectScope()
    let instance!: InputSocial

    scope.run(() => {
      instance = new InputSocial(
        props,
        ref<HTMLElement | undefined>(),
        new DesignName('d1.inputSocial')
      )
    })

    expect(instance.hasInstance('event')).toBe(true)
    expect(instance.hasInstance('validation')).toBe(true)
    expect(instance.hasInstance('mask')).toBe(true)
    expect(instance.hasInstance('form')).toBe(false)

    expect(instance.label).toBe('Telegram')
    expect(instance.prefix).toBe('https://t.me/')
    expect(instance.icon).toBe(instance.data.value?.icon)

    props.socialType = 'github'
    expect(instance.label).toBe('GitHub')
    expect(instance.icon).toBe('custom-github')

    props.socialType = undefined
    expect(instance.data.value).toBeUndefined()
    expect(instance.label).toBeUndefined()
    expect(instance.prefix).toBeUndefined()

    scope.stop()
  })

  it('builds input bindings and bindsMask properly', () => {
    const props = reactive<InputSocialProps>({
      name: 'social',
      socialType: 'telegram',
      value: 'dxtmisha'
    })

    const scope = effectScope()
    let instance!: InputSocial

    scope.run(() => {
      instance = new InputSocial(
        props,
        ref<HTMLElement | undefined>(),
        new DesignName('d1.inputSocial')
      )
    })

    expect(instance.hasInstance('form')).toBe(true)
    expect(instance.binds.value).toBe('dxtmisha')
    expect(instance.bindsMask.mask).toBeTruthy()
    expect(instance.bindsMask.maskVisible).toBe(false)

    scope.stop()
  })
})
