import { afterEach, describe, expect, it, vi } from 'vitest'
import { FigmaApi } from '../FigmaApi'
import { FigmaApiEndpoint } from '../../types/figmaApiTypes'

describe('FigmaApi', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('constructs correct API URLs with endpoints and query parameters', () => {
    const api = new FigmaApi('token-xyz', 'file-123', '0:1')

    const filesUrl = api.getUrl(FigmaApiEndpoint.files, { version: '2' })
    expect(filesUrl).toContain('https://api.figma.com/v1/files/file-123')
    expect(filesUrl).toContain('node-id=0%3A1')
    expect(filesUrl).toContain('version=2')

    const stylesUrl = api.getUrl(FigmaApiEndpoint.styles, undefined, 'style-abc')
    expect(stylesUrl).toContain('https://api.figma.com/v1/styles/style-abc')
  })

  it('supports chaining setters for token, fileKey, and nodeId', () => {
    const api = new FigmaApi('old-token', 'old-file')
    api
      .setToken('new-token')
      .setFileKey('new-file')
      .setNodeId('10:20')

    const url = api.getUrl(FigmaApiEndpoint.files)
    expect(url).toContain('files/new-file')
    expect(url).toContain('node-id=10%3A20')
  })

  it('makes fetch calls with headers and returns parsed JSON on success', async () => {
    const api = new FigmaApi('token-abc', 'file-123')
    const mockData = { name: 'My Figma File', document: {} }

    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => mockData
    } as any)

    const result = await api.files()
    expect(result).toEqual(mockData)
    expect(global.fetch).toHaveBeenCalledWith(
      expect.stringContaining('files/file-123'),
      {
        method: 'GET',
        headers: {
          'X-Figma-Token': 'token-abc',
          'Content-Type': 'application/json'
        }
      }
    )
  })

  it('returns undefined and logs error when fetch fails', async () => {
    const api = new FigmaApi('token-abc', 'file-123')
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {})

    global.fetch = vi.fn().mockResolvedValue({
      ok: false,
      status: 404,
      statusText: 'Not Found'
    } as any)

    const result = await api.files()
    expect(result).toBeUndefined()
    expect(consoleSpy).toHaveBeenCalledWith(
      expect.stringContaining('Error fetching Figma API: 404 Not Found')
    )
  })
})
