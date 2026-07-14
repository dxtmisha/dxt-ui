/**
 * @vitest-environment jsdom
 */

import { describe, it, expect, vi, beforeEach } from 'vitest'
import { nextTick } from 'vue'
import { MetaRobots } from '@dxtmisha/functional-basic'

// Mock Meta from functional-basic
const mockMeta = vi.hoisted(() => ({
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
}))

vi.mock('@dxtmisha/functional-basic', async (importOriginal) => {
  const actual = await importOriginal() as any
  return {
    ...actual,
    Meta: vi.fn().mockImplementation(function (this: any) {
      return mockMeta
    }),
    MetaStatic: {
      getItem: vi.fn(() => mockMeta)
    },
    MetaRobots: {
      all: 'all',
      none: 'none',
      noIndexFollow: 'noindex, follow'
    },
    random: vi.fn((min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min),
    getElementId: vi.fn(() => 'test-id'),
    isDomRuntime: vi.fn(() => true)
  }
})

import { useMeta } from '../useMeta'

describe('useMeta', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should initialize with values from Meta instance', () => {
    const { title, description } = useMeta()

    expect(title.value).toBe('initial title')
    expect(description.value).toBe('initial description')
    expect(mockMeta.getTitle).toHaveBeenCalled()
  })

  it('should update Meta instance when refs change', async () => {
    const { title, description } = useMeta()

    title.value = 'updated title'
    await nextTick()
    expect(mockMeta.setTitle).toHaveBeenCalledWith('updated title')

    description.value = 'updated description'
    await nextTick()
    expect(mockMeta.setDescription).toHaveBeenCalledWith('updated description')
  })

  it('should return html meta via getHtmlMeta', () => {
    const { getHtmlMeta } = useMeta()
    expect(getHtmlMeta()).toBe('<meta ...>')
    expect(mockMeta.html).toHaveBeenCalled()
  })

  it('should call setSuffix via setSuffix', () => {
    const { setSuffix } = useMeta()
    setSuffix(' - Suf')
    expect(mockMeta.setSuffix).toHaveBeenCalledWith(' - Suf')
  })

  it('should update Meta instance for all reactive properties', async () => {
    const { keyword, image, canonical, robots, author, siteName } = useMeta()

    keyword.value = 'more updated keywords'
    await nextTick()
    expect(mockMeta.setKeywords).toHaveBeenCalledWith('more updated keywords')

    image.value = 'more updated image'
    await nextTick()
    expect(mockMeta.setImage).toHaveBeenCalledWith('more updated image')

    canonical.value = 'more updated canonical'
    await nextTick()
    expect(mockMeta.setCanonical).toHaveBeenCalledWith('more updated canonical')

    robots.value = MetaRobots.none as any
    await nextTick()
    expect(mockMeta.setRobots).toHaveBeenCalledWith('none')

    author.value = 'more updated author'
    await nextTick()
    expect(mockMeta.setAuthor).toHaveBeenCalledWith('more updated author')

    siteName.value = 'more updated site'
    await nextTick()
    expect(siteName.value).toBe('more updated site')
    expect(mockMeta.setSiteName).toHaveBeenCalledWith('more updated site')
  })

  it('should update values via setter methods', async () => {
    const { setTitle, setKeywords, setDescription } = useMeta()

    setTitle('title from setter')
    await nextTick()
    expect(mockMeta.setTitle).toHaveBeenCalledWith('title from setter')

    setKeywords('keywords from setter')
    await nextTick()
    expect(mockMeta.setKeywords).toHaveBeenCalledWith('keywords from setter')

    setDescription('description from setter')
    await nextTick()
    expect(mockMeta.setDescription).toHaveBeenCalledWith('description from setter')
  })

  it('should synchronize reactive values with Meta instance via sync()', async () => {
    const { title, sync } = useMeta()

    mockMeta.getTitle.mockReturnValue('new title from meta')
    sync()

    expect(title.value).toBe('new title from meta')
  })

  it('should call update() on Meta instance when update is called', () => {
    const { update } = useMeta()
    update()
    expect(mockMeta.setTitle).toHaveBeenCalled()
  })
})
