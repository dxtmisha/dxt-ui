import { execSync } from 'node:child_process'
import ts from 'typescript'
import { isFilled, toArray } from '@dxtmisha/functional-basic'

import { PropertiesConfig } from '../Properties/PropertiesConfig'
import { PropertiesFile } from '../Properties/PropertiesFile'
import { DesignTypesBuildAbstract } from './DesignTypesBuildAbstract'

/**
 * Engine for compiling TypeScript and Vue source files into declaration (.d.ts) files within a temporary directory.
 *
 * Движок для компиляции исходных файлов TypeScript и Vue в файлы деклараций (.d.ts) во временной директории.
 */
export class DesignTypesBuild extends DesignTypesBuildAbstract {
  /** Cached parsed TypeScript configuration / Кэшированная распарсенная конфигурация TypeScript */
  protected configuration?: ts.ParsedCommandLine

  /**
   * Constructor for DesignTypesBuild.
   *
   * Конструктор для DesignTypesBuild.
   * @param temporaryDirectory directory path for storing temporary declaration files / путь к директории для хранения временных файлов деклараций
   */
  constructor(
    temporaryDirectory: string = PropertiesConfig.getTypesTemporaryDirectory()
  ) {
    super(temporaryDirectory)
  }

  /**
   * Checks if the temporary compilation directory exists.
   *
   * Проверяет, существует ли временная директория компиляции.
   * @returns true if temporary directory exists / true, если временная директория существует
   */
  is(): boolean {
    return PropertiesFile.is(this.getTemporaryDirectory())
  }

  /**
   * Checks if the project contains Vue Single File Components (.vue).
   *
   * Проверяет, содержит ли проект компоненты Vue (.vue).
   * @returns true if project contains Vue files / true, если проект содержит файлы Vue
   */
  isVue(): boolean {
    if (PropertiesConfig.isTypesWithoutVue()) {
      return false
    }

    const typesPaths = PropertiesConfig.getTypesPaths()
    const paths = isFilled(typesPaths) ? typesPaths : ['src']

    for (const directory of paths) {
      const sourceDirectory = this.resolveDirectory(directory)

      if (PropertiesFile.is(sourceDirectory)) {
        const files = PropertiesFile.readDirRecursive(sourceDirectory)

        for (const file of files) {
          const fullPath = PropertiesFile.joinPath([sourceDirectory, file])

          if (file.endsWith('.vue') && this.isAllowed(fullPath)) {
            return true
          }
        }
      }
    }

    return false
  }

  /**
   * Compiles declarations into the temporary directory. Automatically selects vue-tsc for Vue projects, or TypeScript compiler otherwise.
   *
   * Компилирует декларации во временную директорию. Автоматически выбирает vue-tsc для Vue проектов или компилятор TypeScript в противном случае.
   * @returns current instance / текущий экземпляр
   */
  build(): this {
    this.clean()

    if (this.isVue()) {
      this.buildVue()
    } else {
      this.buildTs()
    }

    return this
  }

  /**
   * Removes the temporary compilation directory and all its contents.
   *
   * Удаляет временную директорию компиляции и все ее содержимое.
   * @returns current instance / текущий экземпляр
   */
  clean(): this {
    const temporaryDirectory = this.getTemporaryDirectory()

    if (PropertiesFile.is(temporaryDirectory)) {
      PropertiesFile.removeDir(temporaryDirectory)
    }

    return this
  }

  /**
   * Checks if the file matches all configured type scanning filters (extension, paths, match, exclude).
   *
   * Проверяет, соответствует ли файл всем настроенным фильтрам сканирования типов (расширение, пути, соответствие, исключение).
   * @param file file path / путь к файлу
   * @returns true if file is allowed for compilation / true, если файл разрешен для компиляции
   */
  protected isAllowed(file: string): boolean {
    return this.isFileTs(file)
      && this.isPath(file)
      && this.isMatch(file)
      && !this.isExclude(file)
  }

  /**
   * Checks if the emitted declaration file is valid and should be retained in the temporary directory.
   *
   * Проверяет, является ли сгенерированный файл декларации валидным и должен ли быть сохранен во временной директории.
   * @param file relative file path within temporary directory / относительный путь к файлу во временной директории
   * @returns true if file is allowed / true, если файл разрешен
   */
  protected isAllowedDeclaration(file: string): boolean {
    return this.isFileDts(file)
      && !file.endsWith('main.d.ts')
      && !file.endsWith('App.d.ts')
      && !this.isFileTest(file)
      && this.isPath(file)
      && this.isMatch(file)
      && !this.isExclude(file)
  }

  /**
   * Checks if the file path matches the exclusion pattern configured in design-ui.json.
   *
   * Проверяет, соответствует ли путь к файлу шаблону исключения, настроенному в design-ui.json.
   * @param file file path / путь к файлу
   * @returns true if matched and should be excluded / true, если путь соответствует и должен быть исключен
   */
  protected isExclude(file: string): boolean {
    return this.isPattern(file, PropertiesConfig.getTypesExclude())
  }

  /**
   * Checks if the file is a TypeScript declaration file (.d.ts).
   *
   * Проверяет, является ли файл файлом деклараций TypeScript (.d.ts).
   * @param file file name or path / имя или путь к файлу
   * @returns true if file is a declaration file / true, если файл является файлом деклараций
   */
  protected isFileDts(file: string): boolean {
    return file.endsWith('.d.ts')
  }

  /**
   * Checks if the file is a test, spec, or storybook file.
   *
   * Проверяет, является ли файл тестом, спецификацией или файлом storybook.
   * @param file file name or path / имя или путь к файлу
   * @returns true if file is a test or story / true, если файл является тестом или storybook
   */
  protected isFileTest(file: string): boolean {
    return file.includes('__tests__')
      || Boolean(file.match(/\.(test|spec|stories)\.(ts|tsx|js|vue|d\.ts)$/))
  }

  /**
   * Checks if the file is a valid TypeScript, JavaScript, or Vue source file for compilation.
   *
   * Проверяет, является ли файл валидным исходным файлом TypeScript, JavaScript или Vue для компиляции.
   * @param file file name or path / имя или путь к файлу
   * @returns true if file is a source file / true, если файл является исходным файлом
   */
  protected isFileTs(file: string): boolean {
    return Boolean(
      (
        file.endsWith('.ts')
        || file.endsWith('.tsx')
        || file.endsWith('.js')
        || file.endsWith('.vue')
      )
      && !this.isFileDts(file)
      && !this.isFileTest(file)
    )
  }

  /**
   * Checks if the file path matches the inclusion pattern configured in design-ui.json.
   *
   * Проверяет, соответствует ли путь к файлу шаблону включения, настроенному в design-ui.json.
   * @param file file path / путь к файлу
   * @returns true if matched or if pattern is not specified / true, если путь соответствует или шаблон не указан
   */
  protected isMatch(file: string): boolean {
    const pattern = PropertiesConfig.getTypesMatch()

    return !isFilled(pattern)
      || this.isPattern(file, pattern)
  }

  /**
   * Checks if the file path starts with or is contained within any of the directory paths configured in design-ui.json.
   *
   * Проверяет, начинается ли путь к файлу с одного из путей директорий, настроенных в design-ui.json, или содержится ли в них.
   * @param file file path / путь к файлу
   * @returns true if path is allowed or if paths list is not specified / true, если путь разрешен или список путей не указан
   */
  protected isPath(file: string): boolean {
    const paths = PropertiesConfig.getTypesPaths()

    if (!isFilled(paths)) {
      return true
    }

    return paths.some((path) => {
      const normalizedPath = path.replace(/^[./\\]+/, '').replace(/[/\\]+$/, '')
      const pathWithoutSrc = normalizedPath.replace(/^src[/\\]/, '')

      return file.startsWith(normalizedPath)
        || file.startsWith(`./${normalizedPath}`)
        || file.startsWith(pathWithoutSrc)
        || file.startsWith(`./${pathWithoutSrc}`)
        || file.includes(`/${normalizedPath}/`)
        || file.includes(`\\${normalizedPath}\\`)
        || file.includes(`/${pathWithoutSrc}/`)
        || file.includes(`\\${pathWithoutSrc}\\`)
    })
  }

  /**
   * Checks if the file path matches a given string or regular expression pattern.
   *
   * Проверяет, соответствует ли путь к файлу заданной строке или шаблону регулярного выражения.
   * @param file file path / путь к файлу
   * @param pattern pattern or list of patterns / шаблон или список шаблонов
   * @returns true if file matches the pattern / true, если файл соответствует шаблону
   */
  protected isPattern(
    file: string,
    pattern?: string | string[]
  ): boolean {
    if (!isFilled(pattern)) {
      return false
    }

    return toArray(pattern)
      .some((item) => {
        try {
          return new RegExp(item).test(file)
        } catch {
          return file.includes(item)
        }
      })
  }

  /**
   * Returns the path to the temporary compilation directory.
   *
   * Возвращает путь к временной директории компиляции.
   * @returns temporary compilation directory path / путь к временной директории компиляции
   */
  protected getTemporaryDirectory(): string {
    return this.temporaryDirectory
  }

  /**
   * Returns the TypeScript configuration file name if present in the project.
   *
   * Возвращает имя файла конфигурации TypeScript, если он присутствует в проекте.
   * @returns configuration file name or undefined / имя файла конфигурации или undefined
   */
  protected getTsConfigName(): string | undefined {
    if (PropertiesFile.is('tsconfig.app.json')) {
      return 'tsconfig.app.json'
    }

    if (PropertiesFile.is('tsconfig.json')) {
      return 'tsconfig.json'
    }

    return undefined
  }

  /**
   * Retrieves parsed TypeScript configuration for the current package.
   *
   * Получает распарсенную конфигурацию TypeScript для текущего пакета.
   * @returns parsed command line configuration or undefined / распарсенная конфигурация командной строки или undefined
   */
  protected getTsConfiguration(): ts.ParsedCommandLine | undefined {
    if (this.configuration) {
      return this.configuration
    }

    const root = PropertiesFile.getRoot()
    const configName = this.getTsConfigName()

    if (configName) {
      const configPath = ts.findConfigFile(root, ts.sys.fileExists, configName)

      if (configPath) {
        const configFile = ts.readConfigFile(configPath, ts.sys.readFile)

        if (!configFile.error) {
          this.configuration = ts.parseJsonConfigFileContent(
            configFile.config,
            ts.sys,
            PropertiesFile.getPathDir(configPath),
            undefined,
            configPath,
            undefined,
            [{ extension: '.vue', isMixedContent: true, scriptKind: ts.ScriptKind.Deferred }]
          )

          return this.configuration
        }
      }
    }

    return undefined
  }

  /**
   * Gets the list of TypeScript and Vue source files to compile, filtered by config rules.
   *
   * Получает список исходных файлов TypeScript и Vue для компиляции, отфильтрованный по правилам конфигурации.
   * @returns array of source file paths / массив путей к исходным файлам
   */
  protected getTsSourceFiles(): string[] {
    const parsedConfiguration = this.getTsConfiguration()

    if (
      parsedConfiguration
      && parsedConfiguration.fileNames.length > 0
    ) {
      return parsedConfiguration.fileNames.filter(fileName => this.isAllowed(fileName))
    }

    const typesPaths = PropertiesConfig.getTypesPaths()
    const paths = isFilled(typesPaths) ? typesPaths : ['src']
    const result: string[] = []

    for (const directory of paths) {
      const sourceDirectory = this.resolveDirectory(directory)

      if (PropertiesFile.is(sourceDirectory)) {
        const files = PropertiesFile.readDirRecursive(sourceDirectory)

        for (const file of files) {
          const fullPath = PropertiesFile.joinPath([sourceDirectory, file])

          if (this.isAllowed(fullPath)) {
            result.push(fullPath)
          }
        }
      }
    }

    return result
  }

  /**
   * Compiles TypeScript declarations using TypeScript Compiler API.
   *
   * Компилирует декларации TypeScript с помощью TypeScript Compiler API.
   * @returns current instance / текущий экземпляр
   */
  protected buildTs(): this {
    const temporaryDirectory = this.getTemporaryDirectory()
    const parsedConfiguration = this.getTsConfiguration()
    const sourceFiles = this.getTsSourceFiles()

    if (sourceFiles.length > 0) {
      const rootDir = parsedConfiguration?.options?.rootDir
        ?? (PropertiesFile.is('src') ? 'src' : undefined)

      const compilerOptions: ts.CompilerOptions = {
        ...(parsedConfiguration?.options ?? {}),
        declaration: true,
        emitDeclarationOnly: true,
        noEmit: false,
        outDir: temporaryDirectory,
        ...(rootDir ? { rootDir } : {})
      }

      const host = ts.createCompilerHost(compilerOptions)
      const program = ts.createProgram(sourceFiles, compilerOptions, host)

      program.emit()
      this.cleanExcess()
    }

    return this
  }

  /**
   * Compiles Vue and TypeScript declarations using vue-tsc.
   *
   * Компилирует декларации Vue и TypeScript с помощью vue-tsc.
   * @returns current instance / текущий экземпляр
   */
  protected buildVue(): this {
    const configName = this.getTsConfigName()

    if (configName) {
      const temporaryDirectory = this.getTemporaryDirectory()
      const command = `npx vue-tsc -p ${configName} --declaration --emitDeclarationOnly --outDir ${temporaryDirectory} --noEmit false --rootDir src --noEmitOnError false`

      try {
        execSync(command, {
          cwd: PropertiesFile.getRoot(),
          stdio: 'pipe'
        })
      } catch (error) {
        console.warn('DesignTypesBuild: vue-tsc compilation executed with output', error)
      }

      this.cleanExcess()
    } else {
      this.buildTs()
    }

    return this
  }

  /**
   * Cleans excess declaration files in the temporary directory after Vue compilation.
   *
   * Очищает лишние файлы деклараций во временной директории после компиляции Vue.
   * @returns current instance / текущий экземпляр
   */
  protected cleanExcess(): this {
    const temporaryDirectory = this.getTemporaryDirectory()

    if (PropertiesFile.is(temporaryDirectory)) {
      const files = PropertiesFile.readDirRecursive(temporaryDirectory)

      for (const file of files) {
        if (!this.isAllowedDeclaration(file)) {
          PropertiesFile.removeFile([temporaryDirectory, file])
        }
      }
    }

    return this
  }

  /**
   * Resolves a configured directory path to an existing filesystem path.
   *
   * Разрешает путь к настроенной директории в существующий путь в файловой системе.
   * @param directory directory path to resolve / путь к директории для разрешения
   * @returns resolved directory path / разрешенный путь к директории
   */
  protected resolveDirectory(directory: string): string {
    const cleanDir = directory.replace(/^[./\\]+/, '').replace(/[/\\]+$/, '')

    if (PropertiesFile.is(cleanDir)) {
      return cleanDir
    }

    const srcDir = PropertiesFile.joinPath(['src', cleanDir])

    if (PropertiesFile.is(srcDir)) {
      return srcDir
    }

    return PropertiesFile.joinPath(cleanDir)
  }
}
