// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { DesignName } from '@dxtmisha/functional'
import { DraggableWrapperClient } from '../DraggableWrapperClient'

describe('DraggableWrapperClient', () => {
  const naming = new DesignName('my.draggable')

  const createMockClasses = (element?: HTMLElement, rect?: Partial<DOMRect>) => ({
    getElement: () => element,
    getRect: () => (rect ? (rect as DOMRect) : undefined)
  } as any)

  describe('Standard functional requirements (Happy path)', () => {
    it('should initialize and manage drop status', () => {
      const client = new DraggableWrapperClient(naming, () => createMockClasses())
      expect(client.hasDrop()).toBe(false)

      const result = client.setDrop(true)
      expect(result).toBe(client)
      expect(client.hasDrop()).toBe(true)

      client.setDrop(false)
      expect(client.hasDrop()).toBe(false)
    })

    it('should store coordinates and offsets with method chaining', () => {
      const client = new DraggableWrapperClient(naming, () => createMockClasses())

      expect(client.set(10, 20)).toBe(client)
      expect(client.setX(30)).toBe(client)
      expect(client.setY(40)).toBe(client)
      expect(client.setClient(50, 60)).toBe(client)
    })

    it('should prepare client offsets and apply style variables on prepare()', () => {
      const wrapperEl = document.createElement('div')
      const classes = createMockClasses(wrapperEl, { left: 10, top: 20 })
      const client = new DraggableWrapperClient(naming, () => classes)

      const itemEl = document.createElement('div')
      itemEl.getBoundingClientRect = () => ({
        left: 30,
        top: 40,
        width: 100,
        height: 100
      } as DOMRect)

      client.prepare(itemEl, { x: 50, y: 70 })

      // Offset: x = 50 - 30 = 20, y = 70 - 40 = 30
      // Wrapper style: clientX - rect.left = 50 - 10 = 40px, 70 - 20 = 50px
      expect(wrapperEl.style.getPropertyValue('--my-draggable-sys-client-x')).toBe('40px')
      expect(wrapperEl.style.getPropertyValue('--my-draggable-sys-client-y')).toBe('50px')
    })

    it('should update client coordinates and element styles on move()', () => {
      const wrapperEl = document.createElement('div')
      const classes = createMockClasses(wrapperEl, { left: 0, top: 0 })
      const client = new DraggableWrapperClient(naming, () => classes)

      client.set(10, 10)
      client.move({ x: 100, y: 150 })

      expect(wrapperEl.style.getPropertyValue('--my-draggable-sys-client-x')).toBe('100px')
      expect(wrapperEl.style.getPropertyValue('--my-draggable-sys-client-y')).toBe('150px')
    })

    it('should update element styles directly on update(x, y) subtracting drag offset', () => {
      const wrapperEl = document.createElement('div')
      const classes = createMockClasses(wrapperEl, { left: 0, top: 0 })
      const client = new DraggableWrapperClient(naming, () => classes)

      client.set(20, 30)
      client.update(100, 200)

      expect(wrapperEl.style.getPropertyValue('--my-draggable-sys-client-x')).toBe('80px')
      expect(wrapperEl.style.getPropertyValue('--my-draggable-sys-client-y')).toBe('170px')
    })

    it('should clean up all custom properties and reset state on reset()', () => {
      const wrapperEl = document.createElement('div')
      const classes = createMockClasses(wrapperEl, { left: 0, top: 0 })
      const client = new DraggableWrapperClient(naming, () => classes)

      client.set(10, 10)
      client.setDrop(true)
      client.move({ x: 50, y: 50 })
      expect(wrapperEl.style.getPropertyValue('--my-draggable-sys-client-x')).toBe('50px')

      client.reset()
      expect(client.hasDrop()).toBe(false)
      expect(wrapperEl.style.getPropertyValue('--my-draggable-sys-client-x')).toBe('')
      expect(wrapperEl.style.getPropertyValue('--my-draggable-sys-client-y')).toBe('')
    })
  })

  describe('Boundary values and edge cases', () => {
    it('should safely handle move() when element or rect is undefined', () => {
      const clientWithoutEl = new DraggableWrapperClient(naming, () => createMockClasses(undefined, undefined))
      expect(() => clientWithoutEl.move({ x: 10, y: 20 })).not.toThrow()

      const wrapperEl = document.createElement('div')
      const clientWithoutRect = new DraggableWrapperClient(naming, () => createMockClasses(wrapperEl, undefined))
      expect(() => clientWithoutRect.move({ x: 10, y: 20 })).not.toThrow()
    })

    it('should safely handle update() when element is undefined', () => {
      const client = new DraggableWrapperClient(naming, () => createMockClasses(undefined, undefined))
      expect(() => client.update(10, 20)).not.toThrow()
    })

    it('should handle zero and negative coordinates correctly', () => {
      const wrapperEl = document.createElement('div')
      const classes = createMockClasses(wrapperEl, { left: 10, top: 10 })
      const client = new DraggableWrapperClient(naming, () => classes)

      client.set(0, 0)
      client.move({ x: 0, y: 0 })
      expect(wrapperEl.style.getPropertyValue('--my-draggable-sys-client-x')).toBe('-10px')
      expect(wrapperEl.style.getPropertyValue('--my-draggable-sys-client-y')).toBe('-10px')
    })
  })

  describe('Statefulness and instance isolation', () => {
    it('should isolate states between different client instances', () => {
      const client1 = new DraggableWrapperClient(naming, () => createMockClasses())
      const client2 = new DraggableWrapperClient(naming, () => createMockClasses())

      client1.setDrop(true)
      expect(client1.hasDrop()).toBe(true)
      expect(client2.hasDrop()).toBe(false)
    })
  })
})
