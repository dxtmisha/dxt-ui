// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { createApp, nextTick, type App } from 'vue'
import { EnabledInclude } from '../../../classes/EnabledInclude'
import { EventClickInclude } from '../../../classes/EventClickInclude'
import { ModelValueInclude } from '../../../classes/ModelValueInclude'
import { ClockPeriodEvent } from '../ClockPeriodEvent'
import { ClockPeriodValue } from '../ClockPeriodValue'
import type { ClockPeriodProps } from '../props'
import { ClockPeriodType } from '../basicTypes'

/** Mounted test applications / Смонтированные тестовые приложения */
const applications: App[] = []

/**
 * Initializes a model inside Vue setup and tracks its owner for cleanup.
 *
 * Инициализирует модель внутри Vue setup и регистрирует владельца для очистки.
 * @param factory model factory / фабрика модели
 * @returns initialized model / инициализированная модель
 */
function mountModel(factory: () => ModelValueInclude<ClockPeriodType>): ModelValueInclude<ClockPeriodType> {
  let model: ModelValueInclude<ClockPeriodType> | undefined
  const application = createApp({
    setup() {
      model = factory()
      return () => null
    }
  })
  applications.push(application)
  application.mount(document.createElement('div'))

  if (!model) throw new Error('The model was not initialized during setup')
  return model
}

afterEach(() => applications.splice(0).forEach(application => application.unmount()))

describe('ClockPeriodEvent', () => {
  it('selects new period on click and emits events', async () => {
    const emitsSpy = vi.fn()
    const props: ClockPeriodProps = { value: ClockPeriodType.am }
    const enabled = new EnabledInclude(props)
    const eventClick = new EventClickInclude(undefined, () => enabled, emitsSpy)
    const value = new ClockPeriodValue(props)
    const model = mountModel(() => new ModelValueInclude<ClockPeriodType>('value', emitsSpy, eventClick, value.value))
    const eventManager = new ClockPeriodEvent(enabled, value, eventClick)

    const targetElement = document.createElement('button')
    targetElement.dataset.value = ClockPeriodType.pm

    const mouseEvent = {
      target: targetElement,
      stopPropagation: vi.fn()
    } as unknown as MouseEvent
    eventManager.onClick(mouseEvent)
    await nextTick()

    expect(mouseEvent.stopPropagation).toHaveBeenCalled()
    expect(model.get()).toBe(ClockPeriodType.pm)
    expect(value.get()).toBe(ClockPeriodType.pm)
    expect(emitsSpy).toHaveBeenCalledWith('click', mouseEvent, {
      type: 'item',
      value: ClockPeriodType.pm,
      detail: undefined
    })
    expect(emitsSpy).toHaveBeenCalledWith('clickLite', {
      type: 'item',
      value: ClockPeriodType.pm,
      detail: undefined
    })
  })

  it('ignores click if already selected', () => {
    const emitsSpy = vi.fn()
    const props: ClockPeriodProps = { value: ClockPeriodType.am }
    const enabled = new EnabledInclude(props)
    const eventClick = new EventClickInclude(undefined, () => enabled, emitsSpy)
    const value = new ClockPeriodValue(props)
    const eventManager = new ClockPeriodEvent(enabled, value, eventClick)

    const targetElement = document.createElement('button')
    targetElement.dataset.value = ClockPeriodType.am

    const mouseEvent = {
      target: targetElement,
      stopPropagation: vi.fn()
    } as unknown as MouseEvent
    eventManager.onClick(mouseEvent)

    expect(emitsSpy).not.toHaveBeenCalled()
  })

  it('ignores click when data-value is missing or invalid', () => {
    const emitsSpy = vi.fn()
    const props: ClockPeriodProps = { value: ClockPeriodType.am }
    const enabled = new EnabledInclude(props)
    const eventClick = new EventClickInclude(undefined, () => enabled, emitsSpy)
    const value = new ClockPeriodValue(props)
    const eventManager = new ClockPeriodEvent(enabled, value, eventClick)

    const targetElement = document.createElement('button')
    targetElement.dataset.value = 'invalid'

    const mouseEvent = {
      target: targetElement,
      stopPropagation: vi.fn()
    } as unknown as MouseEvent

    eventManager.onClick(mouseEvent)

    expect(mouseEvent.stopPropagation).toHaveBeenCalled()
    expect(emitsSpy).not.toHaveBeenCalled()
  })

  it('handles keyboard navigation with arrow keys and space/enter', async () => {
    const emitsSpy = vi.fn()
    const props: ClockPeriodProps = { value: ClockPeriodType.am }
    const enabled = new EnabledInclude(props)
    const eventClick = new EventClickInclude(undefined, () => enabled, emitsSpy)
    const value = new ClockPeriodValue(props)
    const model = mountModel(() => new ModelValueInclude<ClockPeriodType>('value', emitsSpy, eventClick, value.value))
    const eventManager = new ClockPeriodEvent(enabled, value, eventClick)

    const preventDefaultSpy = vi.fn()

    // ArrowDown switches to PM
    eventManager.onKeydown({ key: 'ArrowDown', preventDefault: preventDefaultSpy } as unknown as KeyboardEvent)
    await nextTick()
    expect(preventDefaultSpy).toHaveBeenCalled()
    expect(model.get()).toBe(ClockPeriodType.pm)
    expect(value.get()).toBe(ClockPeriodType.pm)

    // ArrowUp switches to AM
    eventManager.onKeydown({ key: 'ArrowUp', preventDefault: preventDefaultSpy } as unknown as KeyboardEvent)
    await nextTick()
    expect(model.get()).toBe(ClockPeriodType.am)
    expect(value.get()).toBe(ClockPeriodType.am)

    // Space toggles
    eventManager.onKeydown({ key: ' ', preventDefault: preventDefaultSpy } as unknown as KeyboardEvent)
    await nextTick()
    expect(model.get()).toBe(ClockPeriodType.pm)
    expect(value.get()).toBe(ClockPeriodType.pm)
  })
})
