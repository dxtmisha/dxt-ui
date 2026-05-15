import { promisify } from 'node:util'
import { exec } from 'node:child_process'

import { PackageFile } from '../classes/Package/PackageFile'
import { PropertiesFile } from '../classes/Properties/PropertiesFile'

const execAsync = promisify(exec)

/**
 * Executes a command for a specific package.
 *
 * Выполняет команду для конкретного пакета.
 * @param packageFile package file object / объект файла пакета
 * @param command command to execute / команда для выполнения
 * @param showStdout whether to show stdout in the console / нужно ли выводить stdout в консоль
 * @param showStderr whether to show stderr in the console / нужно ли выводить stderr в консоль
 */
export async function run(
  packageFile: PackageFile,
  command: string,
  showStdout: boolean = false,
  showStderr: boolean = false
): Promise<boolean> {
  const name = packageFile.getName()

  try {
    const { stdout, stderr } = await execAsync(command, {
      cwd: PropertiesFile.joinPath(packageFile.getDir())
    })

    console.log(`Command ${command} for ${name}`)

    if (stdout && showStdout) {
      console.log(stdout)
    }

    if (stderr && showStderr) {
      console.error(stderr)
    }

    return true
  } catch (error) {
    console.error(`Error command ${command} for ${name}:`, error)

    return false
  }
}
