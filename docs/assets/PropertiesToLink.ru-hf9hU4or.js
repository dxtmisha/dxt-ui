import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/Classes/PropertiesToLink - Разрешение ссылок на значения токенов`}),`
`,(0,c.jsx)(t.h1,{id:`класс-propertiestolink`,children:`Класс PropertiesToLink`}),`
`,(0,c.jsxs)(t.p,{children:[`Класс `,(0,c.jsx)(t.code,{children:`PropertiesToLink`}),` разрешает внутренние ссылки в фигурных скобках (например, `,(0,c.jsx)(t.code,{children:`{design.component.property}`}),`) в дереве токенов дизайна и заменяет их фактическими значениями. Он наследует класс `,(0,c.jsx)(t.code,{children:`PropertiesToAbstract`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Рекурсивное разрешение ссылок`}),` — Разрешает вложенные ссылки различной глубины путем итеративного обхода дерева токенов.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Защита от циклических ссылок`}),` — Ограничивает глубину обхода и помечает обработанные ссылки во избежание бесконечных циклов.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Проверка синтаксиса скобок`}),` — Проверяет токены ссылок на соответствие шаблону регулярного выражения `,(0,c.jsx)(t.code,{children:`^{...}$`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Кэширование результатов`}),` — Сохраняет разрешенную структуру свойств в файл кэша `,(0,c.jsx)(t.code,{children:`004-link`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { PropertiesToLink, PropertiesItems } from '@dxtmisha/scripts'

const transformer = new PropertiesToLink(items)
transformer.to()
`})}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`операции-разрешения-ссылок`,children:`Операции разрешения ссылок`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`init(): void`}),` — Переопределяет абстрактный шаг жизненного цикла для запуска до 32 проходов разрешения ссылок, пока не перестанут обнаруживаться изменения.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`read(design?: string, component?: string, properties?, parent?: string[]): boolean`}),` — Рекурсивно сканирует свойства, обнаруживает ссылки, разрешает их исходные элементы и помещает их в очередь для вставки.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isType(item: PropertyItem): boolean`}),` — Проверяет, соответствует ли свойство типам, поддерживающим ссылки (например, `,(0,c.jsx)(t.code,{children:`link`}),`, `,(0,c.jsx)(t.code,{children:`var`}),`, `,(0,c.jsx)(t.code,{children:`property`}),`, `,(0,c.jsx)(t.code,{children:`selector`}),`, `,(0,c.jsx)(t.code,{children:`virtual`}),`, `,(0,c.jsx)(t.code,{children:`scss`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isValue(value: PropertyItem['value']): value is string`}),` — Проверяет, является ли значение корректной строкой ссылки в фигурных скобках.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isIgnore(value: string): boolean`}),` — Проверяет, помечена ли ссылка для игнорирования.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isLink(value: string): boolean`}),` — Проверяет, была ли ссылка уже разрешена.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isData(value: PropertyItem['value']): value is PropertyList`}),` — Определяет, указывает ли ссылка на сложный узел объекта.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`add(parent: string[], items: PropertyLinkItem[]): void`}),` — Вставляет разрешенные значения обратно в ссылающиеся родительские узлы.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`addIgnore(value: string): void`}),` — Добавляет значение в массив игнорирования.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`addLink(value: string): void`}),` — Регистрирует ссылку как обработанную.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};