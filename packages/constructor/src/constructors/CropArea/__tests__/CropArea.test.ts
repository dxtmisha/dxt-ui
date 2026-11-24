// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { computed, createApp, defineComponent, nextTick, reactive } from 'vue'
import type { ConstrClasses, ConstrEmit } from '@dxtmisha/functional'

import { CropAreaDesign } from '../CropAreaDesign'
import { defaultsCropArea, type CropAreaProps } from '../props'
import type {
  CropAreaClasses,
  CropAreaComponents,
  CropAreaEmits,
  CropAreaExpose
} from '../types'

describe('CropArea (integrated component)', () => {
  const cleanups: Array<() => void> = []

  afterEach(() => {
    cleanups.splice(0).forEach(cleanup => cleanup())
    document.body.innerHTML = ''
    document.body.className = ''
    vi.restoreAllMocks()
  })

  const mountCropArea = (initialProps: CropAreaProps = {}) => {
    const props = reactive<CropAreaProps>({
      ...defaultsCropArea,
      ...initialProps
    })
    const emits = vi.fn()
    let exposed: CropAreaExpose | undefined

    const Host = defineComponent({
      setup() {
        const classes = computed<ConstrClasses>(() => ({
          main: {
            'd1-cropArea': true,
            'd1-cropArea--readonly': Boolean(props.readonly),
            'd1-cropArea--disabled': Boolean(props.disabled),
            'd1-cropArea--disabledTop': Boolean(props.disabledTop),
            'd1-cropArea--disabledRight': Boolean(props.disabledRight),
            'd1-cropArea--disabledBottom': Boolean(props.disabledBottom),
            'd1-cropArea--disabledLeft': Boolean(props.disabledLeft)
          }
        }))

        const design = new CropAreaDesign<
          CropAreaComponents,
          CropAreaExpose,
          CropAreaClasses,
          CropAreaProps
        >(
          'd1.cropArea',
          props,
          {
            emits: emits as unknown as ConstrEmit<CropAreaEmits>,
            classes
          }
        )

        exposed = design.expose()
        return design.render()
      }
    })

    const container = document.createElement('div')
    document.body.appendChild(container)
    const app = createApp(Host)
    app.mount(container)

    const unmount = () => {
      app.unmount()
    }
    cleanups.push(unmount)

    const getRoot = () => container.firstElementChild as HTMLElement | null

    const mockRect = (width = 200, height = 200) => {
      const root = getRoot()

      if (root) {
        vi.spyOn(root, 'getBoundingClientRect').mockReturnValue({
          width,
          height,
          top: 0,
          left: 0,
          right: width,
          bottom: height,
          x: 0,
          y: 0,
          toJSON: () => ({})
        })
      }
    }

    if (!exposed) {
      throw new Error('CropArea expose was not initialized')
    }

    return { container, props, emits, exposed, getRoot, mockRect, unmount }
  }

  describe('Initial mount, CSS variables, and reactive prop synchronization', () => {
    it('should apply initial crop CSS variables on mount and sync reactive value updates', async () => {
      const { getRoot, props, emits, exposed } = mountCropArea({
        value: [10, 15, 20, 25]
      })

      const root = getRoot()
      expect(root).not.toBeNull()
      expect(root?.style.getPropertyValue('--d1-cropArea-sys-crop-top')).toBe('10%')
      expect(root?.style.getPropertyValue('--d1-cropArea-sys-crop-right')).toBe('15%')
      expect(root?.style.getPropertyValue('--d1-cropArea-sys-crop-bottom')).toBe('20%')
      expect(root?.style.getPropertyValue('--d1-cropArea-sys-crop-left')).toBe('25%')

      // Updating modelValue syncs state and styles without feedback emit
      props.modelValue = [5, 10, 15, 20]
      await nextTick()

      expect(exposed.get()).toEqual([5, 10, 15, 20])
      expect(root?.style.getPropertyValue('--d1-cropArea-sys-crop-top')).toBe('5%')
      expect(emits).not.toHaveBeenCalled()
    })

    it('should preserve crop coordinates and re-apply CSS variables across readonly toggle cycles', async () => {
      const { getRoot, props, exposed } = mountCropArea({
        value: [12, 18, 22, 28]
      })

      expect(getRoot()?.style.getPropertyValue('--d1-cropArea-sys-crop-top')).toBe('12%')

      props.readonly = true
      await nextTick()
      expect(getRoot()).toBeNull()

      props.readonly = false
      await nextTick()

      const remounted = getRoot()
      expect(remounted).not.toBeNull()
      expect(exposed.get()).toEqual([12, 18, 22, 28])
      expect(remounted?.style.getPropertyValue('--d1-cropArea-sys-crop-top')).toBe('12%')
      expect(remounted?.style.getPropertyValue('--d1-cropArea-sys-crop-left')).toBe('28%')
    })
  })

  describe('Mouse drag, keyboard interaction, and gesture cancellation', () => {
    it('should drag a handle, update CSS variables, emit resize + v-model, and clean up on mouseup', () => {
      const { getRoot, mockRect, emits, exposed } = mountCropArea({
        value: [10, 10, 10, 10]
      })

      mockRect(200, 200)
      const root = getRoot()!
      const topHandle = root.querySelector('[data-value="top"]') as HTMLElement

      topHandle.dispatchEvent(new MouseEvent('mousedown', {
        bubbles: true,
        cancelable: true,
        clientX: 50,
        clientY: 50,
        buttons: 1
      }))

      expect(document.body.classList.contains('d1-cropArea__blockSelection')).toBe(true)

      window.dispatchEvent(new MouseEvent('mousemove', {
        clientX: 50,
        clientY: 70,
        buttons: 1
      }))

      expect(exposed.get()).toEqual([20, 10, 10, 10])
      expect(root.style.getPropertyValue('--d1-cropArea-sys-crop-top')).toBe('20%')
      expect(emits).toHaveBeenCalledWith('update:value', [20, 10, 10, 10])
      expect(emits).toHaveBeenCalledWith('update:modelValue', [20, 10, 10, 10])
      expect(emits).toHaveBeenCalledWith('resize', {
        direction: 'top',
        value: 20,
        coordinator: [20, 10, 10, 10]
      })

      window.dispatchEvent(new MouseEvent('mouseup', { bubbles: true }))
      expect(document.body.classList.contains('d1-cropArea__blockSelection')).toBe(false)
    })

    it('should move and resize via keyboard arrows and ignore IME composition', () => {
      const { getRoot, emits, exposed } = mountCropArea({
        value: [10, 10, 10, 10],
        step: 5
      })

      const root = getRoot()!

      // IME composition event must be ignored
      root.dispatchEvent(new KeyboardEvent('keydown', {
        key: 'ArrowRight',
        isComposing: true,
        bubbles: true,
        cancelable: true
      }))
      expect(exposed.get()).toEqual([10, 10, 10, 10])
      expect(emits).not.toHaveBeenCalled()

      // ArrowRight moves box right by 5%
      root.dispatchEvent(new KeyboardEvent('keydown', {
        key: 'ArrowRight',
        bubbles: true,
        cancelable: true
      }))
      expect(exposed.get()).toEqual([10, 5, 10, 15])
      expect(emits).toHaveBeenCalledWith('resize', {
        direction: 'center',
        value: 0,
        coordinator: [10, 5, 10, 15]
      })

      // Shift+ArrowDown expands bottom edge by 5%
      root.dispatchEvent(new KeyboardEvent('keydown', {
        key: 'ArrowDown',
        shiftKey: true,
        bubbles: true,
        cancelable: true
      }))
      expect(exposed.get()).toEqual([10, 5, 5, 15])
    })

    it('should clean up body selection lock and global listeners on window blur and component unmount mid-drag', () => {
      const { getRoot, mockRect, unmount } = mountCropArea({
        value: [10, 10, 10, 10]
      })

      mockRect(200, 200)
      const root = getRoot()!
      const center = root.querySelector('[data-value="center"]') as HTMLElement

      // Cancel via window blur
      center.dispatchEvent(new MouseEvent('mousedown', {
        bubbles: true,
        cancelable: true,
        clientX: 50,
        clientY: 50,
        buttons: 1
      }))
      expect(document.body.classList.contains('d1-cropArea__blockSelection')).toBe(true)

      window.dispatchEvent(new Event('blur'))
      expect(document.body.classList.contains('d1-cropArea__blockSelection')).toBe(false)

      // Unmount mid-drag cleans up completely
      center.dispatchEvent(new MouseEvent('mousedown', {
        bubbles: true,
        cancelable: true,
        clientX: 50,
        clientY: 50,
        buttons: 1
      }))
      expect(document.body.classList.contains('d1-cropArea__blockSelection')).toBe(true)

      unmount()
      cleanups.pop()
      expect(document.body.classList.contains('d1-cropArea__blockSelection')).toBe(false)
    })

    it('should block interaction and expose aria-disabled when disabled is true', () => {
      const { getRoot, emits, exposed } = mountCropArea({
        value: [10, 10, 10, 10],
        disabled: true
      })

      const root = getRoot()!
      expect(root.getAttribute('aria-disabled')).toBe('true')
      expect(root.getAttribute('tabindex')).toBeNull()

      root.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true }))
      expect(exposed.get()).toEqual([10, 10, 10, 10])
      expect(emits).not.toHaveBeenCalled()
    })
  })
})
