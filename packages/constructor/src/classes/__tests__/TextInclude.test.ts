import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { TextInclude } from '../TextInclude'

describe('TextInclude', () => {
  let initialGlobalList: any

  beforeEach(() => {
    // Backup the initial global list state
    initialGlobalList = { ...TextInclude.list.value }
  })

  // Restore global list state after each test to avoid test pollution
  afterEach(() => {
    TextInclude.list.value = { ...initialGlobalList }
  })

  it('should load global fallback values by default / должен загружать глобальные значения по умолчанию', () => {
    const textInclude = new TextInclude({})

    expect(textInclude.cancel).toBe('Cancel')
    expect(textInclude.close).toBe('Close')
    expect(textInclude.ok).toBe('OK')
    expect(textInclude.show).toBe('Show')
  })

  it('should support static local overrides through props / должен поддерживать статические локальные переопределения через свойства', () => {
    const textInclude = new TextInclude({
      textCancel: 'Custom Cancel',
      textClose: 'Custom Close'
    })

    expect(textInclude.cancel).toBe('Custom Cancel')
    expect(textInclude.close).toBe('Custom Close')
    expect(textInclude.ok).toBe('OK') // stays default
  })

  it('should resolve and execute local function props / должен вызывать и выполнять функции, переданные в локальные свойства', () => {
    let callCount = 0
    const textInclude = new TextInclude({
      textCancel: () => {
        callCount++
        return `Cancel Count: ${callCount}`
      }
    })

    // Verify callback is evaluated
    expect(textInclude.cancel).toBe('Cancel Count: 1')
    expect(textInclude.cancel).toBe('Cancel Count: 2') // evaluates again on get
  })

  it('should cache getter functions inside the texts record / должен кэшировать функции-геттеры внутри объекта texts', () => {
    const textInclude = new TextInclude({
      textCancel: 'Unique Cancel'
    })

    // Read the getter to trigger creation and caching
    expect(textInclude.cancel).toBe('Unique Cancel')

    // Verify it is cached inside `texts` as a function
    expect(textInclude.texts.textCancel).toBeTypeOf('function')
    expect(textInclude.texts.textCancel!()).toBe('Unique Cancel')
  })

  it('should allow static method initText to update global fallback values / должен позволять статическому методу initText обновлять глобальные значения', () => {
    TextInclude.initText({
      cancel: 'Global Cancel Update',
      customText: 'Custom'
    } as any)

    const textInclude = new TextInclude({})

    expect(textInclude.cancel).toBe('Global Cancel Update')
    expect(textInclude.get('customText' as any)).toBe('Custom')
  })

  it('should dynamically evaluate props when accessing properties / должен динамически вычислять свойства при обращении', () => {
    const dynamicProps = {
      textCancel: 'First Cancel'
    }

    const textInclude = new TextInclude(dynamicProps)

    expect(textInclude.cancel).toBe('First Cancel')

    // Change prop value under the hood
    dynamicProps.textCancel = 'Second Cancel'

    expect(textInclude.cancel).toBe('Second Cancel')
  })
})
