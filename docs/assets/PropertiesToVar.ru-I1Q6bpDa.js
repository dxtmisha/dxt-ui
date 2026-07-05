import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/scripts/Classes/PropertiesToVar - Преобразование значений переменных CSS`}),`
`,(0,c.jsx)(n.h1,{id:`класс-propertiestovar`,children:`Класс PropertiesToVar`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс `,(0,c.jsx)(n.code,{children:`PropertiesToVar`}),` преобразует токены дизайна, представляющие переменные, в стандартные пользовательские свойства CSS (`,(0,c.jsx)(n.code,{children:`--var-name: values`}),`). Он наследует класс `,(0,c.jsx)(n.code,{children:`PropertiesToAbstract`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Синтез переменных CSS`}),` — Преобразует имена токенов переменных в пользовательские свойства с префиксом из двух дефисов (`,(0,c.jsx)(n.code,{children:`--prefix-name`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Математические выражения`}),` — Автоматически оборачивает стандартные математические выражения (`,(0,c.jsx)(n.code,{children:`+`}),`, `,(0,c.jsx)(n.code,{children:`-`}),`, `,(0,c.jsx)(n.code,{children:`*`}),`, `,(0,c.jsx)(n.code,{children:`/`}),`) внутри блоков `,(0,c.jsx)(n.code,{children:`calc(...)`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Развертывание ссылок`}),` — Разрешает ссылки в фигурных скобках в вложенные форматы CSS `,(0,c.jsx)(n.code,{children:`var(...)`}),` с поддержкой резервных значений по умолчанию.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Разрешение прозрачности`}),` — Безопасно обнаруживает переменные цветов, содержащие атрибуты прозрачности, помечая их метаданными прозрачности.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Кэширование результатов`}),` — Сохраняет разрешенные определения переменных в файл кэша `,(0,c.jsx)(n.code,{children:`020-var`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PropertiesToVar, PropertiesItems } from '@dxtmisha/scripts'

const transformer = new PropertiesToVar(items)
transformer.to()
`})}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(n.h3,{id:`операции-разрешения`,children:`Операции разрешения`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`init(): void`}),` — Переопределяет абстрактный шаг жизненного цикла для получения узлов типов переменных, синтезирования имен переменных, форматирования их значений CSS и разрешения прозрачности цветов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getName(property: PropertyItemsItem): string`}),` — Создает стандартные ключи именования свойств CSS (например, `,(0,c.jsx)(n.code,{children:`--sys-color-primary`}),`), ограниченные родительскими пространствами имен.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`toCalculator(value: string, full?: boolean): string`}),` — Оборачивает математические выражения в инструкции `,(0,c.jsx)(n.code,{children:`calc()`}),`, если они еще не отформатированы.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`toLink(value: string): string`}),` — Нормализует ключи индексов ссылок в стандартные сегменты имен переменных.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`toValue(value: string, defaultValue?: PropertyItem['_default']): string`}),` — Рекурсивно разрешает вложенные ссылки в фигурных скобках в стандартные значения CSS `,(0,c.jsx)(n.code,{children:`var(--name, fallback)`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isNone(parents: PropertyItemsParent[]): boolean`}),` — Возвращает true, если какой-либо родительский элемент имеет тип `,(0,c.jsx)(n.code,{children:`PropertyType.none`}),`, представляющий скрытое свойство.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isColorWithOpacity(property: PropertyItemsItem): boolean`}),` — Безопасно обходит ссылки на цвета для проверки активности свойств прозрачности.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};