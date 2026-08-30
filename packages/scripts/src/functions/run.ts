import { promisify } from 'node:util'
import { execFile } from 'node:child_process'

import { PackageFile } from '../classes/Package/PackageFile'
import { PropertiesFile } from '../classes/Properties/PropertiesFile'

const execFileAsync = promisify(execFile)

/**
 * Executes a shell command inside the directory of a specific package and logs output.
 *
 * Выполняет команду оболочки внутри директории конкретного пакета и логирует вывод.
 * @param packageFile target package file wrapper instance / экземпляр обертки файла целевого пакета
 * @param command shell command string to execute / строка команды оболочки для выполнения
 * @param showStdout whether to output stdout to the console / выводить ли стандартный вывод в консоль
 * @param showStderr whether to output stderr to the console / выводить ли стандартный поток ошибок в консоль
 * @returns promise resolving to true if command succeeded, false otherwise / промис, возвращающий true при успешном выполнении, иначе false
 */
export async function run(
  packageFile: PackageFile,
  command: string,
  showStdout: boolean = false,
  showStderr: boolean = false
): Promise<boolean> {
  const name = packageFile.getName()
  const [executable, ...args] = command.split(' ')

  try {
    const { stdout, stderr } = await execFileAsync(executable, args, {
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
