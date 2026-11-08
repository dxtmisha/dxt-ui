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

let domRuntime = true

vi.mock('@dxtmisha/functional-basic', async (importOriginal) => {
  const actual = await importOriginal<typeof import('@dxtmisha/functional-basic')>()
  return {
    ...actual,
    Meta: vi.fn().mockImplementation(function () {
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
    isDomRuntime: vi.fn(() => domRuntime)
  }
})

import { useMeta } from '../useMeta'

describe('useMeta', () => {
  beforeEach(() => {
    domRuntime = true
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

  it('should batch browser ref changes into one update', async () => {
    const { title, description } = useMeta()
    await nextTick()
    vi.clearAllMocks()

    title.value = 'batched title'
    description.value = 'batched description'
    title.value = 'final batched title'
    expect(mockMeta.setTitle).not.toHaveBeenCalled()
    expect(mockMeta.setDescription).not.toHaveBeenCalled()

    await nextTick()
    expect(mockMeta.setTitle).toHaveBeenCalledExactlyOnceWith('final batched title')
    expect(mockMeta.setDescription).toHaveBeenCalledExactlyOnceWith('batched description')
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

    robots.value = MetaRobots.none
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
    const {
      setTitle,
      setKeywords,
      setDescription,
      setImage,
      setCanonical,
      setRobots,
      setAuthor,
      setSiteName
    } = useMeta()

    setTitle('title from setter')
    await nextTick()
    expect(mockMeta.setTitle).toHaveBeenCalledWith('title from setter')

    setKeywords('keywords from setter')
    await nextTick()
    expect(mockMeta.setKeywords).toHaveBeenCalledWith('keywords from setter')

    setDescription('description from setter')
    await nextTick()
    expect(mockMeta.setDescription).toHaveBeenCalledWith('description from setter')

    setImage('https://example.com/image.png')
    await nextTick()
    expect(mockMeta.setImage).toHaveBeenCalledWith('https://example.com/image.png')

    setCanonical('https://example.com/canonical')
    await nextTick()
    expect(mockMeta.setCanonical).toHaveBeenCalledWith('https://example.com/canonical')

    setRobots(MetaRobots.noIndexFollow)
    await nextTick()
    expect(mockMeta.setRobots).toHaveBeenCalledWith('noindex, follow')

    setAuthor('author from setter')
    await nextTick()
    expect(mockMeta.setAuthor).toHaveBeenCalledWith('author from setter')

    setSiteName('siteName from setter')
    await nextTick()
    expect(mockMeta.setSiteName).toHaveBeenCalledWith('siteName from setter')
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

  it('should synchronously update MetaStatic during SSR via setTitle and updateSsr when isDomRuntime is false', () => {
    domRuntime = false
    const { setTitle, updateSsr } = useMeta()
    vi.clearAllMocks()

    setTitle('ssr title')
    expect(mockMeta.setTitle).toHaveBeenCalledWith('ssr title')

    vi.clearAllMocks()
    updateSsr()
    expect(mockMeta.setTitle).toHaveBeenCalledWith('ssr title')
  })
})
