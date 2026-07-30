import { type Ref, ref, type ToRefs } from 'vue'
import {
  type ConstrEmit,
  type DesignComp
} from '@dxtmisha/functional'

import type { MotionFlipCallback } from './basicTypes'
import type { MotionFlipProps } from './props'
import type {
  MotionFlipComponents,
  MotionFlipEmits,
  MotionFlipSlots
} from './types'

type ElementSizeRect = {
  top: number
  left: number
  width: number
  height: number
}

/**
 * MotionFlip
 */
export class MotionFlip {
  readonly isFreeze = ref(false)
  readonly isGo = ref(false)

  protected isTransitioning = false

  /**
   * Constructor
   * @param props input data / входные данные
   * @param refs input data in the form of reactive elements / входные данные в виде реактивных элементов
   * @param element input element / элемент ввода
   * @param classDesign design name / название дизайна
   * @param className class name / название класса
   * @param components object for working with components / объект для работы с компонентами
   * @param slots object for working with slots / объект для работы со слотами
   * @param emits the function is called when an event is triggered / функция вызывается, когда срабатывает событие
   */
  constructor(
    protected readonly props: MotionFlipProps,
    protected readonly refs: ToRefs<MotionFlipProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<MotionFlipComponents, MotionFlipProps>,
    protected readonly slots?: MotionFlipSlots,
    protected readonly emits?: ConstrEmit<MotionFlipEmits>
  ) {}

  /**
   * FLIP update animation handler.
   * @param callback function performing DOM updates
   */
  readonly update = async (callback: MotionFlipCallback): Promise<void> => {
    if (this.props.disabled || !this.element.value) {
      await callback()
      return
    }

    const children = Array.from(this.element.value.children) as HTMLElement[]
    const originalSizes = new Map<HTMLElement, ElementSizeRect>()

    children.forEach((childElement) => {
      const rectangle = childElement.getBoundingClientRect()
      originalSizes.set(childElement, {
        top: rectangle.top,
        left: rectangle.left,
        width: rectangle.width,
        height: rectangle.height
      })
    })

    await callback()

    requestAnimationFrame(() => {
      if (!this.element.value) return

      const updatedChildren = Array.from(this.element.value.children) as HTMLElement[]

      updatedChildren.forEach((childElement) => {
        const original = originalSizes.get(childElement)
        if (original) {
          const currentRectangle = childElement.getBoundingClientRect()

          childElement.style.setProperty('--mc-top', `${original.top - currentRectangle.top}px`)
          childElement.style.setProperty('--mc-left', `${original.left - currentRectangle.left}px`)
          childElement.style.setProperty('--mc-width', `${currentRectangle.width}px`)
          childElement.style.setProperty('--mc-width-to', `${original.width}px`)
          childElement.style.setProperty('--mc-height', `${currentRectangle.height}px`)
          childElement.style.setProperty('--mc-height-to', `${original.height}px`)

          childElement.classList.add(`${this.className}__item`)
        }
      })

      this.isFreeze.value = true

      requestAnimationFrame(() => {
        this.isGo.value = true
      })
    })
  }

  /**
   * Handle transition end event to clear animation state.
   * @param event transition event
   */
  readonly onTransition = (event: TransitionEvent): void => {
    const targetElement = event.target as HTMLElement | null
    const parentElement = targetElement?.parentElement

    if (
      event.propertyName === 'transform' &&
      parentElement?.classList.contains(`${this.className}__item`)
    ) {
      parentElement.classList.remove(`${this.className}__item`)

      if (!this.isTransitioning) {
        this.isTransitioning = true
        requestAnimationFrame(() => {
          this.isFreeze.value = false
          this.isGo.value = false
          this.isTransitioning = false
        })
      }
    }
  }
}
