// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { nextTick, reactive } from 'vue'
import type { ListSelectedList } from '@dxtmisha/functional'

import { ModelInclude } from '../../../classes/ModelInclude'
import { MenuValue } from '../MenuValue'
import type { MenuProps } from '../props'

afterEach(() => {
  vi.restoreAllMocks()
})

describe('MenuValue', () => {
  describe('Pass-through mode (isSelectedByValue disabled)', () => {
    it('should proxy props.selected and ignore setValue calls', () => {
      const emits = vi.fn()
      const model = new ModelInclude<ListSelectedList | undefined>('selected', emits)
      const props = reactive<MenuProps>({
        selected: 'alpha',
        isSelectedByValue: false
      })
      const menuValue = new MenuValue(props, () => model, emits)

      expect(menuValue.selected.value).toBe('alpha')
      menuValue.setValue('beta', true)

      expect(menuValue.selected.value).toBe('alpha')
      expect(emits).not.toHaveBeenCalled()

      props.selected = 'gamma'
      expect(menuValue.selected.value).toBe('gamma')
    })
  })

  describe('Controlled internal value mode (isSelectedByValue enabled)', () => {
    it('should initialize from props.selected, emit model and updateValue on setValue, and ignore duplicates', () => {
      const emits = vi.fn()
      const model = new ModelInclude<ListSelectedList | undefined>('selected', emits)
      const props = reactive<MenuProps>({
        selected: 'init',
        isSelectedByValue: true
      })
      const menuValue = new MenuValue(props, () => model, emits)

      expect(menuValue.selected.value).toBe('init')

      menuValue.setValue('init', true)
      expect(emits).not.toHaveBeenCalled()

      menuValue.setValue('next', false)
      expect(menuValue.selected.value).toBe('next')
      expect(emits).toHaveBeenCalledWith('update:selected', 'next')
      expect(emits).toHaveBeenCalledWith('update:modelSelected', 'next')
      expect(emits).not.toHaveBeenCalledWith('updateValue', expect.anything())

      emits.mockClear()
      menuValue.setValue('final', true)
      expect(menuValue.selected.value).toBe('final')
      expect(emits).toHaveBeenCalledWith('update:selected', 'final')
      expect(emits).toHaveBeenCalledWith('update:modelSelected', 'final')
      expect(emits).toHaveBeenCalledWith('updateValue', 'final')
    })

    it('should handle falsy primitive values (0, false, empty string) and ignore arrays or objects', () => {
      const emits = vi.fn()
      const model = new ModelInclude<ListSelectedList | undefined>('selected', emits)
      const props = reactive<MenuProps>({
        isSelectedByValue: true
      })
      const menuValue = new MenuValue(props, () => model, emits)

      menuValue.setValue(0, true)
      expect(menuValue.selected.value).toBe(0)
      expect(emits).toHaveBeenCalledWith('updateValue', 0)

      menuValue.setValue(false, true)
      expect(menuValue.selected.value).toBe(false)
      expect(emits).toHaveBeenCalledWith('updateValue', false)

      menuValue.setValue('', true)
      expect(menuValue.selected.value).toBe('')
      expect(emits).toHaveBeenCalledWith('updateValue', '')

      emits.mockClear()
      menuValue.setValue(['a', 'b'], true)
      expect(menuValue.selected.value).toBe('')
      expect(emits).not.toHaveBeenCalled()
    })

    it('should synchronize props.selected changes after mount and stop watching on unmount', async () => {
      const emits = vi.fn()
      const model = new ModelInclude<ListSelectedList | undefined>('selected', emits)
      const props = reactive<MenuProps>({
        selected: 'first',
        isSelectedByValue: true
      })
      const menuValue = new MenuValue(props, () => model, emits)

      menuValue.onMounted()
      props.selected = 'second'
      await nextTick()
      expect(menuValue.selected.value).toBe('second')

      menuValue.onUnmounted()
      props.selected = 'third'
      await nextTick()
      expect(menuValue.selected.value).toBe('second')
    })
  })
})
