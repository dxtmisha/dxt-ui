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
