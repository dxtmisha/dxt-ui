import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-DC9WpFni.js";import{M as c}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function s(o){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{title:"@dxtmisha/ru/scripts/Functions/convectorColor - Конвертация цвета"}),`
`,n.jsx(e.h1,{id:"функция-convectorcolor",children:"Функция convectorColor"}),`
`,n.jsxs(e.p,{children:["Функция ",n.jsx(e.code,{children:"convectorColor"})," является частью системы конвекторов для обработки токенов свойств. Её основная роль — извлечение специфических метаданных цвета из расширений 'studio.tokens' и их применение к объекту свойства. На данный момент функция специализируется на обработке модификаций прозрачности (alpha)."]}),`
`,n.jsx(e.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Интеграция со Studio Tokens"})," — работает с расширениями ",n.jsx(e.code,{children:"$extensions['studio.tokens']"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Модификация прозрачности"})," — извлекает значение ",n.jsx(e.code,{children:"alpha"})," из параметров модификации и сохраняет его в системном ключе ",n.jsx(e.code,{children:"cssColorOpacity"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Автоматизация"})," — вызывается в процессе стандартизации свойств при обнаружении соответствующих метаданных."]}),`
`]}),`
`,n.jsx(e.h2,{id:"параметры",children:"Параметры"}),`
`,n.jsx(e.p,{children:"Функция принимает один аргумент:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"item: PropertyItemInput"})," — объект входных данных свойства, который будет мутирован в процессе выполнения."]}),`
`]}),`
`,n.jsx(e.h2,{id:"примеры",children:"Примеры"}),`
`,n.jsx(e.h3,{id:"обработка-модификации-прозрачности",children:"Обработка модификации прозрачности"}),`
`,n.jsxs(e.p,{children:["Если токен содержит информацию о модификации цвета, ",n.jsx(e.code,{children:"convectorColor"})," извлечет её:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { convectorColor, PropertyKey } from '@dxtmisha/scripts'

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
`,n.jsx(e.h2,{id:"операции",children:"Операции"}),`
`,n.jsx(e.h3,{id:"механизм-обработки",children:"Механизм обработки"}),`
`,n.jsxs(e.p,{children:["Процесс обработки данных в ",n.jsx(e.code,{children:"convectorColor"})," включает следующие шаги:"]}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Поиск расширений"}),": Функция ищет путь ",n.jsx(e.code,{children:"$extensions['studio.tokens'].modify"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Определение типа"}),": Если тип модификации установлен в ",n.jsx(e.code,{children:"alpha"}),", функция приступает к обработке."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Сохранение данных"}),": Значение прозрачности (",n.jsx(e.code,{children:"value"}),") записывается в свойство объекта ",n.jsx(e.code,{children:"item"})," по ключу ",n.jsx(e.code,{children:"_o"})," (хранится в ",n.jsx(e.code,{children:"PropertyKey.cssColorOpacity"}),"). Если значение не указано, по умолчанию используется ",n.jsx(e.code,{children:"'1'"}),"."]}),`
`]}),`
`,n.jsx(e.h2,{id:"область-применения",children:"Область применения"}),`
`,n.jsxs(e.p,{children:["Функция используется внутри классов обработки свойств (например, ",n.jsx(e.code,{children:"PropertiesStandard"}),") для обогащения данных токенов информацией о прозрачности, полученной из инструментов дизайна."]})]})}function j(o={}){const{wrapper:e}={...r(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(s,{...o})}):s(o)}export{j as default};
