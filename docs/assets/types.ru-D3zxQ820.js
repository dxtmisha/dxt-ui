import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,em:`em`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/# UI/properties/# Типы`}),`
`,(0,c.jsx)(n.h1,{id:`типы-_type`,children:`Типы (_type)`}),`
`,(0,c.jsxs)(n.p,{children:[`Системный флаг `,(0,c.jsx)(n.code,{children:`_type`}),` является ключевым мета-параметром конфигурационного узла. Он указывает процессору сборки, по какому архитектурному сценарию следует обрабатывать текущий узел (как CSS-переменную, медиа-запрос, псевдоэлемент, модификатор BEM и т.д.). Указание типа критически важно для корректной генерации SCSS-миксинов и интерфейсов TypeScript.`]}),`
`,(0,c.jsx)(n.h2,{id:`поведение-по-умолчанию-и-автоопределение`,children:`Поведение по умолчанию и автоопределение`}),`
`,(0,c.jsxs)(n.p,{children:[`Если параметр `,(0,c.jsx)(n.code,{children:`_type`}),` явно не задан, интерпретатор применяет алгоритм автоматического вывода:`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Распознавание по ключу:`}),` Движок сканирует имя свойства на наличие зарегистрированных символов-алиасов или префиксов вида `,(0,c.jsx)(n.code,{children:`[тип]|[название_свойства]`}),`. Если совпадение найдено, узлу автоматически присваивается соответствующий тип.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Сквозная передача (Bypass):`}),` Если ключ не содержит служебных префиксов, флаг `,(0,c.jsx)(n.code,{children:`_type`}),` остается `,(0,c.jsx)(n.code,{children:`undefined`}),`. Такие узлы игнорируются структурными конвертерами TypeScript и передаются непосредственно в глобальную генерацию SCSS-карт как базовые физические CSS-свойства (key-value).`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`доступные-типы-propertytype`,children:`Доступные типы (PropertyType)`}),`
`,(0,c.jsxs)(n.p,{children:[`Система поддерживает обширный набор спецификаторов (`,(0,c.jsx)(n.code,{children:`_type`}),`), покрывающих любые потребности верстки:`]}),`
`,(0,c.jsx)(n.h3,{id:`базовые-стили-и-переменные`,children:`Базовые стили и Переменные`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`property`}),` — Обозначает стандартное физическое CSS-свойство компонента.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`var`}),` — Указывает, что узел нужно сгенерировать как пользовательскую CSS-переменную (variable).`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`архитектурные-узлы`,children:`Архитектурные узлы`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`design`}),` — Системное имя основного дизайна сборки.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`component`}),` — Базовое наименование UI-компонента для формирования SCSS-карт.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`class`}),` — Явное задание кастомного имени CSS-класса под текущий узел.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`theme`}),` — Указывает, что ветка содержит переопределения для генерации специфичной темы.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`элементы-и-модификаторы-bem`,children:`Элементы и Модификаторы (BEM)`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`subclass`}),` — Подкласс (вложенный элемент компонента), находящийся внутри основного блока.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`state`}),` — Определяет вариации и дополнительные состояния элемента (например, модификаторы BEM).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`virtual`}),` — Виртуальный псевдоэлемент (`,(0,c.jsx)(n.code,{children:`::before`}),`, `,(0,c.jsx)(n.code,{children:`::after`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`selector`}),` — Определяет под-свойства и псевдоклассы элемента (например, `,(0,c.jsx)(n.code,{children:`:hover`}),`, `,(0,c.jsx)(n.code,{children:`:focus`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`адаптивность-responsive--container`,children:`Адаптивность (Responsive & Container)`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`media`}),` / `,(0,c.jsx)(n.code,{children:`media-max`}),` — Определение свойств под конкретный медиа-запрос (с адаптацией по min-width / max-width).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`media-group`}),` / `,(0,c.jsx)(n.code,{children:`media-max-group`}),` — Логическая группировка множества свойств внутри медиа-запросов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`container`}),` / `,(0,c.jsx)(n.code,{children:`container-max`}),` / `,(0,c.jsx)(n.code,{children:`container-group`}),` / `,(0,c.jsx)(n.code,{children:`container-max-group`}),` — Аналогичные типы адаптивности, но привязанные к `,(0,c.jsx)(n.code,{children:`container queries`}),` (@container).`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`анимации`,children:`Анимации`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`animate`}),` — Блок конфигурации свойств CSS-анимации.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`animate-frame`}),` — Выделенный кадр внутри `,(0,c.jsx)(n.code,{children:`@keyframes`}),` анимации.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`логика-и-шаблоны`,children:`Логика и Шаблоны`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`link`}),` — Системная ссылка на другой элемент внутри дерева для прямого глубокого слияния их свойств.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`link-class`}),` — Ссылка на другой элемент дерева исключительно для заимствования его CSS-класса.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`file`}),` — Ссылка на внешний физический конфигурационный файл для объединения.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`mixin`}),` — Вспомогательный примес (mixin), чьи свойства не выведутся напрямую в финальный CSS.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`scss-интеграция-и-служебные`,children:`SCSS интеграция и Служебные`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`scss`}),` — Задает узел как нативную переменную/блок под формирование чистой SCSS сборки.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`root`}),` — Указывает, что данный узел глобален и должен быть эвакуирован в селектор `,(0,c.jsx)(n.code,{children:`:root`}),` (маршрутизация через `,(0,c.jsx)(n.code,{children:`@at-root`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`none`}),` — Узел пропускается и полностью исключается из генерации любых данных.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`other`}),` — Служебный маркер для неопределенных свойств (ведет себя аналогично `,(0,c.jsx)(n.code,{children:`none`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`упрощенный-синтаксис-алиасы`,children:`Упрощенный синтаксис (Алиасы)`}),`
`,(0,c.jsxs)(n.p,{children:[`Чтобы избежать глубокой вложенности и дублирования служебного объекта `,(0,c.jsx)(n.code,{children:`{"_type": "..."}`}),` для каждого узла, система поддерживает краткий синтаксис конфигурации через префиксы ключей. Компилятор автоматически распознает префикс и назначает узлу соответствующий структурный тип (`,(0,c.jsx)(n.code,{children:`_type`}),`).`]}),`
`,(0,c.jsx)(n.h3,{id:`1-символьные-префиксы-symbols`,children:`1. Символьные префиксы (SYMBOLS)`}),`
`,(0,c.jsx)(n.p,{children:`Ряд часто используемых архитектурных типов привязан к быстрым символам-идентификаторам. Достаточно начать имя ключа с этого спецсимвола:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$`}),` `,(0,c.jsxs)(n.em,{children:[`(эквивалент `,(0,c.jsx)(n.code,{children:`var`}),`)`]}),` — Описывает системную переменную (Пример: `,(0,c.jsx)(n.code,{children:`"$border"`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`#`}),` `,(0,c.jsxs)(n.em,{children:[`(эквивалент `,(0,c.jsx)(n.code,{children:`subclass`}),`)`]}),` — Элемент структуры BEM (Пример: `,(0,c.jsx)(n.code,{children:`"#icon"`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`~`}),` `,(0,c.jsxs)(n.em,{children:[`(эквивалент `,(0,c.jsx)(n.code,{children:`state`}),`)`]}),` — Вариации и модификаторы элемента (Пример: `,(0,c.jsx)(n.code,{children:`"~primary"`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`:`}),` `,(0,c.jsxs)(n.em,{children:[`(эквивалент `,(0,c.jsx)(n.code,{children:`selector`}),`)`]}),` — Под-свойства и псевдоклассы элемента (Пример: `,(0,c.jsx)(n.code,{children:`":hover"`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`::`}),` `,(0,c.jsxs)(n.em,{children:[`(эквивалент `,(0,c.jsx)(n.code,{children:`virtual`}),`)`]}),` — Виртуальный псевдоэлемент (Пример: `,(0,c.jsx)(n.code,{children:`"::after"`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`@`}),` `,(0,c.jsxs)(n.em,{children:[`(эквивалент `,(0,c.jsx)(n.code,{children:`link`}),`)`]}),` — Системная ссылка на узел дерева.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`@@`}),` `,(0,c.jsxs)(n.em,{children:[`(эквивалент `,(0,c.jsx)(n.code,{children:`link-class`}),`)`]}),` — Системная ссылка на CSS-класс.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`&`}),` `,(0,c.jsxs)(n.em,{children:[`(эквивалент `,(0,c.jsx)(n.code,{children:`scss`}),`)`]}),` — Нативный SCSS-селектор.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`&&`}),` `,(0,c.jsxs)(n.em,{children:[`(эквивалент `,(0,c.jsx)(n.code,{children:`root`}),`)`]}),` — Перенос логики в глобальную область видимости (через `,(0,c.jsx)(n.code,{children:`@at-root`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`--`}),` `,(0,c.jsxs)(n.em,{children:[`(эквивалент `,(0,c.jsx)(n.code,{children:`none`}),`)`]}),` — Вырезание узла и блокировка его генерации при сборке.`]}),`
`]}),`
`,(0,c.jsxs)(n.h3,{id:`2-универсальный-pipe-синтаксис-`,children:[`2. Универсальный Pipe-синтаксис (`,(0,c.jsx)(n.code,{children:`|`}),`)`]}),`
`,(0,c.jsxs)(n.p,{children:[`Если для целевого архитектурного типа не предусмотрен спецсимвол (например, `,(0,c.jsx)(n.code,{children:`media`}),` или `,(0,c.jsx)(n.code,{children:`container-group`}),`), применяется конструкция разделения через вертикальную черту: `,(0,c.jsx)(n.code,{children:`[тип]|[название_свойства]`}),`.`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[`Парсер автоматически извлекает подстроку слева от `,(0,c.jsx)(n.code,{children:`|`}),` и интерпретирует её как системный тип (`,(0,c.jsx)(n.code,{children:`_type`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Пример:`}),` Конструкция `,(0,c.jsx)(n.code,{children:`"media-group|adaptive-block"`}),` определит тип узла как `,(0,c.jsx)(n.code,{children:`media-group`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`пример-генерации`,children:`Пример генерации`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsxs)(n.strong,{children:[`Входная конфигурация (`,(0,c.jsx)(n.code,{children:`properties.json`}),`):`]})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-json`,children:`{
  "padding": "12px",             // Без типа (свойство property)
  
  "sm": {                        // Явное указание типа (media)
    "_type": "media",
    "padding": "16px"
  },

  "$border": "8px",              // Алиас: var
  
  "#icon": {                     // Алиас: subclass
    "width": "24px"
  },
  
  ":hover": {                    // Алиас: selector
    "background-color": "#aaaaaa"
  },
  
  "~primary": {                  // Алиас: state
    "color": "#ff0000"
  }
}
`})}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Ожидаемый результат генерации стилей (SCSS):`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.component-name {
  padding: 12px;
  --sys-[component]-border: 8px;

  @media (min-width: 576px) {  /* Ветка sm (media) */
    padding: 16px;
  }

  &__icon {                    /* Ветка #icon (subclass) */
    width: 24px;
  }

  &:hover {                    /* Ветка :hover (selector) */
    background-color: #aaaaaa;
  }

  &--primary {                 /* Ветка ~primary (state) */
    color: #ff0000;
  }
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};