import { describe, it, expect, vi, beforeEach } from 'vitest'
import { ErrorCenterHandler } from '../ErrorCenterHandler'
import { ErrorCenterInstance } from '../ErrorCenterInstance'
import { ErrorCenterCauseItem, ErrorCenterHandlerList } from '../../types/errorCenter'

describe('ErrorCenterHandler', () => {
    let handler: ErrorCenterHandler
    let consoleErrorSpy: any

    beforeEach(() => {
        handler = new ErrorCenterHandler()
        consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {})
    })

    it('should add a handler and check if it exists', () => {
        handler.add('group1', () => {})
        expect(handler.has('group1')).toBe(true)
        expect(handler.has('group2')).toBe(false)
    })

    it('should get a handler item', () => {
        const callback = () => {}
        handler.add('group1', callback)
        const item = handler.get('group1')
        expect(item?.group).toBe('group1')
        expect(item?.handlers).toContain(callback)
    })

    it('should add multiple handlers using addList', () => {
        const list: ErrorCenterHandlerList = [
            { group: 'group1', handlers: [() => {}] },
            { group: 'group2', handlers: [() => {}] }
        ]
        handler.addList(list)
        expect(handler.has('group1')).toBe(true)
        expect(handler.has('group2')).toBe(true)
    })

    it('should trigger handlers on "on" call', () => {
        const callback = vi.fn()
        const cause: ErrorCenterCauseItem = { code: 'ERR001', message: 'Test error' }
        
        handler.add('group1', callback)
        handler.on('group1', cause)

        expect(callback).toHaveBeenCalledWith(cause)
        expect(consoleErrorSpy).toHaveBeenCalledWith('Error Center: ERR001')
        expect(consoleErrorSpy).toHaveBeenCalledWith('Test error')
    })

    it('should still log to console if no handlers exist', () => {
        const cause: ErrorCenterCauseItem = { code: 'ERR002', message: 'Silent error' }
        handler.on('nonexistent', cause)
        
        expect(consoleErrorSpy).toHaveBeenCalledWith('Error Center: ERR002')
    })
})

describe('ErrorCenterInstance', () => {
    let instance: ErrorCenterInstance
    let mockHandler: ErrorCenterHandler

    beforeEach(() => {
        mockHandler = new ErrorCenterHandler()
        instance = new ErrorCenterInstance([], mockHandler)
    })

    it('should add and check for causes', () => {
        const cause: ErrorCenterCauseItem = { code: 'C1', group: 'G1', label: 'L1' }
        instance.add(cause)
        
        expect(instance.has('C1', 'G1')).toBe(true)
        expect(instance.get('C1', 'G1')).toEqual(cause)
        expect(instance.has('C1', 'G2')).toBe(false)
    })

    it('should add a list of causes', () => {
        instance.addList([
            { code: 'C1', group: 'G1' },
            { code: 'C2', group: 'G1' }
        ])
        expect(instance.has('C1', 'G1')).toBe(true)
        expect(instance.has('C2', 'G1')).toBe(true)
    })

    it('should register handlers through addHandler and addHandlerList', () => {
        const callback = () => {}
        instance.addHandler('G1', callback)
        
        // Accessing protected member for testing
        // @ts-expect-error: Accessing protected member
        expect(instance.handler.has('G1')).toBe(true)
    })

    it('should merge cause data when triggered', () => {
        const storedCause: ErrorCenterCauseItem = { code: 'ERR', group: 'G1', label: 'Stored Label', message: 'Stored Message' }
        instance.add(storedCause)

        const handlerCallback = vi.fn()
        instance.addHandler('G1', handlerCallback)

        const triggerCause: ErrorCenterCauseItem = { code: 'ERR', group: 'G1', message: 'New Message' }
        instance.on('G1', triggerCause)

        expect(handlerCallback).toHaveBeenCalledWith({
            code: 'ERR',
            group: 'G1',
            label: 'Stored Label',
            message: 'New Message'
        })
    })

    it('should use provided cause if no stored cause exists', () => {
        const handlerCallback = vi.fn()
        instance.addHandler('G1', handlerCallback)

        const cause: ErrorCenterCauseItem = { code: 'UNKNOWN', group: 'G1', message: 'Unknown' }
        instance.on('G1', cause)

        expect(handlerCallback).toHaveBeenCalledWith(cause)
    })
})
