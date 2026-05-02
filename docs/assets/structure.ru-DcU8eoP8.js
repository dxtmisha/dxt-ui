import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/# UI/properties/# Структура`}),`
`,(0,c.jsx)(n.h1,{id:`структура`,children:`Структура`}),`
`,(0,c.jsxs)(n.p,{children:[`Файл `,(0,c.jsx)(n.code,{children:`properties.json`}),` имеет древовидную структуру. Ключи на каждом уровне могут выступать в качестве имен (селекторов) или служебных настроек. Само значение (листовой узел) представляет собой конфигурационный объект `,(0,c.jsx)(n.code,{children:`PropertyItem`}),`. Любое стандартное CSS свойство, указанное как ключ, будет преобразовано в правильный CSS синтаксис.`]}),`
`,(0,c.jsxs)(n.p,{children:[`Ниже приведена базовая структура, демонстрирующая определение стилей, модификаторов состояний (`,(0,c.jsx)(n.code,{children:`hover`}),`, `,(0,c.jsx)(n.code,{children:`disabled`}),`) и вариаций, которые транслируются во Vue Props.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-json`,children:`{
  "padding": "var(--sys-height) * {sys.spacing.adaptive.md}",
  
  "hover": {
    "gradient-opacity": "{sys.opacity.hover}"
  },

  "disabled": {
    "color": "{sys.palette.onSurface}",
    "color-opacity": "{sys.opacity.surface.disabled}"
  },

  "~primary": {
    "color": "{sys.palette.onPrimary}",
    "palette-background": "{sys.palette.primary}",
    "active": {
      "box-shadow": "{sys.shadow.lg}"
    },
    "_category": "style",
    "_default": true
  },

  "~size": {
    "sm": {
      "height": "{ref.spacing.10}"
    },
    "md": {
      "height": "{ref.spacing.12}"
    },
    "_default": "md"
  }
}
`})}),`
`,(0,c.jsx)(n.p,{children:`Генератор свойств обрабатывает данную структуру по следующим правилам компиляции:`}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[`Ключи физических свойств (например, `,(0,c.jsx)(n.code,{children:`padding`}),`) генерируются как свойства CSS-класса `,(0,c.jsx)(n.code,{children:`.component`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[`Ссылки на дизайн-токены в формате `,(0,c.jsx)(n.code,{children:`{...}`}),` разрешаются в соответствующие CSS-переменные дизайн-системы.`]}),`
`,(0,c.jsxs)(n.li,{children:[`Вариации свойств, отмеченные префиксом `,(0,c.jsx)(n.code,{children:`~`}),`, преобразуются в CSS-модификаторы (например, `,(0,c.jsx)(n.code,{children:`--primary`}),`) и транслируются в интерфейс компонента (props TypeScript).`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:`Сгенерированный SCSS-код:`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.component {
  padding: calc(var(--sys-height) * var(--sys-spacing-adaptive-md));

  /* Псевдоклассы состояний */
  &:hover {
    --component-gradient-opacity: var(--sys-opacity-hover);
  }
  &:disabled {
    color: var(--sys-palette-onSurface);
    --component-color-opacity: var(--sys-opacity-surface-disabled);
  }

  /* Модификатор категории "style": --primary */
  &--primary {
    color: var(--sys-palette-onPrimary);
    background-color: var(--sys-palette-primary);
    
    &:active {
      box-shadow: var(--sys-shadow-lg);
    }
  }

  /* Модификаторы группы "size" */
  &--size-sm { height: var(--ref-spacing-10); }
  &--size-md { height: var(--ref-spacing-12); }
}
`})}),`
`,(0,c.jsxs)(n.p,{children:[`Сгенерированный интерфейс Vue Props (`,(0,c.jsx)(n.code,{children:`props.ts`}),`):`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`type PropsToken = {
  // :type [!] System label / Системная метка
  primary?: boolean
  size?: 'sm' | 'md'
  // :type [!] System label / Системная метка
}

export const defaults: object = {
  // :default [!] System label / Системная метка
  primary: true,
  size: 'md'
  // :default [!] System label / Системная метка
}
`})}),`
`,(0,c.jsx)(n.p,{children:`Сгенерированная логика привязки классов:`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'component': true,
    'component--primary': props.primary,
    [\`component--size--\${props.size}\`]: inArray(propsValues.size, props.size)
    // :classes-values [!] System label / Системная метка
  }
}))
`})}),`
`,(0,c.jsx)(n.h2,{id:`иерархия-ключей`,children:`Иерархия ключей`}),`
`,(0,c.jsx)(n.p,{children:`Стандартный паттерн иерархии ключей:`}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[`Корневой узел — `,(0,c.jsx)(n.code,{children:`[Название группы или дизайна]`}),` (например, `,(0,c.jsx)(n.code,{children:`ui`}),`, `,(0,c.jsx)(n.code,{children:`d1`}),`)`]}),`
`,(0,c.jsxs)(n.li,{children:[`Подузел — `,(0,c.jsx)(n.code,{children:`[Название компонента]`}),` (например, `,(0,c.jsx)(n.code,{children:`component`}),`)`]}),`
`,(0,c.jsxs)(n.li,{children:[`Элементы — `,(0,c.jsx)(n.code,{children:`[Физические CSS-свойства или вложенные классы]`}),` (например, `,(0,c.jsx)(n.code,{children:`background`}),`, `,(0,c.jsx)(n.code,{children:`size`}),`, `,(0,c.jsx)(n.code,{children:`hover`}),`, `,(0,c.jsx)(n.code,{children:`--padding`}),`)`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`использование-ссылок`,children:`Использование ссылок`}),`
`,(0,c.jsxs)(n.p,{children:[`Значения, обёрнутые в фигурные скобки (например, `,(0,c.jsx)(n.code,{children:`"{sys.palette.primary}"`}),` или `,(0,c.jsx)(n.code,{children:`"{ref.spacing.10}"`}),`), позволяют динамически ссылаться на дизайн-токены системы. При сборке генератор автоматически заменяет их на реальные CSS-переменные или абсолютные значения.`]}),`
`,(0,c.jsx)(n.h2,{id:`служебные-флаги`,children:`Служебные флаги`}),`
`,(0,c.jsxs)(n.p,{children:[`Специальные ключи конфигурации (флаги) используются для управления генерацией стилей. Все они начинаются со знака подчеркивания `,(0,c.jsx)(n.code,{children:`_`}),`.`]}),`
`,(0,c.jsx)(n.h3,{id:`основные-идентификаторы`,children:`Основные идентификаторы`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`_type: string`}),` — Определяет тип компонента или правила генерации (`,(0,c.jsx)(n.code,{children:`var`}),`, `,(0,c.jsx)(n.code,{children:`state`}),`, `,(0,c.jsx)(n.code,{children:`subclass`}),`, `,(0,c.jsx)(n.code,{children:`media`}),` и т.д.).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`_category: string`}),` — Дополнительный определитель категории для сортировки или фильтрации.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`модификаторы-поведения`,children:`Модификаторы поведения`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`_var: boolean`}),` — Заставляет генератор дополнительно создать CSS переменную `,(0,c.jsx)(n.code,{children:`--name: value`}),` для узла.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`_state: boolean`}),` — Помечает текущий узел как состояние (аналог `,(0,c.jsx)(n.code,{children:`_type: "state"`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`_subclass: boolean`}),` — Помечает текущий узел как подкласс.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`_prop: boolean`}),` — Указывает, что это значение следует экспортировать как Vue/React Prop (реактивное свойство) в `,(0,c.jsx)(n.code,{children:`props.ts`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`_theme: string`}),` — Привязывает текущие стили к конкретной теме.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`инструменты-значений`,children:`Инструменты значений`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`_rename: string`}),` — Переопределяет название свойства или класса в конечном коде. (Например, ключ `,(0,c.jsx)(n.code,{children:`backgroundItem`}),`, но с `,(0,c.jsx)(n.code,{children:`_rename: "bg"`}),` класс выйдет `,(0,c.jsx)(n.code,{children:`.component__bg`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`_replace: string`}),` — Позволяет полностью заменить финальное имя или структуру через шаблонное регулярное выражение.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`_fullName: string`}),` — Жёстко задаёт полное название для CSS-класса/переменной, игнорируя древовидный контекст.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`_fullValue: string`}),` — Выводит значение "как есть", игнорируя парсинг чисел и пикселей.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`_default: any`}),` — Разрешает назначить базовое значение (fallback) для компонента.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`управление-структурой`,children:`Управление структурой`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`_important: boolean`}),` — Добавляет спецификатор `,(0,c.jsx)(n.code,{children:`!important`}),` к правилу.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`_modification: boolean`}),` — Используется для обозначения свойств-модификаторов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`_drag: string`}),` — Перетаскивает (внедряет) этот узел в другое место дерева во время сборки. Полезно для алиасов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`_dragSetting: boolean`}),` — Включает перенос (наследование) внутренних настроек узла в его дочерние элементы.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`_settingClone: boolean`}),` — Клонирует текущие настройки конфигурации и распространяет их на вложенные уровни.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`_style: boolean`}),` — Принудительно генерирует инлайн-стиль вместо класса.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`_remove: boolean`}),` — Исключает данный узел из финальной генерации в SCSS/JS файлы.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};