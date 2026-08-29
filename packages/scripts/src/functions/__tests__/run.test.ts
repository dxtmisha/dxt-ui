import { beforeEach, describe, expect, it, vi } from 'vitest'
import { PackageFile } from '../../classes/Package/PackageFile'

const { mockExec } = vi.hoisted(() => {
  const fn: any = vi.fn()
  fn[Symbol.for('nodejs.util.promisify.custom')] = vi.fn()
  return { mockExec: fn }
})

vi.mock('node:child_process', async (importOriginal) => {
  const actual = await importOriginal<typeof import('node:child_process')>()
  return {
    ...actual,
    default: {
      ...actual,
      exec: mockExec
    },
    exec: mockExec
  }
})

import { run } from '../run'

describe('run', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('executes command in the package directory and logs output on success', async () => {
    const mockPackageFile = new PackageFile(['packages', 'scripts'])
    vi.spyOn(mockPackageFile, 'getName').mockReturnValue('scripts')
    vi.spyOn(mockPackageFile, 'getDir').mockReturnValue(['packages', 'scripts'])

    mockExec[Symbol.for('nodejs.util.promisify.custom')].mockResolvedValue({ stdout: 'build success', stderr: '' })

    const logSpy = vi.spyOn(console, 'log').mockImplementation(() => {})

    const success = await run(mockPackageFile, 'npm run build', true, false)

    expect(success).toBe(true)
    expect(logSpy).toHaveBeenCalledWith('Command npm run build for scripts')
    expect(logSpy).toHaveBeenCalledWith('build success')
  })

  it('handles command failure and logs error', async () => {
    const mockPackageFile = new PackageFile(['packages', 'scripts'])
    vi.spyOn(mockPackageFile, 'getName').mockReturnValue('scripts')

    mockExec[Symbol.for('nodejs.util.promisify.custom')].mockRejectedValue(new Error('Command failed'))

    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {})

    const success = await run(mockPackageFile, 'npm run build', false, true)

    expect(success).toBe(false)
    expect(errorSpy).toHaveBeenCalled()
  })
})
