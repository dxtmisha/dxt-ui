import { forEach } from '@dxt-ui/functional'
import ts from 'typescript'

import type {
  DesignTypescriptItem,
  DesignTypescriptList,
  DesignTypescriptProp,
  DesignTypescriptProps
} from '../../types/designTypes.ts'

/**
 * Class for working with TypeScript types
 *
 * Класс для работы с типами TypeScript
 */
export class DesignTypescript {
  protected readonly program: ts.Program
  protected readonly checker: ts.TypeChecker
  protected readonly sourceFile?: ts.SourceFile
  protected types?: DesignTypescriptList

  constructor(
    path: string = '',
    options: ts.CompilerOptions = {}
  ) {
    this.program = ts.createProgram([path], options)
    this.checker = this.program.getTypeChecker()
    this.sourceFile = this.program.getSourceFiles().find(source => source.fileName.endsWith(path))
  }

  /**
   * Returns the TypeScript types from the source file
   *
   * Возвращает типы TypeScript из исходного файла
   */
  getTypes(): DesignTypescriptList {
    if (!this.types && this.sourceFile) {
      const data: DesignTypescriptList = []

      ts.forEachChild(
        this.sourceFile,
        (node) => {
          if (
            ts.isTypeAliasDeclaration(node)
            || ts.isInterfaceDeclaration(node)
          ) {
            const type = this.checker.getTypeAtLocation(node.name)
            const props: DesignTypescriptProps = []

            this.checker
              .getPropertiesOfType(type)
              .forEach((prop) => {
                props.push(this.getPropInformation(node, prop))
              })

            data.push({
              name: node.name.text,
              props
            })
          }
        })

      this.types = data
      return data
    }

    return []
  }

  /**
   * Returns the TypeScript type by name
   *
   * Возвращает тип TypeScript по имени
   * @param name Name of the type/ имя типа
   */
  getType(name: string): DesignTypescriptItem | undefined {
    return this.getTypes().find(type => type.name === name)
  }

  /**
   * Returns the type of the property
   *
   * Возвращает тип свойства
   * @param type TypeScript type/ тип TypeScript
   */
  protected getPropType(type: ts.Type): string {
    const option = this.getPropOption(type)

    if (
      type.isUnion()
      && option
      && option.length > 0
    ) {
      if (
        type.types.every(
          type => type.isNumberLiteral()
        )
      ) {
        return 'number'
      }

      return 'string'
    }

    return this.checker.typeToString(type)
  }

  /**
   * Returns the option of the property
   *
   * Возвращает опцию свойства
   * @param type TypeScript type/ тип TypeScript
   */
  protected getPropOption(type: ts.Type): DesignTypescriptProp['option'] {
    if (type.isUnion()) {
      const option = forEach(
        type.types,
        (item) => {
          if (
            item.isStringLiteral()
            || item.isNumberLiteral()
          ) {
            return String(item.value)
          }
        }
      ) as string[]

      if (option.length > 0) {
        return option
      }
    }

    return undefined
  }

  /**
   * Returns information about the property
   *
   * Возвращает информацию о свойстве
   * @param node Type alias or interface declaration/ объявление псевдонима типа или интерфейса
   * @param prop Symbol of the property/ символ свойства
   */
  protected getPropInformation(
    node: ts.TypeAliasDeclaration | ts.InterfaceDeclaration,
    prop: ts.Symbol
  ): DesignTypescriptProp {
    const type = this.checker.getTypeOfSymbolAtLocation(prop, node.name)

    return {
      name: prop.name,
      type: this.getPropType(type),
      option: this.getPropOption(type)
    }
  }
}
