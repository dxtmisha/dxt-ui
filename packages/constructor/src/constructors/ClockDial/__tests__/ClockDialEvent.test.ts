// @vitest-environment jsdom
import { describe, expect, it, vi } from 'vitest'
import { ref } from 'vue'
import { EnabledInclude } from '../../../classes/EnabledInclude'
import { ModelValueInclude } from '../../../classes/ModelValueInclude'
import { ClockDialEmit } from '../ClockDialEmit'
import { ClockDialEvent } from '../ClockDialEvent'
import { ClockDialList } from '../ClockDialList'
import { ClockDialSelect } from '../ClockDialSelect'
import type { ClockDialProps } from '../props'

describe('ClockDialEvent', () => {
  function createClockDialEvent(props: ClockDialProps = { type: '12' }) {
    const emitsSpy = vi.fn()
    const enabled = new EnabledInclude(props)
    const list = new ClockDialList(props, 'd-clock-dial')
    const model = new ModelValueInclude<number>('value', emitsSpy, undefined, ref(2))
    const select = new ClockDialSelect(props, list, model, enabled)
    const emitsItem = new ClockDialEmit(props, list, model, emitsSpy as any)
    const eventManager = new ClockDialEvent(props, emitsItem, enabled, model, select)

    return { eventManager, model, select, emitsSpy, enabled }
  }

  it('updates value and emits events on onClick with valid data-value', () => {
    const { eventManager, model, emitsSpy } = createClockDialEvent()
    const element = document.createElement('span')
    element.dataset.value = '7'

    const event = {
      target: element
    } as unknown as MouseEvent

    eventManager.onClick(event)

    expect(model.getValue()).toBe(7)
    expect(emitsSpy).toHaveBeenCalledWith('input', expect.anything(), 7)
    expect(emitsSpy).toHaveBeenCalledWith('change', expect.anything(), 7)
  })

  it('does nothing on onClick when disabled or missing data-value', () => {
    const { eventManager, model, emitsSpy } = createClockDialEvent({ type: '12', disabled: true })
    const element = document.createElement('span')
    element.dataset.value = '7'

    eventManager.onClick({ target: element } as unknown as MouseEvent)
    expect(model.getValue()).toBe(2)
    expect(emitsSpy).not.toHaveBeenCalled()
  })

  it('handles onStart drag interaction and tracks pointer movement', () => {
    const { eventManager, select, emitsSpy } = createClockDialEvent()
    const selectedItem = { name: '5', rotate: '150deg', section: false, style: {}, value: 5 }

    vi.spyOn(select, 'selectByCoordinates').mockReturnValue(selectedItem as any)

    const preventDefault = vi.fn()
    const startEvent = {
      button: 0,
      clientX: 100,
      clientY: 100,
      preventDefault
    } as unknown as MouseEvent

    eventManager.onStart(startEvent)

    expect(preventDefault).toHaveBeenCalled()
    expect(select.selectByCoordinates).toHaveBeenCalledWith(100, 100)
    expect(emitsSpy).toHaveBeenCalledWith('input', expect.anything(), 2)

    // Trigger window mousemove listener via dispatched event
    const moveEvent = new MouseEvent('mousemove', { clientX: 120, clientY: 120 })
    window.dispatchEvent(moveEvent)

    // Trigger window mouseup to finish drag and emit change
    const upEvent = new MouseEvent('mouseup')
    window.dispatchEvent(upEvent)

    expect(emitsSpy).toHaveBeenCalledWith('change', expect.anything(), 2)
  })

  it('ignores onStart when button is not primary mouse button', () => {
    const { eventManager, select } = createClockDialEvent()
    const selectSpy = vi.spyOn(select, 'selectByCoordinates')

    const startEvent = {
      button: 2,
      clientX: 100,
      clientY: 100,
      preventDefault: vi.fn()
    } as unknown as MouseEvent

    eventManager.onStart(startEvent)
    expect(selectSpy).not.toHaveBeenCalled()
  })
})
