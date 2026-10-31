import { describe, expect, it } from 'vitest'
import { effectScope, getCurrentScope } from 'vue'

import { useScope } from '../useScope'

describe('useScope', () => {
  it('returns undefined scope and is() true when executed outside an effect scope', () => {
    expect(getCurrentScope()).toBeUndefined()

    const { scope, is } = useScope()

    expect(scope).toBeUndefined()
    expect(is()).toBe(true)
  })

  it('captures the current effect scope and reports is() true while active', () => {
    const customScope = effectScope()

    customScope.run(() => {
      const { scope, is } = useScope()

      expect(scope).toBe(customScope)
      expect(is()).toBe(true)
    })

    customScope.stop()
  })

  it('dynamically reports is() false after the captured effect scope stops', () => {
    const customScope = effectScope()
    let check: (() => boolean) | undefined

    customScope.run(() => {
      const { scope, is } = useScope()

      expect(scope).toBe(customScope)
      expect(is()).toBe(true)
      check = is
    })

    expect(check?.()).toBe(true)

    customScope.stop()

    expect(check?.()).toBe(false)
  })

  it('supports passing an explicit target scope argument', () => {
    const explicitScope = effectScope()
    const { scope, is } = useScope(explicitScope)

    expect(scope).toBe(explicitScope)
    expect(is()).toBe(true)

    explicitScope.stop()

    expect(is()).toBe(false)
  })

  it('handles explicit undefined target scope gracefully', () => {
    const { scope, is } = useScope(undefined)

    expect(scope).toBeUndefined()
    expect(is()).toBe(true)
  })

  it('executes callback directly and returns result when unscoped via run()', () => {
    const { run } = useScope()
    let executed = false

    const result = run(() => {
      executed = true
      return 42
    })

    expect(executed).toBe(true)
    expect(result).toBe(42)
  })

  it('executes callback within the active scope via run()', () => {
    const customScope = effectScope()

    customScope.run(() => {
      const { run } = useScope()
      let currentInside: unknown

      const result = run(() => {
        currentInside = getCurrentScope()
        return 'executed'
      })

      expect(currentInside).toBe(customScope)
      expect(result).toBe('executed')
    })

    customScope.stop()
  })

  it('does not execute callback and returns undefined when run() is called on a stopped scope', () => {
    const customScope = effectScope()
    const { run, is } = useScope(customScope)

    customScope.stop()
    expect(is()).toBe(false)

    let executed = false
    const result = run(() => {
      executed = true
      return 'should-not-run'
    })

    expect(executed).toBe(false)
    expect(result).toBeUndefined()
  })

  it('handles an already stopped scope on initialization', () => {
    const stoppedScope = effectScope()
    stoppedScope.stop()

    const { scope, is, run } = useScope(stoppedScope)

    expect(scope).toBe(stoppedScope)
    expect(is()).toBe(false)

    let executed = false
    const result = run(() => {
      executed = true
      return 'stopped'
    })

    expect(executed).toBe(false)
    expect(result).toBeUndefined()
  })

  it('executes async callback and returns resolved value when unscoped via runAsync()', async () => {
    const { runAsync } = useScope()

    const result = await runAsync(async () => {
      return 'async-unscoped'
    })

    expect(result).toBe('async-unscoped')
  })

  it('re-throws error when unscoped async callback rejects via runAsync()', async () => {
    const { runAsync } = useScope()

    await expect(runAsync(async () => {
      throw new Error('unscoped-failure')
    })).rejects.toThrow('unscoped-failure')
  })

  it('executes async callback within active scope and returns resolved value via runAsync()', async () => {
    const customScope = effectScope()

    await customScope.run(async () => {
      const { runAsync } = useScope()

      const result = await runAsync(async () => {
        expect(getCurrentScope()).toBe(customScope)
        return 'scoped-async-success'
      })

      expect(result).toBe('scoped-async-success')
    })

    customScope.stop()
  })

  it('returns undefined and does not execute callback when runAsync() is called on an already stopped scope', async () => {
    const customScope = effectScope()
    customScope.stop()

    const { runAsync } = useScope(customScope)
    let executed = false

    const result = await runAsync(async () => {
      executed = true
      return 'should-not-run'
    })

    expect(executed).toBe(false)
    expect(result).toBeUndefined()
  })

  it('returns undefined when the scope stops while runAsync() is awaiting resolution', async () => {
    const customScope = effectScope()
    const { runAsync } = useScope(customScope)

    let resolvePromise!: (value: string) => void
    const pendingPromise = new Promise<string>((resolve) => {
      resolvePromise = resolve
    })

    const runPromise = runAsync(() => pendingPromise)

    // Stop scope while async operation is in-flight
    customScope.stop()

    resolvePromise('finished-too-late')
    const result = await runPromise

    expect(result).toBeUndefined()
  })

  it('returns undefined and suppresses error when the scope stops while runAsync() rejects', async () => {
    const customScope = effectScope()
    const { runAsync } = useScope(customScope)

    let rejectPromise!: (reason: Error) => void
    const pendingPromise = new Promise<string>((_, reject) => {
      rejectPromise = reject
    })

    const runPromise = runAsync(() => pendingPromise)

    // Stop scope while async operation is in-flight
    customScope.stop()

    rejectPromise(new Error('late-rejection'))
    const result = await runPromise

    expect(result).toBeUndefined()
  })

  it('re-throws error if scope remains active when runAsync() rejects', async () => {
    const customScope = effectScope()
    const { runAsync } = useScope(customScope)

    await expect(runAsync(async () => {
      throw new Error('scoped-failure')
    })).rejects.toThrow('scoped-failure')

    customScope.stop()
  })

  it('discards an older execution and returns undefined when a newer runAsync() is started', async () => {
    const { runAsync } = useScope()

    let resolveFirst!: (value: string) => void
    const firstPromise = new Promise<string>((resolve) => {
      resolveFirst = resolve
    })

    const runFirst = runAsync(() => firstPromise)
    const runSecond = runAsync(async () => 'second-result')

    const secondResult = await runSecond
    expect(secondResult).toBe('second-result')

    resolveFirst('first-result')
    const firstResult = await runFirst

    expect(firstResult).toBeUndefined()
  })

  it('suppresses error in an older execution when a newer runAsync() is started', async () => {
    const { runAsync } = useScope()

    let rejectFirst!: (reason: Error) => void
    const firstPromise = new Promise<string>((_, reject) => {
      rejectFirst = reject
    })

    const runFirst = runAsync(() => firstPromise)
    const runSecond = runAsync(async () => 'second-success')

    const secondResult = await runSecond
    expect(secondResult).toBe('second-success')

    rejectFirst(new Error('outdated-error'))
    const firstResult = await runFirst

    expect(firstResult).toBeUndefined()
  })

  it('passes isCurrent helper into callback to inspect validity mid-flight', async () => {
    const { runAsync } = useScope()
    let checkResult: boolean | undefined

    let resolvePause!: () => void
    const pausePromise = new Promise<void>((resolve) => {
      resolvePause = resolve
    })

    const runFirst = runAsync(async (isCurrent) => {
      expect(isCurrent()).toBe(true)
      await pausePromise
      checkResult = isCurrent()
      return 'done'
    })

    // Start second run while first is awaiting
    runAsync(async () => 'super-second')

    resolvePause()
    const firstResult = await runFirst

    expect(checkResult).toBe(false)
    expect(firstResult).toBeUndefined()
  })

  it('executes callback exactly once when callback returns undefined/void inside active scope', () => {
    const customScope = effectScope()
    let executionCount = 0

    customScope.run(() => {
      const { run } = useScope()

      const result = run(() => {
        executionCount++
        return undefined
      })

      expect(result).toBeUndefined()
    })

    expect(executionCount).toBe(1)
    customScope.stop()
  })

  it('executes callback exactly once when callback returns undefined outside scope', () => {
    const { run } = useScope()
    let executionCount = 0

    const result = run(() => {
      executionCount++
      return undefined
    })

    expect(executionCount).toBe(1)
    expect(result).toBeUndefined()
  })

  it('handles synchronous non-promise callback returning undefined in runAsync() exactly once', async () => {
    const customScope = effectScope()
    let executionCount = 0

    const result = await customScope.run(async () => {
      const { runAsync } = useScope()

      return runAsync(() => {
        executionCount++
        return undefined
      })
    })

    expect(executionCount).toBe(1)
    expect(result).toBeUndefined()
    customScope.stop()
  })

  it('preserves error thrown in synchronous callback inside run()', () => {
    const customScope = effectScope()
    const { run } = useScope(customScope)

    expect(() => {
      run(() => {
        throw new Error('synchronous-error')
      })
    }).toThrow('synchronous-error')

    customScope.stop()
  })
})
