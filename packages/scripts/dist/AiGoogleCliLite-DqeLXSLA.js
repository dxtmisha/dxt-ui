var v = Object.defineProperty;
var A = (n, t, i) => t in n ? v(n, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : n[t] = i;
var a = (n, t, i) => A(n, typeof t != "symbol" ? t + "" : t, i);
import { forEach as g, toArray as d, toKebabCase as S, Datetime as R, transformation as $ } from "@dxtmisha/functional-basic";
import { GoogleGenAI as w } from "@google/genai";
import { exec as C } from "node:child_process";
import s from "node:fs";
import h from "node:path";
import { fileURLToPath as E } from "node:url";
import { UI_MODULES as N, UI_PROJECT_NAME as x, UI_FILE_INDEX as P } from "./config.js";
class D {
  /**
   * Constructor initializes implementation specific resources.
   *
   * Конструктор инициализирует ресурсы конкретной реализации.
   * @param key - API key / API ключ
   * @param model - initial model id / начальный идентификатор модели
   */
  constructor(t, i) {
    /** AI client instance / Экземпляр AI-клиента */
    a(this, "ai");
    /** Prompt prefix / Префикс prompt */
    a(this, "prompt", "");
    /** Accumulated image list / Накопленный список изображений */
    a(this, "images", []);
    /** Accumulated contents / Накопленные содержимое */
    a(this, "contents", []);
    this.key = t, this.model = i;
  }
  /**
   * Returns accumulated image list.
   *
   * Возвращает накопленный список изображений.
   */
  getImages() {
    return this.images;
  }
  /**
   * Returns accumulated contents.
   *
   * Возвращает накопленное содержимое.
   */
  getContents() {
    return this.contents;
  }
  /**
   * Appends an image to the accumulated image list.
   *
   * Добавляет изображение к накопленному списку изображений.
   * @param image - image item / элемент изображения
   */
  addImage(t) {
    return this.images.push(t), this;
  }
  /**
   * Appends content to the accumulated contents.
   *
   * Добавляет содержимое к накопленному содержимому.
   * @param content - content string / строка содержимого
   */
  addContent(t) {
    return this.contents.push(t), this;
  }
  /**
   * Appends a new line to the accumulated prompt block.
   *
   * Добавляет новую строку к накопленному блоку prompt.
   */
  addPrompt(t) {
    this.prompt += `
${t}`;
  }
  /**
   * Clears entire accumulated image list.
   *
   * Очищает весь накопленный список изображений.
   */
  resetImages() {
    return this.images = [], this;
  }
  /**
   * Clears entire accumulated contents.
   *
   * Очищает все накопленное содержимое.
   */
  resetContents() {
    return this.contents = [], this;
  }
  /**
   * Clears entire accumulated prompt.
   *
   * Полностью очищает накопленный prompt.
   */
  resetPrompt() {
    this.prompt = "";
  }
  /**
   * Sets / switches API key for authentication.
   *
   * Устанавливает / переключает API ключ для аутентификации.
   * @param key - new API key / новый API ключ
   */
  setKey(t) {
    return this.key = t, this.ai && this.init(), this;
  }
  /**
   * Sets / switches current model for generation.
   *
   * Устанавливает / переключает текущую модель для генерации.
   */
  setModel(t) {
    return this.model = t, this;
  }
  /**
   * Generates AI response using active model and composed contents.
   *
   * Генерирует отклик ИИ, используя активную модель и собранный контент.
   */
  async generate(t) {
    if (this.ai || (this.init(), console.log(
      `[Ai] Initialized AI client with model: ${this.model}`
    )), this.ai) {
      console.log("[Ai] Generating");
      try {
        const i = await this.response(
          this.model,
          this.getMainContents(t)
        );
        return console.log(`[Ai] End (length: ${i.length})`), i;
      } catch (i) {
        console.error("[Ai] Generation error:", i), process.exit(603);
      }
    }
    return "";
  }
  /**
   * Combines persistent prompt prefix with provided contents.
   *
   * Объединяет постоянный префикс prompt с переданным содержимым.
   */
  getMainContents(t) {
    return `${this.prompt}
${t}`;
  }
}
function M() {
  return typeof __dirname != "undefined";
}
const y = M() ? __dirname : h.dirname(E(import.meta.url)), c = class c {
  /**
   * The fs.existsSync() method is used to synchronously check if a file already
   * exists in the given path or not. It returns a boolean value which indicates
   * the presence of a file.
   *
   * Метод fs.existsSync() используется для синхронной проверки наличия файла в
   * указанном пути. Он возвращает логическое значение, которое указывает на
   * наличие файла.
   * @param path it holds the path of the file that has to be checked /
   * это содержит путь к файлу, который необходимо проверить
   */
  static is(t) {
    return s.existsSync(this.joinPath(t));
  }
  /**
   * Checks whether it is a directory.
   *
   * Проверяет, является ли это директорией.
   * @param path name of the element being checked/ название проверяемого элемента
   */
  static isDir(t) {
    var i, e;
    return this.is(t) ? (e = (i = s.statSync(this.joinPath(t))) == null ? void 0 : i.isDirectory()) != null ? e : !1 : !this.joinPath(t).match(/\.\w+$/);
  }
  /**
   * Determines whether the package is connected as a module.
   *
   * Определяет, является ли пакет подключенным как модуль.
   */
  static isModule() {
    return this.module;
  }
  /**
   * The path.joinPath() method joins all given path segments together using the
   * platform-specific separator as a delimiter, then normalizes the resulting path.
   *
   * Метод path.joinPath() объединяет все указанные сегменты пути с использованием
   * специфического для платформы разделителя в качестве разделителя,
   * а затем нормализует полученный путь.
   * @param path a sequence of path segments/ последовательность сегментов пути
   */
  static joinPath(t) {
    const i = g(
      d(t),
      (e) => this.toSep(e)
    );
    return h.join(...i);
  }
  /**
   * Getting the path to the file by its name and the path to the directory.
   *
   * Получение пути к файлу по его названию и пути к директории.
   * @param path path to the file/ путь к файлу
   * @param name file name/ название файла
   * @param extension file extension by default is json/ расширение файла по умолчанию - json
   */
  static joinPathByName(t, i, e = "json") {
    return this.joinPath([...d(t), this.getFileName(i, e)]);
  }
  /**
   * Returns the root path.
   *
   * Возвращает корневой путь.
   */
  static getRoot() {
    return this.root;
  }
  /**
   * Returns the root project path
   *
   * Возвращает корневой путь проекта
   * @param rootProject root project path/ путь к корневому проекту
   * @param maxDepth maximum depth of search for the root project/ максимальная глубина поиска корневого проекта
   */
  static getRootProject(t = this.root, i = 10) {
    const e = this.joinPath([t, N, x]);
    if (this.readDir(e).length > 0)
      return e;
    if (t.match(h.sep) && i > 0)
      return this.getRootProject(
        t.replace(/\/[^/]+$/, ""),
        i - 1
      );
  }
  static getDirname() {
    return y;
  }
  /**
   * Returns the file name.
   *
   * Возвращает имя файла.
   * @param name element name/ название элемента
   * @param extension file extension by default is json/ расширение файла по умолчанию - json
   */
  static getFileName(t, i = "json") {
    return i && i !== "" ? `${S(t)}.${i}` : t;
  }
  /**
   * Returns the path to the directory, removing the file name from the path.
   *
   * Возвращает путь к директории, убрав название файла из пути.
   * @param path path to the file/ путь к файлу
   */
  static getPathDir(t) {
    return this.isDir(t) ? this.joinPath(t) : h.dirname(this.joinPath(t));
  }
  /**
   * Returns the path to the file.
   *
   * Возвращает путь к файлу.
   * @param path path to the file/ путь к файлу
   * @param name element name/ название элемента
   * @param extension file extension by default is json/ расширение файла по умолчанию - json
   */
  static getPathFile(t, i, e = "json") {
    return [...d(t), this.getFileName(i, e)];
  }
  /**
   * The method splits the path into an array of components.
   *
   * Метод разбивает путь на массив компонентов.
   * @param path path to the directory/ путь к директории
   */
  static splitForDir(t) {
    var e;
    const i = this.isDir(t) ? t : (e = this.parse(t)) == null ? void 0 : e.dir;
    return this.joinPath(i || "").split(h.sep);
  }
  /**
   * Method returns an object whose properties represent significant elements of the path.
   *
   * Метод возвращает объект, свойства которого представляют существенные элементы пути.
   * @param path filename/ имя файла
   */
  static parse(t) {
    return h.parse(this.joinPath(t));
  }
  /**
   * Returns the directory separator symbol.
   *
   * Возвращает символ разделителя директории.
   */
  static sep() {
    return h.sep;
  }
  /**
   * Getting information about the file.
   *
   * Получение информации о файле.
   * @param path path to the file/ путь к файлу
   */
  static stat(t) {
    if (this.is(t))
      return { ...s.statSync(this.joinPath(t)) };
  }
  /**
   * Returns the time the file was last modified.
   *
   * Возвращает время последнего изменения файла.
   * @param path path to the file/ путь к файлу
   */
  static getTime(t) {
    var i;
    return new R((i = this.stat(t)) == null ? void 0 : i.mtimeMs, "full").standard();
  }
  /**
   * Converts the path to use the current OS separator.
   *
   * Преобразует путь для использования текущего разделителя ОС.
   * @param path path to the directory/ путь к директории
   */
  static toSep(t) {
    return this.sep() === "/" ? t : t.replace("/", this.sep());
  }
  /**
   * Reads the contents of the directory.
   *
   * Читает содержимое директории.
   * @param path path to the directory/ путь к директории
   */
  static readDir(t) {
    return this.is(t) ? s.readdirSync(this.joinPath(t)) : [];
  }
  /**
   * Reads the contents of the directory recursively.
   *
   * Читает содержимое директории рекурсивно.
   * @param path path to the directory/ путь к директории
   */
  static readDirRecursive(t) {
    return this.readDirAndFileRecursive(t).filter((i) => !this.isDir(i));
  }
  /**
   * Reads the contents of the directory recursively.
   *
   * Читает содержимое директории рекурсивно.
   * @param path path to the directory/ путь к директории
   */
  static readDirRecursiveWithIndex(t) {
    return this.readDirAndFileRecursive(t, void 0, !0).filter((i) => !this.isDir(i));
  }
  /**
   * Reads only directories recursively.
   *
   * Читает только директории рекурсивно.
   * @param path path to the directory/ путь к директории
   */
  static readDirOnlyRecursive(t) {
    return this.readDirAndFileRecursive(t).filter((i) => this.isDir(i));
  }
  /**
   * Reads the contents of the directory and files recursively.
   *
   * Читает содержимое директории и файлы рекурсивно.
   * @param path path to the directory/ путь к директории
   * @param fullPath full path for recursion/ полный путь для рекурсии
   * @param isIndex whether to include the root directory in the list/ включать ли корневую директорию в список
   */
  static readDirAndFileRecursive(t, i = [], e = !1) {
    const r = this.readDir(t), o = [];
    return r.forEach((m) => {
      const u = [...d(t), m], l = [...i, m];
      o.push(this.joinPath(l)), this.isDir(u) && (e && this.is([...u, P]) ? o.push(this.joinPath([...l, P])) : o.push(...this.readDirAndFileRecursive(
        u,
        [...i, m]
      )));
    }), o;
  }
  /**
   * Returns the contents of the path.
   *
   * Возвращает содержимое пути.
   * @param path filename/ имя файла
   */
  static readFile(t) {
    if (this.is(t))
      return $(
        s.readFileSync(this.joinPath(t)).toString()
      );
  }
  /**
   * Returns the content of the file, without converting the value.
   *
   * Возвращает содержимое файла, без преобразования значения.
   * @param path filename/ имя файла
   */
  static readFileOnly(t) {
    if (this.is(t))
      return s.readFileSync(this.joinPath(t)).toString();
  }
  /**
   * Synchronously creates a directory.
   *
   * Синхронно создает директорию.
   * @param path path to the directory/ путь к директории
   */
  static createDir(t) {
    const i = [this.root];
    this.splitForDir(this.removeRootInPath(t)).forEach((e) => {
      i.push(e), this.is(i) || s.mkdirSync(this.joinPath(i));
    });
  }
  /**
   * Writing data to a file.
   *
   * Запись данных в файл.
   * @param path path to the file/ путь к файлу
   * @param name file name/ название файла
   * @param value values for storage/ значения для хранения
   * @param extension file extension by default is ts/ расширение файла по умолчанию - ts
   */
  static write(t, i, e, r = "json") {
    this.writeByPath(
      this.joinPathByName(t, i, r),
      e
    );
  }
  /**
   * Writes to the selected path.
   *
   * Записывает по выбранному пути.
   * @param path path to the file/ путь к файлу
   * @param value values for storage/ значения для хранения
   * @param transform whether to transform the value/ преобразовывать ли значение
   */
  static writeByPath(t, i, e = !0) {
    this.createDir(t), s.writeFileSync(
      this.joinPath(t),
      e && typeof i == "object" ? JSON.stringify(i) : i
    );
  }
  /**
   * Copy a file from the source path to the destination path.
   *
   * Копирования файла из исходного пути в целевой путь.
   * @param path path to the file/ путь к файлу
   * @param pathsSrc source filename to copy/ исходное имя файла для копирования
   */
  static copy(t, i) {
    this.createDir(t), s.copyFileSync(
      this.joinPath(i),
      this.joinPath(t)
    );
  }
  /**
   * Directory deletion.
   *
   * Удаление директории.
   * @param path path to the directory/ путь к директории
   */
  static removeDir(t) {
    this.isDir(t) && s.rmSync(this.joinPath(t), {
      recursive: !0,
      force: !0
    });
  }
  /**
   * File deletion.
   *
   * Удаление файла.
   * @param path path to the file/ путь к файлу
   */
  static removeFile(t) {
    this.is(t) && s.unlinkSync(this.joinPath(t));
  }
  static rename(t, i) {
    s.renameSync(
      this.joinPath(t),
      this.joinPath(i)
    );
  }
  /**
   * Changing file permissions.
   *
   * Изменение прав доступа к файлу.
   * @param path path to the file/ путь к файлу
   * @param mode file permissions/ права доступа к файлу
   */
  static chmod(t, i = 493) {
    s.chmodSync(
      this.joinPath(t),
      i
    );
  }
  /**
   * Removing root from the path.
   *
   * Удаление root из пути.
   * @param path path to the directory/ путь к директории
   */
  static removeRootInPath(t) {
    return this.joinPath(t).replace(`${this.root}${h.sep}`, "").replace(`${this.root}`, "");
  }
};
a(c, "root"), a(c, "module"), c.module = !!y.match("node_modules"), c.root = process.cwd();
let p = c;
class U extends D {
  /**
   * Initializes GoogleGenAI client instance.
   *
   * Инициализирует экземпляр клиента GoogleGenAI.
   */
  init() {
    this.ai = new w({ apiKey: this.key });
  }
  /**
   * Implementation hook: convert accumulated images to model-specific format.
   *
   * Хук реализации: преобразовать накопленные изображения в формат, специфичный для модели.
   */
  toImages() {
    return g(this.images, (t) => ({
      inlineData: {
        mimeType: t.mime,
        data: t.base64
      }
    }));
  }
  toContents() {
    return g(this.contents, (t) => ({
      text: t
    }));
  }
  /**
   * Performs content generation request and returns textual result.
   *
   * Выполняет запрос генерации контента и возвращает текстовый результат.
   * @param model Model identifier / Идентификатор модели
   * @param contents Composed contents for generation / Собранный контент для генерации
   */
  async response(t, i) {
    var r, o;
    const e = await ((r = this.ai) == null ? void 0 : r.models.generateContent({
      model: t,
      contents: [
        ...this.toImages(),
        {
          parts: [
            ...this.toContents(),
            { text: i }
          ]
        }
      ]
    }));
    return (o = e == null ? void 0 : e.text) != null ? o : "";
  }
}
const j = "./ai-tmp";
class K extends D {
  constructor() {
    super(...arguments);
    /**
     * Counter for generating unique temporary file names/
     * Счетчик для генерации уникальных имен временных файлов
     */
    a(this, "idFile", 1);
  }
  /**
   * Generates a unique file path for the temporary prompt.
   *
   * Генерирует уникальный путь к файлу для временного промпта.
   */
  getFileName() {
    return `${j}/Prompt-${this.idFile++}.txt`;
  }
  /**
   * Initializes the "client".
   * For CLI, we just mark it as initialized.
   *
   * Инициализирует "клиента".
   * Для CLI мы просто помечаем его как инициализированный.
   */
  init() {
    this.ai = {};
  }
  /**
   * Implementation hook: convert accumulated images to model-specific format.
   * CLI implementation currently ignores images.
   *
   * Хук реализации: преобразовать накопленные изображения в формат, специфичный для модели.
   * Реализация CLI в настоящее время игнорирует изображения.
   */
  toImages() {
    return [];
  }
  /**
   * Implementation hook: convert accumulated contents to model-specific format.
   * Returns array of strings.
   *
   * Хук реализации: преобразовать накопленное содержимое в формат, специфичный для модели.
   * Возвращает массив строк.
   */
  toContents() {
    return g(
      this.contents,
      (i) => this.createFile(i)
    );
  }
  /**
   * Performs content generation request via CLI and returns textual result.
   *
   * Выполняет запрос генерации контента через CLI и возвращает текстовый результат.
   * @param model Model identifier / Идентификатор модели
   * @param contents Composed contents for generation / Собранный контент для генерации
   */
  async response(i, e) {
    return new Promise((r) => {
      const m = [
        ...this.toContents(),
        this.createFile(e)
      ].join(`

##################

`).replace(/"/g, '\\"'), u = i ? ` --model "${i}"` : "", l = `gemini "${m}" Output strictly the code/answer. No preamble, no chatter, no reasoning ${u} --yolo`;
      C(
        l,
        {
          encoding: "utf8",
          env: {
            ...process.env,
            GEMINI_API_KEY: this.key
          }
        },
        (f, F, I) => {
          f ? (console.error("Error executing Gemini CLI:", I || f.message), r("")) : r(F.trim());
        }
      ), this.removeFile();
    });
  }
  /**
   * Creates a temporary file with the prompt content and returns the path formatted for the CLI.
   *
   * Создает временный файл с содержимым промпта и возвращает путь, отформатированный для CLI.
   * @param content Prompt content / Содержимое промпта
   * @returns Formatted file path (e.g., @./ai-tmp/Prompt-1.txt) / Отформатированный путь к файлу
   */
  createFile(i) {
    const e = this.getFileName();
    return p.writeByPath(e, i), `Please read the following file as it contains the prompt instructions: @${e}`;
  }
  /**
   * Cleans up temporary files and directories.
   *
   * Очищает временные файлы и директории.
   * @protected
   */
  removeFile() {
    p.removeDir(j);
  }
}
export {
  D as A,
  p as P,
  U as a,
  K as b,
  M as h
};
