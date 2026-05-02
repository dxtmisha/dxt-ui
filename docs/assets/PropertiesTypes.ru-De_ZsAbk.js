import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/scripts/Classes/PropertiesTypes - Типы свойств`}),`
`,(0,c.jsx)(n.h1,{id:`класс-propertiestypes`,children:`Класс PropertiesTypes`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс `,(0,c.jsx)(n.code,{children:`PropertiesTypes`}),` является системным справочником и анализатором типов свойств в дизайн-системе. Его основная роль — определение категории свойства (переменная, селектор, состояние, медиа-запрос и др.) на основе специальных символов-префиксов или соглашений об именовании ключей.`]}),`
`,(0,c.jsx)(n.h2,{id:`список-символов-и-типов`,children:`Список символов и типов`}),`
`,(0,c.jsx)(n.p,{children:`Система использует следующие соответствия символов типам:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$`}),` — `,(0,c.jsx)(n.strong,{children:`var`}),` (CSS-переменная)`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`::`}),` — `,(0,c.jsx)(n.strong,{children:`virtual`}),` (виртуальный элемент)`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`:`}),` — `,(0,c.jsx)(n.strong,{children:`selector`}),` (SCSS-селектор)`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`~`}),` — `,(0,c.jsx)(n.strong,{children:`state`}),` (состояние, например, :hover)`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`#`}),` — `,(0,c.jsx)(n.strong,{children:`subclass`}),` (подкласс)`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`@@`}),` — `,(0,c.jsx)(n.strong,{children:`linkClass`}),` (ссылка на класс)`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`@`}),` — `,(0,c.jsx)(n.strong,{children:`link`}),` (ссылка на токен)`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`&&`}),` — `,(0,c.jsx)(n.strong,{children:`root`}),` (SCSS @at-root)`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`&`}),` — `,(0,c.jsx)(n.strong,{children:`scss`}),` (SCSS-селектор)`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`--`}),` — `,(0,c.jsx)(n.strong,{children:`none`}),` (игнорируемое свойство)`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс содержит только статические методы и не требует создания экземпляра через `,(0,c.jsx)(n.code,{children:`new`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PropertiesTypes } from '@dxtmisha/scripts'

// Использование статических методов
const type = PropertiesTypes.getTypeInName('$primary-color')
`})}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(n.h3,{id:`isintype`,children:(0,c.jsx)(n.code,{children:`isInType`})}),`
`,(0,c.jsx)(n.p,{children:`Проверяет, входит ли текущий тип свойства в список разрешенных типов. Используется для фильтрации свойств при генерации специфических блоков (например, только медиа-запросов).`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`type: PropertyItem['_type']`}),` — проверяемый тип свойства.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: PropertyType[]`}),` — массив разрешенных типов.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`boolean`}),` — `,(0,c.jsx)(n.code,{children:`true`}),`, если тип совпадает с одним из списка.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const isMedia = PropertiesTypes.isInType(type, ['media', 'media-max']);
`})}),`
`,(0,c.jsx)(n.h3,{id:`istypeinname`,children:(0,c.jsx)(n.code,{children:`isTypeInName`})}),`
`,(0,c.jsx)(n.p,{children:`Определяет, содержит ли переданная строка названия (ключ) какой-либо из зарезервированных символов типа в начале.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: string`}),` — название ключа свойства.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`boolean`}),` — `,(0,c.jsx)(n.code,{children:`true`}),`, если найден символ типа.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const hasSymbol = PropertiesTypes.isTypeInName('$myVar');
// Результат: true
`})}),`
`,(0,c.jsx)(n.h3,{id:`ismedia`,children:(0,c.jsx)(n.code,{children:`isMedia`})}),`
`,(0,c.jsxs)(n.p,{children:[`Специализированная проверка, определяющая, относится ли тип к медиа-запросам (`,(0,c.jsx)(n.code,{children:`media`}),` или `,(0,c.jsx)(n.code,{children:`media-max`}),`).`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`type: PropertyItem['_type']`}),` — тип свойства.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`boolean`}),` — `,(0,c.jsx)(n.code,{children:`true`}),`, если это медиа-тип.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`if (PropertiesTypes.isMedia(item.type)) { /* ... */ }
`})}),`
`,(0,c.jsx)(n.h3,{id:`gettypeinname`,children:(0,c.jsx)(n.code,{children:`getTypeInName`})}),`
`,(0,c.jsxs)(n.p,{children:[`Основной метод для извлечения типа из названия ключа. Если в начале ключа найден спецсимвол, метод возвращает соответствующий ему тип. Если символ не найден, но в ключе есть разделитель `,(0,c.jsx)(n.code,{children:`|`}),`, часть перед разделителем преобразуется в kebab-case и возвращается как тип.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: string`}),` — название ключа свойства.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`PropertyItem['_type']`}),` — найденный идентификатор типа или `,(0,c.jsx)(n.code,{children:`null`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const type1 = PropertiesTypes.getTypeInName('$color'); // 'var'
const type2 = PropertiesTypes.getTypeInName('custom|value'); // 'custom'
`})}),`
`,(0,c.jsx)(n.h3,{id:`getbysymbol`,children:(0,c.jsx)(n.code,{children:`getBySymbol`})}),`
`,(0,c.jsx)(n.p,{children:`Возвращает название типа, закрепленное за конкретным символом или строкой.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: string`}),` — символ (например, `,(0,c.jsx)(n.code,{children:`$`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`string | undefined`}),` — название типа (например, `,(0,c.jsx)(n.code,{children:`var`}),`).`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const typeName = PropertiesTypes.getBySymbol('$'); // 'var'
`})}),`
`,(0,c.jsx)(n.h2,{id:`операции`,children:`Операции`}),`
`,(0,c.jsx)(n.h3,{id:`механизм-распознавания-через-regexp`,children:`Механизм распознавания через RegExp`}),`
`,(0,c.jsxs)(n.p,{children:[`Поиск символов в `,(0,c.jsx)(n.code,{children:`PropertiesTypes`}),` реализован через динамическое регулярное выражение, формируемое из ключей словаря `,(0,c.jsx)(n.code,{children:`SYMBOLS`}),`. Метод `,(0,c.jsx)(n.code,{children:`getExpSymbols`}),` создает выражение, которое:`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[`Ищет зарезервированные символы в начале строки (например, `,(0,c.jsx)(n.code,{children:`@`}),`, `,(0,c.jsx)(n.code,{children:`&&`}),`, `,(0,c.jsx)(n.code,{children:`~`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[`Ищет пользовательские именованные типы перед вертикальной чертой (например, `,(0,c.jsx)(n.code,{children:`media|...`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[`Группирует результаты для удобного извлечения типа методом `,(0,c.jsx)(n.code,{children:`getTypeInName`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`примеры`,children:`Примеры`}),`
`,(0,c.jsx)(n.h3,{id:`определение-типа-при-парсинге-токенов`,children:`Определение типа при парсинге токенов`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PropertiesTypes } from '@dxtmisha/scripts'

const keys = ['$primary', ':hover', '@link'];

keys.forEach(key => {
  console.log(\`\${key} is type: \${PropertiesTypes.getTypeInName(key)}\`);
});
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};