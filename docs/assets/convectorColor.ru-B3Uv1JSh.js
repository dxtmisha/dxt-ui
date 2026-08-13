import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/Functions/convectorColor - Конвертация цвета`}),`
`,(0,c.jsx)(t.h1,{id:`функция-convectorcolor`,children:`Функция convectorColor`}),`
`,(0,c.jsxs)(t.p,{children:[`Функция `,(0,c.jsx)(t.code,{children:`convectorColor`}),` является частью системы конвекторов для обработки токенов свойств. Её основная роль — извлечение специфических метаданных цвета из расширений 'studio.tokens' и их применение к объекту свойства. На данный момент функция специализируется на обработке модификаций прозрачности (alpha).`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Интеграция со Studio Tokens`}),` — работает с расширениями `,(0,c.jsx)(t.code,{children:`$extensions['studio.tokens']`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Модификация прозрачности`}),` — извлекает значение `,(0,c.jsx)(t.code,{children:`alpha`}),` из параметров модификации и сохраняет его в системном ключе `,(0,c.jsx)(t.code,{children:`cssColorOpacity`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Автоматизация`}),` — вызывается в процессе стандартизации свойств при обнаружении соответствующих метаданных.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`параметры`,children:`Параметры`}),`
`,(0,c.jsx)(t.p,{children:`Функция принимает один аргумент:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`item: PropertyItemInput`}),` — объект входных данных свойства, который будет мутирован в процессе выполнения.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`примеры`,children:`Примеры`}),`
`,(0,c.jsx)(t.h3,{id:`обработка-модификации-прозрачности`,children:`Обработка модификации прозрачности`}),`
`,(0,c.jsxs)(t.p,{children:[`Если токен содержит информацию о модификации цвета, `,(0,c.jsx)(t.code,{children:`convectorColor`}),` извлечет её:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { convectorColor, PropertyKey } from '@dxtmisha/scripts'

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
`,(0,c.jsx)(t.h2,{id:`операции`,children:`Операции`}),`
`,(0,c.jsx)(t.h3,{id:`механизм-обработки`,children:`Механизм обработки`}),`
`,(0,c.jsxs)(t.p,{children:[`Процесс обработки данных в `,(0,c.jsx)(t.code,{children:`convectorColor`}),` включает следующие шаги:`]}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Поиск расширений`}),`: Функция ищет путь `,(0,c.jsx)(t.code,{children:`$extensions['studio.tokens'].modify`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Определение типа`}),`: Если тип модификации установлен в `,(0,c.jsx)(t.code,{children:`alpha`}),`, функция приступает к обработке.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Сохранение данных`}),`: Значение прозрачности (`,(0,c.jsx)(t.code,{children:`value`}),`) записывается в свойство объекта `,(0,c.jsx)(t.code,{children:`item`}),` по ключу `,(0,c.jsx)(t.code,{children:`_o`}),` (хранится в `,(0,c.jsx)(t.code,{children:`PropertyKey.cssColorOpacity`}),`). Если значение не указано, по умолчанию используется `,(0,c.jsx)(t.code,{children:`'1'`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`область-применения`,children:`Область применения`}),`
`,(0,c.jsxs)(t.p,{children:[`Функция используется внутри классов обработки свойств (например, `,(0,c.jsx)(t.code,{children:`PropertiesStandard`}),`) для обогащения данных токенов информацией о прозрачности, полученной из инструментов дизайна.`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};