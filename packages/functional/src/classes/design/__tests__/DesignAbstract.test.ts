import { describe, expect, it, vi } from 'vitest'
import { DesignAbstract } from '../DesignAbstract'

// Concrete class for testing DesignAbstract
class TestDesign extends DesignAbstract<{ title: string, count?: number }, { result: string }> {
  protected initEvent(): void {
    this.event.result = `${this.props.title}-${this.props.count || 0}`
  }

  // Expose protected methods for testing
  public testIs(name: 'title' | 'count'): boolean {
    return this.is(name)
  }

  public testIsChanged(name: 'result', propName?: 'title' | 'count'): boolean {
    return this.isChanged(name, propName as any)
  }
}

describe('DesignAbstract', () => {
  it('should initialize and call callback on make', () => {
    const callback = vi.fn()
    const props = { title: 'hello', count: 5 }
    const design = new TestDesign(props, callback)

    design.make()

    expect(callback).toHaveBeenCalledWith({ result: 'hello-5' })
  })

  it('should only call callback if props changed or compelled', () => {
    const callback = vi.fn()
    const props = { title: 'hello' }
    const design = new TestDesign(props, callback)

    // First call always works because changed.isChanged() is true initially
    design.make()
    expect(callback).toHaveBeenCalledTimes(1)

    // Second call without changes should not trigger callback
    design.make()
    expect(callback).toHaveBeenCalledTimes(1)

    // Compelled call should trigger callback even without changes
    design.make(true)
    expect(callback).toHaveBeenCalledTimes(2)
  })

  it('should detect changes in props', () => {
    const callback = vi.fn()
    const props = { title: 'hello' }
    const design = new TestDesign(props, callback)

    design.make() // Reset changed state

    props.title = 'world'
    design.make()
    expect(callback).toHaveBeenCalledWith({ result: 'world-0' })
    expect(callback).toHaveBeenCalledTimes(2)
  })

  it('should verify property existence via is()', () => {
    const design = new TestDesign({ title: 'test' })
    expect(design.testIs('title')).toBe(true)
    expect(design.testIs('count')).toBe(false)
  })

  it('should verify change status via isChanged()', () => {
    const props = { title: 'test' }
    const design = new TestDesign(props)

    // Initial state: result not in event yet
    expect(design.testIsChanged('result')).toBe(true)

    design.make()
    // After make, nothing changed
    expect(design.testIsChanged('result')).toBe(false)

    // Change prop
    props.title = 'updated'
    expect(design.testIsChanged('result', 'title')).toBe(true)
    expect(design.testIsChanged('result', 'count')).toBe(false)
  })
})
