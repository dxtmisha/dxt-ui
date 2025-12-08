import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as r}from"./index-Zkkrlp1B.js";import{M as c}from"./blocks-DcNZdanM.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BlCC38XJ.js";function l(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"@dxtmisha/styles/ru/Rules"}),`
`,e.jsx(n.h1,{id:"rules",children:"Rules"}),`
`,e.jsx(n.p,{children:"Набор SCSS функций для работы с мапами, селекторами и строками с поддержкой CSS Custom Properties."}),`
`,e.jsx(n.h2,{id:"функции-валидации",children:"Функции валидации"}),`
`,e.jsx(n.h3,{id:"iscustomvar",children:e.jsx(n.code,{children:"isCustomVar"})}),`
`,e.jsx(n.p,{children:"Проверяет, является ли значение CSS custom property."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$value"})," — значение для проверки"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"Boolean"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`@if isCustomVar(var(--color)) { } // true
@if isCustomVar(#ff0000) { } // false
`})}),`
`,e.jsx(n.h2,{id:"функции-для-работы-с-мапами",children:"Функции для работы с мапами"}),`
`,e.jsx(n.h3,{id:"getmapitem",children:e.jsx(n.code,{children:"getMapItem"})}),`
`,e.jsx(n.p,{children:"Возвращает значение из вложенной мапы по пути ключей."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$map"})," — входная мапа"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$index"})," — ключ или список ключей для обхода"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$default: null"})," — значение по умолчанию, если не найдено"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"*"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`$value: getMapItem($map, 'key');
$nested: getMapItem($map, ('level1', 'level2'));
`})}),`
`,e.jsx(n.h3,{id:"getmapbyindex",children:e.jsx(n.code,{children:"getMapByIndex"})}),`
`,e.jsx(n.p,{children:"Возвращает значение из мапы по одному ключу."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$map"})," — входная мапа"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$index"})," — ключ"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$default: null"})," — значение по умолчанию, если не найдено"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"*"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`$value: getMapByIndex($map, 'key', 'default');
`})}),`
`,e.jsx(n.h3,{id:"setmapitem",children:e.jsx(n.code,{children:"setMapItem"})}),`
`,e.jsx(n.p,{children:"Обновляет значение в мапе по ключу."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$map"})," — входная мапа"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$index"})," — ключ"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$value"})," — значение для сохранения"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"Map"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`$updated: setMapItem($map, 'key', 'new-value');
`})}),`
`,e.jsx(n.h2,{id:"функции-селекторов",children:"Функции селекторов"}),`
`,e.jsx(n.h3,{id:"getfirstselector",children:e.jsx(n.code,{children:"getFirstSelector"})}),`
`,e.jsx(n.p,{children:"Возвращает название первого селектора."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$selector: &"})," — селектор (по умолчанию текущий селектор)"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"String"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`$name: getFirstSelector(); // возвращает имя первого селектора
`})}),`
`,e.jsx(n.h2,{id:"функции-для-работы-со-строками",children:"Функции для работы со строками"}),`
`,e.jsx(n.h3,{id:"strtolist",children:e.jsx(n.code,{children:"strToList"})}),`
`,e.jsx(n.p,{children:"Разбивает строку на список по разделителю."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$value"})," — входная строка"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$separator: '.'"})," — разделитель"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"List"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`$list: strToList('class.name', '.'); // ('class', 'name')
`})}),`
`,e.jsx(n.h3,{id:"strreplace",children:e.jsx(n.code,{children:"strReplace"})}),`
`,e.jsx(n.p,{children:"Заменяет все вхождения строки поиска на строку замены."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$value"})," — строка, в которой производится поиск"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$pattern"})," — искомое значение"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$replacement"})," — значение замены"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"String"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`$result: strReplace('hello-world', '-', '_'); // 'hello_world'
`})})]})}function o(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(l,{...s})}):l(s)}export{o as default};
