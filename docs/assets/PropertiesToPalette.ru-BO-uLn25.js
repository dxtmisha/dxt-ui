import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/scripts/Classes/PropertiesToPalette - Компилятор цветовых палитр и тем`}),`
`,(0,c.jsx)(n.h1,{id:`класс-propertiestopalette`,children:`Класс PropertiesToPalette`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс `,(0,c.jsx)(n.code,{children:`PropertiesToPalette`}),` обрабатывает токены дизайна, относящиеся к категории `,(0,c.jsx)(n.code,{children:`palette`}),`, и компилирует их в конкретные цветовые переменные и классы, сопоставленные с темами. Он наследует класс `,(0,c.jsx)(n.code,{children:`PropertiesToAbstract`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Компиляция тем`}),` — Сопоставляет цвета палитры с вариациями тем (такими как тема по умолчанию `,(0,c.jsx)(n.code,{children:`basic`}),`) и пользовательскими макетами дизайна.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Динамические свойства CSS`}),` — Преобразует необработанные оттенки в переменные CSS (типа `,(0,c.jsx)(n.code,{children:`PropertyType.var`}),` и категории `,(0,c.jsx)(n.code,{children:`PropertyCategory.color`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Синтез темы по умолчанию`}),` — Генерирует сопоставления значений переменных темы по умолчанию (`,(0,c.jsx)(n.code,{children:`sys-palette`}),`), используя конфигурации резервных вариантов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Кэширование результатов`}),` — Сохраняет результаты компиляции в файл кэша `,(0,c.jsx)(n.code,{children:`002-palette`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PropertiesToPalette, PropertiesItems } from '@dxtmisha/scripts'

const transformer = new PropertiesToPalette(items)
transformer.to()
`})}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(n.h3,{id:`операции-жизненного-цикла-и-компиляции`,children:`Операции жизненного цикла и компиляции`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`init(): void`}),` — Переопределяет абстрактный шаг жизненного цикла для запуска правил компиляции стандартных цветов и пользовательских тем.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getParent(category: PropertyCategory.colors | PropertyCategory.class, parent: PropertyList): PropertyList`}),` — Безопасно извлекает или создает новый контейнер под ключом `,(0,c.jsx)(n.code,{children:`palette`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getClass(items: PropertyList, name: string): PropertyList`}),` — Извлекает или инициализирует объект класса в списке свойств для заданного цвета.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getName(theme: string, name: string): string`}),` — Объединяет имя темы и имя оттенка цвета (например, `,(0,c.jsx)(n.code,{children:`basic-primary`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getValue(link: string, name: string): string`}),` — Конструирует строку представления переменной в фигурных скобках.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getValueDefault(item: PropertyItem, theme: string): string`}),` — Разрешает имя оттенка цвета по умолчанию, настроенное для палитры.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`read(root?: PropertyList, theme?: string, designParent?: string): void`}),` — Обходит свойства палитры, добавляя оттенки тем и индикаторы по умолчанию к классам.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`addItem(parent: PropertyList, link: string, theme: string, palette: PropertyList): void`}),` — Заполняет список свойств токенами цветов и ссылками.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`addDefault(parent: PropertyList, theme: string, palette: PropertyItem): void`}),` — Настраивает резервный индикатор основной палитры `,(0,c.jsx)(n.code,{children:`sys-palette`}),`.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};