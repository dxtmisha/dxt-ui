import { describe, it, expect, vi, beforeEach } from 'vitest'
import { DesignAsyncAbstract } from '../DesignAsyncAbstract'

// Concrete class for testing
class TestDesignAsync extends DesignAsyncAbstract<{ foo: string, bar: number }, { result: string }> {
  protected async initEvent(): Promise<void> {
    // Simulate async operation
    await new Promise(resolve => setTimeout(resolve, 10))
    this.event.result = `${this.props.foo}-${this.props.bar}`
  }
}

describe('DesignAsyncAbstract', () => {
  let props: { foo: string, bar: number }
  let callback: any

  beforeEach(() => {
    props = { foo: 'initial', bar: 10 }
    callback = vi.fn()
  })

  describe('makeCallback()', () => {
    it('calls initEvent and callback on the first call', async () => {
      const design = new TestDesignAsync(props, callback)
      await design.makeCallback()

      expect(callback).toHaveBeenCalledTimes(1)
      expect(callback).toHaveBeenCalledWith({ result: 'initial-10' })
    })

    it('it does not recall callback if data has not changed', async () => {
      const design = new TestDesignAsync(props, callback)
      await design.makeCallback() // First call
      await design.makeCallback() // Second call (no change)

      expect(callback).toHaveBeenCalledTimes(1)
    })

    it('recalls callback if data has changed', async () => {
      const design = new TestDesignAsync(props, callback)
      await design.makeCallback()

      props.foo = 'updated'
      await design.makeCallback()

      expect(callback).toHaveBeenCalledTimes(2)
      expect(callback).toHaveBeenLastCalledWith({ result: 'updated-10' })
    })

    it('recalls callback if compelled is true', async () => {
      const design = new TestDesignAsync(props, callback)
      await design.makeCallback()
      await design.makeCallback(true)

      expect(callback).toHaveBeenCalledTimes(2)
    })
  })

  describe('make()', () => {
    it('calls makeCallback but returns this immediately (non-blocking)', () => {
      // We can't easily wait for the internal then() in a sync test without high-level mocks,
      // but we can check if it returns the instance correctly.
      const design = new TestDesignAsync(props, callback)
      const result = design.make()

      expect(result).toBe(design)
    })

    it('eventually updates the callback', async () => {
      const design = new TestDesignAsync(props, callback)
      design.make()

      // Wait a bit for the async makeCallback to finish
      await new Promise(resolve => setTimeout(resolve, 50))

      expect(callback).toHaveBeenCalledTimes(1)
      expect(callback).toHaveBeenCalledWith({ result: 'initial-10' })
    })
  })
})
