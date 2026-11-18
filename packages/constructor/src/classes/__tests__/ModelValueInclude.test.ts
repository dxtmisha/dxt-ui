// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { effectScope, nextTick, ref } from 'vue'
import type { EventClickInclude } from '../EventClickInclude'
import { ModelValueInclude } from '../ModelValueInclude'

describe('ModelValueInclude', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('should initialize value with inputValue and handle falsy 0 / false values', () => {
    const scope = effectScope()

    scope.run(() => {
      const stringInput = ref('init-val')
      const stringModel = new ModelValueInclude('index-key', undefined, undefined, stringInput)
      expect(stringModel.get()).toBe('init-val')

      const zeroInput = ref(0)
      const zeroModel = new ModelValueInclude('count', undefined, undefined, zeroInput)
      expect(zeroModel.get()).toBe(0)

      const falseInput = ref(false)
      const falseModel = new ModelValueInclude('active', undefined, undefined, falseInput)
      expect(falseModel.get()).toBe(false)
    })

    scope.stop()
  })

  it('should update value on input value change and emit model updates', async () => {
    const scope = effectScope()
    const emits = vi.fn()
    const inputValue = ref('first')
    let modelValue!: ModelValueInclude<string>

    scope.run(() => {
      modelValue = new ModelValueInclude('selected', emits, undefined, inputValue)
    })

    expect(modelValue.get()).toBe('first')

    inputValue.value = 'second'
    await nextTick()

    expect(modelValue.get()).toBe('second')
    expect(emits).toHaveBeenCalledWith('update:selected', 'second')
    expect(emits).toHaveBeenCalledWith('update:modelSelected', 'second')

    scope.stop()
  })

  it('should update value on onClick and delegate to event click handler', () => {
    const scope = effectScope()
    const eventMock = { onClick: vi.fn() } as unknown as EventClickInclude
    const emits = vi.fn()
    let modelValue!: ModelValueInclude<string | number>

    scope.run(() => {
      modelValue = new ModelValueInclude(
        'index-key',
        emits,
        eventMock,
        ref('old-val'),
        ref(false),
        ref(false)
      )
    })

    const event = {} as MouseEvent
    const options = { type: 'item', value: 'new-val', detail: undefined }

    modelValue.onClick(event, options)

    expect(modelValue.get()).toBe('new-val')
    expect(eventMock.onClick).toHaveBeenCalledWith(event, options)

    modelValue.onClick(event, { type: 'item', value: 0, detail: undefined })
    expect(modelValue.get()).toBe(0)

    scope.stop()
  })

  it('should not update value on onClick if readonly is true', () => {
    const scope = effectScope()
    let modelValue!: ModelValueInclude<string>

    scope.run(() => {
      modelValue = new ModelValueInclude(
        'index-key',
        undefined,
        undefined,
        ref('old-val'),
        ref(true)
      )
    })

    modelValue.onClick({} as MouseEvent, { type: 'item', value: 'new-val', detail: undefined })
    expect(modelValue.get()).toBe('old-val')

    scope.stop()
  })

  it('should support readonly as a function', () => {
    const scope = effectScope()
    let isReadonlyState = true
    let modelValue!: ModelValueInclude<string>

    scope.run(() => {
      modelValue = new ModelValueInclude(
        'index-key',
        undefined,
        undefined,
        ref('old-val'),
        () => isReadonlyState
      )
    })

    expect(modelValue.isReadonly()).toBe(true)
    modelValue.onClick({} as MouseEvent, { type: 'item', value: 'new-val', detail: undefined })
    expect(modelValue.get()).toBe('old-val')

    isReadonlyState = false
    expect(modelValue.isReadonly()).toBe(false)
    modelValue.onClick({} as MouseEvent, { type: 'item', value: 'new-val', detail: undefined })
    expect(modelValue.get()).toBe('new-val')

    scope.stop()
  })

  it('should support readonly as a primitive boolean', () => {
    const scope = effectScope()
    let modelValue!: ModelValueInclude<string>

    scope.run(() => {
      modelValue = new ModelValueInclude(
        'index-key',
        undefined,
        undefined,
        ref('old-val'),
        true
      )
    })

    expect(modelValue.isReadonly()).toBe(true)
    modelValue.onClick({} as MouseEvent, { type: 'item', value: 'new-val', detail: undefined })
    expect(modelValue.get()).toBe('old-val')

    scope.stop()
  })

  it('should support multiple as a function and primitive boolean', () => {
    const scope = effectScope()
    let modelFromFn!: ModelValueInclude<string[]>
    let modelFromBool!: ModelValueInclude<string[]>

    scope.run(() => {
      modelFromFn = new ModelValueInclude(
        'index-key',
        undefined,
        undefined,
        ref(['first']),
        false,
        () => true
      )
      modelFromBool = new ModelValueInclude(
        'index-key',
        undefined,
        undefined,
        ref(['first']),
        false,
        true
      )
    })

    expect(modelFromFn.isMultiple()).toBe(true)
    modelFromFn.onClick({} as MouseEvent, { type: 'item', value: 'second', detail: undefined })
    expect(modelFromFn.get()).toEqual(['first', 'second'])

    expect(modelFromBool.isMultiple()).toBe(true)
    modelFromBool.onClick({} as MouseEvent, { type: 'item', value: 'second', detail: undefined })
    expect(modelFromBool.get()).toEqual(['first', 'second'])

    scope.stop()
  })

  it('should update directly via set and onUpdate and stop reacting after scope disposal', async () => {
    const scope = effectScope()
    const inputValue = ref('initial')
    let modelValue!: ModelValueInclude<string | undefined>

    scope.run(() => {
      modelValue = new ModelValueInclude('index-key', undefined, undefined, inputValue)
    })

    modelValue.onUpdate('direct-update')
    expect(modelValue.get()).toBe('direct-update')

    modelValue.set('manual-set')
    expect(modelValue.get()).toBe('manual-set')

    scope.stop()

    inputValue.value = 'after-stop'
    await nextTick()
    expect(modelValue.get()).toBe('manual-set')
  })
})
