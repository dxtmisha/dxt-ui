var U = Object.defineProperty;
var V = (e, t, i) => t in e ? U(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : e[t] = i;
var r = (e, t, i) => V(e, typeof t != "symbol" ? t + "" : t, i);
import { P as a, a as j, b as y, h as f } from "./AiGoogleCliLite-DqeLXSLA.js";
import { A as Qt } from "./AiGoogleCliLite-DqeLXSLA.js";
import W from "path";
import { UI_AI_DOC_DIRECTORY as Y, UI_AI_DOC_STORYBOOK as H, UI_CONFIG_FILE as q, UI_DIR_DIST_TEMPORARY as X, UI_FILE_NAME_VITE as E, UI_FILE_NAME_VITE_WORKERS as A, UI_FILE_PACKAGE as R, UI_DIR_IN as z, UI_DIRS_LIBRARY as J, UI_FILE_AI_TYPES as Q, UI_FILE_NAME_DESIGN as Z, UI_DIRS_STYLES as G, UI_FILE_NAME_PLUGIN as K } from "./config.js";
import { execSync as tt, exec as et } from "node:child_process";
import { forEach as g, removeCommonPrefix as C, Datetime as I, isFilled as v, toKebabCase as M, toCamelCase as it, uniqueArray as st, toCamelCaseFirst as nt } from "@dxtmisha/functional-basic";
import { dirname as D } from "node:path";
import { fileURLToPath as _ } from "node:url";
import { promisify as at } from "node:util";
import * as rt from "@dxtmisha/functional";
import h from "typescript";
import { P as Gt, a as Kt, b as te, c as ee, d as ie, e as se } from "./Plugin-B9FiaiGm.js";
function ot(e) {
  return e.replace("/", W.sep);
}
const p = class p {
  /**
   * Returns the project name.
   *
   * Возвращает название проекта.
   */
  static getProjectName() {
    var t;
    return (t = this.config.project) != null ? t : "ui";
  }
  /**
   * Returns the project name.
   *
   * Возвращает название проекта.
   */
  static getDesignName() {
    var t;
    return (t = this.config.name) != null ? t : "ui";
  }
  /**
   * Returns alternative design names.
   *
   * Возвращает альтернативные названия дизайна.
   */
  static getDesignAlternativeName() {
    var t;
    return (t = this.config) == null ? void 0 : t.alternativeName;
  }
  /**
   * Returns the separator symbol.
   *
   * Возвращает символ разделителя.
   */
  static getSeparator() {
    var t;
    return (t = this.config.separator) != null ? t : "/";
  }
  /**
   * Returns the base name of the separator.
   *
   * Возвращает базовое название разделителя.
   */
  static getSeparatorBasicName() {
    var t;
    return (t = this.config.separatorBasicName) != null ? t : "basic";
  }
  /**
   * Returns the limit of separator characters in a single key.
   *
   * Возвращает лимит символов-разделителей в одном ключе.
   */
  static getSeparatorLimit() {
    var t;
    return (t = this.config.separatorLimit) != null ? t : 6;
  }
  /**
   * Returns the wiki language.
   *
   * Возвращает язык wiki.
   */
  static getWikiLanguage() {
    var t;
    return (t = this.config.wikiLanguage) != null ? t : "en";
  }
  /**
   * Returns the package prefix.
   *
   * Возвращает префикс пакета.
   */
  static getPackagePrefix() {
    var t;
    return (t = this.config.packagePrefix) != null ? t : void 0;
  }
  /**
   * Returns the AI type.
   *
   * Возвращает тип ИИ.
   */
  static getAiType() {
    var t;
    return (t = this.config.aiType) != null ? t : "gemini";
  }
  /**
   * Returns the AI model.
   *
   * Возвращает модель ИИ.
   */
  static getAiModel() {
    var t;
    return (t = this.config.aiModel) != null ? t : "";
  }
  /**
   * Returns the AI API key.
   *
   * Возвращает API ключ ИИ.
   */
  static getAiKey() {
    var t;
    return (t = this.config.aiKey) != null ? t : "";
  }
  /**
   * Returns the directories for AI documentation generation.
   *
   * Возвращает каталоги для генерации AI документации.
   */
  static getAiDocDirectory() {
    var t;
    return (t = this.config.aiDocDirectory) != null ? t : Y;
  }
  /**
   * Returns the Storybook path for AI documentation generation.
   *
   * Возвращает путь Storybook для генерации AI документации.
   */
  static getAiDocStorybookPath() {
    var t;
    return (t = this.config.aiDocStorybookPath) != null ? t : H;
  }
  /**
   * Recursively retrieves and merges extended configuration files.
   *
   * Рекурсивно получает и объединяет расширенные файлы конфигурации.
   * @param file path to the configuration file/ путь к файлу конфигурации
   * @param dir array of directory paths/ массив путей директорий
   */
  static getExtends(t, i = []) {
    const s = [...i, ot(t)], n = a.readFile(s);
    return n != null && n.extends ? {
      ...this.getExtends(
        n.extends,
        [a.getPathDir(s)]
      ),
      ...n
    } : n != null ? n : {};
  }
};
r(p, "config"), (() => {
  const t = [q];
  p.config = {};
  for (let i = 0; i < 32; i++) {
    if (a.is(t)) {
      let s = a.readFile(t);
      if (s) {
        s != null && s.extends && (s = {
          ...p.getExtends(s.extends, [a.getPathDir(t)]),
          ...s
        }), p.config = s;
        break;
      }
    }
    t.unshift("..");
  }
})();
let c = p;
var ct = /* @__PURE__ */ ((e) => (e.MODIFIED = "M", e.ADDED = "A", e.DELETED = "D", e.RENAMED = "R", e.COPIED = "C", e.UPDATED = "U", e.UNTRACKED = "??", e.IGNORED = "!!", e.BOTH_MODIFIED = "UU", e.ADDED_BY_US = "AU", e.DELETED_BY_US = "DU", e.ADDED_BY_THEM = "UA", e.DELETED_BY_THEM = "UD", e.BOTH_ADDED = "AA", e.BOTH_DELETED = "DD", e.MODIFIED_IN_INDEX = "MM", e.ADDED_IN_INDEX = "AM", e.DELETED_IN_INDEX = "DM", e.RENAMED_IN_INDEX = "RM", e.COPIED_IN_INDEX = "CM", e))(ct || {});
class L {
  /**
   * Gets list of files with their metadata.
   *
   * Получает список файлов с их метаданными.
   * @param filter - file filter function / функция фильтрации файлов
   */
  static getList(t) {
    const i = this.getDirPrefix();
    return g(
      this.getFilesPath(),
      (s) => {
        if (t && !t(s))
          return;
        const n = this.getDate(this.getFileDate(s));
        return {
          path: s,
          pathByOS: this.splitPath(s),
          pathFull: `${i}${s}`,
          date: n,
          status: void 0
        };
      }
    );
  }
  /**
   * Gets list of files in porcelain format with their metadata.
   *
   * Получает список файлов в формате porcelain с их метаданными.
   * @param filter - file filter function / функция фильтрации файлов
   */
  static getListPorcelain(t) {
    const i = this.getDate(), s = this.getDirPrefix();
    return g(
      this.getFilesPorcelain(),
      (n) => {
        var P;
        const o = n.replace(/ {2,}/, " ").split(" ", 2), l = o[0], m = (P = o[1]) != null ? P : "";
        if (t && !t(m))
          return;
        const u = C(m, s), k = this.splitPath(u), x = a.getTime(k);
        return {
          path: u,
          pathByOS: k,
          pathFull: m,
          date: x != null ? x : i,
          status: l
        };
      }
    );
  }
  /**
   * Gets unique list of files from both standard and porcelain lists.
   *
   * Получает уникальный список файлов из обоих стандартных и porcelain списков.
   * @param filter - file filter function / функция фильтрации файлов
   */
  static getListUnique(t) {
    return this.mergeUnique(
      this.getListPorcelain(t),
      this.getList(t)
    );
  }
  /**
   * Gets list of files by directory with .ts extension, excluding test files.
   *
   * Получает список файлов по директории с расширением .ts, исключая тестовые файлы.
   * @param directory - directory path or regex / путь к директории или регулярное выражение
   */
  static getListByDirectory(t) {
    return this.getListUnique(
      (i) => !!(i.match(t) && i.endsWith(".ts") && !i.endsWith(".test.ts"))
    );
  }
  /**
   * Gets list of class files (*.ts in /classes/ directory).
   *
   * Получает список файлов классов (*.ts в директории /classes/).
   */
  static getClassesList() {
    return this.getListByDirectory("/classes/");
  }
  /**
   * Gets list of class files (*.ts in /classes/ directory).
   *
   * Получает список файлов классов (*.ts в директории /classes/).
   */
  static getFunctionsList() {
    return this.getListByDirectory("/functions/");
  }
  /**
   * Gets list of all file paths in repository.
   *
   * Получает список всех путей файлов в репозитории.
   */
  static getFilesPath() {
    return g(
      this.exec("git ls-tree -r --name-only HEAD").split(`
`),
      (t) => t.trim()
    );
  }
  /**
   * Gets list of files in porcelain format.
   *
   * Получает список файлов в формате porcelain.
   */
  static getFilesPorcelain() {
    return g(
      this.exec("git status --porcelain").split(`
`),
      (t) => t.trim()
    );
  }
  /**
   * Gets the date of the last commit for a file.
   *
   * Получает дату последнего коммита для файла.
   * @param filePath - path to file / путь к файлу
   */
  static getFileDate(t) {
    return this.exec(`git log -1 --format="%ci" -- "${t}"`);
  }
  /**
   * Gets the directory prefix of the current Git repository.
   *
   * Получает префикс директории текущего Git репозитория.
   */
  static getDirPrefix() {
    return this.exec("git rev-parse --show-prefix");
  }
  /**
   * Formats a date string to standard full format.
   *
   * Форматирует строку даты в стандартный полный формат.
   * @param date - date string / строка даты
   */
  static getDate(t) {
    return new I(t).setType("full").standard();
  }
  /**
   * Filters a list of Git files by the current directory prefix.
   *
   * Фильтрует список файлов Git по префиксу текущей директории.
   * @param list - list of Git files / список файлов Git
   */
  static filterByDirectory(t) {
    const i = this.getDirPrefix();
    return t.filter((s) => s.pathFull.startsWith(i));
  }
  /**
   * Merges two lists of Git files, ensuring uniqueness by file path.
   *
   * Объединяет два списка файлов Git, обеспечивая уникальность по пути файла.
   * @param listA - first list to merge / первый список для объединения
   * @param listB - lists to merge / списки для объединения
   */
  static mergeUnique(t, i) {
    const s = [...t];
    return g(
      i,
      (n) => {
        s.find(
          (l) => l.pathFull === n.pathFull
        ) || s.push(n);
      }
    ), s;
  }
  /**
   * Splits a file path into its components.
   *
   * Разбивает путь файла на его компоненты.
   * @param path - file path / путь к файлу
   */
  static splitPath(t) {
    return t.split("/").filter((i) => i.length > 0);
  }
  /**
   * Executes Git command and returns result.
   *
   * Выполняет Git команду и возвращает результат.
   * @param command - command to execute / команда для выполнения
   */
  static exec(t) {
    return tt(t, { encoding: "utf8" }).trim();
  }
}
function $() {
  return [
    c.getAiKey(),
    c.getAiModel()
  ];
}
class lt extends j {
  constructor() {
    super(
      ...$()
    );
  }
}
class mt extends y {
  constructor() {
    super(
      ...$()
    );
  }
}
function w() {
  switch (c.getAiType()) {
    case "gemini":
      return new lt();
    case "gemini-cli":
      return new mt();
  }
}
const F = /\*\*Date: (.*?)\.\*\*/i;
class d {
  /**
   * Constructor.
   *
   * Конструктор.
   * @param paths target file path segments / сегменты пути целевого файла
   * @param isDate whether to extract date from content / извлекать ли дату из содержимого
   * @param isOld whether to keep old version of file / сохранять ли старую версию файла
   */
  constructor(t, i = !1, s = !0) {
    this.paths = t, this.isDate = i, this.isOld = s;
  }
  /**
   * Returns absolute path to file.
   *
   * Возвращает абсолютный путь к файлу.
   */
  getPath() {
    return a.joinPath(this.paths);
  }
  /**
   * Returns date from file content.
   *
   * Возвращает дату из содержимого файла.
   */
  getDate() {
    const t = this.read();
    return this.extractDateFromContent(t);
  }
  /**
   * Reads file content as string.
   *
   * Читает содержимое файла как строку.
   */
  read() {
    var t;
    return (t = a.readFile(this.paths)) != null ? t : "";
  }
  /**
   * Writes content to file.
   *
   * Записывает содержимое в файл.
   * @param content content to write / содержимое для записи
   */
  write(t) {
    if (v(t)) {
      const i = this.read();
      let s = t.trim();
      s.startsWith("```") && (s = s.replace(/^```(ts|md)/, "").replace(/```$/, "").trim()), s !== i.trim() && (this.isOld && v(i.trim()) && a.writeByPath(
        `${a.joinPath(this.paths)}__old.txt`,
        i
      ), a.writeByPath(
        this.paths,
        this.addDate(s + `\r
`)
      ));
    }
  }
  /**
   * Extracts date from content string.
   *
   * Извлекает дату из строки содержимого.
   * @param content content string / строка содержимого
   */
  extractDateFromContent(t) {
    const i = t.match(F);
    let s = "1970-01-01";
    return i && (i != null && i[1]) && (s = i[1]), new I(s, "full");
  }
  /**
   * Adds current date to content if isDate is true.
   *
   * Добавляет текущую дату в содержимое, если isDate равно true.
   * @param content content string / строка содержимого
   */
  addDate(t) {
    if (this.isDate) {
      const s = `
\r**Date: ${new I(/* @__PURE__ */ new Date(), "full").standard()}.**\r
`;
      return F.test(t) ? `${t.replace(F, "").trim()}\r
${s}` : `${t}${s}`;
    }
    return t;
  }
}
const ht = f() ? __dirname : D(_(import.meta.url)), gt = [ht, "..", "media", "templates", "viteComponentTemplateConfig.ts"], ut = at(et);
class dt {
  /**
   * Constructor
   * @param path component path / путь к компоненту
   */
  constructor(t) {
    /** Template vite config file / Файл шаблона vite-конфига */
    r(this, "viteSample");
    /** Aggregated built code file / Файл агрегированного собранного кода */
    r(this, "codeFile");
    this.path = t, this.viteSample = new d(gt), this.codeFile = new d([
      ...this.getPathTemporaryDist(),
      "code.txt"
    ]);
  }
  /**
   * Returns distribution temp directory path segments.
   *
   * Возвращает сегменты пути дистрибутива (temp).
   */
  getPathTemporaryDist() {
    return [
      X
    ];
  }
  /**
   * Returns aggregated built code content.
   *
   * Возвращает содержимое агрегированного собранного кода.
   */
  getCode() {
    return this.codeFile.read();
  }
  /**
   * Removes temporary distribution directory.
   *
   * Удаляет временную директорию дистрибутива.
   */
  removeDir() {
    a.removeDir(this.getPathTemporaryDist());
  }
  /**
   * Prepares temporary vite config, triggers build, then restores original.
   *
   * Готовит временный vite-конфиг, запускает билд, затем восстанавливает оригинал.
   */
  async make() {
    this.saveViteConfig();
    const t = this.viteSample.read().replace("[path]", this.path);
    a.writeByPath(E, t);
    const i = await this.run();
    return this.resetViteConfig(), this.readAndWriteALlFiles(), i || process.exit(601), i;
  }
  /**
   * Saves existing vite config aside (rename) before custom build.
   *
   * Сохраняет существующий vite-конфиг (переименовывает) перед кастомным билдом.
   */
  saveViteConfig() {
    a.is(A) || a.rename(
      E,
      A
    );
  }
  /**
   * Restores original vite config after build.
   *
   * Восстанавливает оригинальный vite-конфиг после билда.
   */
  resetViteConfig() {
    a.is(A) && (a.removeFile(E), a.rename(
      A,
      E
    ));
  }
  /**
   * Reads built file content and wraps with header comment (file name).
   *
   * Читает содержимое собранного файла и оборачивает заголовком с именем файла.
   * @param path relative built file path / относительный путь собранного файла
   */
  readFile(t) {
    const i = a.joinPath([...this.getPathTemporaryDist(), t]), s = a.readFileOnly(i);
    return `
// File: ${t}
${s}
    `.trim();
  }
  /**
   * Aggregates all built files into a single code snapshot file.
   *
   * Агрегирует все собранные файлы в единый снимок кода.
   */
  readAndWriteALlFiles() {
    const t = a.readDirRecursive(this.getPathTemporaryDist()), i = [];
    t.forEach((s) => {
      i.push(this.readFile(s));
    }), this.codeFile.write(i.join(`\r
`));
  }
  /**
   * Runs build command (npm run build) capturing stdout/stderr.
   *
   * Запускает команду билда (npm run build), перехватывая stdout/stderr.
   */
  async run() {
    try {
      const { stdout: t, stderr: i } = await ut("npm run build");
      return console.info(t), i && console.error("STD error", i), !0;
    } catch (t) {
      console.error("Error", t);
    }
    return !1;
  }
}
class N {
  /**
   * Constructor
   * @param path source file path / путь к исходному файлу
   * @param item git file item / элемент файла git
   */
  constructor(t, i) {
    /** Build item / Элемент сборки */
    r(this, "build");
    /** Markdown file / Файл в формате Markdown */
    r(this, "mdFile");
    /** Code file / Файл с кодом */
    r(this, "code");
    /** Property file data / Данные из файла свойств */
    r(this, "projectName");
    /** AI instance / Экземпляр ИИ */
    r(this, "ai");
    /** Description from AI / Описание от ИИ */
    r(this, "description");
    var s, n;
    this.path = t, this.item = i, this.build = new dt(this.item.path), this.mdFile = new d(this.getPathWiki(), !0, !1), this.code = new d(this.item.pathByOS, !1, !1), this.projectName = (n = (s = a.readFile(R)) == null ? void 0 : s.name) != null ? n : "Library", this.ai = w();
  }
  /**
   * Generates documentation using AI.
   *
   * Генерирует документацию с использованием ИИ.
   */
  async make() {
    const t = this.mdFile.getDate();
    if (this.ai && this.getItemDate() > t.getDate()) {
      if (console.log(
        `${this.projectName}/File:`,
        this.item.path,
        c.getWikiLanguage()
      ), this.isBuildDisabled() || await this.build.make()) {
        this.makeAi();
        const s = await this.ai.generate(
          this.readPrompt()
        );
        if (s) {
          const n = s.split("#########");
          n != null && n[0] && (this.description = n[0].trim()), n != null && n[1] && !n[1].match("--FULL--") && this.code.write(n[1]), n != null && n[2] && this.mdFile.write(this.initName(n[2]));
        }
      }
      this.build.removeDir();
    } else this.ai || console.error("AI is not configured.");
  }
  /**
   * Checks if the item is marked as not to be built.
   *
   * Проверяет, помечен ли элемент как не подлежащий сборке.
   */
  isBuildDisabled() {
    return !!this.code.read().match("// wiki:build-none");
  }
  /**
   * Returns the path to the Wiki file.
   *
   * Возвращает путь к Wiki файлу.
   */
  getPathWiki() {
    const t = C(this.item.path, this.path).replace(/\.ts$/, "");
    return [
      ...L.splitPath(this.path),
      ...L.splitPath(`${t}.mdx`)
    ];
  }
  /**
   * Returns the file modification date.
   *
   * Возвращает дату изменения файла.
   */
  getItemDate() {
    return new I(this.item.date).getDate();
  }
  /**
   * Returns the title for the documentation.
   *
   * Возвращает заголовок для документации.
   */
  getTitle() {
    let t = this.projectName + "/" + this.item.path.replace(z + "/", "").replace(/\.ts$/, "");
    return this.description && (t += ` - ${this.description}`), t;
  }
  /**
   * Reads the demo file content.
   *
   * Читает содержимое демо-файла.
   */
  readDemo() {
    return new d(this.pathDemo).read();
  }
  /**
   * Reads the prompt template.
   *
   * Читает шаблон промпта.
   */
  readPrompt() {
    return new d(this.pathPrompt).read().replace(/\[wikiLanguage]/g, c.getWikiLanguage());
  }
  /**
   * Prepares context for AI.
   *
   * Подготавливает контекст для ИИ.
   */
  makeAi() {
    this.ai && (this.ai.addContent(`Code: ${this.build.getCode()}`), this.ai.addContent(`Original code: ${this.code.read()}`), this.ai.addContent(`Demo (only for template analysis, all data is fake): ${this.readDemo()}`), this.ai.addContent(`Original MDX: ${this.mdFile.read()}`));
  }
  /**
   * Initializes the title in the content.
   *
   * Инициализирует заголовок в контенте.
   * @param content content / контент
   */
  initName(t) {
    return t.match("[title]") ? t.replace("[title]", this.getTitle()) : t;
  }
}
const pt = f() ? __dirname : D(_(import.meta.url)), B = [pt, "..", "..", "media", "templates", "prompts"], ft = [...B, "aiDocFunctionPrompt.en.txt"], Dt = [...B, "demoDocEn.mdx"];
class _t extends N {
  constructor() {
    super(...arguments);
    r(this, "pathDemo", Dt);
    r(this, "pathPrompt", ft);
  }
}
const Et = f() ? __dirname : D(_(import.meta.url)), T = [Et, "..", "..", "media", "templates", "prompts"], At = [...T, "aiDocClassPrompt.en.txt"], It = [...T, "demoClassEn.mdx"];
class Lt extends N {
  constructor() {
    super(...arguments);
    r(this, "pathDemo", It);
    r(this, "pathPrompt", At);
  }
}
const xt = f() ? __dirname : D(_(import.meta.url)), b = [xt, "..", "..", "media", "templates", "prompts"], Ft = [...b, "aiDocComposablePrompt.en.txt"], Nt = [...b, "demoComposableEn.mdx"];
class kt extends N {
  constructor() {
    super(...arguments);
    r(this, "pathDemo", Nt);
    r(this, "pathPrompt", Ft);
  }
}
const O = [
  {
    check: (e) => !!e.path.match("/classes/"),
    item: Lt
  },
  {
    check: (e) => !!e.path.match("/composables/"),
    item: kt
  },
  {
    check: () => !0,
    item: _t
  }
];
class S {
  /**
   * Adds a new documentation type to the list.
   *
   * Добавляет новый тип документации в список.
   * @param type documentation type item / элемент типа документации
   */
  static add(t) {
    this.types.unshift(t);
  }
  /**
   * Generates documentation for a file item.
   *
   * Генерирует документацию для элемента файла.
   * @param item git file item / элемент файла git
   */
  static async make(t) {
    const i = c.getAiDocStorybookPath();
    for (const s of O)
      if (s.check(t)) {
        await new s.item(i, t).make();
        break;
      }
  }
}
/** List of available documentation types / Список доступных типов документации */
r(S, "types", [...O]);
class jt {
  /**
   * Main method to generate documentation.
   *
   * Основной метод для генерации документации.
   */
  async make() {
    const t = c.getAiDocDirectory(), i = c.getAiDocStorybookPath();
    if (console.log(`AI documentation: ${i}`), t && t.length)
      for (const s of t)
        await this.makeDirectory(s);
  }
  /**
   * Process a specific directory.
   *
   * Обрабатывает конкретную директорию.
   * @param dir - directory path / путь к директории
   */
  async makeDirectory(t) {
    console.log(""), console.log(`Dir: ${t}...`);
    for (const i of this.getListByDirectory(t))
      try {
        await S.make(i);
      } catch (s) {
        console.error(`Error processing file ${i}:`, s), process.exit(602);
      }
  }
  /**
   * Get list of files in a directory.
   *
   * Получает список файлов в директории.
   * @param dir - directory path / путь к директории
   */
  getListByDirectory(t) {
    return L.filterByDirectory(
      L.getListByDirectory(t)
    );
  }
}
class yt {
  constructor() {
  }
  make() {
    console.log("Build functional...");
    const t = this.getList(), i = [
      "export type * from '@dxtmisha/functional'",
      ""
    ];
    t.sort(), t.forEach((s) => {
      console.log(`-- ${s}`), i.push(`export { ${s} } from '@dxtmisha/functional'`);
    }), i.push(""), a.writeByPath(
      [...J, "functional.ts"],
      i.join(`
`)
    ), console.log("...end");
  }
  getList() {
    return Object.keys(rt);
  }
}
class Wt {
  /**
   * Constructor
   * @param dir directory path / путь к директории
   */
  constructor(t = "dist") {
    /**
     * Array of directory path segments.
     *
     * Массив сегментов пути директории.
     */
    r(this, "dirArray");
    this.dir = t, this.dirArray = this.dir.split("/");
  }
  /**
   * Main method to execute the type generation process.
   *
   * Основной метод для выполнения процесса генерации типов.
   */
  make() {
    console.log("DesignTypes: making AI types...");
    const t = this.getListByFilter(), i = this.toOneFile(t);
    this.toAiEdit(i).then(
      (s) => {
        this.save(s), console.log("DesignTypes: AI types saved.");
      }
    );
  }
  /**
   * Checks if the file is a valid declaration file.
   *
   * Проверяет, является ли файл валидным файлом декларации.
   * @param file file name / имя файла
   */
  isFile(t) {
    return t.endsWith(".d.ts") && (!t.includes("constructors/") || !t.endsWith("/props.d.ts") && !t.endsWith("/types.d.ts"));
  }
  /**
   * Checks if the content contains type definitions.
   *
   * Проверяет, содержит ли контент определения типов.
   * @param content file content / содержимое файла
   */
  isContent(t) {
    return !!(t && (t.includes("export interface") || t.includes("export type") || t.includes("export enum")));
  }
  /**
   * Returns the full path segments for a file.
   *
   * Возвращает сегменты полного пути для файла.
   * @param file file name / имя файла
   */
  getPath(t) {
    return [...this.dirArray, t];
  }
  /**
   * Reads the directory recursively.
   *
   * Читает директорию рекурсивно.
   */
  getList() {
    return a.readDirRecursive(this.dirArray);
  }
  /**
   * Gets a list of files filtered by criteria.
   *
   * Получает список файлов, отфильтрованный по критериям.
   */
  getListByFilter() {
    return g(
      this.getList(),
      (t) => {
        if (this.isFile(t)) {
          const i = this.readFile(t);
          if (this.isContent(i))
            return {
              path: t,
              content: i
            };
        }
      }
    );
  }
  /**
   * Reads the content of a file.
   *
   * Читает содержимое файла.
   * @param path file path / путь к файлу
   */
  readFile(t) {
    return a.readFileOnly(this.getPath(t));
  }
  /**
   * Saves the generated content to a file.
   *
   * Сохраняет сгенерированный контент в файл.
   * @param content content to save / контент для сохранения
   */
  save(t) {
    a.writeByPath(
      Q,
      t
    );
  }
  /**
   * Combines a list of files into a single string.
   *
   * Объединяет список файлов в одну строку.
   * @param list list of files / список файлов
   */
  toOneFile(t) {
    return g(
      t,
      (i) => `// File: ${i.path}
${i.content}`
    ).join(`

`);
  }
  /**
   * Sends content to AI for optimization.
   *
   * Отправляет контент ИИ для оптимизации.
   * @param content content to optimize / контент для оптимизации
   */
  async toAiEdit(t) {
    const i = w();
    if (i) {
      i.addPrompt(`File Content: ${t}`);
      const s = await i.generate(
        'Remove all Russian comments from this code. Remove comments if the property name makes its purpose obvious. Remove all imports. Remove empty lines. Remove the "export" keyword if possible. Keep only "type", "interface" and "enum" definitions, remove everything else. Minimize the content as much as possible without losing any data or logic. Return only the corrected code without any additional text or explanations.'
      );
      if (s)
        return s;
    }
    return t;
  }
}
class Yt {
  constructor(t = "", i = {}) {
    r(this, "program");
    r(this, "checker");
    r(this, "sourceFile");
    r(this, "types");
    this.program = h.createProgram([t], i), this.checker = this.program.getTypeChecker(), this.sourceFile = this.program.getSourceFiles().find((s) => s.fileName.endsWith(t));
  }
  /**
   * Returns the TypeScript types from the source file
   *
   * Возвращает типы TypeScript из исходного файла
   */
  getTypes() {
    if (!this.types && this.sourceFile) {
      const t = [];
      return h.forEachChild(
        this.sourceFile,
        (i) => {
          if (h.isTypeAliasDeclaration(i) || h.isInterfaceDeclaration(i)) {
            const s = this.checker.getTypeAtLocation(i.name), n = [];
            this.checker.getPropertiesOfType(s).forEach((o) => {
              n.push(this.getPropInformation(i, o));
            }), t.push({
              name: i.name.text,
              props: n
            });
          }
        }
      ), this.types = t, t;
    }
    return [];
  }
  /**
   * Returns the TypeScript type by name
   *
   * Возвращает тип TypeScript по имени
   * @param name Name of the type/ имя типа
   */
  getType(t) {
    return this.getTypes().find((i) => i.name === t);
  }
  /**
   * Returns the type of the property
   *
   * Возвращает тип свойства
   * @param type TypeScript type/ тип TypeScript
   * @param prop Symbol of the property/ символ свойства
   */
  getPropType(t, i) {
    var o;
    const s = this.getPropOption(t);
    if (t.isUnion() && s && s.length > 0)
      return t.types.every(
        (l) => l.isNumberLiteral()
      ) ? "number" : "string";
    let n = this.checker.typeToString(t);
    if (i && (n === "any" || n === "{}" || n === "unknown")) {
      const l = (o = i.getDeclarations()) == null ? void 0 : o.find(
        (m) => h.isPropertySignature(m) || h.isPropertyDeclaration(m)
      );
      l != null && l.type && (n = l.type.getText().trim() || n);
    }
    return n.replace(/'/g, "\\'");
  }
  /**
   * Returns the option of the property
   *
   * Возвращает опцию свойства
   * @param type TypeScript type/ тип TypeScript
   */
  getPropOption(t) {
    if (t.isUnion()) {
      const i = g(
        t.types,
        (s) => {
          if (s.isStringLiteral() || s.isNumberLiteral())
            return String(s.value);
        }
      );
      if (i.length > 0)
        return i;
    }
  }
  /**
   * Extracts literal options from a property TypeNode union
   *
   * Извлекает литеральные опции из узла типа свойства (union)
   * @param type Property type AST node/ узел AST типа свойства
   * @returns Array of literal values or undefined/ Массив литеральных значений или undefined
   */
  getPropOptionByNode(t) {
    if (h.isUnionTypeNode(t)) {
      const i = [];
      for (const s of t.types)
        h.isLiteralTypeNode(s) && h.isStringLiteral(s.literal) && i.push(s.literal.text);
      return i;
    }
  }
  /**
   * Extracts literal options from property declarations by reading their type nodes
   *
   * Извлекает литеральные опции из деклараций свойства, анализируя их узлы типа
   * @param declarations Symbol declarations/ декларации символа
   * @returns Array of literal values or empty array/ Массив литеральных значений или пустой массив
   */
  getPropOptionByDeclarations(t) {
    if (t) {
      for (const i of t)
        if ((h.isPropertySignature(i) || h.isPropertyDeclaration(i)) && i.type) {
          const s = this.getPropOptionByNode(i.type);
          if (s && s.length > 0)
            return s;
        }
    }
    return [];
  }
  /**
   * Returns information about the property
   *
   * Возвращает информацию о свойстве
   * @param node Type alias or interface declaration/ объявление псевдонима типа или интерфейса
   * @param prop Symbol of the property/ символ свойства
   */
  getPropInformation(t, i) {
    var l;
    const s = this.checker.getTypeOfSymbolAtLocation(i, t.name), n = h.displayPartsToString(i.getDocumentationComment(this.checker)).trim(), o = n.length > 0 ? n : void 0;
    return {
      name: i.name,
      type: this.getPropType(s, i),
      option: (l = this.getPropOption(s)) != null ? l : this.getPropOptionByDeclarations(i.getDeclarations()),
      description: o
    };
  }
}
function Pt() {
  return a.readFile(R);
}
class Ht {
  /**
   * Constructor
   * @param items object for working with the list of components / объект для работы со списком компонентов
   */
  constructor(t) {
    r(this, "packageName");
    var i;
    this.items = t, this.packageName = (i = Pt()) == null ? void 0 : i.name;
  }
  /**
   * Creates files with a list of components.
   *
   * Создает файлы со списком компонентов.
   */
  make() {
    const t = this.getComponents(), i = this.getComponentsReg();
    return this.items.write(
      Z,
      [
        "import type { PluginComponentImports } from '@dxtmisha/scripts/plugin'",
        "",
        `// count: ${this.items.getCount()}`,
        `export const designName: string = '${c.getDesignName()}'`,
        `export const packageName: string = '${this.packageName}'`,
        `export const componentsReg: RegExp = ${i}`,
        `export const styleVarsReg: RegExp = ${this.getVarsReg()}`,
        "",
        "export const componentsList: PluginComponentImports = [",
        t.join(`,\r
`),
        "]"
      ]
    ), this;
  }
  /**
   * Returns a list of components for the file.
   *
   * Возвращает список компонентов для файла.
   */
  getComponents() {
    const t = [];
    return this.packageName && g(
      this.items.getComponentList(),
      (i) => {
        t.push(
          `  {
    name: '${i.codeFull}',
    reg: ${this.getReg([i.name], !0)}
  }`
        );
      }
    ), t;
  }
  /**
   * Returns a regular expression for all components.
   *
   * Возвращает регулярное выражение для всех компонентов.
   */
  getComponentsReg() {
    const t = g(
      this.items.getComponentList(),
      (i) => i.name
    );
    return this.getReg(t);
  }
  /**
   * Returns a list of design names.
   *
   * Возвращает список названий дизайнов.
   */
  getDesigns() {
    var t;
    return [
      c.getDesignName(),
      ...(t = c.getDesignAlternativeName()) != null ? t : []
    ];
  }
  /**
   * Generates a regular expression for the list of names.
   *
   * Генерирует регулярное выражение для списка имен.
   * @param names list of names / список имен
   * @param only exact match / точное совпадение
   */
  getReg(t, i = !1) {
    const s = this.getDesigns().join("|"), n = this.getRegName(t);
    let o = `((${s})-?(${n}))`;
    return i && (o = `^${o}$`), `/${o}/ig`;
  }
  /**
   * Formats names for regular expression.
   *
   * Форматирует имена для регулярного выражения.
   * @param names list of names / список имен
   */
  getRegName(t) {
    return g(
      t,
      (i) => M(i).replace("-", "-?")
    ).join("|");
  }
  /**
   * Returns a list of CSS variables.
   *
   * Возвращает список CSS переменных.
   */
  getVars() {
    const t = it(c.getDesignName()), i = [...G, c.getProjectName(), "vars.scss"], s = a.readFileOnly(i), n = [];
    if (s) {
      const o = s.match(/(?<=--)[^: ]+(?=:)/g);
      o && o.forEach((l) => {
        const m = l.match(/^([^-]+)-(.*?)$/);
        if (m && (m == null ? void 0 : m[1]) === t && (m != null && m[2])) {
          const u = m[2].split("-");
          u.length > 2 && u.pop(), n.push(u.join("-"));
        }
      });
    }
    return st(n);
  }
  getVarsReg() {
    return `/(?<=var\\(--)(${this.getVars().join("|")})/ig`;
  }
}
class qt {
  /**
   * Constructor
   * @param items object for working with the list of components / объект для работы со списком компонентов
   */
  constructor(t) {
    this.items = t;
  }
  /**
   * Creates a plugin file.
   *
   * Создает файл плагина.
   */
  make() {
    const t = c.getDesignName();
    return this.items.write(
      K,
      [
        "import type { Plugin as VitePlugin } from 'vite'",
        "import { type DesignPluginOptions, Plugin } from '@dxtmisha/scripts/plugin'",
        "",
        "import {",
        "  componentsList,",
        "  componentsReg,",
        "  designName,",
        "  packageName,",
        "  styleVarsReg",
        "} from './design'",
        "",
        "/**",
        " * Initializes the Vite plugin for the design system.",
        " *",
        " * Инициализирует плагин Vite для дизайн-системы.",
        " * @param options plugin options / настройки плагина",
        " */",
        `export function ui${nt(t)}VitePlugin(`,
        "  options: DesignPluginOptions = {}",
        "): VitePlugin {",
        "  return new Plugin(",
        "    designName,",
        "    packageName,",
        "    componentsReg,",
        "    styleVarsReg,",
        "    componentsList,",
        `    'vite-plugin-${M(t)}-ui',`,
        "    options",
        "  )",
        "    .init()",
        "}"
      ]
    ), this;
  }
}
function Xt() {
  return f() ? __dirname : D(_(import.meta.url));
}
var vt = /* @__PURE__ */ ((e) => (e.design = "design", e.component = "component", e.classType = "class", e.theme = "theme", e.var = "var", e.property = "property", e.selector = "selector", e.virtual = "virtual", e.state = "state", e.subclass = "subclass", e.media = "media", e.mediaMax = "media-max", e.mediaGroup = "media-group", e.mediaMaxGroup = "media-max-group", e.container = "container", e.containerMax = "container-max", e.containerGroup = "container-group", e.containerMaxGroup = "container-max-group", e.animate = "animate", e.animateFrame = "animate-frame", e.link = "link", e.linkClass = "link-class", e.scss = "scss", e.root = "root", e.mixin = "mixin", e.none = "none", e.file = "file", e.other = "other", e))(vt || {}), Ot = /* @__PURE__ */ ((e) => (e.root = "root", e.class = "class", e.media = "media", e.theme = "theme", e.shade = "shade", e.palette = "palette", e.paletteNone = "palette-none", e.color = "color", e.colors = "colors", e.style = "style", e))(Ot || {}), Rt = /* @__PURE__ */ ((e) => (e.value = "value", e.type = "_type", e.category = "_category", e.state = "_state", e.subclass = "_subclass", e.varKey = "_var", e.prop = "_prop", e.theme = "_theme", e.rename = "_rename", e.replace = "_replace", e.default = "_default", e.important = "_important", e.modification = "_modification", e.drag = "_drag", e.dragSetting = "_dragSetting", e.settingClone = "_settingClone", e.fullName = "_fullName", e.fullValue = "_fullValue", e.style = "_style", e.remove = "_remove", e.name = "__n", e.nameIndex = "__ni", e.variable = "__v", e.css = "__c", e.cssColorOpacity = "__cco", e.code = "__f", e.sort = "__s", e.order = "__o", e.index = "__i", e.stateMain = "__m", e.duplicate = "__d", e.file = "__file", e.wrap = "__wrap", e))(Rt || {});
export {
  Qt as AiAbstract,
  jt as AiDoc,
  _t as AiDocItem,
  N as AiDocItemAbstract,
  Lt as AiDocItemClasses,
  kt as AiDocItemComposables,
  S as AiDocType,
  lt as AiGoogle,
  mt as AiGoogleCli,
  y as AiGoogleCliLite,
  j as AiGoogleLite,
  yt as BuildFunctional,
  dt as BuildItem,
  Wt as DesignTypes,
  Yt as DesignTypescript,
  L as GitRead,
  ct as GitStatus,
  Ht as LibraryList,
  qt as LibraryPlugin,
  Gt as Plugin,
  Kt as PluginComponents,
  te as PluginData,
  ee as PluginImport,
  ie as PluginStyle,
  se as PluginTool,
  a as PropertiesFile,
  Ot as PropertyCategory,
  Rt as PropertyKey,
  vt as PropertyType,
  $ as getConfigAi,
  Xt as getDirname,
  Pt as getPackageJson,
  f as hasNativeDirname,
  w as useAi
};
