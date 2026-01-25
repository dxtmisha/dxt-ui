var g = Object.defineProperty;
var d = (i, t, e) => t in i ? g(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e;
var r = (i, t, e) => d(i, typeof t != "symbol" ? t + "" : t, e);
import l from "magic-string";
import { toCamelCase as m, toKebabCase as p } from "@dxtmisha/functional-basic";
class h {
  /**
   * Checks if the id is a user’s file.
   *
   * Проверяет, является ли id файлом пользователя.
   * @param id file identification / идентификация файла
   */
  static isSrc(t) {
    return !!(t.match(/\/src\//i) && !t.match(/\/node_modules\//i));
  }
  /**
   * Checks if the id is a JS user’s file.
   *
   * Проверяет, является ли id файлом JS пользователя.
   * @param id file identification / идентификация файла
   */
  static isJs(t) {
    return this.isSrc(t) && !!t.match(/\.ts|js|tsx/);
  }
  /**
   * Checks if the id is a Vue user’s file.
   *
   * Проверяет, является ли id файлом vue пользователя.
   * @param id file identification / идентификация файла
   */
  static isVue(t) {
    return this.isSrc(t) && !!t.match(/\.vue$/);
  }
  /**
   * Checks if the id is a Style user’s file.
   *
   * Проверяет, является ли id файлом style пользователя.
   * @param id file identification / идентификация файла
   */
  static isCss(t) {
    return this.isSrc(t) && !!t.match(/\.(css|sass|scss)/);
  }
  /**
   * Checks if it is development mode.
   *
   * Проверяет, является ли режим разработка.
   * @param mode current mode / текущий режим
   */
  static isDev(t) {
    return t === "development";
  }
}
class u {
  /**
   * Constructor
   * @param id file ID / ID файла
   * @param code source code / исходный код
   */
  constructor(t, e) {
    r(this, "magicString");
    r(this, "newCode");
    this.id = t, this.code = e, this.magicString = new l(e), this.newCode = e;
  }
  /**
   * Checks if the file is a Vue component.
   *
   * Проверяет, является ли файл компонентом Vue.
   */
  isVue() {
    return h.isVue(this.id);
  }
  /**
   * Checks if the file is a SCSS file.
   *
   * Проверяет, является ли файл SCSS.
   */
  isScss() {
    return h.isCss(this.id);
  }
  /**
   * Returns the modified code.
   *
   * Возвращает измененный код.
   */
  get() {
    return this.newCode;
  }
  /**
   * Returns the file ID.
   *
   * Возвращает ID файла.
   */
  getId() {
    return this.id;
  }
  /**
   * Returns the original code.
   *
   * Возвращает оригинальный код.
   */
  getCode() {
    return this.code;
  }
  /**
   * Returns the source map.
   *
   * Возвращает карту кода.
   */
  getMaps() {
    return this.magicString.generateMap({
      source: this.id,
      includeContent: !0,
      hires: !0
    });
  }
  /**
   * Checks for the presence of code.
   *
   * Проверяет наличие кода.
   * @param pattern search pattern / паттерн поиска
   * @param flags search flags / флаги поиска
   */
  has(t, e = "i") {
    return typeof t == "string" ? this.code.includes(t) : new RegExp(t, e).test(this.code);
  }
  /**
   * Adds code after the <script setup> tag.
   * If the tag is missing, adds it to the beginning of the file.
   *
   * Добавляет код после тега <script setup>.
   * Если тег отсутствует, добавляет в начало файла.
   * @param code code to add / код для добавления
   */
  addAfterScript(t) {
    const e = /(<script[^>]*\bsetup\b[^>]*>)/;
    return this.code.match(e) ? this.newCode = this.newCode.replace(e, `$1${t}`) : this.newCode = `<script setup>\r
${t}<\/script>${this.newCode}`, this;
  }
  /**
   * Adds code to the beginning of the file.
   *
   * Добавляет код в начало файла.
   * @param code code to add / код для добавления
   */
  addStart(t) {
    return this.newCode = `${t}${this.newCode}`, this;
  }
  /**
   * Adds code to the beginning of the file if it is missing.
   *
   * Добавляет код в начало файла, если он отсутствует.
   * @param code code to add / код для добавления
   * @param pattern search pattern / паттерн поиска
   */
  addStartIfNone(t, e) {
    return this.has(e != null ? e : t) || this.addStart(t), this;
  }
  /**
   * Replaces the found fragment with new code in newCode.
   *
   * Заменяет найденный фрагмент на новый код в newCode.
   * @param pattern search pattern / паттерн поиска
   * @param replacement replacement string / строка замены
   */
  replace(t, e) {
    return this.newCode = this.newCode.replace(t, e), this;
  }
}
const f = [
  /* Flex */
  "flex-position",
  "flex-dynamic",
  "justify-content",
  /* Position */
  "inset",
  "horizon",
  "vertically",
  "left",
  "right",
  "absolute",
  "absolute-top",
  "absolute-bottom",
  "absolute-after",
  /* Padding */
  "padding-x",
  "padding-y",
  "padding-left",
  "padding-right",
  /* Margin */
  "margin-x",
  "margin-y",
  "margin-left",
  "margin-right",
  /* Dimension */
  "width",
  "height",
  "width-basis",
  "height-basis",
  "aspect-ratio",
  "aspect-ratio-width",
  "aspect-ratio-height",
  "squared",
  "circle",
  /* Font */
  "font-size",
  "line-height",
  "text-align",
  "text-overflow",
  "clamp",
  "text-select-none",
  "text-case",
  "paragraph-spacing",
  /* Color */
  "palette",
  "palette-var",
  "palette-color",
  "palette-stroke",
  "palette-background",
  "palette-fill",
  "palette-gradient",
  "palette-border",
  "color",
  "color-opacity",
  "stroke",
  "stroke-opacity",
  "background-color",
  "background-opacity",
  "background-size",
  "fill",
  "fill-opacity",
  "gradient",
  "gradient-opacity",
  "border-color",
  "border-opacity",
  /* Transform */
  "translate-x",
  "translate-y",
  "scale",
  "rotate"
];
class C {
  /**
   * Constructor
   * @param design design name / название дизайна
   * @param packageName package name / название пакета
   * @param componentsReg regular expression for finding components / регулярное выражение для поиска компонентов
   * @param styleVarsReg regular expression for finding variables / регулярное выражение для поиска переменных
   * @param componentsList list of components / список компонентов
   */
  constructor(t, e, s, n, o) {
    r(this, "styleModification");
    this.design = t, this.packageName = e, this.componentsReg = s, this.styleVarsReg = n, this.componentsList = o, this.styleModification = this.initStyleModification();
  }
  /**
   * Checks if the code contains a component.
   *
   * Проверяет, содержит ли код компонент.
   * @param code code to check / код для проверки
   */
  hasComponent(t) {
    return !!t.match(new RegExp(this.componentsReg, "i"));
  }
  /**
   * Checks if the code contains variables.
   *
   * Проверяет, содержит ли код переменные.
   * @param code code to check / код для проверки
   */
  hasVars(t) {
    return !!t.match(new RegExp(this.styleVarsReg, "i"));
  }
  /**
   * Returns the design name.
   *
   * Возвращает название дизайна.
   */
  getDesign() {
    return this.design;
  }
  /**
   * Returns the package name.
   *
   * Возвращает название пакета.
   */
  getPackageName() {
    return this.packageName;
  }
  /**
   * Returns a list of all components in the code.
   *
   * Возвращает список всех компонентов в коде.
   * @param code code to check / код для проверки
   */
  getComponents(t) {
    const e = t.match(this.componentsReg), s = [];
    return e && e.forEach((n) => {
      const o = this.findComponent(n);
      o && !s.find((c) => c.name === o.name) && !t.match(`${this.getPackageName()}/${o.name}`) && s.push(o);
    }), s;
  }
  /**
   * Returns the regular expression for finding variables.
   *
   * Возвращает регулярное выражение для поиска переменных.
   */
  getStyleVarsReg() {
    return this.styleVarsReg;
  }
  /**
   * Returns the style modification map.
   *
   * Возвращает карту модификации стилей.
   */
  getStyleModification() {
    return this.styleModification;
  }
  /**
   * Finds a component by name.
   *
   * Находит компонент по имени.
   * @param component component name / название компонента
   */
  findComponent(t) {
    return this.componentsList.find(
      (e) => e.reg.test(t)
    );
  }
  /**
   * Initializes the style modification map.
   *
   * Инициализирует карту модификации стилей.
   */
  initStyleModification() {
    const t = {};
    return f.forEach((e) => {
      t[p(e)] = m(e);
    }), t;
  }
}
class y {
  /**
   * Constructor
   * @param packageName package name / название пакета
   * @param code file content / содержимое файла
   */
  constructor(t, e) {
    r(this, "code");
    this.packageName = t, this.code = e;
  }
  /**
   * Returns the file content.
   *
   * Возвращает содержимое файла.
   */
  get() {
    return this.code;
  }
  /**
   * Returns the style connection code.
   *
   * Возвращает код подключения стиля.
   */
  importStyle() {
    return this.makeImport("style.css"), this;
  }
  /**
   * Creates an import line.
   *
   * Создает строку импорта.
   * @param name file name / имя файла
   */
  makeImport(t) {
    const e = `${this.packageName}/${t}`;
    this.code.includes(e) || (this.code = `import '${e}';${this.code}`);
  }
}
class $ {
  /**
   * Constructor
   * @param code file content / содержимое файла
   * @param pluginData plugin data / данные плагина
   */
  constructor(t, e) {
    this.code = t, this.pluginData = e;
  }
  /**
   * Initializes the data.
   *
   * Инициализирует данные.
   */
  make() {
    if (this.code.isVue() && this.pluginData.hasComponent(this.code.getCode())) {
      const t = this.pluginData.getComponents(this.code.getCode());
      if (t) {
        const e = t.map((s) => this.importComponent(s)).join(`\r
`);
        this.code.addAfterScript(e);
      }
    }
  }
  /**
   * Returns the path to the component.
   *
   * Возвращает путь к компоненту.
   * @param item component data / данные компонента
   */
  getPath(t) {
    return `${this.pluginData.getPackageName()}/${t.name}`;
  }
  /**
   * Generates the import string for a component.
   *
   * Генерирует строку импорта для компонента.
   * @param item component data / данные компонента
   */
  importComponent(t) {
    return `import { ${t.name} } from'${this.getPath(t)}';`;
  }
}
class k {
  /**
   * Constructor
   * @param code file content / содержимое файла
   * @param data plugin data / данные плагина
   */
  constructor(t, e) {
    this.code = t, this.data = e;
  }
  /**
   * Initialization of the transformation of all style properties.
   *
   * Инициализация преобразования всех свойств стилей.
   */
  make() {
    return this.is() && (this.importDesign().makeColors().makeVars().makeProperties(), console.log("code", this.code.getId(), this.code.get())), this;
  }
  /**
   * Checks whether this file needs to be transformed.
   *
   * Проверяет, нужно ли преобразовывать этот файл.
   */
  is() {
    return this.code.isScss() && !this.code.has(this.getIgnoreComment());
  }
  /**
   * Returns the comment for ignoring the file.
   *
   * Возвращает комментарий для игнорирования файла.
   */
  getIgnoreComment() {
    return `// ${this.data.getDesign()}-css-ignore`;
  }
  /**
   * Returns a string for a negative lookahead to exclude lines with a special comment.
   *
   * Возвращает строку для негативного просмотра вперед, чтобы исключить строки со специальным комментарием.
   */
  getPropertiesNone() {
    return `(?![^\r
]*// ${this.data.getDesign()}-mode-none)`;
  }
  /**
   * Returns a regular expression for finding properties that need to be replaced with mixins.
   *
   * Возвращает регулярное выражение для поиска свойств, которые необходимо заменить на миксины.
   */
  getModificationRef() {
    const t = this.data.getStyleModification();
    return new RegExp(
      `(?<=^\\s*)(${Object.keys(t).join("|")}):([^;\r
]+)(;*)${this.getPropertiesNone()}`,
      "igm"
    );
  }
  /**
   * Connects a list of tokens to work with values.
   *
   * Подключает список токенов для работы со значениями.
   */
  importDesign() {
    const t = `${this.data.getPackageName()}/style/ui-properties`, e = `@use '${t}.scss' as *;`;
    return this.code.addStartIfNone(e, t), this;
  }
  /**
   * Removes default values from colors.
   *
   * Удаляет значения по умолчанию у цветов.
   */
  makeColors() {
    const t = new RegExp(`(?<=var\\([^,]+), ?(#[0-9abcdf]{4,6}|rgba?\\([^)]+\\))${this.getPropertiesNone()}`, "ig");
    return this.code.has(t) && this.code.replace(t, ""), this;
  }
  /**
   * Transforms property values under the correct name.
   *
   * Преобразовывает значения свойств под правильным именем.
   */
  makeVars() {
    const t = this.data.getStyleVarsReg();
    return this.code.has(t) && this.code.replace(
      t,
      `${this.data.getDesign()}-$1`
    ), this;
  }
  /**
   * Transformation of all properties into non-standard ones used through mixins.
   *
   * Преобразование всех свойств в нестандартные, используемые через миксины.
   */
  makeProperties() {
    const t = this.data.getStyleModification(), e = this.getModificationRef();
    return console.log("this.code.has(reg)", e, this.code.has(e)), this.code.has(e, "im") && this.code.replace(
      e,
      (s, n, o, c) => {
        const a = o.trim();
        return console.log(
          "a",
          `@include ${t == null ? void 0 : t[n.trim()]}(${a.match(/[()]/) ? `#{${a}}` : a})${c}`,
          n,
          o,
          c
        ), `@include ${t == null ? void 0 : t[n.trim()]}(${a.match(/[()]/) ? `#{${a}}` : a})${c}`;
      }
    ), this;
  }
}
class P {
  /**
   * Constructor
   * @param design design name / название дизайна
   * @param packageName package name / название пакета
   * @param componentsReg regular expression for finding components / регулярное выражение для поиска компонентов
   * @param styleVarsReg regular expression for finding variables / регулярное выражение для поиска переменных
   * @param componentsList list of components / список компонентов
   * @param name plugin name / название плагина
   * @param options plugin options / настройки плагина
   */
  constructor(t, e, s, n, o, c = "vite-plugin-design-ui", a = {}) {
    r(this, "data");
    r(this, "first", !0);
    r(this, "mode", "production");
    this.design = t, this.packageName = e, this.componentsReg = s, this.styleVarsReg = n, this.componentsList = o, this.name = c, this.options = a, this.data = new C(
      t,
      e,
      s,
      n,
      o
    );
  }
  /**
   * Initializes the plugin.
   *
   * Инициализирует плагин.
   */
  init() {
    var t;
    return {
      name: this.name,
      enforce: "pre",
      apply: (e, s) => (this.mode = s.mode, !0),
      transform: (e, s) => this.transform(e, s),
      ...(t = this.options) == null ? void 0 : t.viteOptions
    };
  }
  /**
   * Checks if components should be processed.
   *
   * Проверяет, нужно ли обрабатывать компоненты.
   */
  isComponents() {
    var t, e;
    return !!((e = (t = this.options) == null ? void 0 : t.component) == null || e);
  }
  /**
   * Checks if styles should be processed.
   *
   * Проверяет, нужно ли обрабатывать стили.
   */
  isStyles() {
    var t, e;
    return !!((e = (t = this.options) == null ? void 0 : t.style) == null || e);
  }
  /**
   * Transforms the code.
   *
   * Преобразовывает код.
   * @param code file content / содержимое файла
   * @param id file identification / идентификация файла
   */
  transform(t, e) {
    this.first && h.isJs(e) && (t = this.initMain(t), this.first = !1);
    const s = new u(e, t);
    return this.makeComponents(s), this.initStyles(s), {
      code: s.get()
    };
  }
  /**
   * Initializes the main file.
   *
   * Инициализирует главный файл.
   * @param code file content / содержимое файла
   */
  initMain(t) {
    const e = new y(this.packageName, t);
    return e.importStyle(), e.get();
  }
  /**
   * Initializes components.
   *
   * Инициализирует компоненты.
   * @param code file content / содержимое файла
   */
  makeComponents(t) {
    return this.isComponents() && new $(t, this.data).make(), this;
  }
  /**
   * Initializes styles.
   *
   * Инициализирует стили.
   * @param code file content / содержимое файла
   */
  initStyles(t) {
    return this.isStyles() && new k(t, this.data).make(), this;
  }
}
export {
  P,
  u as a,
  $ as b,
  C as c,
  y as d,
  k as e,
  h as f
};
