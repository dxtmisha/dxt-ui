// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import * as functionalBasic from '@dxtmisha/functional-basic'
import { DraggableWrapperPosition } from '../DraggableWrapperPosition'

describe('DraggableWrapperPosition', () => {
  const createMockClasses = (options: {
    findItem?: HTMLElement
    wrapper?: HTMLElement
    isDrop?: boolean
    isPosition?: boolean
    isReturn?: boolean
  } = {}) => ({
    findItemByPoints: vi.fn(() => options.findItem),
    getElement: vi.fn(() => options.wrapper),
    isDrop: vi.fn((el: HTMLElement) => options.isDrop ?? el.classList.contains('is-drop')),
    isPosition: vi.fn((el: HTMLElement) => options.isPosition ?? el.classList.contains('is-pos')),
    isReturn: vi.fn((el: HTMLElement) => options.isReturn ?? el.classList.contains('is-ret')),
    getList: () => ({
      active: 'item-active',
      selection: 'item-sel',
      selectionMore: 'item-sel-more',
      return: 'item-ret',
      dropActive: 'drop-active'
    })
  } as any)

  const createMockItem = () => {
    let activeEl: HTMLElement | undefined
    let goEl: HTMLElement | undefined
    const itemsList: HTMLElement[] = []

    return {
      getActive: () => ({
        is: () => Boolean(activeEl),
        get: () => activeEl,
        set: (el?: HTMLElement) => { activeEl = el }
      }),
      getGo: () => ({
        is: () => Boolean(goEl),
        get: () => goEl,
        set: (el?: HTMLElement) => { goEl = el },
        reset: () => { goEl = undefined },
        isByItem: (el: HTMLElement) => el !== goEl
      }),
      get: () => (activeEl ? [activeEl, ...itemsList] : itemsList),
      reset: vi.fn(() => {
        activeEl = undefined
        goEl = undefined
      })
    } as any
  }

  const createMockClient = () => {
    let hasDropState = false

    return {
      hasDrop: vi.fn(() => hasDropState),
      setDrop: vi.fn((val: boolean) => { hasDropState = val }),
      set: vi.fn().mockReturnThis(),
      update: vi.fn(),
      reset: vi.fn(() => { hasDropState = false })
    } as any
  }

  const createMockEmit = () => ({
    on: vi.fn()
  } as any)

  const createMockSquare = (squareEl?: HTMLElement) => ({
    getElement: () => squareEl,
    prepare: vi.fn()
  } as any)

  describe('Standard functional requirements (Happy path)', () => {
    it('should update drop target when hovered over drop element', () => {
      const dropEl = document.createElement('div')
      dropEl.classList.add('is-drop')

      const mockClasses = createMockClasses({ findItem: dropEl })
      const mockItem = createMockItem()
      const mockClient = createMockClient()
      const mockSquare = createMockSquare()
      const mockEmit = createMockEmit()

      const position = new DraggableWrapperPosition(
        () => mockClasses,
        () => mockClient,
        () => mockEmit,
        () => mockItem,
        () => mockSquare
      )

      position.update({ x: 50, y: 50 })

      expect(dropEl.classList.contains('drop-active')).toBe(true)
      expect(mockItem.getGo().get()).toBe(dropEl)
      expect(mockClient.setDrop).toHaveBeenCalledWith(true)
    })

    it('should update position target when hovered over sortable position element', () => {
      const posEl = document.createElement('div')
      posEl.classList.add('is-pos')

      const mockClasses = createMockClasses({ findItem: posEl })
      const mockItem = createMockItem()
      const mockClient = createMockClient()
      const mockSquare = createMockSquare()
      const mockEmit = createMockEmit()

      const position = new DraggableWrapperPosition(
        () => mockClasses,
        () => mockClient,
        () => mockEmit,
        () => mockItem,
        () => mockSquare
      )

      position.update({ x: 50, y: 50 })

      expect(mockSquare.prepare).toHaveBeenCalledWith(posEl)
      expect(mockItem.getGo().get()).toBe(posEl)
    })

    it('should reset position when cursor moves outside the wrapper', () => {
      const wrapperEl = document.createElement('div')
      const mockClasses = createMockClasses({ findItem: undefined, wrapper: wrapperEl })
      const mockItem = createMockItem()
      const mockSquare = createMockSquare()

      const spy = vi.spyOn(functionalBasic, 'domElementsFromPoint').mockReturnValue([])

      const position = new DraggableWrapperPosition(
        () => mockClasses,
        () => createMockClient(),
        () => createMockEmit(),
        () => mockItem,
        () => mockSquare
      )

      position.update({ x: 999, y: 999 })
      expect(mockSquare.prepare).toHaveBeenCalled()

      spy.mockRestore()
    })

    it('should complete drop on stop() when hovering over active drop target', () => {
      const activeEl = document.createElement('div')
      const dropEl = document.createElement('div')
      dropEl.classList.add('is-drop')

      const mockClasses = createMockClasses()
      const mockItem = createMockItem()
      mockItem.getActive().set(activeEl)
      mockItem.getGo().set(dropEl)

      const mockClient = createMockClient()
      mockClient.hasDrop.mockReturnValue(true)

      const mockEmit = createMockEmit()
      const mockSquare = createMockSquare()

      const position = new DraggableWrapperPosition(
        () => mockClasses,
        () => mockClient,
        () => mockEmit,
        () => mockItem,
        () => mockSquare
      )

      position.stop()

      expect(mockEmit.on).toHaveBeenCalledTimes(1)
      expect(mockItem.reset).toHaveBeenCalledTimes(1)
      expect(mockClient.reset).toHaveBeenCalledTimes(1)
    })

    it('should initiate returnActive animation on stop() when not dropping', () => {
      const activeEl = document.createElement('div')
      const wrapperEl = document.createElement('div')
      const squareEl = document.createElement('div')

      wrapperEl.getBoundingClientRect = () => ({ left: 0, top: 0 } as DOMRect)
      squareEl.getBoundingClientRect = () => ({ left: 50, top: 50 } as DOMRect)

      const mockClasses = createMockClasses({ wrapper: wrapperEl })
      const mockItem = createMockItem()
      mockItem.getActive().set(activeEl)

      const mockClient = createMockClient()
      const mockSquare = createMockSquare(squareEl)

      const position = new DraggableWrapperPosition(
        () => mockClasses,
        () => mockClient,
        () => createMockEmit(),
        () => mockItem,
        () => mockSquare
      )

      position.stop()

      expect(mockClient.update).toHaveBeenCalledWith(50, 50)
      expect(activeEl.classList.contains('item-ret')).toBe(true)
    })
  })

  describe('Boundary values and edge cases', () => {
    it('should do nothing on stop() if no active element exists', () => {
      const mockItem = createMockItem()
      const mockClient = createMockClient()
      const position = new DraggableWrapperPosition(
        () => createMockClasses(),
        () => mockClient,
        () => createMockEmit(),
        () => mockItem,
        () => createMockSquare()
      )

      position.stop()
      expect(mockClient.update).not.toHaveBeenCalled()
    })

    it('should insert items into DOM on reset() when active was in return state and sorting element', () => {
      const parent = document.createElement('div')
      const squareEl = document.createElement('div')
      parent.appendChild(squareEl)

      const activeEl = document.createElement('div')
      activeEl.classList.add('item-ret')

      const mockClasses = createMockClasses({ isReturn: true })
      const mockItem = createMockItem()
      mockItem.getActive().set(activeEl)
      mockItem.getGo().set(document.createElement('div'))

      const mockSquare = createMockSquare(squareEl)
      const mockEmit = createMockEmit()

      const position = new DraggableWrapperPosition(
        () => mockClasses,
        () => createMockClient(),
        () => mockEmit,
        () => mockItem,
        () => mockSquare
      )

      position.reset(false)

      expect(mockEmit.on).toHaveBeenCalled()
      expect(parent.firstChild).toBe(activeEl)
    })
  })
})
