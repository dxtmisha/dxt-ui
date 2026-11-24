// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { computed, createApp, defineComponent, h, nextTick, reactive } from 'vue'
import type { ConstrClasses, ConstrEmit } from '@dxtmisha/functional'

import { CropArea } from '../CropArea'
import { CropAreaDesign } from '../CropAreaDesign'
import { defaultsCropArea, type CropAreaProps } from '../props'
import type {
  CropAreaClasses,
  CropAreaComponents,
  CropAreaEmits,
  CropAreaExpose
} from '../types'

describe('CropAreaDesign (isolated design class)', () => {
  const cleanups: Array<() => void> = []

  afterEach(() => {
    cleanups.splice(0).forEach(cleanup => cleanup())
    document.body.innerHTML = ''
    document.body.className = ''
    vi.restoreAllMocks()
  })

  const mountDesign = (
    initialProps: CropAreaProps = {},
    attrs: Record<string, unknown> = {},
    ItemConstructor: typeof CropArea = CropArea
  ) => {
    const props = reactive<CropAreaProps>({
      ...defaultsCropArea,
      ...initialProps
    })
    const emits = vi.fn()
    let designInstance: CropAreaDesign<
      CropAreaComponents,
      CropAreaExpose,
      CropAreaClasses,
      CropAreaProps
    > | undefined
    let exposed: CropAreaExpose | undefined

    const Inner = defineComponent({
      inheritAttrs: false,
      setup() {
        const classes = computed<ConstrClasses>(() => ({
          main: { 'd1-cropArea': true }
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
          },
          ItemConstructor
        )
        designInstance = design
        exposed = design.expose()
        return design.render()
      }
    })

    const Host = defineComponent({
      setup() {
        return () => h(Inner, attrs)
      }
    })

    const container = document.createElement('div')
    document.body.appendChild(container)
    const app = createApp(Host)
    app.mount(container)
    cleanups.push(() => app.unmount())

    if (!designInstance || !exposed) {
      throw new Error('CropAreaDesign was not initialized')
    }

    return {
      container,
      props,
      emits,
      design: designInstance,
      exposed
    }
  }

  describe('DOM assembly, public render helpers, and mergeProps', () => {
    it('should render root container with merged external attrs, class, style, listeners, and all 9 handles', () => {
      const externalKeydown = vi.fn()
      const { container, design } = mountDesign(
        {
          value: [10, 15, 20, 25],
          tag: 'section'
        },
        {
          'class': 'custom-crop-area',
          'style': { opacity: '0.85' },
          'data-testid': 'crop-area-root',
          'onKeydown': externalKeydown
        }
      )

      const root = container.querySelector('[data-testid="crop-area-root"]') as HTMLElement | null
      expect(root).not.toBeNull()
      expect(root?.tagName).toBe('SECTION')
      expect(root?.classList.contains('d1-cropArea')).toBe(true)
      expect(root?.classList.contains('custom-crop-area')).toBe(true)
      expect(root?.style.opacity).toBe('0.85')
      expect(root?.getAttribute('tabindex')).toBe('0')

      // All 3 columns and 9 interactive data-value regions
      expect(root?.querySelector('.d1-cropArea__left')).not.toBeNull()
      expect(root?.querySelector('.d1-cropArea__center')).not.toBeNull()
      expect(root?.querySelector('.d1-cropArea__right')).not.toBeNull()
      expect(root?.querySelector('.d1-cropArea__crop[data-value="center"]')).not.toBeNull()

      const handles = Array.from(root?.querySelectorAll('.d1-cropArea__move') ?? [])
        .map(node => node.getAttribute('data-value'))
      expect(handles).toEqual([
        'left-top',
        'left',
        'left-bottom',
        'top',
        'bottom',
        'right-top',
        'right',
        'right-bottom'
      ])

      // External keydown listener executes alongside internal listener via mergeProps
      root?.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true }))
      expect(externalKeydown).toHaveBeenCalledTimes(1)

      // Public render helpers work directly
      expect(design.renderLeft().type).toBe('div')
      expect(design.renderCenter().type).toBe('div')
      expect(design.renderRight().type).toBe('div')
      expect(design.renderMove('top').props?.['data-value']).toBe('top')
    })

    it('should render nothing when readonly is true and restore element with styles when toggled off', async () => {
      const { container, props } = mountDesign({
        readonly: true,
        value: [10, 20, 30, 40]
      })

      expect(container.firstElementChild).toBeNull()

      props.readonly = false
      await nextTick()

      const root = container.firstElementChild as HTMLElement | null
      expect(root).not.toBeNull()
      expect(root?.style.getPropertyValue('--d1-cropArea-sys-crop-top')).toBe('10%')
      expect(root?.style.getPropertyValue('--d1-cropArea-sys-crop-left')).toBe('40%')
    })

    it('should expose get, set, and reset methods bound lazily to CropAreaPosition', () => {
      const { container, emits, exposed } = mountDesign({ value: [10, 10, 10, 10] })

      expect(exposed.get()).toEqual([10, 10, 10, 10])

      exposed.set([15, 20, 25, 30])
      expect(exposed.get()).toEqual([15, 20, 25, 30])
      expect(emits).toHaveBeenCalledWith('update:modelValue', [15, 20, 25, 30])

      const root = container.firstElementChild as HTMLElement
      expect(root.style.getPropertyValue('--d1-cropArea-sys-crop-top')).toBe('15%')

      exposed.reset()
      expect(exposed.get()).toEqual([10, 10, 10, 10])
      expect(root.style.getPropertyValue('--d1-cropArea-sys-crop-top')).toBe('10%')
    })

    it('should support injecting a custom CropArea orchestrator class', () => {
      class CustomCropArea extends CropArea {
        override get tag(): string {
          return 'aside'
        }
      }

      const { container } = mountDesign({}, {}, CustomCropArea)
      expect(container.firstElementChild?.tagName).toBe('ASIDE')
    })
  })
})
