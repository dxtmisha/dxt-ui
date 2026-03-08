/**
 * @vitest-environment jsdom
 */

import { describe, it, expect, vi, beforeEach } from 'vitest'
import { nextTick } from 'vue'

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
  html: vi.fn(() => '<meta ...>')
}

vi.mock('@dxtmisha/functional-basic', () => ({
  Meta: vi.fn().mockImplementation(function (this: any) {
    return metaMocks
  }),
  MetaRobots: {
    all: 'all',
    none: 'none'
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

    title.value = 'new title'
    await nextTick()
    expect(metaMocks.setTitle).toHaveBeenCalledWith('new title')

    description.value = 'new description'
    await nextTick()
    expect(metaMocks.setDescription).toHaveBeenCalledWith('new description')
  })

  it('should return html meta via getHtmlMeta', () => {
    const { getHtmlMeta } = useMeta()
    expect(getHtmlMeta()).toBe('<meta ...>')
    expect(metaMocks.html).toHaveBeenCalled()
  })
})
