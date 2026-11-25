import { describe, expect, it } from 'vitest'
import { reactive } from 'vue'

import { DropzoneEvents } from '../DropzoneEvents'
import type { DropzoneProps } from '../props'

describe('DropzoneEvents', () => {
  describe('Initial state and event bindings', () => {
    it('should initialize with enter set to false and expose drag event handlers', () => {
      const props = reactive<DropzoneProps>({})
      const events = new DropzoneEvents(props)

      expect(events.enter.value).toBe(false)

      const binds = events.binds
      expect(typeof binds.onDragenter).toBe('function')
      expect(typeof binds.onDragleave).toBe('function')
      expect(typeof binds.onDrop).toBe('function')
    })
  })

  describe('Drag-and-drop state transitions', () => {
    it('should toggle enter to true on dragenter and back to false on dragleave', () => {
      const props = reactive<DropzoneProps>({})
      const events = new DropzoneEvents(props)

      ;(events.binds.onDragenter as () => void)()
      expect(events.enter.value).toBe(true)

      ;(events.binds.onDragleave as () => void)()
      expect(events.enter.value).toBe(false)
    })

    it('should reset enter to false on drop after dragenter', () => {
      const props = reactive<DropzoneProps>({})
      const events = new DropzoneEvents(props)

      ;(events.binds.onDragenter as () => void)()
      expect(events.enter.value).toBe(true)

      ;(events.binds.onDrop as () => void)()
      expect(events.enter.value).toBe(false)
    })
  })

  describe('Disabled and readonly guards', () => {
    it('should ignore dragenter when disabled is true', () => {
      const props = reactive<DropzoneProps>({ disabled: true })
      const events = new DropzoneEvents(props)

      ;(events.binds.onDragenter as () => void)()
      expect(events.enter.value).toBe(false)
    })

    it('should ignore dragenter when readonly is true', () => {
      const props = reactive<DropzoneProps>({ readonly: true })
      const events = new DropzoneEvents(props)

      ;(events.binds.onDragenter as () => void)()
      expect(events.enter.value).toBe(false)
    })

    it('should still reset active enter state on dragleave or drop if disabled changes dynamically', () => {
      const props = reactive<DropzoneProps>({ disabled: false })
      const events = new DropzoneEvents(props)

      ;(events.binds.onDragenter as () => void)()
      expect(events.enter.value).toBe(true)

      props.disabled = true
      ;(events.binds.onDragleave as () => void)()
      expect(events.enter.value).toBe(false)

      props.disabled = false
      ;(events.binds.onDragenter as () => void)()
      expect(events.enter.value).toBe(true)

      props.readonly = true
      ;(events.binds.onDrop as () => void)()
      expect(events.enter.value).toBe(false)
    })
  })

  describe('Instance isolation', () => {
    it('should maintain independent enter state across multiple instances', () => {
      const first = new DropzoneEvents(reactive<DropzoneProps>({}))
      const second = new DropzoneEvents(reactive<DropzoneProps>({}))

      ;(first.binds.onDragenter as () => void)()

      expect(first.enter.value).toBe(true)
      expect(second.enter.value).toBe(false)
    })
  })
})
