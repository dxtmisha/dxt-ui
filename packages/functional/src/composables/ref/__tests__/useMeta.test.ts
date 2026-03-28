/**
 * @vitest-environment jsdom
 */

import { describe, it, expect, vi, beforeEach } from 'vitest'
import { nextTick } from 'vue'
import { MetaRobots } from '@dxtmisha/functional-basic'

// Mock Meta from functional-basic
const metaMocks = {
  getTitle: vi.fn(() => 'initial title'),
  getKeywords: vi.fn(() => 'initial keywords'),
  getDescription: vi.fn(() => 'initial description'),
  getImage: vi.fn(() => 'initial image'),
  getCanonical: vi.fn(() => 'initial canonical'),
  getRobots: vi.fn(() => 'all'),
  getAuthor: vi.fn(() => 'initial author'),
  getSiteName: vi.fn(() => 'initial site'),
  setTitle: vi.fn(),
  setKeywords: vi.fn(),
  setDescription: vi.fn(),
  setImage: vi.fn(),
  setCanonical: vi.fn(),
  setRobots: vi.fn(),
  setAuthor: vi.fn(),
  setSiteName: vi.fn(),
  setSuffix: vi.fn(),
  html: vi.fn(() => '<meta ...>')
}

vi.mock('@dxtmisha/functional-basic', () => ({
  Meta: vi.fn().mockImplementation(function (this: any) {
    return metaMocks
  }),
  MetaRobots: {
    all: 'all',
    none: 'none',
    noIndexFollow: 'noindex, follow'
  },
  random: vi.fn((min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min),
  getElementId: vi.fn(() => 'test-id'),
  isDomRuntime: vi.fn(() => true)
}))

import { useMeta } from '../useMeta'

describe('useMeta', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should initialize with values from Meta instance', () => {
    const { title, description } = useMeta()

    expect(title.value).toBe('initial title')
    expect(description.value).toBe('initial description')
    expect(metaMocks.getTitle).toHaveBeenCalled()
  })

  it('should update Meta instance when refs change', async () => {
    const { title, description } = useMeta()

    title.value = 'updated title'
    await nextTick()
    expect(metaMocks.setTitle).toHaveBeenCalledWith('updated title')

    description.value = 'updated description'
    await nextTick()
    expect(metaMocks.setDescription).toHaveBeenCalledWith('updated description')
  })

  it('should return html meta via getHtmlMeta', () => {
    const { getHtmlMeta } = useMeta()
    expect(getHtmlMeta()).toBe('<meta ...>')
    expect(metaMocks.html).toHaveBeenCalled()
  })

  it('should call setSuffix via setSuffix', () => {
    const { setSuffix } = useMeta()
    setSuffix(' - Suf')
    expect(metaMocks.setSuffix).toHaveBeenCalledWith(' - Suf')
  })

  it('should update Meta instance for all reactive properties', async () => {
    const { keyword, image, canonical, robots, author, siteName } = useMeta()

    keyword.value = 'more updated keywords'
    await nextTick()
    expect(metaMocks.setKeywords).toHaveBeenCalledWith('more updated keywords')

    image.value = 'more updated image'
    await nextTick()
    expect(metaMocks.setImage).toHaveBeenCalledWith('more updated image')

    canonical.value = 'more updated canonical'
    await nextTick()
    expect(metaMocks.setCanonical).toHaveBeenCalledWith('more updated canonical')

    robots.value = MetaRobots.none as any
    await nextTick()
    expect(metaMocks.setRobots).toHaveBeenCalledWith('none')

    author.value = 'more updated author'
    await nextTick()
    expect(metaMocks.setAuthor).toHaveBeenCalledWith('more updated author')

    siteName.value = 'more updated site'
    await nextTick()
    expect(metaMocks.setSiteName).toHaveBeenCalledWith('more updated site')
  })
})
