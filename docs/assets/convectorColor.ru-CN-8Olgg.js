import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-CoCJbYxC.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/scripts/Functions/convectorColor - Конвертация цвета`}),`
`,(0,c.jsx)(n.h1,{id:`функция-convectorcolor`,children:`Функция convectorColor`}),`
`,(0,c.jsxs)(n.p,{children:[`Функция `,(0,c.jsx)(n.code,{children:`convectorColor`}),` является частью системы конвекторов для обработки токенов свойств. Её основная роль — извлечение специфических метаданных цвета из расширений 'studio.tokens' и их применение к объекту свойства. На данный момент функция специализируется на обработке модификаций прозрачности (alpha).`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Интеграция со Studio Tokens`}),` — работает с расширениями `,(0,c.jsx)(n.code,{children:`$extensions['studio.tokens']`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Модификация прозрачности`}),` — извлекает значение `,(0,c.jsx)(n.code,{children:`alpha`}),` из параметров модификации и сохраняет его в системном ключе `,(0,c.jsx)(n.code,{children:`cssColorOpacity`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Автоматизация`}),` — вызывается в процессе стандартизации свойств при обнаружении соответствующих метаданных.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`параметры`,children:`Параметры`}),`
`,(0,c.jsx)(n.p,{children:`Функция принимает один аргумент:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`item: PropertyItemInput`}),` — объект входных данных свойства, который будет мутирован в процессе выполнения.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`примеры`,children:`Примеры`}),`
`,(0,c.jsx)(n.h3,{id:`обработка-модификации-прозрачности`,children:`Обработка модификации прозрачности`}),`
`,(0,c.jsxs)(n.p,{children:[`Если токен содержит информацию о модификации цвета, `,(0,c.jsx)(n.code,{children:`convectorColor`}),` извлечет её:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { convectorColor, PropertyKey } from '@dxtmisha/scripts'

const item = {
  value: '#ff0000',
  $extensions: {
    'studio.tokens': {
      modify: {
        type: 'alpha',
        value: '0.5'
      }
    }
  }
};

convectorColor(item);

console.log(item[PropertyKey.cssColorOpacity]); // '0.5'
`})}),`
`,(0,c.jsx)(n.h2,{id:`операции`,children:`Операции`}),`
`,(0,c.jsx)(n.h3,{id:`механизм-обработки`,children:`Механизм обработки`}),`
`,(0,c.jsxs)(n.p,{children:[`Процесс обработки данных в `,(0,c.jsx)(n.code,{children:`convectorColor`}),` включает следующие шаги:`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Поиск расширений`}),`: Функция ищет путь `,(0,c.jsx)(n.code,{children:`$extensions['studio.tokens'].modify`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Определение типа`}),`: Если тип модификации установлен в `,(0,c.jsx)(n.code,{children:`alpha`}),`, функция приступает к обработке.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Сохранение данных`}),`: Значение прозрачности (`,(0,c.jsx)(n.code,{children:`value`}),`) записывается в свойство объекта `,(0,c.jsx)(n.code,{children:`item`}),` по ключу `,(0,c.jsx)(n.code,{children:`_o`}),` (хранится в `,(0,c.jsx)(n.code,{children:`PropertyKey.cssColorOpacity`}),`). Если значение не указано, по умолчанию используется `,(0,c.jsx)(n.code,{children:`'1'`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`область-применения`,children:`Область применения`}),`
`,(0,c.jsxs)(n.p,{children:[`Функция используется внутри классов обработки свойств (например, `,(0,c.jsx)(n.code,{children:`PropertiesStandard`}),`) для обогащения данных токенов информацией о прозрачности, полученной из инструментов дизайна.`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};