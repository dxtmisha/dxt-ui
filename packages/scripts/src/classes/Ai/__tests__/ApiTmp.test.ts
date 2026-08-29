import { afterEach, describe, expect, it, vi } from 'vitest'
import { ApiTmp } from '../ApiTmp'
import { PropertiesFile } from '../../Properties/PropertiesFile'

describe('ApiTmp', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('creates temporary prompt files with incremented IDs and formatted CLI instruction', () => {
    const writeSpy = vi.spyOn(PropertiesFile, 'writeByPath').mockImplementation(() => {})

    const apiTmp = new ApiTmp()
    const result1 = apiTmp.createFile('First prompt instruction')

    expect(writeSpy).toHaveBeenCalledWith('./ai-tmp/Prompt-1.txt', 'First prompt instruction')
    expect(result1).toBe('Please read the following file as it contains the prompt instructions: @./ai-tmp/Prompt-1.txt')

    const result2 = apiTmp.createFile('Second prompt instruction')
    expect(writeSpy).toHaveBeenCalledWith('./ai-tmp/Prompt-2.txt', 'Second prompt instruction')
    expect(result2).toBe('Please read the following file as it contains the prompt instructions: @./ai-tmp/Prompt-2.txt')
  })

  it('cleans up temporary directory via PropertiesFile.removeDir', () => {
    const removeDirSpy = vi.spyOn(PropertiesFile, 'removeDir').mockImplementation(() => {})

    const apiTmp = new ApiTmp()
    apiTmp.removeFile()

    expect(removeDirSpy).toHaveBeenCalledWith('./ai-tmp')
  })
})
