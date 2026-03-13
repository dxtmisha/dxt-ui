import { describe, expect, it, vi, beforeEach } from 'vitest'
import { ComponentItem } from '../ComponentItem'
import { PropertiesFile } from '../../Properties/PropertiesFile'
import { toKebabCase } from '@dxtmisha/functional-basic'

vi.mock('../../Properties/PropertiesFile', () => ({
  PropertiesFile: {
    splitForDir: vi.fn(path => path.split('/')),
    readFile: vi.fn(),
    writeByPath: vi.fn(),
    chmod: vi.fn(),
    readDirRecursive: vi.fn()
  }
}))

vi.mock('../../../functions/getComponentPaths', () => ({
  getComponentPaths: vi.fn(path => [path, 'full'])
}))

describe('ComponentItem', () => {
  let item: ComponentItem
  const mockPath = 'src/components/TestComponent'

  beforeEach(() => {
    vi.clearAllMocks()
    item = new ComponentItem(mockPath)
  })

  it('getName should return the last part of the path', () => {
    const name = (item as any).getName()
    expect(name).toBe('TestComponent')
    expect(PropertiesFile.splitForDir).toHaveBeenCalledWith(mockPath)
  })

  it('getProjectName should return package name or "Project"', () => {
    vi.mocked(PropertiesFile.readFile).mockReturnValue({ name: 'test-project' })
    const projectName = (item as any).getProjectName()
    expect(projectName).toBe('test-project')

    vi.mocked(PropertiesFile.readFile).mockReturnValue(undefined)
    expect((item as any).getProjectName()).toBe('Project')
  })

  it('replacement should replace placeholders correctly', () => {
    vi.mocked(PropertiesFile.readFile).mockReturnValue({ name: 'test-project' })
    const content = 'Name: ComponentDoc, kebab: component-doc, project: [project], path: [path]'
    const result = (item as any).replacement(content)

    expect(result).toContain('Name: TestComponent')
    expect(result).toContain(`kebab: ${toKebabCase('TestComponent')}`)
    expect(result).toContain('project: test-project')
    expect(result).toContain(`path: ${mockPath}`)
  })

  it('make should read templates and write files with replacements', () => {
    vi.mocked(PropertiesFile.readDirRecursive).mockReturnValue(['Template.ts'])
    vi.mocked(PropertiesFile.readFile).mockImplementation((path) => {
      if (Array.isArray(path) && path.includes('package.json')) return { name: 'test-project' }
      return 'export class ComponentDoc {}'
    })

    item.make()

    expect(PropertiesFile.readDirRecursive).toHaveBeenCalled()
    expect(PropertiesFile.writeByPath).toHaveBeenCalledWith(
      expect.arrayContaining([mockPath, 'Template.ts']),
      'export class TestComponent {}'
    )
    expect(PropertiesFile.chmod).toHaveBeenCalled()
  })
})
