import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as c}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function r(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"@dxtmisha/ru/scripts/Classes/PropertiesTypes - Типы свойств"}),`
`,e.jsx(n.h1,{id:"класс-propertiestypes",children:"Класс PropertiesTypes"}),`
`,e.jsxs(n.p,{children:["Класс ",e.jsx(n.code,{children:"PropertiesTypes"})," является системным справочником и анализатором типов свойств в дизайн-системе. Его основная роль — определение категории свойства (переменная, селектор, состояние, медиа-запрос и др.) на основе специальных символов-префиксов или соглашений об именовании ключей."]}),`
`,e.jsx(n.h2,{id:"список-символов-и-типов",children:"Список символов и типов"}),`
`,e.jsx(n.p,{children:"Система использует следующие соответствия символов типам:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$"})," — ",e.jsx(n.strong,{children:"var"})," (CSS-переменная)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"::"})," — ",e.jsx(n.strong,{children:"virtual"})," (виртуальный элемент)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:":"})," — ",e.jsx(n.strong,{children:"selector"})," (SCSS-селектор)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"~"})," — ",e.jsx(n.strong,{children:"state"})," (состояние, например, :hover)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"#"})," — ",e.jsx(n.strong,{children:"subclass"})," (подкласс)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"@@"})," — ",e.jsx(n.strong,{children:"linkClass"})," (ссылка на класс)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"@"})," — ",e.jsx(n.strong,{children:"link"})," (ссылка на токен)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"&&"})," — ",e.jsx(n.strong,{children:"root"})," (SCSS @at-root)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"&"})," — ",e.jsx(n.strong,{children:"scss"})," (SCSS-селектор)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"--"})," — ",e.jsx(n.strong,{children:"none"})," (игнорируемое свойство)"]}),`
`]}),`
`,e.jsx(n.h2,{id:"инициализация",children:"Инициализация"}),`
`,e.jsxs(n.p,{children:["Класс содержит только статические методы и не требует создания экземпляра через ",e.jsx(n.code,{children:"new"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { PropertiesTypes } from '@dxtmisha/scripts'

// Использование статических методов
const type = PropertiesTypes.getTypeInName('$primary-color')
`})}),`
`,e.jsx(n.h2,{id:"методы",children:"Методы"}),`
`,e.jsx(n.h3,{id:"isintype",children:e.jsx(n.code,{children:"isInType"})}),`
`,e.jsx(n.p,{children:"Проверяет, входит ли текущий тип свойства в список разрешенных типов. Используется для фильтрации свойств при генерации специфических блоков (например, только медиа-запросов)."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"type: PropertyItem['_type']"})," — проверяемый тип свойства."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"name: PropertyType[]"})," — массив разрешенных типов."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"boolean"})," — ",e.jsx(n.code,{children:"true"}),", если тип совпадает с одним из списка."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`const isMedia = PropertiesTypes.isInType(type, ['media', 'media-max']);
`})}),`
`,e.jsx(n.h3,{id:"istypeinname",children:e.jsx(n.code,{children:"isTypeInName"})}),`
`,e.jsx(n.p,{children:"Определяет, содержит ли переданная строка названия (ключ) какой-либо из зарезервированных символов типа в начале."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"name: string"})," — название ключа свойства."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"boolean"})," — ",e.jsx(n.code,{children:"true"}),", если найден символ типа."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`const hasSymbol = PropertiesTypes.isTypeInName('$myVar');
// Результат: true
`})}),`
`,e.jsx(n.h3,{id:"ismedia",children:e.jsx(n.code,{children:"isMedia"})}),`
`,e.jsxs(n.p,{children:["Специализированная проверка, определяющая, относится ли тип к медиа-запросам (",e.jsx(n.code,{children:"media"})," или ",e.jsx(n.code,{children:"media-max"}),")."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"type: PropertyItem['_type']"})," — тип свойства."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"boolean"})," — ",e.jsx(n.code,{children:"true"}),", если это медиа-тип."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`if (PropertiesTypes.isMedia(item.type)) { /* ... */ }
`})}),`
`,e.jsx(n.h3,{id:"gettypeinname",children:e.jsx(n.code,{children:"getTypeInName"})}),`
`,e.jsxs(n.p,{children:["Основной метод для извлечения типа из названия ключа. Если в начале ключа найден спецсимвол, метод возвращает соответствующий ему тип. Если символ не найден, но в ключе есть разделитель ",e.jsx(n.code,{children:"|"}),", часть перед разделителем преобразуется в kebab-case и возвращается как тип."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"name: string"})," — название ключа свойства."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"PropertyItem['_type']"})," — найденный идентификатор типа или ",e.jsx(n.code,{children:"null"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`const type1 = PropertiesTypes.getTypeInName('$color'); // 'var'
const type2 = PropertiesTypes.getTypeInName('custom|value'); // 'custom'
`})}),`
`,e.jsx(n.h3,{id:"getbysymbol",children:e.jsx(n.code,{children:"getBySymbol"})}),`
`,e.jsx(n.p,{children:"Возвращает название типа, закрепленное за конкретным символом или строкой."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"name: string"})," — символ (например, ",e.jsx(n.code,{children:"$"}),")."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"string | undefined"})," — название типа (например, ",e.jsx(n.code,{children:"var"}),")."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`const typeName = PropertiesTypes.getBySymbol('$'); // 'var'
`})}),`
`,e.jsx(n.h2,{id:"операции",children:"Операции"}),`
`,e.jsx(n.h3,{id:"механизм-распознавания-через-regexp",children:"Механизм распознавания через RegExp"}),`
`,e.jsxs(n.p,{children:["Поиск символов в ",e.jsx(n.code,{children:"PropertiesTypes"})," реализован через динамическое регулярное выражение, формируемое из ключей словаря ",e.jsx(n.code,{children:"SYMBOLS"}),". Метод ",e.jsx(n.code,{children:"getExpSymbols"})," создает выражение, которое:"]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Ищет зарезервированные символы в начале строки (например, ",e.jsx(n.code,{children:"@"}),", ",e.jsx(n.code,{children:"&&"}),", ",e.jsx(n.code,{children:"~"}),")."]}),`
`,e.jsxs(n.li,{children:["Ищет пользовательские именованные типы перед вертикальной чертой (например, ",e.jsx(n.code,{children:"media|..."}),")."]}),`
`,e.jsxs(n.li,{children:["Группирует результаты для удобного извлечения типа методом ",e.jsx(n.code,{children:"getTypeInName"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"примеры",children:"Примеры"}),`
`,e.jsx(n.h3,{id:"определение-типа-при-парсинге-токенов",children:"Определение типа при парсинге токенов"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { PropertiesTypes } from '@dxtmisha/scripts'

const keys = ['$primary', ':hover', '@link'];

keys.forEach(key => {
  console.log(\`\${key} is type: \${PropertiesTypes.getTypeInName(key)}\`);
});
`})})]})}function j(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{j as default};
