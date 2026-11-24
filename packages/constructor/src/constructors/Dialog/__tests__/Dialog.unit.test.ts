// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { effectScope, h, reactive, ref } from 'vue'
import { DesignComponents, DesignName } from '@dxtmisha/functional'

import { DescriptionInclude } from '../../../classes/DescriptionInclude'
import { LabelInclude } from '../../../classes/LabelInclude'
import { TextInclude } from '../../../classes/TextInclude'
import { ActionsInclude } from '../../Actions'
import { IconInclude, type IconPropsInclude } from '../../Icon'
import { WindowClassesInclude, WindowInclude, type WindowProps, type WindowPropsInclude } from '../../Window'

import { Dialog } from '../Dialog'
import type { DialogProps } from '../props'
import type { DialogComponents, DialogSlots } from '../types'

describe('Dialog (unit)', () => {
  afterEach(() => {
    document.body.innerHTML = ''
    vi.useRealTimers()
    vi.restoreAllMocks()
  })

  it('should configure extraWindow non-destructively so omitted props do not overwrite windowAttrs', () => {
    const scope = effectScope()
    const props = reactive<DialogProps>({
      windowAttrs: {
        image: '/fallback.png',
        imagePosition: 'left',
        closeButton: true,
        persistent: true
      }
    })
    const element = ref<HTMLElement | undefined>(document.createElement('div'))
    const naming = new DesignName('d1.dialog')

    let dialog: Dialog | undefined
    scope.run(() => {
      dialog = new Dialog(props, element, naming)
    })

    const windowBinds = dialog!.i('window').binds.value as Record<string, unknown>
    expect(windowBinds.adaptive).toBe('modal')
    expect(windowBinds.image).toBe('/fallback.png')
    expect(windowBinds.imagePosition).toBe('left')
    expect(windowBinds.closeButton).toBe(true)
    expect(windowBinds.persistent).toBe(true)

    // Removing conflicting windowAttrs allows direct Dialog props to flow reactively
    props.windowAttrs = { persistent: true }
    props.image = '/override.png'
    props.imagePosition = 'top'
    props.closeButton = false

    const updatedBinds = dialog!.i('window').binds.value as Record<string, unknown>
    expect(updatedBinds.image).toBe('/override.png')
    expect(updatedBinds.imagePosition).toBe('top')
    expect(updatedBinds.closeButton).toBe(false)
    expect(updatedBinds.persistent).toBe(true)

    scope.stop()
  })

  it('should lazily instantiate icon, label, description, text, and windowClasses only when actually needed', () => {
    const scope = effectScope()
    const spies = {
      description: vi.fn(),
      icon: vi.fn(),
      label: vi.fn(),
      text: vi.fn(),
      windowClasses: vi.fn()
    }

    class CustomDescriptionInclude extends DescriptionInclude {
      constructor(...args: ConstructorParameters<typeof DescriptionInclude>) {
        spies.description()
        super(...args)
      }
    }

    class CustomIconInclude<
      Props extends IconPropsInclude = IconPropsInclude
    > extends IconInclude<Props> {
      constructor(...args: ConstructorParameters<typeof IconInclude<Props>>) {
        spies.icon()
        super(...args)
      }
    }

    class CustomLabelInclude extends LabelInclude {
      constructor(...args: ConstructorParameters<typeof LabelInclude>) {
        spies.label()
        super(...args)
      }
    }

    class CustomTextInclude extends TextInclude {
      constructor(...args: ConstructorParameters<typeof TextInclude>) {
        spies.text()
        super(...args)
      }
    }

    class CustomWindowClassesInclude extends WindowClassesInclude {
      constructor(...args: ConstructorParameters<typeof WindowClassesInclude>) {
        spies.windowClasses()
        super(...args)
      }
    }

    const props = reactive<DialogProps>({
      barsHide: true,
      actionsHide: true
    })
    const element = ref<HTMLElement | undefined>(document.createElement('div'))
    const naming = new DesignName('d1.dialog')
    const components = new DesignComponents<DialogComponents, DialogProps>({
      icon: () => h('i')
    })
    // Modal default slot alone must NOT trigger LabelInclude instantiation (alternativeSlots = true)
    const slots: DialogSlots = {
      default: () => [h('p', 'Body only')]
    }

    let dialog: Dialog | undefined
    scope.run(() => {
      dialog = new Dialog(
        props,
        element,
        naming,
        components,
        slots,
        undefined,
        {
          description: CustomDescriptionInclude,
          icon: CustomIconInclude,
          label: CustomLabelInclude,
          text: CustomTextInclude,
          windowClasses: CustomWindowClassesInclude
        }
      )
    })

    // Nothing instantiated on construction
    expect(spies.description).not.toHaveBeenCalled()
    expect(spies.icon).not.toHaveBeenCalled()
    expect(spies.label).not.toHaveBeenCalled()
    expect(spies.text).not.toHaveBeenCalled()
    expect(spies.windowClasses).not.toHaveBeenCalled()
    expect(dialog!.hasInstance('actions')).toBe(false)
    expect(dialog!.hasInstance('bars')).toBe(false)

    // Rendering empty information + hidden actions must still allocate ZERO helpers
    expect(dialog!.renderIcon()).toEqual([])
    expect(dialog!.renderLabel()).toEqual([])
    expect(dialog!.renderDescription()).toEqual([])
    expect(dialog!.callInstance('actions', item => item.render(), [])).toEqual([])

    expect(spies.description).not.toHaveBeenCalled()
    expect(spies.icon).not.toHaveBeenCalled()
    expect(spies.label).not.toHaveBeenCalled()
    expect(spies.text).not.toHaveBeenCalled()
    expect(spies.windowClasses).not.toHaveBeenCalled()
    expect(dialog!.hasInstance('actions')).toBe(false)

    // Success flag without iconSuccess still does not instantiate icon
    props.success = true
    expect(dialog!.renderIcon()).toEqual([])
    expect(spies.icon).not.toHaveBeenCalled()

    // Providing iconSuccess activates icon exactly once
    props.iconSuccess = 'check_circle'
    expect(dialog!.renderIcon()).toHaveLength(1)
    expect(spies.icon).toHaveBeenCalledTimes(1)
    expect(dialog!.renderIcon()).toHaveLength(1)
    expect(spies.icon).toHaveBeenCalledTimes(1)

    // Providing numeric 0 label & description activates both exactly once
    props.label = 0
    props.description = 0
    expect(dialog!.renderLabel()).toHaveLength(1)
    expect(dialog!.renderDescription()).toHaveLength(1)
    expect(spies.label).toHaveBeenCalledTimes(1)
    expect(spies.description).toHaveBeenCalledTimes(1)

    // Clearing props hides rendered nodes cleanly without recreating helpers
    props.success = false
    props.label = undefined
    props.description = undefined
    expect(dialog!.renderIcon()).toEqual([])
    expect(dialog!.renderLabel()).toEqual([])
    expect(dialog!.renderDescription()).toEqual([])
    expect(spies.icon).toHaveBeenCalledTimes(1)
    expect(spies.label).toHaveBeenCalledTimes(1)
    expect(spies.description).toHaveBeenCalledTimes(1)

    scope.stop()
  })

  it('should resolve icon priority (success > error > icon) and pass reactive iconAttrs', () => {
    const scope = effectScope()
    const props = reactive<DialogProps>({
      icon: 'info',
      iconSuccess: 'check_circle',
      iconError: 'error',
      iconAttrs: { size: '4xl' }
    })
    const element = ref<HTMLElement | undefined>(document.createElement('div'))
    const naming = new DesignName('d1.dialog')
    const components = new DesignComponents<DialogComponents, DialogProps>({
      icon: () => h('i')
    })

    let dialog: Dialog | undefined
    scope.run(() => {
      dialog = new Dialog(props, element, naming, components)
    })

    expect(dialog!.renderIcon()[0]?.props?.icon).toBe('info')
    expect(dialog!.renderIcon()[0]?.props?.size).toBe('4xl')

    props.error = true
    expect(dialog!.renderIcon()[0]?.props?.icon).toBe('error')

    // Success takes precedence over error when both flags are true
    props.success = true
    expect(dialog!.renderIcon()[0]?.props?.icon).toBe('check_circle')

    scope.stop()
  })

  it('should build extraActions with localized text, window close classes, clickOkAndClose flag, and ok/close emits', () => {
    const scope = effectScope()
    const emitted: Array<{ name: string, payload: unknown[] }> = []
    const textSpy = vi.fn()
    const windowClassesSpy = vi.fn()

    class CustomTextInclude extends TextInclude {
      constructor(...args: ConstructorParameters<typeof TextInclude>) {
        textSpy()
        super(...args)
      }
    }

    class CustomWindowClassesInclude extends WindowClassesInclude {
      constructor(...args: ConstructorParameters<typeof WindowClassesInclude>) {
        windowClassesSpy()
        super(...args)
      }
    }

    const props = reactive<DialogProps>({
      buttonClose: null,
      buttonOk: null,
      clickOkAndClose: false,
      textClose: 'Dismiss',
      textOk: 'Accept'
    })
    const element = ref<HTMLElement | undefined>(document.createElement('div'))
    const naming = new DesignName('d1.dialog')

    let dialog: Dialog | undefined
    scope.run(() => {
      dialog = new Dialog(
        props,
        element,
        naming,
        undefined,
        undefined,
        ((name: string, ...payload: unknown[]) => {
          emitted.push({ name, payload })
        }) as never,
        {
          text: CustomTextInclude,
          windowClasses: CustomWindowClassesInclude
        }
      )
    })

    // Both buttons null -> actions stays lazy and neither text nor windowClasses is created
    expect(dialog!.callInstance('actions', item => item.binds.value)).toBeUndefined()
    expect(dialog!.hasInstance('actions')).toBe(false)
    expect(textSpy).not.toHaveBeenCalled()
    expect(windowClassesSpy).not.toHaveBeenCalled()

    // Enabling only buttonOk with clickOkAndClose: false creates text but skips windowClasses
    props.buttonOk = undefined
    const okOnlyBinds = dialog!.callInstance('actions', item => item.binds.value) as {
      align?: string
      list?: Array<{ label?: string, value?: string, class?: unknown, onClick?: () => void }>
    }
    expect(dialog!.hasInstance('actions')).toBe(true)
    expect(textSpy).toHaveBeenCalledTimes(1)
    expect(windowClassesSpy).not.toHaveBeenCalled()
    expect(okOnlyBinds.align).toBe('center')
    expect(okOnlyBinds.list).toHaveLength(1)
    expect(okOnlyBinds.list?.[0]?.label).toBe('Accept')
    expect(okOnlyBinds.list?.[0]?.value).toBe('ok')
    expect(okOnlyBinds.list?.[0]?.class).toBeUndefined()

    okOnlyBinds.list?.[0]?.onClick?.()
    expect(emitted).toEqual([{ name: 'ok', payload: [] }])

    // Enabling buttonClose and clickOkAndClose: true instantiates windowClasses once and attaches close class
    props.buttonClose = { outline: true }
    props.clickOkAndClose = true
    const fullBinds = dialog!.callInstance('actions', item => item.binds.value) as {
      list?: Array<{ label?: string, value?: string, outline?: boolean, class?: unknown, onClick?: () => void }>
    }
    expect(windowClassesSpy).toHaveBeenCalledTimes(1)
    expect(fullBinds.list).toHaveLength(2)
    expect(fullBinds.list?.[0]?.label).toBe('Dismiss')
    expect(fullBinds.list?.[0]?.value).toBe('close')
    expect(fullBinds.list?.[0]?.outline).toBe(true)
    expect(fullBinds.list?.[0]?.class).toBe('d1-window--close')
    expect(fullBinds.list?.[1]?.class).toBe('d1-window--close')

    fullBinds.list?.[0]?.onClick?.()
    expect(emitted).toEqual([
      { name: 'ok', payload: [] },
      { name: 'close', payload: [] }
    ])

    // String button overrides replace labels cleanly
    props.buttonClose = 'No, keep'
    props.buttonOk = 'Yes, delete'
    const customLabelBinds = dialog!.callInstance('actions', item => item.binds.value) as {
      list?: Array<{ label?: string }>
    }
    expect(customLabelBinds.list?.[0]?.label).toBe('No, keep')
    expect(customLabelBinds.list?.[1]?.label).toBe('Yes, delete')

    scope.stop()
  })

  it('should link label and description IDs to ModalAbstract ARIA IDs without duplicating Bars IDs', () => {
    const scope = effectScope()
    const props = reactive<DialogProps>({
      barsHide: true,
      label: 'Dialog Title',
      description: 'Dialog Description'
    })
    const element = ref<HTMLElement | undefined>(document.createElement('div'))
    const naming = new DesignName('d1.dialog')

    let dialog: Dialog | undefined
    scope.run(() => {
      dialog = new Dialog(props, element, naming)
    })

    const windowBinds = dialog!.i('window').binds.value as Record<string, unknown>
    const labelNode = dialog!.renderLabel()[0]
    const descriptionNode = dialog!.renderDescription()[0]

    expect(labelNode?.props?.id).toBe(dialog!.labelId)
    expect(descriptionNode?.props?.id).toBe(dialog!.descriptionId)
    expect(windowBinds.ariaLabelledby).toBe(dialog!.labelId)
    expect(windowBinds.ariaDescribedby).toBe(dialog!.descriptionId)

    // When Bars is visible and displays barsLabel/barsDescription, Dialog avoids duplicate IDs
    props.barsHide = false
    props.barsLabel = 'Bar Header'
    props.barsDescription = 'Bar Subtitle'
    expect(dialog!.renderLabel()[0]?.props?.id).not.toBe(dialog!.labelId)
    expect(dialog!.renderDescription()[0]?.props?.id).not.toBe(dialog!.descriptionId)

    // Explicit labelId / descriptionId props take priority
    props.labelId = 'custom-label-id'
    props.descriptionId = 'custom-description-id'
    expect(dialog!.renderLabel()[0]?.props?.id).toBe('custom-label-id')
    expect(dialog!.renderDescription()[0]?.props?.id).toBe('custom-description-id')

    scope.stop()
  })

  it('should support DI overrides for Modal constructors and label/description slots', () => {
    const scope = effectScope()
    const windowSpy = vi.fn()
    const actionsSpy = vi.fn()

    class CustomWindowInclude<
      Props extends WindowPropsInclude = WindowPropsInclude,
      PropsExtra extends WindowProps = WindowProps
    > extends WindowInclude<Props, PropsExtra> {
      constructor(...args: ConstructorParameters<typeof WindowInclude<Props, PropsExtra>>) {
        windowSpy()
        super(...args)
      }
    }

    class CustomActionsInclude extends ActionsInclude {
      constructor(...args: ConstructorParameters<typeof ActionsInclude>) {
        actionsSpy()
        super(...args)
      }
    }

    const props = reactive<DialogProps>({})
    const element = ref<HTMLElement | undefined>(document.createElement('div'))
    const naming = new DesignName('d1.dialog')
    const slots: DialogSlots = {
      label: () => [h('strong', 'Slot Label')],
      description: () => [h('em', 'Slot Description')]
    }

    let dialog: Dialog | undefined
    scope.run(() => {
      dialog = new Dialog(
        props,
        element,
        naming,
        undefined,
        slots,
        undefined,
        {
          actions: CustomActionsInclude,
          window: CustomWindowInclude
        }
      )
    })

    dialog!.i('window')
    dialog!.i('actions')
    expect(windowSpy).toHaveBeenCalledTimes(1)
    expect(actionsSpy).toHaveBeenCalledTimes(1)
    expect(dialog!.renderLabel()).toHaveLength(1)
    expect(dialog!.renderDescription()).toHaveLength(1)

    scope.stop()
  })
})
