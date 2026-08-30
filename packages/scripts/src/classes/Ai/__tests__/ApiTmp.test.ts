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

  it('cleans up only the temporary files created by the instance', () => {
    vi.spyOn(PropertiesFile, 'writeByPath').mockImplementation(() => {})
    const removeFileSpy = vi.spyOn(PropertiesFile, 'removeFile').mockImplementation(() => {})
    const removeDirSpy = vi.spyOn(PropertiesFile, 'removeDir').mockImplementation(() => {})

    const apiTmp = new ApiTmp()
    const result = apiTmp.createFile('Instruction to remove')
    const fileName = result.slice(result.indexOf('@') + 1)

    apiTmp.removeFile()

    expect(removeFileSpy).toHaveBeenCalledWith(fileName)
    expect(removeDirSpy).not.toHaveBeenCalled()

    removeFileSpy.mockClear()
    apiTmp.removeFile()
    expect(removeFileSpy).not.toHaveBeenCalled()
  })
})
