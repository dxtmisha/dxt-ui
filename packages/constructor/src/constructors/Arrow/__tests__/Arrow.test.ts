// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import {
  computed,
  createApp,
  defineComponent,
  nextTick,
  reactive,
  type Ref
} from 'vue'
import { inArray, type ConstrClasses, type ConstrStyles } from '@dxtmisha/functional'

import { ArrowDesign } from '../ArrowDesign'
import { defaultsArrow, type ArrowProps } from '../props'
import type {
  ArrowClasses,
  ArrowComponents,
  ArrowExpose
} from '../types'

/** Active DOM and app cleanup callbacks / Колбэки очистки DOM и приложений */
const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(cleanup => cleanup())
  vi.restoreAllMocks()
})

/**
 * Mounts full ArrowDesign component inside a parent element with optional target element and attrs.
 *
 * Монтирует полный компонент ArrowDesign внутри родительского элемента с опциональным целевым элементом и атрибутами.
 */
function mountArrowComponent(options: {
  attrs?: Record<string, unknown>
  initialProps?: ArrowProps
  parentStyles?: Partial<CSSStyleDeclaration>
} = {}) {
  const parentElement = document.createElement('div')
  document.body.appendChild(parentElement)
  cleanups.push(() => parentElement.remove())

  const props = reactive<ArrowProps>({
    ...(defaultsArrow as ArrowProps),
    ...options.initialProps
  })

  let exposed!: ArrowExpose & { elementHtml: Ref<HTMLDivElement | undefined> }

  const ArrowComponent = defineComponent({
    inheritAttrs: false,
    setup() {
      const classesToken = computed<ConstrClasses>(() => ({
        main: {
          'd1-arrow': true,
          [`d1-arrow--position--${props.position}`]: inArray(
            ['auto', 'top', 'bottom', 'left', 'right'],
            props.position
          )
        }
      }))
      const stylesToken = computed<ConstrStyles>(() => ({}))

      const design = new ArrowDesign<
        ArrowComponents,
        ArrowExpose,
        ArrowClasses,
        ArrowProps
      >(
        'd1.arrow',
        props,
        {
          classes: classesToken,
          styles: stylesToken
        }
      )

      exposed = design.expose() as ArrowExpose & { elementHtml: Ref<HTMLDivElement | undefined> }

      return design.render()
    }
  })

  const app = createApp(ArrowComponent, options.attrs)
  app.mount(parentElement)
  cleanups.push(() => app.unmount())

  return {
    app,
    exposed,
    parentElement,
    props
  }
}

/**
 * Flushes microtasks and a single animation frame.
 *
 * Выполняет микрозадачи и один кадр анимации.
 */
async function flushFrame(): Promise<void> {
  await nextTick()
  await new Promise(resolve => requestAnimationFrame(resolve))
  await nextTick()
}

describe('Arrow (Integration)', () => {
  describe('Full component DOM rendering & lifecycle', () => {
    it('should render arrow SVG, bind aria-hidden, merge external attrs, and update points after mount', async () => {
      vi.spyOn(window, 'getComputedStyle').mockImplementation((targetElement: Element) => {
        if (targetElement.classList.contains('d1-arrow')) {
          return {
            getPropertyValue: (propertyName: string) => {
              if (propertyName === '--d1-arrow-arrowWidth') return '16px'
              if (propertyName === '--d1-arrow-arrowHeight') return '8px'
              return ''
            }
          } as unknown as CSSStyleDeclaration
        }

        return {
          backgroundColor: 'rgb(255, 255, 255)',
          borderWidth: '0px',
          borderColor: 'transparent',
          borderRadius: '0px',
          getPropertyValue: () => ''
        } as unknown as CSSStyleDeclaration
      })

      const { exposed, parentElement, props } = mountArrowComponent({
        attrs: {
          'class': 'custom-arrow',
          'data-testid': 'arrow-root',
          'style': '--custom-var: 1;'
        },
        initialProps: {
          position: 'top'
        }
      })

      await flushFrame()
      await flushFrame()

      const rootElement = parentElement.querySelector<HTMLDivElement>('.d1-arrow')
      expect(rootElement).not.toBeNull()
      expect(exposed.elementHtml.value).toBe(rootElement)
      expect(rootElement?.getAttribute('aria-hidden')).toBe('true')
      expect(rootElement?.getAttribute('data-testid')).toBe('arrow-root')
      expect(rootElement?.classList.contains('custom-arrow')).toBe(true)
      expect(rootElement?.classList.contains('d1-arrow--position--top')).toBe(true)
      expect(rootElement?.classList.contains('d1-arrow--direction--top')).toBe(true)
      expect(rootElement?.style.getPropertyValue('--custom-var')).toBe('1')
      expect(rootElement?.style.getPropertyValue('--d1-arrow-sys-background')).toBe('rgb(255, 255, 255)')

      const svg = rootElement?.querySelector('svg.d1-arrow__arrowArea')
      const polygon = rootElement?.querySelector('polygon.d1-arrow__arrow')
      const polyline = rootElement?.querySelector('polyline.d1-arrow__arrowLine')
      expect(svg).not.toBeNull()
      expect(polygon?.getAttribute('points')).toBe('0, 8 8, 0 16, 8')
      expect(polyline?.getAttribute('points')).toBe('0, 8 8, 0 16, 8')
      expect(rootElement?.querySelector('.d1-arrow__border')).toBeNull()

      props.position = 'bottom'
      await flushFrame()
      await flushFrame()

      expect(rootElement?.classList.contains('d1-arrow--direction--bottom')).toBe(true)
      expect(polygon?.getAttribute('points')).toBe('0, 0 8, 8 16, 0')
    })

    it('should coordinate parent border styles, border element, and clean up parent DOM state on unmount', async () => {
      const targetParent = { element: undefined as HTMLElement | undefined }

      vi.spyOn(window, 'getComputedStyle').mockImplementation((targetElement: Element) => {
        if (targetElement === targetParent.element) {
          return {
            backgroundColor: 'rgb(240, 240, 240)',
            borderWidth: '2px',
            borderColor: 'rgb(10, 20, 30)',
            borderRadius: '6px',
            getPropertyValue: () => ''
          } as unknown as CSSStyleDeclaration
        }

        return {
          getPropertyValue: (propertyName: string) => {
            if (propertyName === '--d1-arrow-arrowWidth') return '12px'
            if (propertyName === '--d1-arrow-arrowHeight') return '6px'
            return ''
          }
        } as unknown as CSSStyleDeclaration
      })

      const { app, parentElement } = mountArrowComponent({
        initialProps: {
          position: 'left'
        }
      })
      targetParent.element = parentElement

      await flushFrame()
      await flushFrame()

      const rootElement = parentElement.querySelector<HTMLDivElement>('.d1-arrow')
      const borderElement = rootElement?.querySelector<HTMLDivElement>('.d1-arrow__border')
      expect(borderElement).not.toBeNull()
      expect(parentElement.classList.contains('d1-arrow__parent')).toBe(true)
      expect(parentElement.dataset.arrow).toBe('border')
      expect(parentElement.style.getPropertyValue('--d1-arrow-sys-height')).toBe('6')
      expect(rootElement?.style.getPropertyValue('--d1-arrow-sys-borderWidth')).toBe('2px')
      expect(rootElement?.style.getPropertyValue('--d1-arrow-sys-borderColor')).toBe('rgb(10, 20, 30)')
      expect(rootElement?.style.getPropertyValue('--d1-arrow-sys-borderRadius')).toBe('6px')

      app.unmount()

      expect(parentElement.classList.contains('d1-arrow__parent')).toBe(false)
      expect(parentElement.dataset.arrow).toBeUndefined()
      expect(parentElement.style.getPropertyValue('--d1-arrow-sys-height')).toBe('')
    })

    it('should compute auto direction and shift relative to target element and support exposed update()', async () => {
      const targetElement = document.createElement('button')
      targetElement.id = 'arrow-target'
      document.body.appendChild(targetElement)
      cleanups.push(() => targetElement.remove())

      targetElement.getBoundingClientRect = () => ({
        top: 50,
        bottom: 80,
        left: 120,
        right: 180,
        width: 60,
        height: 30,
        x: 120,
        y: 50,
        toJSON: () => ({})
      })

      vi.spyOn(window, 'getComputedStyle').mockImplementation((elementTarget: Element) => {
        if (elementTarget.classList.contains('d1-arrow')) {
          return {
            getPropertyValue: (propertyName: string) => {
              if (propertyName === '--d1-arrow-arrowWidth') return '10px'
              if (propertyName === '--d1-arrow-arrowHeight') return '5px'
              return ''
            }
          } as unknown as CSSStyleDeclaration
        }

        return {
          backgroundColor: 'rgb(255, 255, 255)',
          borderWidth: '0px',
          borderColor: 'transparent',
          borderRadius: '4px',
          getPropertyValue: () => ''
        } as unknown as CSSStyleDeclaration
      })

      const { exposed, parentElement, props } = mountArrowComponent({
        initialProps: {
          position: 'auto',
          elementTarget: '#arrow-target'
        }
      })

      await nextTick()
      const rootElement = parentElement.querySelector<HTMLDivElement>('.d1-arrow')!
      rootElement.getBoundingClientRect = () => ({
        top: 80,
        bottom: 120,
        left: 100,
        right: 220,
        width: 120,
        height: 40,
        x: 100,
        y: 80,
        toJSON: () => ({})
      })

      await flushFrame()
      await flushFrame()

      expect(rootElement.classList.contains('d1-arrow--direction--top')).toBe(true)
      expect(rootElement.style.getPropertyValue('--d1-arrow-sys-shift')).toBe('50px')

      targetElement.getBoundingClientRect = () => ({
        top: 120,
        bottom: 150,
        left: 120,
        right: 180,
        width: 60,
        height: 30,
        x: 120,
        y: 120,
        toJSON: () => ({})
      })
      exposed.update()
      await flushFrame()

      expect(rootElement.classList.contains('d1-arrow--direction--bottom')).toBe(true)

      props.position = undefined
      await flushFrame()
      expect(rootElement.classList.contains('d1-arrow--direction--hide')).toBe(true)
    })
  })
})
