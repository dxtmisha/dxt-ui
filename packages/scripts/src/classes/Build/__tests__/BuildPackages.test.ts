import { describe, expect, it, vi, beforeEach } from 'vitest'
import { BuildPackages } from '../BuildPackages'
import { PropertiesFile } from '../../Properties/PropertiesFile'

vi.mock('../../Properties/PropertiesFile', () => ({
  PropertiesFile: {
    readFile: vi.fn(),
    readDir: vi.fn(),
    is: vi.fn(),
    joinPath: vi.fn(parts => parts.join('/')),
    writeByPath: vi.fn()
  }
}))

describe('BuildPackages', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe('getList', () => {
    it('should return packages sorted by ui-priority in ascending order', () => {
      // Mock directories under packages path
      vi.mocked(PropertiesFile.readDir).mockReturnValue(['package-high', 'package-medium', 'package-low'])

      // Mock that each contains a package.json
      vi.mocked(PropertiesFile.is).mockReturnValue(true)

      // Mock package.json data with different ui-priority values
      vi.mocked(PropertiesFile.readFile).mockImplementation((path: any) => {
        const pathStr = Array.isArray(path) ? path.join('/') : path
        if (pathStr.includes('package-high')) {
          return { 'name': 'package-high', 'ui-priority': 900 }
        }
        if (pathStr.includes('package-medium')) {
          return { 'name': 'package-medium', 'ui-priority': 250 }
        }
        if (pathStr.includes('package-low')) {
          return { 'name': 'package-low', 'ui-priority': 50 }
        }
        return {}
      })

      const builder = new BuildPackages('/mock/packages')
      const result = (builder as any).getList()

      expect(result.length).toBe(3)
      // Low priority number (50) should be first
      expect(result[0].getName()).toBe('package-low')
      // Medium priority number (250) should be second
      expect(result[1].getName()).toBe('package-medium')
      // High priority number (900) should be third
      expect(result[2].getName()).toBe('package-high')
    })

    it('should default priority to 500 when ui-priority is missing', () => {
      vi.mocked(PropertiesFile.readDir).mockReturnValue(['pkg-no-priority', 'pkg-priority-100', 'pkg-priority-900'])
      vi.mocked(PropertiesFile.is).mockReturnValue(true)

      vi.mocked(PropertiesFile.readFile).mockImplementation((path: any) => {
        const pathStr = Array.isArray(path) ? path.join('/') : path
        if (pathStr.includes('pkg-no-priority')) {
          return { name: 'pkg-no-priority' } // defaults to 500
        }
        if (pathStr.includes('pkg-priority-100')) {
          return { 'name': 'pkg-priority-100', 'ui-priority': 100 }
        }
        if (pathStr.includes('pkg-priority-900')) {
          return { 'name': 'pkg-priority-900', 'ui-priority': 900 }
        }
        return {}
      })

      const builder = new BuildPackages('/mock/packages')
      const result = (builder as any).getList()

      expect(result.length).toBe(3)
      expect(result[0].getName()).toBe('pkg-priority-100') // 100
      expect(result[1].getName()).toBe('pkg-no-priority') // 500
      expect(result[2].getName()).toBe('pkg-priority-900') // 900
    })
  })
})
