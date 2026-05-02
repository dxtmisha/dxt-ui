import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/styles/ru/Rules`}),`
`,(0,c.jsx)(n.h1,{id:`rules`,children:`Rules`}),`
`,(0,c.jsx)(n.p,{children:`Набор SCSS функций для работы с мапами, селекторами и строками с поддержкой CSS Custom Properties.`}),`
`,(0,c.jsx)(n.h2,{id:`функции-валидации`,children:`Функции валидации`}),`
`,(0,c.jsx)(n.h3,{id:`iscustomvar`,children:(0,c.jsx)(n.code,{children:`isCustomVar`})}),`
`,(0,c.jsx)(n.p,{children:`Проверяет, является ли значение CSS custom property.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$value`}),` — значение для проверки`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`Boolean`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`@if isCustomVar(var(--color)) { } // true
@if isCustomVar(#ff0000) { } // false
`})}),`
`,(0,c.jsx)(n.h2,{id:`функции-для-работы-с-мапами`,children:`Функции для работы с мапами`}),`
`,(0,c.jsx)(n.h3,{id:`getmapitem`,children:(0,c.jsx)(n.code,{children:`getMapItem`})}),`
`,(0,c.jsx)(n.p,{children:`Возвращает значение из вложенной мапы по пути ключей.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$map`}),` — входная мапа`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$index`}),` — ключ или список ключей для обхода`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$default: null`}),` — значение по умолчанию, если не найдено`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`*`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`$value: getMapItem($map, 'key');
$nested: getMapItem($map, ('level1', 'level2'));
`})}),`
`,(0,c.jsx)(n.h3,{id:`getmapbyindex`,children:(0,c.jsx)(n.code,{children:`getMapByIndex`})}),`
`,(0,c.jsx)(n.p,{children:`Возвращает значение из мапы по одному ключу.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$map`}),` — входная мапа`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$index`}),` — ключ`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$default: null`}),` — значение по умолчанию, если не найдено`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`*`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`$value: getMapByIndex($map, 'key', 'default');
`})}),`
`,(0,c.jsx)(n.h3,{id:`setmapitem`,children:(0,c.jsx)(n.code,{children:`setMapItem`})}),`
`,(0,c.jsx)(n.p,{children:`Обновляет значение в мапе по ключу.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$map`}),` — входная мапа`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$index`}),` — ключ`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$value`}),` — значение для сохранения`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`Map`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`$updated: setMapItem($map, 'key', 'new-value');
`})}),`
`,(0,c.jsx)(n.h2,{id:`функции-селекторов`,children:`Функции селекторов`}),`
`,(0,c.jsx)(n.h3,{id:`getfirstselector`,children:(0,c.jsx)(n.code,{children:`getFirstSelector`})}),`
`,(0,c.jsx)(n.p,{children:`Возвращает название первого селектора.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$selector: &`}),` — селектор (по умолчанию текущий селектор)`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`String`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`$name: getFirstSelector(); // возвращает имя первого селектора
`})}),`
`,(0,c.jsx)(n.h2,{id:`функции-для-работы-со-строками`,children:`Функции для работы со строками`}),`
`,(0,c.jsx)(n.h3,{id:`strtolist`,children:(0,c.jsx)(n.code,{children:`strToList`})}),`
`,(0,c.jsx)(n.p,{children:`Разбивает строку на список по разделителю.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$value`}),` — входная строка`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$separator: '.'`}),` — разделитель`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`List`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`$list: strToList('class.name', '.'); // ('class', 'name')
`})}),`
`,(0,c.jsx)(n.h3,{id:`strreplace`,children:(0,c.jsx)(n.code,{children:`strReplace`})}),`
`,(0,c.jsx)(n.p,{children:`Заменяет все вхождения строки поиска на строку замены.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$value`}),` — строка, в которой производится поиск`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$pattern`}),` — искомое значение`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$replacement`}),` — значение замены`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`String`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`$result: strReplace('hello-world', '-', '_'); // 'hello_world'
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};