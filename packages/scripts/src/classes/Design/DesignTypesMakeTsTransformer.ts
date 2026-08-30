import ts from 'typescript'

/**
 * Handles TypeScript AST-based transformations for cleaning declaration file content.
 * Provides methods for removing relative imports, relative re-exports, and non-public members.
 *
 * Обрабатывает AST-трансформации TypeScript для очистки содержимого файлов деклараций.
 * Предоставляет методы для удаления относительных импортов, относительных реэкспортов и непубличных членов.
 */
export class DesignTypesMakeTsTransformer {
  /**
   * Cleans up the declaration content via TypeScript AST transformation by removing relative imports, relative re-exports, non-public members, and empty lines.
   *
   * Очищает контент деклараций через AST-трансформацию TypeScript, удаляя относительные импорты, относительные реэкспорты, непубличные члены и пустые строки.
   * @param content content to clean / контент для очистки
   * @returns cleaned content string / очищенная строка контента
   */
  cleanContent(content: string): string {
    const sourceFile = ts.createSourceFile(
      'clean.d.ts',
      content,
      ts.ScriptTarget.Latest,
      true,
      ts.ScriptKind.TS
    )

    const transformation = ts.transform(
      sourceFile,
      [this.getCleanTransformer()]
    )
    const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed })
    const printed = printer.printNode(
      ts.EmitHint.Unspecified,
      transformation.transformed[0],
      sourceFile
    )

    transformation.dispose()

    return printed
      .replace(/^\s*\/\/.*$/gm, '')
      .replace(/^\s*[\r\n]/gm, '')
      .trim()
  }

  /**
   * Creates a transformer factory that removes relative imports, relative re-exports, and non-public members from declaration files.
   *
   * Создает фабрику трансформеров, удаляющую относительные импорты, относительные реэкспорты и непубличные члены из файлов деклараций.
   * @returns transformer factory for declaration cleaning / фабрика трансформеров для очистки деклараций
   */
  protected getCleanTransformer(): ts.TransformerFactory<ts.SourceFile> {
    return context => (rootNode) => {
      const visit: ts.Visitor = (node) => {
        if (
          this.isRelativeImport(node)
          || this.isRelativeExport(node)
          || this.isNonPublicMember(node)
        ) {
          return undefined
        }

        return ts.visitEachChild(node, visit, context)
      }

      return ts.visitNode(rootNode, visit) as ts.SourceFile
    }
  }

  /**
   * Checks if the node is a non-public (private or protected) class member.
   *
   * Проверяет, является ли узел непубличным (private или protected) членом класса.
   * @param node AST node to check / узел AST для проверки
   * @returns true if node has private or protected modifier / true, если узел имеет модификатор private или protected
   */
  protected isNonPublicMember(node: ts.Node): boolean {
    const modifiers = ts.canHaveModifiers(node) ? ts.getModifiers(node) : undefined

    return Boolean(
      modifiers?.some(modifier =>
        modifier.kind === ts.SyntaxKind.PrivateKeyword
        || modifier.kind === ts.SyntaxKind.ProtectedKeyword
      )
    )
  }

  /**
   * Checks if the node is an import declaration with a relative module specifier.
   *
   * Проверяет, является ли узел импортом с относительным спецификатором модуля.
   * @param node AST node to check / узел AST для проверки
   * @returns true if node is a relative import / true, если узел является относительным импортом
   */
  protected isRelativeImport(node: ts.Node): boolean {
    return ts.isImportDeclaration(node)
      && ts.isStringLiteral(node.moduleSpecifier)
      && node.moduleSpecifier.text.startsWith('.')
  }

  /**
   * Checks if the node is an export declaration with a relative module specifier.
   *
   * Проверяет, является ли узел реэкспортом с относительным спецификатором модуля.
   * @param node AST node to check / узел AST для проверки
   * @returns true if node is a relative re-export / true, если узел является относительным реэкспортом
   */
  protected isRelativeExport(node: ts.Node): boolean {
    return ts.isExportDeclaration(node)
      && node.moduleSpecifier !== undefined
      && ts.isStringLiteral(node.moduleSpecifier)
      && node.moduleSpecifier.text.startsWith('.')
  }
}
