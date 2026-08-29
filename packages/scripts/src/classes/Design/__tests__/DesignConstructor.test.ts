import { afterEach, describe, expect, it, vi } from 'vitest'
import { DesignConstructor } from '../DesignConstructor'
import { DesignConstructors } from '../DesignConstructors'
import { PropertiesFile } from '../../Properties/PropertiesFile'
import { PropertiesCache } from '../../Properties/PropertiesCache'

describe('DesignConstructor and DesignConstructors', () => {
  afterEach(() => {
    vi.restoreAllMocks()
    PropertiesCache.clear()
  })

  it('initializes DesignConstructor with command name and options', () => {
    vi.spyOn(PropertiesFile, 'getRoot').mockReturnValue('.')
    const constructor = new DesignConstructor('Button', { variant: 'solid' })

    expect(constructor).toBeDefined()
  })

  it('runs individual constructor when name is provided to DesignConstructors', () => {
    const makeSpy = vi.spyOn(DesignConstructor.prototype, 'make').mockImplementation(async () => { })
    vi.spyOn(PropertiesFile, 'readDir').mockReturnValue(['Button'])
    vi.spyOn(PropertiesFile, 'write').mockImplementation(() => { })

    const constructors = new DesignConstructors('Button')
    constructors.make()

    expect(makeSpy).toHaveBeenCalled()
  })

  it('runs all discovered components when no name is provided to DesignConstructors', () => {
    const makeSpy = vi.spyOn(DesignConstructor.prototype, 'make').mockImplementation(async () => { })
    vi.spyOn(PropertiesFile, 'readDir').mockReturnValue(['Button', 'Input', 'Card'])
    vi.spyOn(PropertiesFile, 'write').mockImplementation(() => { })

    const constructors = new DesignConstructors()
    constructors.make()

    expect(makeSpy).toHaveBeenCalledTimes(3)
  })
})
