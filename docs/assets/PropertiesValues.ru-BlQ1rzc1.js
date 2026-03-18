import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as l}from"./index-DC9WpFni.js";import{M as i}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function r(n){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"@dxtmisha/ru/scripts/Classes/PropertiesValues - Значения свойств"}),`
`,e.jsx(s.h1,{id:"класс-propertiesvalues",children:"Класс PropertiesValues"}),`
`,e.jsxs(s.p,{children:["Класс ",e.jsx(s.code,{children:"PropertiesValues"})," предоставляет вспомогательные методы для проверки и нормализации значений свойств (токенов). Он отвечает за распознавание форматов данных (цвета, полные значения) и приведение их к единому стандарту перед использованием в генерации стилей."]}),`
`,e.jsx(s.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Распознавание маркеров"})," — идентифицирует значения, помеченные как «полные» (не требующие дальнейшей обработки)."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Валидация цветов"})," — проверяет строки на соответствие форматам HEX (включая прозрачность)."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Нормализация типов"})," — автоматически преобразует числовые значения в строки для консистентности."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Очистка данных"})," — удаляет системные маркеры перед финальным использованием значений."]}),`
`]}),`
`,e.jsx(s.h2,{id:"инициализация",children:"Инициализация"}),`
`,e.jsxs(s.p,{children:["Класс содержит только статические методы, поэтому создание экземпляра через ",e.jsx(s.code,{children:"new"})," не требуется."]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-typescript",children:`import { PropertiesValues } from '@dxtmisha/scripts'

// Обращение к статическим методам
const isFull = PropertiesValues.isFull('=someValue')
`})}),`
`,e.jsx(s.h2,{id:"методы",children:"Методы"}),`
`,e.jsx(s.h3,{id:"isfull",children:e.jsx(s.code,{children:"isFull"})}),`
`,e.jsxs(s.p,{children:["Проверяет, начинается ли строковое значение со специального маркера ",e.jsx(s.code,{children:"="})," (равно). Этот маркер сигнализирует системе, что значение является финальным и не требует обработки референсов или других трансформаций."]}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Параметры:"})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"value: PropertyItemPartial['value']"})," — проверяемое значение свойства."]}),`
`]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Возвращает:"})," ",e.jsx(s.code,{children:"boolean"})," — ",e.jsx(s.code,{children:"true"}),", если значение является полным."]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-typescript",children:`const result = PropertiesValues.isFull('=100%');
// Результат: true
`})}),`
`,e.jsx(s.h3,{id:"iscolor",children:e.jsx(s.code,{children:"isColor"})}),`
`,e.jsxs(s.p,{children:["Проверяет, является ли переданная строка валидным цветом в формате HEX (начинается с символа ",e.jsx(s.code,{children:"#"}),")."]}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Параметры:"})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"value: PropertyItemPartial['__c']"})," — значение для проверки."]}),`
`]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Возвращает:"})," ",e.jsx(s.code,{children:"boolean"})," — ",e.jsx(s.code,{children:"true"}),", если строка похожа на HEX-цвет."]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-typescript",children:`const isHex = PropertiesValues.isColor('#ff0000');
// Результат: true
`})}),`
`,e.jsx(s.h3,{id:"iscolorwithopacity",children:e.jsx(s.code,{children:"isColorWithOpacity"})}),`
`,e.jsxs(s.p,{children:["Специализированная проверка для HEX-цветов с альфа-каналом. Ищет соответствие восьмизначному формату HEX (например, ",e.jsx(s.code,{children:"#rrggbbaa"}),")."]}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Параметры:"})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"value: PropertyItemPartial['__c']"})," — значение для проверки."]}),`
`]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Возвращает:"})," ",e.jsx(s.code,{children:"boolean"})," — ",e.jsx(s.code,{children:"true"}),", если это цвет с прозрачностью."]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-typescript",children:`const isTrans = PropertiesValues.isColorWithOpacity('#ff000080');
// Результат: true
`})}),`
`,e.jsx(s.h3,{id:"revalue",children:e.jsx(s.code,{children:"reValue"})}),`
`,e.jsxs(s.p,{children:["Нормализует значение для дальнейшего использования. Если значение помечено как «полное», маркер ",e.jsx(s.code,{children:"="})," удаляется. Если значение является числом, оно преобразуется в строку."]}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Параметры:"})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"value: PropertyItemPartial['value']"})," — исходное значение свойства."]}),`
`]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Возвращает:"})," ",e.jsx(s.code,{children:"PropertyItemPartial['value']"})," — нормализованное строковое (или прежнее объектное) значение."]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-typescript",children:`const val1 = PropertiesValues.reValue('=12px'); // '12px'
const val2 = PropertiesValues.reValue(24); // '24'
`})}),`
`,e.jsx(s.h3,{id:"getexpfull",children:e.jsx(s.code,{children:"getExpFull"})}),`
`,e.jsx(s.p,{children:"Возвращает регулярное выражение, используемое для поиска маркера полного значения."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Возвращает:"})," ",e.jsx(s.code,{children:"RegExp"})," — регулярное выражение ",e.jsx(s.code,{children:"/^=/"}),"."]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-typescript",children:`const regex = PropertiesValues.getExpFull();
`})}),`
`,e.jsx(s.h2,{id:"операции",children:"Операции"}),`
`,e.jsx(s.h3,{id:"процесс-нормализации-значений",children:"Процесс нормализации значений"}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:'Проверка на "полноту"'}),": Метод ",e.jsx(s.code,{children:"isFull"})," определяет, нужно ли пропускать этап обработки ссылок."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Типизация"}),": Все числа через ",e.jsx(s.code,{children:"reValue"})," приводятся к строковому типу, чтобы избежать ошибок при конкатенации в CSS/SCSS."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Фильтрация"}),": Маркеры управления (такие как ",e.jsx(s.code,{children:"="}),") удаляются из финальной строки, чтобы они не попали в итоговый CSS код."]}),`
`]}),`
`,e.jsx(s.h2,{id:"примеры",children:"Примеры"}),`
`,e.jsx(s.h3,{id:"проверка-и-очистка-входных-данных",children:"Проверка и очистка входных данных"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-typescript",children:`import { PropertiesValues } from '@dxtmisha/scripts'

const rawValue = '=rgba(0,0,0,0.5)'

if (PropertiesValues.isFull(rawValue)) {
  const cleanValue = PropertiesValues.reValue(rawValue)
  console.log(cleanValue) // 'rgba(0,0,0,0.5)'
}
`})})]})}function j(n={}){const{wrapper:s}={...l(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(r,{...n})}):r(n)}export{j as default};
