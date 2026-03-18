import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-DC9WpFni.js";import{M as i}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function r(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"@dxtmisha/ru/scripts/Classes/PropertiesPalette - Менеджер палитры и оттенков"}),`
`,e.jsx(n.h1,{id:"класс-propertiespalette",children:"Класс PropertiesPalette"}),`
`,e.jsxs(n.p,{children:["Класс ",e.jsx(n.code,{children:"PropertiesPalette"})," — это специализированный менеджер для работы с токенами дизайна, связанными с цветом. Он фокусируется на двух основных областях: управлении шагами насыщенности цвета (оттенками) и отслеживании фактического использования цветов палитры в функциональных переменных. Анализируя способы использования цветов в системе дизайна, он помогает гарантировать согласованность определений тем и правильность ссылок сгенерированных CSS-переменных на соответствующие записи в палитре."]}),`
`,e.jsx(n.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Обнаружение насыщенности"})," — автоматически извлекает доступные уровни оттенков (например, 50, 100, 200) из дерева свойств."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Отслеживание использования"})," — идентифицирует, какие цвета палитры фактически сопоставлены с переменными компонентов, упрощая удаление неиспользуемого кода или проведение аудита."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Сопоставление с учетом темы"})," — разрешает сложные ссылки на цвета, учитывая специфические для темы переопределения (например, ",e.jsx(n.code,{children:"basic"})," или ",e.jsx(n.code,{children:"dark"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Синтез CSS-переменных"})," — прозрачно преобразует внутренние ссылки на цвета в стандартизированные имена CSS-переменных (например, ",e.jsx(n.code,{children:"--design-palette-theme-color"}),")."]}),`
`]}),`
`,e.jsx(n.h2,{id:"инициализация",children:"Инициализация"}),`
`,e.jsxs(n.p,{children:["Для инициализации объекта вызовите конструктор ",e.jsx(n.code,{children:"PropertiesPalette(items)"}),"."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"items: PropertiesItems"})," — экземпляр координационного класса, отвечающего за обход и поиск в дереве свойств."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { PropertiesPalette, PropertiesItems } from '@dxtmisha/scripts'

// 1. Подготовка необходимого координатора
const manager = new PropertiesItems(allTokenData)

// 2. Создание менеджера палитры
const palette = new PropertiesPalette(manager)

// 3. Извлечение активных оттенков или используемых цветов
const shades = palette.getShade()
const usedColors = palette.getUsed()
`})}),`
`,e.jsx(n.h2,{id:"методы",children:"Методы"}),`
`,e.jsx(n.h3,{id:"getshade",children:e.jsx(n.code,{children:"getShade"})}),`
`,e.jsx(n.p,{children:"Извлекает список доступных уровней насыщенности (оттенков), сгруппированных по дизайну. Метод сканирует все дерево свойств на наличие элементов, классифицированных именно как 'shade' (оттенок), и возвращает их разрешенные структуры. Эти оттенки обычно представляют числовую шкалу насыщенности цвета (например, 50, 100, 200), используемую в дизайн-системе."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"PropertyPaletteList"})," — специализированный объект, где ключами являются названия дизайнов, а значениями — массивы токенов оттенков цветов."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`const shades = palette.getShade();
// Результат: { "basic": ["50", "100", ...], "premium": ["50", ...] }
`})}),`
`,e.jsx(n.h3,{id:"getused",children:e.jsx(n.code,{children:"getUsed"})}),`
`,e.jsx(n.p,{children:"Генерирует исчерпывающий отчет обо всех цветах палитры, используемых в данный момент в функциональных переменных во всей системе дизайна. Он выполняет итерацию по всем токенам, идентифицируя ссылки на CSS-переменные, которые указывают на записи палитры, и сопоставляет их с сгенерированными именами CSS-переменных. Это необходимо для аудита использования цветов и выявления неиспользуемых записей палитры."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"PropertyPaletteUsed[]"})," — массив объектов, каждый из которых содержит имя функциональной переменной и соответствующее ей имя CSS-переменной, производное от палитры."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`const report = palette.getUsed();
/* Результат: 
[
  { "name": "primaryBackground", "value": ["--basic-palette-basic-blue-50"] }
] 
*/
`})}),`
`,e.jsx(n.h3,{id:"getfocusused",children:e.jsx(n.code,{children:"getFocusUsed"})}),`
`,e.jsx(n.p,{children:"Рекурсивно разрешает конкретное значение свойства для определения его конечного источника в палитре. Этот вспомогательный метод используется для отслеживания ссылок через несколько уровней абстракции (например, переменные компонентов, указывающие на цвета темы, которые, в свою очередь, указывают на оттенки палитры)."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"list: PropertyItem['value'][]"})," — список известных значений палитры для проверки в процессе разрешения."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"design: string"})," — название текущей темы дизайна."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"component: string"})," — имя контекста компонента, для которого выполняется разрешение."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: string"})," — необработанное значение или ссылка (например, ",e.jsx(n.code,{children:"{color.primary}"}),") для отслеживания до палитры."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"string | undefined"})," — конечная разрешенная строка значения, если она ведет к записи в палитре; в противном случае — ",e.jsx(n.code,{children:"undefined"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`const source = palette.getFocusUsed(
  paletteList, 
  'basic', 
  'button', 
  '{color.primary}'
);
`})}),`
`,e.jsx(n.h2,{id:"операции",children:"Операции"}),`
`,e.jsx(n.h3,{id:"поток-разрешения-использования-цветов",children:"Поток разрешения использования цветов"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"PropertiesPalette"})," выполняет глубокий анализ того, как цвета переходят из палитры к компонентам:"]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Обход дерева"}),": Используя ",e.jsx(n.code,{children:"PropertiesItems.each()"}),", класс посещает каждый узел в системе дизайна."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Фильтрация переменных"}),": Он нацелен именно на элементы типа ",e.jsx(n.code,{children:"var"}),", которые сами не классифицируются как ",e.jsx(n.code,{children:"color"}),", но содержат строковые значения, похожие на ссылки на цвета."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Рекурсивное разрешение ссылок"}),": При обнаружении кандидата ",e.jsx(n.code,{children:"getFocusUsed()"})," разрешает любые промежуточные ссылки (например, ",e.jsx(n.code,{children:"primary"})," -> ",e.jsx(n.code,{children:"theme.brand.main"})," -> ",e.jsx(n.code,{children:"palette.blue.50"}),"), пока не достигнет необработанного определения палитры или не подтвердит, что ссылка не относится к палитре."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Определение темы"}),": Он исследует иерархию (",e.jsx(n.code,{children:"parents"}),"), чтобы определить, принадлежит ли цвет конкретному блоку темы, что позволяет правильно назвать результирующую CSS-переменную (например, добавив имя темы в начало)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Агрегация данных"}),": Результаты группируются по имени переменной, предоставляя четкую карту того, какие функциональные токены потребляют те или иные цвета палитры."]}),`
`]}),`
`,e.jsx(n.h2,{id:"примеры",children:"Примеры"}),`
`,e.jsx(n.h3,{id:"извлечение-оттенков-и-использования",children:"Извлечение оттенков и использования"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { PropertiesPalette, PropertiesItems } from '@dxtmisha/scripts'

const manager = new PropertiesItems(allTokenData)
const palette = new PropertiesPalette(manager)

// 1. Получение доступных оттенков
const shades = palette.getShade()

// 2. Сканирование используемых цветов в компонентах
const report = palette.getUsed()
`})}),`
`,e.jsx(n.h3,{id:"ручное-разрешение-ссылки",children:"Ручное разрешение ссылки"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`const isPaletteValue = palette.getFocusUsed(
  paletteValueList, 
  'basic', 
  'button', 
  '{color.primary}'
)
`})})]})}function x(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{x as default};
