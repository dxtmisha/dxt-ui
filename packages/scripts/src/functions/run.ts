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
 */
export async function run(
  packageFile: PackageFile,
  command: string,
  showStdout: boolean = false
): Promise<boolean> {
  const name = packageFile.getName()

  try {
    const { stdout, stderr } = await execAsync(command, {
      cwd: PropertiesFile.joinPath(packageFile.getDir())
    })

    if (showStdout) {
      console.log(`Command ${command} for ${name}`)

      if (stdout) {
        console.log(stdout)
      }
    }

    if (stderr) {
      console.error(`Error command ${command} for ${name}:`, stderr)
      return false
    }

    return true
  } catch (error) {
    console.error(`Error command ${command} for ${name}:`, error)

    return false
  }
}
