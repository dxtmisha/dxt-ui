// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { ref } from 'vue'
import { WindowVerification } from '../WindowVerification'
import type { WindowProps } from '../props'

describe('WindowVerification', () => {
  let mockProps: Partial<WindowProps>
  let mockClientOnly: any
  let mockPersistent: any
  let mockClasses: any
  let mockElement: any
  let mockStatic: any
  let mockOpen: any

  let targetElement: HTMLDivElement

  beforeEach(() => {
    targetElement = document.createElement('div')
    document.body.appendChild(targetElement)

    mockProps = {
      disabled: false,
      contextmenu: false
    }
    mockClientOnly = {
      isRender: vi.fn().mockReturnValue(true)
    }
    mockPersistent = {
      on: vi.fn().mockReturnValue(false)
    }
    mockClasses = {
      findMain: vi.fn(),
      findControl: vi.fn(),
      findControlByElement: vi.fn(),
      findBody: vi.fn(),
      findBodyOther: vi.fn(),
      getSelectorControl: vi.fn().mockReturnValue('.d1-window__control'),
      list: {
        controlStatic: 'd1-window--control-static',
        controlOpenOnly: 'd1-window--control-open-only',
        persistent: 'd1-window--persistent',
        static: 'd1-window--static',
        close: 'd1-window--close',
        control: 'd1-window__control'
      },
      getId: vi.fn().mockReturnValue('window-123')
    }
    mockElement = {
      getMain: vi.fn().mockReturnValue(document.createElement('div'))
    }
    mockStatic = {
      item: ref(false)
    }
    mockOpen = {
      isClicks: vi.fn().mockReturnValue(false),
      pressed: vi.fn(),
      item: ref(false),
      toggle: vi.fn().mockResolvedValue(undefined)
    }
  })

  afterEach(() => {
    document.body.innerHTML = ''
    vi.restoreAllMocks()
  })

  it('should call toggle() if window is closed and enabled', async () => {
    const verification = new WindowVerification(
      mockProps as WindowProps,
      mockClientOnly,
      mockPersistent,
      mockClasses,
      mockElement,
      mockStatic,
      mockOpen
    )

    await verification.update(targetElement)

    expect(mockOpen.pressed).toHaveBeenCalled()
    expect(mockOpen.toggle).toHaveBeenCalled()
  })

  it('should ignore verification updates if target is not in body', async () => {
    const verification = new WindowVerification(
      mockProps as WindowProps,
      mockClientOnly,
      mockPersistent,
      mockClasses,
      mockElement,
      mockStatic,
      mockOpen
    )

    const orphanElement = document.createElement('div')
    await verification.update(orphanElement)

    expect(mockOpen.pressed).not.toHaveBeenCalled()
  })

  it('should ignore verification updates if disabled option is true', async () => {
    mockProps.disabled = true
    const verification = new WindowVerification(
      mockProps as WindowProps,
      mockClientOnly,
      mockPersistent,
      mockClasses,
      mockElement,
      mockStatic,
      mockOpen
    )

    await verification.update(targetElement)

    expect(mockOpen.toggle).not.toHaveBeenCalled()
  })
})
