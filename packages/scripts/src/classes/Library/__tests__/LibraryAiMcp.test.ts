import { afterEach, describe, expect, it, vi } from 'vitest'
import { LibraryAiMcp } from '../LibraryAiMcp'
import { LibraryAiMcpItem } from '../LibraryAiMcpItem'
import { PropertiesFile } from '../../Properties/PropertiesFile'

describe('LibraryAiMcp and LibraryAiMcpItem', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe('LibraryAiMcpItem', () => {
    it('checks existence and reads JSON definitions with isMcp() and make()', () => {
      const item = new LibraryAiMcpItem(['packages', 'core'])

      vi.spyOn(PropertiesFile, 'is').mockReturnValue(true)
      vi.spyOn(PropertiesFile, 'readFile').mockReturnValue([
        { uri: 'resource://core', name: 'Core Resources' }
      ])

      expect(item.isMcp()).toBe(true)
      expect(item.make()).toEqual([
        { uri: 'resource://core', name: 'Core Resources' }
      ])
    })

    it('returns undefined if mcp file does not exist or has empty data', () => {
      const item = new LibraryAiMcpItem(['packages', 'empty'])

      vi.spyOn(PropertiesFile, 'is').mockReturnValue(false)
      expect(item.isMcp()).toBe(false)
      expect(item.make()).toBeUndefined()
    })
  })

  describe('LibraryAiMcp', () => {
    it('initializes and reads provided source resources or JSON file', () => {
      const customResources = [
        { uri: 'resource://custom', name: 'Custom' }
      ]
      const mcp = new LibraryAiMcp(customResources)
      vi.spyOn(PropertiesFile, 'is').mockReturnValue(false)

      const res = mcp.getResources()
      expect(res).toEqual(customResources)
    })

    it('generates TypeScript resources file on make()', () => {
      const customResources = [
        {
          uri: 'resource://custom-pkg/types',
          name: 'Custom Package Types',
          path: './packages/custom-pkg/dist/types.d.ts',
          mimeType: 'text/plain'
        }
      ]
      const mcp = new LibraryAiMcp(customResources)
      vi.spyOn(PropertiesFile, 'is').mockReturnValue(false)
      const writeSpy = vi.spyOn(PropertiesFile, 'writeByPath').mockImplementation(() => {})

      mcp.make()
      expect(writeSpy).toHaveBeenCalledWith(
        expect.anything(),
        expect.stringContaining('export const mcpAllResources'),
        expect.anything()
      )
    })
  })
})
