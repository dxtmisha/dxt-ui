import { afterEach, describe, expect, it, vi } from 'vitest'
import { DesignReplace } from '../DesignReplace'
import { DesignStructure } from '../DesignStructure'
import { PropertiesConfig } from '../../Properties/PropertiesConfig'

describe('DesignReplace', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('replaces tokens in template strings with component metadata', () => {
    vi.spyOn(PropertiesConfig, 'getDesignName').mockReturnValue('dxt')
    vi.spyOn(PropertiesConfig, 'getProjectName').mockReturnValue('ui-core')

    const structure = new DesignStructure('button')
    const sample = 'Project: [project], Design: [Design], Component: [component], File: DesignComponent'
    const replace = new DesignReplace(structure, 'Button', sample)

    const result = replace.getNameFile(sample)

    expect(result).toBe('Project: ui-core, Design: Dxt, Component: button, File: DxtButton')
  })

  it('does not duplicate suffix when component name starts with the replacement mark (e.g. ComponentOutlet)', () => {
    vi.spyOn(PropertiesConfig, 'getDesignName').mockReturnValue('d1')
    vi.spyOn(PropertiesConfig, 'getProjectName').mockReturnValue('Ui')

    const structure = new DesignStructure('componentOutlet')
    const sample = 'import DesignComponent from "./DesignComponent.vue"; new ComponentDesign()'
    const replace = new DesignReplace(structure, 'component', sample)

    expect(replace.getNameFile('DesignComponent.vue')).toBe('D1ComponentOutlet.vue')
    expect(replace.getNameFile(sample)).toBe('import D1ComponentOutlet from "./D1ComponentOutlet.vue"; new ComponentOutletDesign()')
  })

  it('replaces relative paths and updates internal sample string', () => {
    const structure = new DesignStructure('badge')
    const sample = 'import { x } from "../../../core"'
    const replace = new DesignReplace(structure, 'Badge', sample)

    replace.replacePath()
    expect(replace.get()).toContain('../../core')
  })

  it('returns raw template when calling get()', () => {
    const structure = new DesignStructure('card')
    const replace = new DesignReplace(structure, 'Card', '<div>Hello</div>')
    expect(replace.get()).toBe('<div>Hello</div>')
  })
})
