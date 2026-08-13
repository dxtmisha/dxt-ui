import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/Classes/PropertiesTypes - Типы свойств`}),`
`,(0,c.jsx)(t.h1,{id:`класс-propertiestypes`,children:`Класс PropertiesTypes`}),`
`,(0,c.jsxs)(t.p,{children:[`Класс `,(0,c.jsx)(t.code,{children:`PropertiesTypes`}),` является системным справочником и анализатором типов свойств в дизайн-системе. Его основная роль — определение категории свойства (переменная, селектор, состояние, медиа-запрос и др.) на основе специальных символов-префиксов или соглашений об именовании ключей.`]}),`
`,(0,c.jsx)(t.h2,{id:`список-символов-и-типов`,children:`Список символов и типов`}),`
`,(0,c.jsx)(t.p,{children:`Система использует следующие соответствия символов типам:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`$`}),` — `,(0,c.jsx)(t.strong,{children:`var`}),` (CSS-переменная)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`::`}),` — `,(0,c.jsx)(t.strong,{children:`virtual`}),` (виртуальный элемент)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`:`}),` — `,(0,c.jsx)(t.strong,{children:`selector`}),` (SCSS-селектор)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`~`}),` — `,(0,c.jsx)(t.strong,{children:`state`}),` (состояние, например, :hover)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`#`}),` — `,(0,c.jsx)(t.strong,{children:`subclass`}),` (подкласс)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`@@`}),` — `,(0,c.jsx)(t.strong,{children:`linkClass`}),` (ссылка на класс)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`@`}),` — `,(0,c.jsx)(t.strong,{children:`link`}),` (ссылка на токен)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`&&`}),` — `,(0,c.jsx)(t.strong,{children:`root`}),` (SCSS @at-root)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`&`}),` — `,(0,c.jsx)(t.strong,{children:`scss`}),` (SCSS-селектор)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`--`}),` — `,(0,c.jsx)(t.strong,{children:`none`}),` (игнорируемое свойство)`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(t.p,{children:[`Класс содержит только статические методы и не требует создания экземпляра через `,(0,c.jsx)(t.code,{children:`new`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { PropertiesTypes } from '@dxtmisha/scripts'

// Использование статических методов
const type = PropertiesTypes.getTypeInName('$primary-color')
`})}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`isintype`,children:(0,c.jsx)(t.code,{children:`isInType`})}),`
`,(0,c.jsx)(t.p,{children:`Проверяет, входит ли текущий тип свойства в список разрешенных типов. Используется для фильтрации свойств при генерации специфических блоков (например, только медиа-запросов).`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`type: PropertyItem['_type']`}),` — проверяемый тип свойства.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: PropertyType[]`}),` — массив разрешенных типов.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(t.code,{children:`boolean`}),` — `,(0,c.jsx)(t.code,{children:`true`}),`, если тип совпадает с одним из списка.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const isMedia = PropertiesTypes.isInType(type, ['media', 'media-max']);
`})}),`
`,(0,c.jsx)(t.h3,{id:`istypeinname`,children:(0,c.jsx)(t.code,{children:`isTypeInName`})}),`
`,(0,c.jsx)(t.p,{children:`Определяет, содержит ли переданная строка названия (ключ) какой-либо из зарезервированных символов типа в начале.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: string`}),` — название ключа свойства.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(t.code,{children:`boolean`}),` — `,(0,c.jsx)(t.code,{children:`true`}),`, если найден символ типа.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const hasSymbol = PropertiesTypes.isTypeInName('$myVar');
// Результат: true
`})}),`
`,(0,c.jsx)(t.h3,{id:`ismedia`,children:(0,c.jsx)(t.code,{children:`isMedia`})}),`
`,(0,c.jsxs)(t.p,{children:[`Специализированная проверка, определяющая, относится ли тип к медиа-запросам (`,(0,c.jsx)(t.code,{children:`media`}),` или `,(0,c.jsx)(t.code,{children:`media-max`}),`).`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`type: PropertyItem['_type']`}),` — тип свойства.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(t.code,{children:`boolean`}),` — `,(0,c.jsx)(t.code,{children:`true`}),`, если это медиа-тип.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`if (PropertiesTypes.isMedia(item.type)) { /* ... */ }
`})}),`
`,(0,c.jsx)(t.h3,{id:`gettypeinname`,children:(0,c.jsx)(t.code,{children:`getTypeInName`})}),`
`,(0,c.jsxs)(t.p,{children:[`Основной метод для извлечения типа из названия ключа. Если в начале ключа найден спецсимвол, метод возвращает соответствующий ему тип. Если символ не найден, но в ключе есть разделитель `,(0,c.jsx)(t.code,{children:`|`}),`, часть перед разделителем преобразуется в kebab-case и возвращается как тип.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: string`}),` — название ключа свойства.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(t.code,{children:`PropertyItem['_type']`}),` — найденный идентификатор типа или `,(0,c.jsx)(t.code,{children:`null`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const type1 = PropertiesTypes.getTypeInName('$color'); // 'var'
const type2 = PropertiesTypes.getTypeInName('custom|value'); // 'custom'
`})}),`
`,(0,c.jsx)(t.h3,{id:`getbysymbol`,children:(0,c.jsx)(t.code,{children:`getBySymbol`})}),`
`,(0,c.jsx)(t.p,{children:`Возвращает название типа, закрепленное за конкретным символом или строкой.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: string`}),` — символ (например, `,(0,c.jsx)(t.code,{children:`$`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(t.code,{children:`string | undefined`}),` — название типа (например, `,(0,c.jsx)(t.code,{children:`var`}),`).`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const typeName = PropertiesTypes.getBySymbol('$'); // 'var'
`})}),`
`,(0,c.jsx)(t.h2,{id:`операции`,children:`Операции`}),`
`,(0,c.jsx)(t.h3,{id:`механизм-распознавания-через-regexp`,children:`Механизм распознавания через RegExp`}),`
`,(0,c.jsxs)(t.p,{children:[`Поиск символов в `,(0,c.jsx)(t.code,{children:`PropertiesTypes`}),` реализован через динамическое регулярное выражение, формируемое из ключей словаря `,(0,c.jsx)(t.code,{children:`SYMBOLS`}),`. Метод `,(0,c.jsx)(t.code,{children:`getExpSymbols`}),` создает выражение, которое:`]}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Ищет зарезервированные символы в начале строки (например, `,(0,c.jsx)(t.code,{children:`@`}),`, `,(0,c.jsx)(t.code,{children:`&&`}),`, `,(0,c.jsx)(t.code,{children:`~`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[`Ищет пользовательские именованные типы перед вертикальной чертой (например, `,(0,c.jsx)(t.code,{children:`media|...`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[`Группирует результаты для удобного извлечения типа методом `,(0,c.jsx)(t.code,{children:`getTypeInName`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`примеры`,children:`Примеры`}),`
`,(0,c.jsx)(t.h3,{id:`определение-типа-при-парсинге-токенов`,children:`Определение типа при парсинге токенов`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { PropertiesTypes } from '@dxtmisha/scripts'

const keys = ['$primary', ':hover', '@link'];

keys.forEach(key => {
  console.log(\`\${key} is type: \${PropertiesTypes.getTypeInName(key)}\`);
});
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};