// @vitest-environment jsdom
import { describe, it, expect, beforeEach, vi } from 'vitest'
import { Icons } from '../Icons'

describe('Icons', () => {
  beforeEach(() => {
    Icons.reset()
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
    expect(result).toContain('unknown')
    expect(result).toContain('.svg')
  })

  it('should check if an icon is registered (is)', () => {
    Icons.add('check', '<svg>check</svg>')
    expect(Icons.is('check')).toBe(true)
    expect(Icons.is('@check')).toBe(true)
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
      button: '<svg>button</svg>',
      close: '<svg>close</svg>'
    })

    expect(await Icons.get('button')).toBe('<svg>button</svg>')
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
    expect(Icons.getAsync('logo')).toBe('/icons/logo.svg')
  })

  it('should handle addLoad marker and eventually resolve', async () => {
    Icons.addLoad('lazy')
    expect(Icons.is('lazy')).toBe(true)

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

  it('should return icon synchronously via getAsync if it is a string', () => {
    Icons.add('sync-icon', '<svg>sync</svg>')
    expect(Icons.getAsync('sync-icon')).toBe('<svg>sync</svg>')
  })

  it('should return empty string via getAsync if icon is not a string or is loading', () => {
    Icons.add('async-icon', Promise.resolve('<svg>async</svg>'))
    Icons.addLoad('loading-icon')

    expect(Icons.getAsync('async-icon')).toBe('')
    expect(Icons.getAsync('loading-icon')).toBe('')
  })

  it('should return raw icon data via getRaw', () => {
    const iconData = '<svg>raw</svg>'
    Icons.add('raw-icon', iconData)
    // @ts-expect-error: Testing protected static method getRaw
    const result = Icons.getRaw('raw-icon')
    expect(result).toBe(iconData)
  })

  it('should return svg path via getRaw for unknown icons', () => {
    // @ts-expect-error: Testing protected static method getRaw
    const result = Icons.getRaw('@unknown-raw', '/custom/')
    expect(result).toBe('/custom/unknown-raw.svg')
  })

  it('should cache resolved icon from factory function and not re-invoke factory', async () => {
    const factory = vi.fn(() => Promise.resolve('<svg>cached</svg>'))
    Icons.add('cached-icon', factory)

    const first = await Icons.get('cached-icon')
    const second = await Icons.get('cached-icon')

    expect(first).toBe('<svg>cached</svg>')
    expect(second).toBe('<svg>cached</svg>')
    expect(factory).toHaveBeenCalledTimes(1)
    expect(Icons.getAsync('cached-icon')).toBe('<svg>cached</svg>')
  })

  it('should return empty string instead of --LOAD-- when loading times out', async () => {
    Icons.addLoad('timed-out-icon')
    const result = await Icons.get('timed-out-icon', '', 0)
    expect(result).toBe('')
  })

  it('should reset registry via static reset()', () => {
    Icons.add('temporary', '<svg>temporary</svg>')
    Icons.addLoad('temporary-load')
    Icons.setUrl('/custom-path/')

    expect(Icons.is('temporary')).toBe(true)
    expect(Icons.is('temporary-load')).toBe(true)

    Icons.reset()

    expect(Icons.is('temporary')).toBe(false)
    expect(Icons.is('temporary-load')).toBe(false)
    expect(Icons.getUrlGlobal()).toBe('/icons/')
  })

  it('should resolve multiple concurrent get() callers when add() is invoked after addLoad()', async () => {
    Icons.addLoad('concurrent-icon')

    const promise1 = Icons.get('concurrent-icon')
    const promise2 = Icons.get('concurrent-icon')
    const promise3 = Icons.get('concurrent-icon')

    setTimeout(() => {
      Icons.add('concurrent-icon', '<svg>concurrent-resolved</svg>')
    }, 10)

    const [firstResult, secondResult, thirdResult] = await Promise.all([promise1, promise2, promise3])
    expect(firstResult).toBe('<svg>concurrent-resolved</svg>')
    expect(secondResult).toBe('<svg>concurrent-resolved</svg>')
    expect(thirdResult).toBe('<svg>concurrent-resolved</svg>')
  })

  it('should resolve addLoad() when addGlobal() is invoked', async () => {
    Icons.addLoad('global-deferred')

    setTimeout(() => {
      Icons.addGlobal('global-deferred', 'deferred.svg')
    }, 10)

    const result = await Icons.get('global-deferred')
    expect(result).toBe('/icons/deferred.svg')
  })
})
