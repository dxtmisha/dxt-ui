import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/scripts/Classes/PropertiesToLink - Разрешение ссылок на значения токенов`}),`
`,(0,c.jsx)(n.h1,{id:`класс-propertiestolink`,children:`Класс PropertiesToLink`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс `,(0,c.jsx)(n.code,{children:`PropertiesToLink`}),` разрешает внутренние ссылки в фигурных скобках (например, `,(0,c.jsx)(n.code,{children:`{design.component.property}`}),`) в дереве токенов дизайна и заменяет их фактическими значениями. Он наследует класс `,(0,c.jsx)(n.code,{children:`PropertiesToAbstract`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Рекурсивное разрешение ссылок`}),` — Разрешает вложенные ссылки различной глубины путем итеративного обхода дерева токенов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Защита от циклических ссылок`}),` — Ограничивает глубину обхода и помечает обработанные ссылки во избежание бесконечных циклов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Проверка синтаксиса скобок`}),` — Проверяет токены ссылок на соответствие шаблону регулярного выражения `,(0,c.jsx)(n.code,{children:`^{...}$`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Кэширование результатов`}),` — Сохраняет разрешенную структуру свойств в файл кэша `,(0,c.jsx)(n.code,{children:`004-link`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PropertiesToLink, PropertiesItems } from '@dxtmisha/scripts'

const transformer = new PropertiesToLink(items)
transformer.to()
`})}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(n.h3,{id:`операции-разрешения-ссылок`,children:`Операции разрешения ссылок`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`init(): void`}),` — Переопределяет абстрактный шаг жизненного цикла для запуска до 32 проходов разрешения ссылок, пока не перестанут обнаруживаться изменения.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`read(design?: string, component?: string, properties?, parent?: string[]): boolean`}),` — Рекурсивно сканирует свойства, обнаруживает ссылки, разрешает их исходные элементы и помещает их в очередь для вставки.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isType(item: PropertyItem): boolean`}),` — Проверяет, соответствует ли свойство типам, поддерживающим ссылки (например, `,(0,c.jsx)(n.code,{children:`link`}),`, `,(0,c.jsx)(n.code,{children:`var`}),`, `,(0,c.jsx)(n.code,{children:`property`}),`, `,(0,c.jsx)(n.code,{children:`selector`}),`, `,(0,c.jsx)(n.code,{children:`virtual`}),`, `,(0,c.jsx)(n.code,{children:`scss`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isValue(value: PropertyItem['value']): value is string`}),` — Проверяет, является ли значение корректной строкой ссылки в фигурных скобках.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isIgnore(value: string): boolean`}),` — Проверяет, помечена ли ссылка для игнорирования.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isLink(value: string): boolean`}),` — Проверяет, была ли ссылка уже разрешена.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isData(value: PropertyItem['value']): value is PropertyList`}),` — Определяет, указывает ли ссылка на сложный узел объекта.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`add(parent: string[], items: PropertyLinkItem[]): void`}),` — Вставляет разрешенные значения обратно в ссылающиеся родительские узлы.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`addIgnore(value: string): void`}),` — Добавляет значение в массив игнорирования.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`addLink(value: string): void`}),` — Регистрирует ссылку как обработанную.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};