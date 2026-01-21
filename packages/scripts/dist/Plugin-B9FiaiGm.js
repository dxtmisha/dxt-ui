var g = Object.defineProperty;
var l = (s, t, e) => t in s ? g(s, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[t] = e;
var o = (s, t, e) => l(s, typeof t != "symbol" ? t + "" : t, e);
import { toCamelCase as m, toKebabCase as u } from "@dxtmisha/functional-basic";
class p {
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
const d = [
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
class f {
  /**
   * Constructor
   * @param design design name / название дизайна
   * @param packageName package name / название пакета
   * @param componentsReg regular expression for finding components / регулярное выражение для поиска компонентов
   * @param styleVarsReg regular expression for finding variables / регулярное выражение для поиска переменных
   * @param componentsList list of components / список компонентов
   */
  constructor(t, e, i, r, n) {
    o(this, "styleModification");
    this.design = t, this.packageName = e, this.componentsReg = i, this.styleVarsReg = r, this.componentsList = n, this.styleModification = this.initStyleModification();
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
   * Returns a list of all components in the code.
   *
   * Возвращает список всех компонентов в коде.
   * @param code code to check / код для проверки
   */
  getComponents(t) {
    const e = t.match(this.componentsReg), i = [];
    return e && e.forEach((r) => {
      const n = this.findComponent(r);
      n && !i.find((a) => a.name === n.name) && !t.match(`${this.getPackageName()}/${n.name}`) && i.push(n);
    }), i;
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
    return d.forEach((e) => {
      t[u(e)] = m(e);
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
    o(this, "code");
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
    this.makeImport("style.css");
  }
  /**
   * Creates an import line.
   *
   * Создает строку импорта.
   * @param name file name / имя файла
   */
  makeImport(t) {
    const e = `${this.packageName}/${t}`;
    this.code.includes(e) || (this.code = `import '${e}';`);
  }
}
class $ {
  /**
   * Constructor
   * @param id file identification / идентификация файла
   * @param code file content / содержимое файла
   * @param pluginData plugin data / данные плагина
   */
  constructor(t, e, i) {
    this.id = t, this.code = e, this.pluginData = i;
  }
  /**
   * Initializes the data.
   *
   * Инициализирует данные.
   */
  init() {
    if (this.pluginData.hasComponent(this.code)) {
      const t = this.pluginData.getComponents(this.code);
      if (t) {
        const e = this.getCode(), i = t.map((r) => this.importComponent(r)).join(`\r
`);
        return this.addImportCode(e, i);
      }
    }
    return this.code;
  }
  /**
   * Checks if there is a script element.
   *
   * Проверяет, есть ли элемент script.
   */
  isScript() {
    return !!this.code.match(/<script[^>]*setup/);
  }
  /**
   * Returns the file code, adding a script if it’s not there.
   *
   * Возвращает код файла, добавляя script, если его нет.
   */
  getCode() {
    return this.isScript() ? this.code : `<script setup><\/script>${this.code}`;
  }
  /**
   * Returns the path to the component.
   *
   * Возвращает путь к компоненту.
   * @param item component data / данные компонента
   */
  getPath(t) {
    return `${this.pluginData.getDesign()}/${t.name}`;
  }
  /**
   * Adds import code to the script.
   *
   * Добавляет код импорта в скрипт.
   * @param code file content / содержимое файла
   * @param imports import code / код импорта
   */
  addImportCode(t, e) {
    return t.replace(/(<script[^\r\n]+)/, `$1\r
${e}`);
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
class C {
  /**
   * Constructor
   * @param id file identification / идентификация файла
   * @param code file content / содержимое файла
   * @param data plugin data / данные плагина
   */
  constructor(t, e, i) {
    this.id = t, this.code = e, this.data = i;
  }
  /**
   * Initialization of the transformation of all style properties.
   *
   * Инициализация преобразования всех свойств стилей.
   */
  init() {
    if (this.is()) {
      let t = this.importDesign();
      return t = this.initColors(t), t = this.initVars(t), t = this.initProperties(t), t;
    }
    return this.code;
  }
  /**
   * Checks whether this file needs to be transformed.
   *
   * Проверяет, нужно ли преобразовывать этот файл.
   */
  is() {
    return p.isCss(this.id) && !this.code.match(this.getCodeNone());
  }
  getCodeNone() {
    return `// ${this.data.getDesign()}-none`;
  }
  getPropertiesNone() {
    return `(?![^\r
]*// ${this.data.getDesign()}-mode-none)`;
  }
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
    const t = `${this.data.getPackageName()}/properties`;
    return this.code.match(t) ? this.code : `@use '${t}' as *;\r
${this.code}`;
  }
  /**
   * Removes default values from colors.
   *
   * Удаляет значения по умолчанию у цветов.
   * @param code file content / содержимое файла
   */
  initColors(t) {
    if (t.match(
      new RegExp(`#[0-9abcdf]{4,6}|rgb|rgba${this.getPropertiesNone()}`, "i")
    )) {
      const e = `(?<=var\\([^,]+), ?(#[0-9abcdf]{4,6}|rgba?\\([^)]+\\))${this.getPropertiesNone()}`, i = new RegExp(e, "ig");
      return t.replace(i, () => "");
    }
    return t;
  }
  /**
   * Transforms property values under the correct name.
   *
   * Преобразовывает значения свойств под правильным именем.
   * @param code file content / содержимое файла
   */
  initVars(t) {
    if (this.data.hasVars(t)) {
      const e = this.data.getDesign();
      return t.replace(
        this.data.getStyleVarsReg(),
        `${e}-$1`
      );
    }
    return t;
  }
  /**
   * Transformation of all properties into non-standard ones used through mixins.
   *
   * Преобразование всех свойств в нестандартные, используемые через миксины.
   * @param code file content / содержимое файла
   */
  initProperties(t) {
    const e = this.data.getStyleModification(), i = this.getModificationRef();
    return t.match(new RegExp(i, "i")) ? t.replace(
      i,
      (r, n, a, c) => {
        const h = a.trim();
        return `@include ${e == null ? void 0 : e[n.trim()]}(${h.match(/[()]/) ? `#{${h}}` : h})${c}`;
      }
    ) : t;
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
  constructor(t, e, i, r, n, a = "vite-plugin-design-ui", c = {}) {
    o(this, "data");
    o(this, "first", !0);
    o(this, "mode", "production");
    this.design = t, this.packageName = e, this.componentsReg = i, this.styleVarsReg = r, this.componentsList = n, this.name = a, this.options = c, this.data = new f(
      t,
      e,
      i,
      r,
      n
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
      apply: (e, i) => (this.mode = i.mode, !0),
      transform: (e, i) => this.transform(e, i),
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
    return this.first && p.isJs(e) && (t = this.initMain(t), this.first = !1), t = this.initComponents(e, t), t = this.initStyles(e, t), {
      code: t
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
   * @param id file identification / идентификация файла
   * @param code file content / содержимое файла
   */
  initComponents(t, e) {
    return this.isComponents() ? new $(t, e, this.data).init() : e;
  }
  /**
   * Initializes styles.
   *
   * Инициализирует стили.
   * @param id file identification / идентификация файла
   * @param code file content / содержимое файла
   */
  initStyles(t, e) {
    return this.isStyles() ? new C(t, e, this.data).init() : e;
  }
}
export {
  P,
  $ as a,
  f as b,
  y as c,
  C as d,
  p as e
};
