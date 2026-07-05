import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/styles/rules - Вспомогательные функции`}),`
`,(0,c.jsx)(n.h1,{id:`вспомогательные-функции-rules`,children:`Вспомогательные функции (Rules)`}),`
`,(0,c.jsxs)(n.p,{children:[`Библиотека `,(0,c.jsx)(n.code,{children:`@dxtmisha/styles`}),` предоставляет низкоуровневые вспомогательные функции для проверки типов данных, обхода древовидных структур карт (Sass map), манипуляций со строками и извлечения селекторов.`]}),`
`,(0,c.jsx)(n.h2,{id:`функции`,children:`Функции`}),`
`,(0,c.jsx)(n.h3,{id:`свойства-css-и-селекторы`,children:`Свойства CSS и селекторы`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isCustomVar($value): Boolean`}),` — Проверяет, отформатировано ли значение как CSS Custom Property (например, начинается с `,(0,c.jsx)(n.code,{children:`var(`}),` и заканчивается на `,(0,c.jsx)(n.code,{children:`)`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getFirstSelector($selector: &): String`}),` — Извлекает имя первого простого селектора из текущего контекста вложенности.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`работа-с-картами-sass-maps`,children:`Работа с картами (Sass Maps)`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getMapItem($map, $index, $default: null): Any`}),` — Рекурсивно извлекает значение из древовидной структуры карт по списку ключей или по одному ключу. Возвращает `,(0,c.jsx)(n.code,{children:`$default`}),`, если значение не найдено.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getMapByIndex($map, $index, $default: null): Any`}),` — Напрямую извлекает значение из карты по ключу, возвращая `,(0,c.jsx)(n.code,{children:`$default`}),`, если ключ отсутствует.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setMapItem($map, $index, $value): Map`}),` — Добавляет или обновляет пару ключ-значение в карте и возвращает обновленный объект.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`обработка-строк`,children:`Обработка строк`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`strToList($value, $separator: '.'): List`}),` — Разбивает исходную строку на список подстрок с использованием указанного разделителя.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`strReplace($value, $pattern, $replacement): String`}),` — Рекурсивно заменяет все вхождения подстроки поиска на указанную строку замены.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};