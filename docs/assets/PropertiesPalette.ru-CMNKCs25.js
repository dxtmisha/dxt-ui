import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/Classes/PropertiesPalette - Менеджер палитры и оттенков`}),`
`,(0,c.jsx)(t.h1,{id:`класс-propertiespalette`,children:`Класс PropertiesPalette`}),`
`,(0,c.jsxs)(t.p,{children:[`Класс `,(0,c.jsx)(t.code,{children:`PropertiesPalette`}),` — это специализированный менеджер для работы с токенами дизайна, связанными с цветом. Он фокусируется на двух основных областях: управлении шагами насыщенности цвета (оттенками) и отслеживании фактического использования цветов палитры в функциональных переменных. Анализируя способы использования цветов в системе дизайна, он помогает гарантировать согласованность определений тем и правильность ссылок сгенерированных CSS-переменных на соответствующие записи в палитре.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Обнаружение насыщенности`}),` — автоматически извлекает доступные уровни оттенков (например, 50, 100, 200) из дерева свойств.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Отслеживание использования`}),` — идентифицирует, какие цвета палитры фактически сопоставлены с переменными компонентов, упрощая удаление неиспользуемого кода или проведение аудита.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Сопоставление с учетом темы`}),` — разрешает сложные ссылки на цвета, учитывая специфические для темы переопределения (например, `,(0,c.jsx)(t.code,{children:`basic`}),` или `,(0,c.jsx)(t.code,{children:`dark`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Синтез CSS-переменных`}),` — прозрачно преобразует внутренние ссылки на цвета в стандартизированные имена CSS-переменных (например, `,(0,c.jsx)(t.code,{children:`--design-palette-theme-color`}),`).`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(t.p,{children:[`Для инициализации объекта вызовите конструктор `,(0,c.jsx)(t.code,{children:`PropertiesPalette(items)`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`items: PropertiesItems`}),` — экземпляр координационного класса, отвечающего за обход и поиск в дереве свойств.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { PropertiesPalette, PropertiesItems } from '@dxtmisha/scripts'

// 1. Подготовка необходимого координатора
const manager = new PropertiesItems(allTokenData)

// 2. Создание менеджера палитры
const palette = new PropertiesPalette(manager)

// 3. Извлечение активных оттенков или используемых цветов
const shades = palette.getShade()
const usedColors = palette.getUsed()
`})}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`getshade`,children:(0,c.jsx)(t.code,{children:`getShade`})}),`
`,(0,c.jsx)(t.p,{children:`Извлекает список доступных уровней насыщенности (оттенков), сгруппированных по дизайну. Метод сканирует все дерево свойств на наличие элементов, классифицированных именно как 'shade' (оттенок), и возвращает их разрешенные структуры. Эти оттенки обычно представляют числовую шкалу насыщенности цвета (например, 50, 100, 200), используемую в дизайн-системе.`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(t.code,{children:`PropertyPaletteList`}),` — специализированный объект, где ключами являются названия дизайнов, а значениями — массивы токенов оттенков цветов.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const shades = palette.getShade();
// Результат: { "basic": ["50", "100", ...], "premium": ["50", ...] }
`})}),`
`,(0,c.jsx)(t.h3,{id:`getused`,children:(0,c.jsx)(t.code,{children:`getUsed`})}),`
`,(0,c.jsx)(t.p,{children:`Генерирует исчерпывающий отчет обо всех цветах палитры, используемых в данный момент в функциональных переменных во всей системе дизайна. Он выполняет итерацию по всем токенам, идентифицируя ссылки на CSS-переменные, которые указывают на записи палитры, и сопоставляет их с сгенерированными именами CSS-переменных. Это необходимо для аудита использования цветов и выявления неиспользуемых записей палитры.`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(t.code,{children:`PropertyPaletteUsed[]`}),` — массив объектов, каждый из которых содержит имя функциональной переменной и соответствующее ей имя CSS-переменной, производное от палитры.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const report = palette.getUsed();
/* Результат: 
[
  { "name": "primaryBackground", "value": ["--basic-palette-basic-blue-50"] }
] 
*/
`})}),`
`,(0,c.jsx)(t.h3,{id:`getfocusused`,children:(0,c.jsx)(t.code,{children:`getFocusUsed`})}),`
`,(0,c.jsx)(t.p,{children:`Рекурсивно разрешает конкретное значение свойства для определения его конечного источника в палитре. Этот вспомогательный метод используется для отслеживания ссылок через несколько уровней абстракции (например, переменные компонентов, указывающие на цвета темы, которые, в свою очередь, указывают на оттенки палитры).`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`list: PropertyItem['value'][]`}),` — список известных значений палитры для проверки в процессе разрешения.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`design: string`}),` — название текущей темы дизайна.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`component: string`}),` — имя контекста компонента, для которого выполняется разрешение.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: string`}),` — необработанное значение или ссылка (например, `,(0,c.jsx)(t.code,{children:`{color.primary}`}),`) для отслеживания до палитры.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(t.code,{children:`string | undefined`}),` — конечная разрешенная строка значения, если она ведет к записи в палитре; в противном случае — `,(0,c.jsx)(t.code,{children:`undefined`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const source = palette.getFocusUsed(
  paletteList, 
  'basic', 
  'button', 
  '{color.primary}'
);
`})}),`
`,(0,c.jsx)(t.h2,{id:`операции`,children:`Операции`}),`
`,(0,c.jsx)(t.h3,{id:`поток-разрешения-использования-цветов`,children:`Поток разрешения использования цветов`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`PropertiesPalette`}),` выполняет глубокий анализ того, как цвета переходят из палитры к компонентам:`]}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Обход дерева`}),`: Используя `,(0,c.jsx)(t.code,{children:`PropertiesItems.each()`}),`, класс посещает каждый узел в системе дизайна.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Фильтрация переменных`}),`: Он нацелен именно на элементы типа `,(0,c.jsx)(t.code,{children:`var`}),`, которые сами не классифицируются как `,(0,c.jsx)(t.code,{children:`color`}),`, но содержат строковые значения, похожие на ссылки на цвета.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Рекурсивное разрешение ссылок`}),`: При обнаружении кандидата `,(0,c.jsx)(t.code,{children:`getFocusUsed()`}),` разрешает любые промежуточные ссылки (например, `,(0,c.jsx)(t.code,{children:`primary`}),` -> `,(0,c.jsx)(t.code,{children:`theme.brand.main`}),` -> `,(0,c.jsx)(t.code,{children:`palette.blue.50`}),`), пока не достигнет необработанного определения палитры или не подтвердит, что ссылка не относится к палитре.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Определение темы`}),`: Он исследует иерархию (`,(0,c.jsx)(t.code,{children:`parents`}),`), чтобы определить, принадлежит ли цвет конкретному блоку темы, что позволяет правильно назвать результирующую CSS-переменную (например, добавив имя темы в начало).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Агрегация данных`}),`: Результаты группируются по имени переменной, предоставляя четкую карту того, какие функциональные токены потребляют те или иные цвета палитры.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`примеры`,children:`Примеры`}),`
`,(0,c.jsx)(t.h3,{id:`извлечение-оттенков-и-использования`,children:`Извлечение оттенков и использования`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { PropertiesPalette, PropertiesItems } from '@dxtmisha/scripts'

const manager = new PropertiesItems(allTokenData)
const palette = new PropertiesPalette(manager)

// 1. Получение доступных оттенков
const shades = palette.getShade()

// 2. Сканирование используемых цветов в компонентах
const report = palette.getUsed()
`})}),`
`,(0,c.jsx)(t.h3,{id:`ручное-разрешение-ссылки`,children:`Ручное разрешение ссылки`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const isPaletteValue = palette.getFocusUsed(
  paletteValueList, 
  'basic', 
  'button', 
  '{color.primary}'
)
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};