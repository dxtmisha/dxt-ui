import { afterEach, describe, expect, it, vi } from 'vitest'
import { ComponentItem } from '../ComponentItem'
import { PropertiesFile } from '../../Properties/PropertiesFile'

class TestComponentItem extends ComponentItem {
  public testGetName() {
    return this.getName()
  }

  public testGetProjectName() {
    return this.getProjectName()
  }

  public testReplacement(content: string) {
    return this.replacement(content)
  }

  public testGetFilePath(path: string) {
    return this.getFilePath(path)
  }

  public testGetFilesSample() {
    return this.getFilesSample()
  }

  public setSample(sample: Record<string, string>) {
    this.sample = sample
  }
}

describe('ComponentItem', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('extracts component name from path', () => {
    const item = new TestComponentItem('src/components/MyButton')
    expect(item.testGetName()).toBe('MyButton')
  })

  it('reads project name from package.json or defaults to Project', () => {
    vi.spyOn(PropertiesFile, 'readFile').mockReturnValue({ name: '@dxtmisha/ui' })
    const item = new TestComponentItem('src/components/MyButton')
    expect(item.testGetProjectName()).toBe('@dxtmisha/ui')

    vi.spyOn(PropertiesFile, 'readFile').mockReturnValue(undefined)
    const itemDefault = new TestComponentItem('src/components/MyButton')
    expect(itemDefault.testGetProjectName()).toBe('Project')
  })

  it('replaces template placeholders correctly', () => {
    vi.spyOn(PropertiesFile, 'readFile').mockReturnValue({ name: 'my-project' })
    const item = new TestComponentItem('src/components/UserCard')

    const input = 'import { UserCard } from \'[project]\'\nconst cls = \'component-doc\'\n// [path]\n_.gitignore.txt'
    const result = item.testReplacement(input)

    expect(result).toContain('UserCard')
    expect(result).toContain('my-project')
    expect(result).toContain('user-card')
    expect(result).toContain('.gitignore')
    expect(result).toContain('src/components/UserCard')
  })

  it('generates and writes files for all sample templates in make()', () => {
    vi.spyOn(PropertiesFile, 'readFile').mockReturnValue({ name: 'my-project' })
    const writeSpy = vi.spyOn(PropertiesFile, 'writeByPath').mockImplementation(() => {})
    const chmodSpy = vi.spyOn(PropertiesFile, 'chmod').mockImplementation(() => {})

    const item = new TestComponentItem('src/components/CustomBadge')
    item.setSample({
      'ComponentDoc.vue': '<template><div class="component-doc">ComponentDoc</div></template>',
      '_.gitignore.txt': 'node_modules'
    })

    item.make()

    expect(writeSpy).toHaveBeenCalledTimes(2)
    expect(chmodSpy).toHaveBeenCalledTimes(2)
  })
})
