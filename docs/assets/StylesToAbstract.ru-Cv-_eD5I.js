import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-D7dWA4DD.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/scripts/Classes/StylesToAbstract - Базовый класс для преобразования стилей`}),`
`,(0,c.jsx)(n.h1,{id:`класс-stylestoabstract`,children:`Класс StylesToAbstract`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс `,(0,c.jsx)(n.code,{children:`StylesToAbstract`}),` является основой для всех механизмов преобразования стилей. Он предоставляет стандартизированный интерфейс и набор вспомогательных методов для перевода свойств дизайна в CSS-совместимые структуры.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Стандартизированный конвейер обработки`}),` — Гарантирует, что все подклассы следуют одному и тому же рабочему процессу: `,(0,c.jsx)(n.code,{children:`make`}),` → `,(0,c.jsx)(n.code,{children:`treatment`}),` → `,(0,c.jsx)(n.code,{children:`addSpace`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Управление контекстом свойств`}),` — Автоматически управляет текущим свойством дизайна, уровнями отступов и положением в дереве.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Гибкое делегирование контента`}),` — Поддерживает рекурсивную обработку свойств через вызываемых функций.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Разрешение путей и имен`}),` — Встроенные помощники для извлечения и нормализации имен свойств и значений CSS.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(n.p,{children:[`Являясь абстрактным классом, `,(0,c.jsx)(n.code,{children:`StylesToAbstract`}),` не может быть создан напрямую. Он служит базой для конкретных преобразователей стилей.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`property: PropertyItemsItem`}),` — текущая ветка дерева свойств, которая обрабатывается.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`space: string`}),` — строка отступа (например, `,(0,c.jsx)(n.code,{children:`"  "`}),` или `,(0,c.jsx)(n.code,{children:`"\\t"`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`content?: () => string[]`}),` — вызываемая функция, используемая для обработки подсвойств (необязательно).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`first?: boolean`}),` — указывает, является ли этот элемент первым в текущем списке или на уровне дерева (необязательно, по умолчанию: `,(0,c.jsx)(n.code,{children:`true`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { StylesToAbstract } from '@dxtmisha/scripts'

// Пример: Создание конкретной реализации
class StylesToCustom extends StylesToAbstract {
  protected treatment(): string[] {
    // Определите здесь логику преобразования
    return [
      \`\${this.getName()} {\`,
      \`  content: \${this.getValue()};\`,
      '}'
    ]
  }
}
`})}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(n.h3,{id:`управление`,children:`Управление`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`make(): string[]`}),` — Основная точка входа. Организует преобразование и добавляет необходимый отступ к каждой строке.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`абстрактные`,children:`Абстрактные`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`treatment(): string[]`}),` — Определяет конкретную логику преобразования данных свойства в структуру стиля. Подклассы должны реализовать этот метод.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};