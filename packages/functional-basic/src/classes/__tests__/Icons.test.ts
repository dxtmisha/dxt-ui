// @vitest-environment jsdom
import { describe, it, expect, beforeEach } from 'vitest'
import { Icons } from '../Icons'

describe('Icons', () => {
  beforeEach(() => {
    // Reset the icons registry before each test
    ;(Icons as any).icons = {}
    ;(Icons as any).url = '/icons/'
  })

  it('should add and retrieve a string icon', async () => {
    Icons.add('arrow', '<svg>arrow</svg>')
    const result = await Icons.get('arrow')
    expect(result).toBe('<svg>arrow</svg>')
  })

  it('should add and retrieve an icon from a Promise', async () => {
    Icons.add('star', Promise.resolve('<svg>star</svg>'))
    const result = await Icons.get('star')
    expect(result).toBe('<svg>star</svg>')
  })

  it('should add and retrieve an icon from a factory function', async () => {
    Icons.add('home', () => Promise.resolve('<svg>home</svg>'))
    const result = await Icons.get('home')
    expect(result).toBe('<svg>home</svg>')
  })

  it('should return a path for an unknown icon using @ prefix expansion', async () => {
    Icons.setUrl('/assets/svg/')
    const result = await Icons.get('unknown')
    // Falls back to url expansion: @unknown -> /assets/svg/unknown.svg
    expect(result).toContain('unknown')
    expect(result).toContain('.svg')
  })

  it('should check if an icon is registered (is)', () => {
    Icons.add('check', '<svg>check</svg>')
    expect(Icons.is('check')).toBe(true)
    expect(Icons.is('nonexistent')).toBe(false)
  })

  it('should return a list of registered icon names', () => {
    Icons.add('icon1', '<svg>1</svg>')
    Icons.add('icon2', '<svg>2</svg>')

    const names = Icons.getNameList()
    expect(names).toContain('icon1')
    expect(names).toContain('icon2')
  })

  it('should add icons by list', async () => {
    Icons.addByList({
      btn: '<svg>btn</svg>',
      close: '<svg>close</svg>'
    })

    expect(await Icons.get('btn')).toBe('<svg>btn</svg>')
    expect(await Icons.get('close')).toBe('<svg>close</svg>')
  })

  it('should change base URL via setUrl', () => {
    Icons.setUrl('/custom-icons/')
    expect(Icons.getUrlGlobal()).toContain('/custom-icons/')
  })

  it('should addGlobal prepend the global URL', () => {
    Icons.setUrl('/icons/')
    Icons.addGlobal('logo', 'logo.svg')

    expect(Icons.is('logo')).toBe(true)
  })

  it('should handle addLoad marker and eventually resolve', async () => {
    Icons.addLoad('lazy')
    expect(Icons.is('lazy')).toBe(true)

    // Register the actual icon after a brief delay
    setTimeout(() => {
      Icons.add('lazy', '<svg>lazy-loaded</svg>')
    }, 50)

    const result = await Icons.get('lazy', '', 1000)
    expect(result).toBe('<svg>lazy-loaded</svg>')
  }, 5000)

  it('should update configuration via setConfig', async () => {
    Icons.setConfig({
      url: '/config-icons/',
      list: {
        gear: '<svg>gear</svg>',
        wrench: '<svg>wrench</svg>'
      }
    })

    expect(Icons.getUrlGlobal()).toContain('/config-icons/')
    expect(await Icons.get('gear')).toBe('<svg>gear</svg>')
    expect(await Icons.get('wrench')).toBe('<svg>wrench</svg>')
  })
})
