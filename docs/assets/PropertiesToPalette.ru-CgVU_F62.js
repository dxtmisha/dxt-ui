import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/Classes/PropertiesToPalette - Компилятор цветовых палитр и тем`}),`
`,(0,c.jsx)(t.h1,{id:`класс-propertiestopalette`,children:`Класс PropertiesToPalette`}),`
`,(0,c.jsxs)(t.p,{children:[`Класс `,(0,c.jsx)(t.code,{children:`PropertiesToPalette`}),` обрабатывает токены дизайна, относящиеся к категории `,(0,c.jsx)(t.code,{children:`palette`}),`, и компилирует их в конкретные цветовые переменные и классы, сопоставленные с темами. Он наследует класс `,(0,c.jsx)(t.code,{children:`PropertiesToAbstract`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Компиляция тем`}),` — Сопоставляет цвета палитры с вариациями тем (такими как тема по умолчанию `,(0,c.jsx)(t.code,{children:`basic`}),`) и пользовательскими макетами дизайна.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Динамические свойства CSS`}),` — Преобразует необработанные оттенки в переменные CSS (типа `,(0,c.jsx)(t.code,{children:`PropertyType.var`}),` и категории `,(0,c.jsx)(t.code,{children:`PropertyCategory.color`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Синтез темы по умолчанию`}),` — Генерирует сопоставления значений переменных темы по умолчанию (`,(0,c.jsx)(t.code,{children:`sys-palette`}),`), используя конфигурации резервных вариантов.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Кэширование результатов`}),` — Сохраняет результаты компиляции в файл кэша `,(0,c.jsx)(t.code,{children:`002-palette`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { PropertiesToPalette, PropertiesItems } from '@dxtmisha/scripts'

const transformer = new PropertiesToPalette(items)
transformer.to()
`})}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`операции-жизненного-цикла-и-компиляции`,children:`Операции жизненного цикла и компиляции`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`init(): void`}),` — Переопределяет абстрактный шаг жизненного цикла для запуска правил компиляции стандартных цветов и пользовательских тем.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getParent(category: PropertyCategory.colors | PropertyCategory.class, parent: PropertyList): PropertyList`}),` — Безопасно извлекает или создает новый контейнер под ключом `,(0,c.jsx)(t.code,{children:`palette`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getClass(items: PropertyList, name: string): PropertyList`}),` — Извлекает или инициализирует объект класса в списке свойств для заданного цвета.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getName(theme: string, name: string): string`}),` — Объединяет имя темы и имя оттенка цвета (например, `,(0,c.jsx)(t.code,{children:`basic-primary`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getValue(link: string, name: string): string`}),` — Конструирует строку представления переменной в фигурных скобках.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getValueDefault(item: PropertyItem, theme: string): string`}),` — Разрешает имя оттенка цвета по умолчанию, настроенное для палитры.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`read(root?: PropertyList, theme?: string, designParent?: string): void`}),` — Обходит свойства палитры, добавляя оттенки тем и индикаторы по умолчанию к классам.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`addItem(parent: PropertyList, link: string, theme: string, palette: PropertyList): void`}),` — Заполняет список свойств токенами цветов и ссылками.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`addDefault(parent: PropertyList, theme: string, palette: PropertyItem): void`}),` — Настраивает резервный индикатор основной палитры `,(0,c.jsx)(t.code,{children:`sys-palette`}),`.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};