import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/Classes/PropertiesToVar - Преобразование значений переменных CSS`}),`
`,(0,c.jsx)(t.h1,{id:`класс-propertiestovar`,children:`Класс PropertiesToVar`}),`
`,(0,c.jsxs)(t.p,{children:[`Класс `,(0,c.jsx)(t.code,{children:`PropertiesToVar`}),` преобразует токены дизайна, представляющие переменные, в стандартные пользовательские свойства CSS (`,(0,c.jsx)(t.code,{children:`--var-name: values`}),`). Он наследует класс `,(0,c.jsx)(t.code,{children:`PropertiesToAbstract`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Синтез переменных CSS`}),` — Преобразует имена токенов переменных в пользовательские свойства с префиксом из двух дефисов (`,(0,c.jsx)(t.code,{children:`--prefix-name`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Математические выражения`}),` — Автоматически оборачивает стандартные математические выражения (`,(0,c.jsx)(t.code,{children:`+`}),`, `,(0,c.jsx)(t.code,{children:`-`}),`, `,(0,c.jsx)(t.code,{children:`*`}),`, `,(0,c.jsx)(t.code,{children:`/`}),`) внутри блоков `,(0,c.jsx)(t.code,{children:`calc(...)`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Развертывание ссылок`}),` — Разрешает ссылки в фигурных скобках в вложенные форматы CSS `,(0,c.jsx)(t.code,{children:`var(...)`}),` с поддержкой резервных значений по умолчанию.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Разрешение прозрачности`}),` — Безопасно обнаруживает переменные цветов, содержащие атрибуты прозрачности, помечая их метаданными прозрачности.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Кэширование результатов`}),` — Сохраняет разрешенные определения переменных в файл кэша `,(0,c.jsx)(t.code,{children:`020-var`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { PropertiesToVar, PropertiesItems } from '@dxtmisha/scripts'

const transformer = new PropertiesToVar(items)
transformer.to()
`})}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`операции-разрешения`,children:`Операции разрешения`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`init(): void`}),` — Переопределяет абстрактный шаг жизненного цикла для получения узлов типов переменных, синтезирования имен переменных, форматирования их значений CSS и разрешения прозрачности цветов.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getName(property: PropertyItemsItem): string`}),` — Создает стандартные ключи именования свойств CSS (например, `,(0,c.jsx)(t.code,{children:`--sys-color-primary`}),`), ограниченные родительскими пространствами имен.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`toCalculator(value: string, full?: boolean): string`}),` — Оборачивает математические выражения в инструкции `,(0,c.jsx)(t.code,{children:`calc()`}),`, если они еще не отформатированы.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`toLink(value: string): string`}),` — Нормализует ключи индексов ссылок в стандартные сегменты имен переменных.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`toValue(value: string, defaultValue?: PropertyItem['_default']): string`}),` — Рекурсивно разрешает вложенные ссылки в фигурных скобках в стандартные значения CSS `,(0,c.jsx)(t.code,{children:`var(--name, fallback)`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isNone(parents: PropertyItemsParent[]): boolean`}),` — Возвращает true, если какой-либо родительский элемент имеет тип `,(0,c.jsx)(t.code,{children:`PropertyType.none`}),`, представляющий скрытое свойство.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isColorWithOpacity(property: PropertyItemsItem): boolean`}),` — Безопасно обходит ссылки на цвета для проверки активности свойств прозрачности.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};