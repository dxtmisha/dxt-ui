// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { effectScope, reactive, ref } from 'vue'
import { DesignName, type ConstrBind } from '@dxtmisha/functional'

import { TouchEventInclude } from '../../../classes/TouchEventInclude'
import { ActionsInclude } from '../../Actions'
import { WindowInclude, type WindowProps, type WindowPropsInclude } from '../../Window'
import type { TouchEventCallback, TouchEventClient } from '../../../types/touchEventTypes'

import { ActionSheet } from '../ActionSheet'
import type { ActionSheetProps } from '../props'

const createTouchEvent = (
  target: EventTarget | null,
  point?: { clientX: number, clientY: number }
): TouchEvent => ({
  targetTouches: point ? [point as unknown as Touch] : [],
  target
} as unknown as TouchEvent)

const flushMicrotasks = async (): Promise<void> => {
  await Promise.resolve()
  await Promise.resolve()
}

describe('ActionSheet (unit)', () => {
  afterEach(() => {
    document.body.innerHTML = ''
    vi.useRealTimers()
    vi.restoreAllMocks()
  })

  it('should configure extraWindow and extraActionsCallback non-destructively and preserve lazy ActionsInclude creation', () => {
    const scope = effectScope()
    const props = reactive<ActionSheetProps>({
      barsBackHide: true,
      touchClose: true,
      windowAttrs: {
        persistent: true
      }
    })
    const element = ref<HTMLElement | undefined>(document.createElement('div'))
    const naming = new DesignName('d1.actionSheet')

    let actionSheet: ActionSheet | undefined
    scope.run(() => {
      actionSheet = new ActionSheet(props, element, naming)
    })

    const windowBinds = actionSheet!.i('window').binds.value as Record<string, unknown>
    expect(windowBinds.adaptive).toBe('actionSheetRight')
    expect(windowBinds.closeButton).toBe(true)
    expect(windowBinds.closeMobileHide).toBe(true)
    expect(windowBinds.persistent).toBe(true)

    // Actions should remain lazy when no actions list is provided
    expect(actionSheet!.hasInstance('actions')).toBe(false)
    expect(actionSheet!.callInstance('actions', item => item.render(), [])).toEqual([])
    expect(actionSheet!.hasInstance('actions')).toBe(false)

    // Adding actionsList activates ActionsInclude with align: 'auto'
    props.actionsList = [{ label: 'Confirm', value: 'confirm' }]
    const actionsBinds = actionSheet!.callInstance('actions', item => item.binds.value) as Record<string, unknown>
    expect(actionSheet!.hasInstance('actions')).toBe(true)
    expect(actionsBinds.align).toBe('auto')

    scope.stop()
  })

  it('should omit undefined closeButton and closeMobileHide so windowAttrs values are not overwritten', () => {
    const scope = effectScope()
    const props = reactive<ActionSheetProps>({
      windowAttrs: {
        closeButton: false,
        closeMobileHide: false
      }
    })
    const element = ref<HTMLElement | undefined>(document.createElement('div'))
    const naming = new DesignName('d1.actionSheet')

    let actionSheet: ActionSheet | undefined
    scope.run(() => {
      actionSheet = new ActionSheet(props, element, naming)
    })

    const windowBinds = actionSheet!.i('window').binds.value as Record<string, unknown>
    expect(windowBinds.adaptive).toBe('actionSheetRight')
    expect(windowBinds.closeButton).toBe(false)
    expect(windowBinds.closeMobileHide).toBe(false)

    scope.stop()
  })

  it('should lazily skip TouchEventInclude instantiation when touchClose is false and instantiate on demand when true', () => {
    const scope = effectScope()
    const touchSpy = vi.fn()

    class CustomTouchEventInclude extends TouchEventInclude {
      constructor(
        start?: (mouse: TouchEventClient, touche?: Touch) => void,
        move?: TouchEventCallback,
        end?: TouchEventCallback,
        elementRef?: typeof element
      ) {
        touchSpy()
        super(start, move, end, elementRef)
      }
    }

    const props = reactive<ActionSheetProps>({ touchClose: false })
    const element = ref<HTMLElement | undefined>(document.createElement('div'))
    const naming = new DesignName('d1.actionSheet')

    let actionSheet: ActionSheet | undefined
    scope.run(() => {
      actionSheet = new ActionSheet(
        props,
        element,
        naming,
        undefined,
        undefined,
        undefined,
        { touchEvent: CustomTouchEventInclude }
      )
    })

    expect(actionSheet!.touchBinds).toEqual({})
    expect(touchSpy).not.toHaveBeenCalled()

    props.touchClose = true
    const touchBinds = actionSheet!.touchBinds
    expect(touchSpy).toHaveBeenCalledTimes(1)
    expect(typeof touchBinds.onTouchstart).toBe('function')
    expect(typeof touchBinds.onTouchmove).toBe('function')
    expect(typeof touchBinds.onTouchend).toBe('function')
    expect(typeof touchBinds.onTouchcancel).toBe('function')

    // Subsequent accesses reuse the same lazy TouchEventInclude instance
    expect(actionSheet!.touchBinds).toBe(touchBinds)
    expect(touchSpy).toHaveBeenCalledTimes(1)

    scope.stop()
  })

  it('should track downward swipe movement, reject upward swipe, and close the window on bottom swipe end', async () => {
    vi.useFakeTimers()
    const scope = effectScope()
    const setOpenMock = vi.fn().mockResolvedValue(undefined)

    class CustomWindowInclude<
      Props extends WindowPropsInclude = WindowPropsInclude,
      PropsExtra extends WindowProps = WindowProps
    > extends WindowInclude<Props, PropsExtra> {
      override get expose() {
        return {
          ...super.expose,
          setOpen: setOpenMock
        }
      }
    }

    class CustomActionsInclude extends ActionsInclude {}

    const sheetElement = document.createElement('div')
    sheetElement.setAttribute('data-touch', 'touch')
    document.body.appendChild(sheetElement)

    const props = reactive<ActionSheetProps>({ touchClose: true })
    const element = ref<HTMLElement | undefined>(sheetElement)
    const naming = new DesignName('d1.actionSheet')

    let actionSheet: ActionSheet | undefined
    scope.run(() => {
      actionSheet = new ActionSheet(
        props,
        element,
        naming,
        undefined,
        undefined,
        undefined,
        {
          actions: CustomActionsInclude,
          window: CustomWindowInclude
        }
      )
    })

    const binds = actionSheet!.touchBinds as ConstrBind & {
      onTouchstart: (event: TouchEvent) => void
      onTouchmove: (event: TouchEvent) => void
      onTouchend: (event: TouchEvent) => void
    }

    // Upward swipe (clientY < 0) should not set move CSS variables or close
    binds.onTouchstart(createTouchEvent(sheetElement, { clientX: 50, clientY: 200 }))
    binds.onTouchmove(createTouchEvent(sheetElement, { clientX: 50, clientY: 100 }))
    await flushMicrotasks()
    expect(sheetElement.style.getPropertyValue('--sys-touch-move-y')).toBe('')

    binds.onTouchend(createTouchEvent(sheetElement))
    await flushMicrotasks()
    expect(setOpenMock).not.toHaveBeenCalled()

    // Downward swipe >= 80px should update --sys-touch-move-y and close window on end
    binds.onTouchstart(createTouchEvent(sheetElement, { clientX: 50, clientY: 100 }))
    binds.onTouchmove(createTouchEvent(sheetElement, { clientX: 50, clientY: 210 }))
    await flushMicrotasks()
    expect(sheetElement.style.getPropertyValue('--sys-touch-move-y')).toBe('110px')

    binds.onTouchend(createTouchEvent(sheetElement))
    await flushMicrotasks()
    expect(setOpenMock).toHaveBeenCalledWith(false)

    vi.advanceTimersByTime(400)
    expect(sheetElement.style.getPropertyValue('--sys-touch-move-y')).toBe('')

    scope.stop()
  })
})
