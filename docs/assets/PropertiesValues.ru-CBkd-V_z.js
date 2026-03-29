import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-CoCJbYxC.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/scripts/Classes/PropertiesValues - Значения свойств`}),`
`,(0,c.jsx)(n.h1,{id:`класс-propertiesvalues`,children:`Класс PropertiesValues`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс `,(0,c.jsx)(n.code,{children:`PropertiesValues`}),` предоставляет вспомогательные методы для проверки и нормализации значений свойств (токенов). Он отвечает за распознавание форматов данных (цвета, полные значения) и приведение их к единому стандарту перед использованием в генерации стилей.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Распознавание маркеров`}),` — идентифицирует значения, помеченные как «полные» (не требующие дальнейшей обработки).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Валидация цветов`}),` — проверяет строки на соответствие форматам HEX (включая прозрачность).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Нормализация типов`}),` — автоматически преобразует числовые значения в строки для консистентности.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Очистка данных`}),` — удаляет системные маркеры перед финальным использованием значений.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс содержит только статические методы, поэтому создание экземпляра через `,(0,c.jsx)(n.code,{children:`new`}),` не требуется.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PropertiesValues } from '@dxtmisha/scripts'

// Обращение к статическим методам
const isFull = PropertiesValues.isFull('=someValue')
`})}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(n.h3,{id:`isfull`,children:(0,c.jsx)(n.code,{children:`isFull`})}),`
`,(0,c.jsxs)(n.p,{children:[`Проверяет, начинается ли строковое значение со специального маркера `,(0,c.jsx)(n.code,{children:`=`}),` (равно). Этот маркер сигнализирует системе, что значение является финальным и не требует обработки референсов или других трансформаций.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: PropertyItemPartial['value']`}),` — проверяемое значение свойства.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`boolean`}),` — `,(0,c.jsx)(n.code,{children:`true`}),`, если значение является полным.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const result = PropertiesValues.isFull('=100%');
// Результат: true
`})}),`
`,(0,c.jsx)(n.h3,{id:`iscolor`,children:(0,c.jsx)(n.code,{children:`isColor`})}),`
`,(0,c.jsxs)(n.p,{children:[`Проверяет, является ли переданная строка валидным цветом в формате HEX (начинается с символа `,(0,c.jsx)(n.code,{children:`#`}),`).`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: PropertyItemPartial['__c']`}),` — значение для проверки.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`boolean`}),` — `,(0,c.jsx)(n.code,{children:`true`}),`, если строка похожа на HEX-цвет.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const isHex = PropertiesValues.isColor('#ff0000');
// Результат: true
`})}),`
`,(0,c.jsx)(n.h3,{id:`iscolorwithopacity`,children:(0,c.jsx)(n.code,{children:`isColorWithOpacity`})}),`
`,(0,c.jsxs)(n.p,{children:[`Специализированная проверка для HEX-цветов с альфа-каналом. Ищет соответствие восьмизначному формату HEX (например, `,(0,c.jsx)(n.code,{children:`#rrggbbaa`}),`).`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: PropertyItemPartial['__c']`}),` — значение для проверки.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`boolean`}),` — `,(0,c.jsx)(n.code,{children:`true`}),`, если это цвет с прозрачностью.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const isTrans = PropertiesValues.isColorWithOpacity('#ff000080');
// Результат: true
`})}),`
`,(0,c.jsx)(n.h3,{id:`revalue`,children:(0,c.jsx)(n.code,{children:`reValue`})}),`
`,(0,c.jsxs)(n.p,{children:[`Нормализует значение для дальнейшего использования. Если значение помечено как «полное», маркер `,(0,c.jsx)(n.code,{children:`=`}),` удаляется. Если значение является числом, оно преобразуется в строку.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: PropertyItemPartial['value']`}),` — исходное значение свойства.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`PropertyItemPartial['value']`}),` — нормализованное строковое (или прежнее объектное) значение.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const val1 = PropertiesValues.reValue('=12px'); // '12px'
const val2 = PropertiesValues.reValue(24); // '24'
`})}),`
`,(0,c.jsx)(n.h3,{id:`getexpfull`,children:(0,c.jsx)(n.code,{children:`getExpFull`})}),`
`,(0,c.jsx)(n.p,{children:`Возвращает регулярное выражение, используемое для поиска маркера полного значения.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`RegExp`}),` — регулярное выражение `,(0,c.jsx)(n.code,{children:`/^=/`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const regex = PropertiesValues.getExpFull();
`})}),`
`,(0,c.jsx)(n.h2,{id:`операции`,children:`Операции`}),`
`,(0,c.jsx)(n.h3,{id:`процесс-нормализации-значений`,children:`Процесс нормализации значений`}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Проверка на "полноту"`}),`: Метод `,(0,c.jsx)(n.code,{children:`isFull`}),` определяет, нужно ли пропускать этап обработки ссылок.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Типизация`}),`: Все числа через `,(0,c.jsx)(n.code,{children:`reValue`}),` приводятся к строковому типу, чтобы избежать ошибок при конкатенации в CSS/SCSS.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Фильтрация`}),`: Маркеры управления (такие как `,(0,c.jsx)(n.code,{children:`=`}),`) удаляются из финальной строки, чтобы они не попали в итоговый CSS код.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`примеры`,children:`Примеры`}),`
`,(0,c.jsx)(n.h3,{id:`проверка-и-очистка-входных-данных`,children:`Проверка и очистка входных данных`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PropertiesValues } from '@dxtmisha/scripts'

const rawValue = '=rgba(0,0,0,0.5)'

if (PropertiesValues.isFull(rawValue)) {
  const cleanValue = PropertiesValues.reValue(rawValue)
  console.log(cleanValue) // 'rgba(0,0,0,0.5)'
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};