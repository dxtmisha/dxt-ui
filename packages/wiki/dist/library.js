import { Geo as u, isObjectNotArray as a, isArray as c, toCamelCase as l } from "@dxtmisha/functional";
import { S as n, a as o } from "./storybookTypes-CclC7CaM.js";
import { W as k } from "./WikiStorybookDescriptions-Bpk3d4l6.js";
class p {
  /**
   * Constructor
   * @param name - The name of the item in the wiki/ Название элемента в wiki
   * @param item - The item to convert to a Storybook args item/
   * Элемент, который нужно преобразовать в элемент аргументов Storybook
   */
  constructor(t, e) {
    this.name = t, this.item = e;
  }
  /**
   * Returns the name of the item in the wiki
   *
   * Возвращает название элемента в wiki
   * @return The name of the item in the wiki/ название элемента в wiki
   */
  getName() {
    return this.name;
  }
  /**
   * Returns the value of the item in the wiki
   *
   * Возвращает значение элемента в wiki
   * @return The value of the item in the wiki/ значение элемента в wiki
   */
  getValue() {
    return this.item.options.value;
  }
  /**
   * Returns the order of the item in the wiki
   *
   * Возвращает порядок элемента в wiki
   * @return The order of the item in the wiki/ порядок элемента в wiki
   */
  getOrder() {
    if (this.item.options.order)
      return this.item.options.order;
    switch (this.item.options.category) {
      case n.status:
        return 3e3;
      case n.value:
        return 5e3;
      case n.style:
        return 9e3;
      default:
        return 9999;
    }
  }
  /**
   * Converts the Wiki item to a Storybook args item
   *
   * Преобразует элемент Wiki в элемент аргументов Storybook
   */
  to() {
    switch (this.item.type) {
      case o.text:
      case o.string:
        return this.toString();
      case o.number:
        return this.toNumber();
      case o.boolean:
        return this.toBoolean();
      case o.select:
        return this.toSelect();
      case o.object:
      case o.array:
        return this.toObject();
    }
  }
  /**
   * Returns the category type of a property
   *
   * Возвращает тип категории у свойства
   */
  getCategory() {
    const t = this.item.options.category;
    return t ? { category: t } : {};
  }
  /**
   * Returns the default property values
   *
   * Возвращает значения свойства по умолчанию
   */
  getDefaultValue() {
    const t = this.item.options.type, e = this.item.options.defaultValue;
    let i;
    if (e !== void 0)
      switch (typeof e) {
        case "boolean":
          i = e ? "true" : "false";
          break;
        default:
          i = String(e);
          break;
      }
    else t === "boolean" && (i = "false");
    return i ? {
      defaultValue: { summary: i }
    } : {};
  }
  /**
   * Returns a property description based on the language
   *
   * Возвращает описание свойства с учетом языка
   */
  getDescription() {
    const t = u.getLanguage(), e = this.item.options.description;
    let i;
    return typeof e == "string" ? i = e : a(e) && t in e && (i = e[t]), i ? { description: i } : {};
  }
  /**
   * Returns the type of property
   *
   * Возвращает тип свойства
   */
  getType() {
    const t = this.item.options.type, e = this.item.options.options;
    let i;
    if (e)
      c(e) ? i = e.join(" | ") : a(e) && (i = Object.keys(e).join(" | "));
    else if (t)
      c(t) ? i = t.join(" | ") : i = t;
    else
      switch (this.item.type) {
        case o.select:
          i = String(o.object);
          break;
        case o.text:
          i = String(o.string);
          break;
        default:
          i = String(this.item.type);
      }
    return i ? {
      type: { summary: i }
    } : {};
  }
  /**
   * Function to create a Storybook args object with boolean type
   *
   * Функция для создания объекта аргументов Storybook с типом boolean
   */
  toBoolean() {
    return {
      control: o.boolean,
      table: {
        ...this.getCategory(),
        ...this.getDefaultValue(),
        ...this.getType()
      },
      ...this.getDescription()
    };
  }
  /**
   * Function to create a Storybook args object with number type
   *
   * Функция для создания объекта аргументов Storybook с типом number
   */
  toNumber() {
    const t = this.item.options, e = { type: o.number }, i = {
      ...this.getCategory(),
      ...this.getDefaultValue(),
      ...this.getType()
    };
    return "min" in t && (e.min = t.min), "max" in t && (e.min = t.max), {
      control: e,
      table: i,
      ...this.getDescription()
    };
  }
  /**
   * Function to create a Storybook args object with object type
   *
   * Функция для создания объекта аргументов Storybook с типом object
   */
  toObject() {
    return {
      control: o.object,
      table: {
        ...this.getCategory(),
        ...this.getType()
      },
      ...this.getDescription()
    };
  }
  /**
   * Function to create a Storybook args object with select type
   *
   * Функция для создания объекта аргументов Storybook с типом select
   */
  toSelect() {
    return {
      control: o.select,
      options: this.item.options.options,
      table: {
        ...this.getCategory(),
        ...this.getDefaultValue(),
        ...this.getType()
      },
      ...this.getDescription()
    };
  }
  /**
   * Function to create a Storybook args object with string type
   *
   * Функция для создания объекта аргументов Storybook с типом string
   */
  toString() {
    return {
      control: o.text,
      table: {
        ...this.getCategory(),
        ...this.getDefaultValue(),
        ...this.getType()
      },
      ...this.getDescription()
    };
  }
}
class y {
  /**
   * Creates a new instance of WikiStorybook
   *
   * Создает новый экземпляр WikiStorybook
   * @param component - Component name/ Название компонента
   * @param props - Properties for the component/ свойства для компонента
   * @param defaults - Default values for the component/ значения по умолчанию для компонента
   * @param wikiDesign - Design values for the wiki/ значения дизайна для wiki
   * @param wikiBasic - Basic values for the wiki/ базовые значения для wiki
   * @param wikiDescriptions - Component descriptions for the wiki/ описания компонентов для wiki
   */
  constructor(t, e, i, s = {}, r = {}, h = []) {
    this.component = t, this.props = e, this.defaults = i, this.wikiDesign = s, this.wikiBasic = r, this.wikiDescriptions = h, this.list = this.initList();
  }
  list;
  /**
   * Returns the name of the component
   *
   * Возвращает имя компонента
   */
  getName() {
    return this.component;
  }
  /**
   * Returns the properties wiki for the component
   *
   * Возвращает wiki свойств для компонента
   * @return The properties wiki for the component/ wiki свойств для компонента
   */
  getWiki() {
    return this.initPropsWiki();
  }
  /**
   * Returns the description of the component from the wiki
   *
   * Возвращает описание компонента из wiki
   * @return The description of the component/ описание компонента
   */
  getDescription() {
    return this.toDescriptionText(this.getDescriptionItem()?.description);
  }
  /**
   * Returns the values of the wiki items
   *
   * Возвращает значения элементов wiki
   * @return An object containing the values of the wiki items/ объект, содержащий значения элементов wiki
   */
  getValues() {
    const t = {};
    return this.list.forEach((e) => {
      t[e.getName()] = e.getValue();
    }), t;
  }
  /**
   * Returns a Storybook item by its ID
   *
   * Возвращает элемент Storybook по его ID
   * @param id - The ID of the story/ ID истории
   */
  getStoryItem(t) {
    const e = this.getDescriptionItem();
    if (e && e.stories)
      return e.stories.find((i) => i.id === t);
  }
  /**
   * Returns the name of the story by its ID
   *
   * Возвращает имя истории по ее ID
   * @param id - The ID of the story/ ID истории
   */
  getStoryName(t) {
    return this.toDescriptionText(
      this.getStoryItem(t)?.name
    );
  }
  /**
   * Returns a wiki item by its name
   *
   * Возвращает элемент wiki по его имени
   * @param name - The name of the wiki item/ имя элемента wiki
   */
  getWikiItem(t) {
    if (t in this.wikiBasic || t in this.wikiDesign)
      return {
        ...this.wikiBasic?.[t] ?? {},
        ...this.wikiDesign?.[t] ?? {}
      };
  }
  /**
   * Returns the description item for the component
   *
   * Возвращает элемент описания для компонента
   * @return The description item for the component/ элемент описания для компонента
   */
  getDescriptionItem() {
    return this.wikiDescriptions.find((t) => t.name === this.component);
  }
  /**
   * Adds a default value to the wiki item and a list of options
   *
   * Добавляет значение по умолчанию к элементу wiki и список опций
   * @param item - The item to convert/ элемент для преобразования
   * @param wiki - The wiki item to which the default value and options will be added/
   * элемент wiki, к которому будут добавлены значение по умолчанию и опции
   */
  toWikiItemChanged(t, e) {
    return {
      ...e,
      options: {
        ...e.options,
        type: e.options?.type ?? t.type,
        defaultValue: this.defaults[t.name],
        options: t.option ?? e.options?.options ?? void 0
      }
    };
  }
  /**
   * Converts the descriptions to text format
   *
   * Преобразует описания в текстовый формат
   * @param descriptions - The descriptions to convert/ Описания для преобразования
   */
  toDescriptionText(t) {
    if (t) {
      const e = u.getLanguage();
      return a(t) ? String(
        t?.[e] ?? Object.values(t)?.[0]
      ) : t;
    }
    return "";
  }
  /**
   * Initializes the list of wiki items for the component
   *
   * Инициализирует список элементов wiki для компонента
   * @return The list of wiki items for the component/ список элементов wiki для компонента
   */
  initList() {
    const t = [];
    return this.props.forEach((e) => {
      const i = `${l(this.component)}.${e.name}`, s = this.getWikiItem(i) ?? this.getWikiItem(e.name);
      s ? t.push(
        new p(
          e.name,
          this.toWikiItemChanged(e, s)
        )
      ) : console.error(`[WikiStorybook] ${e.name} not found`);
    }), t.sort((e, i) => {
      const s = e.getOrder(), r = i.getOrder();
      return s === r ? e.getName() > i.getName() ? 1 : -1 : s > r ? 1 : -1;
    }), t;
  }
  /**
   * Initializes the properties list for the component
   *
   * Инициализирует список свойств для компонента
   * @return The list of properties for the component/ список свойств для компонента
   */
  initPropsWiki() {
    const t = {};
    return this.list.forEach((e) => {
      t[e.getName()] = e.to();
    }), t;
  }
}
export {
  n as StorybookCategory,
  o as StorybookControl,
  y as WikiStorybook,
  k as WikiStorybookDescriptions,
  p as WikiStorybookItem
};
