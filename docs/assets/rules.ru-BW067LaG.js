import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/styles/rules - Вспомогательные функции`}),`
`,(0,c.jsx)(t.h1,{id:`вспомогательные-функции-rules`,children:`Вспомогательные функции (Rules)`}),`
`,(0,c.jsxs)(t.p,{children:[`Библиотека `,(0,c.jsx)(t.code,{children:`@dxtmisha/styles`}),` предоставляет низкоуровневые вспомогательные функции для проверки типов данных, обхода древовидных структур карт (Sass map), манипуляций со строками и извлечения селекторов.`]}),`
`,(0,c.jsx)(t.h2,{id:`функции`,children:`Функции`}),`
`,(0,c.jsx)(t.h3,{id:`свойства-css-и-селекторы`,children:`Свойства CSS и селекторы`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isCustomVar($value): Boolean`}),` — Проверяет, отформатировано ли значение как CSS Custom Property (например, начинается с `,(0,c.jsx)(t.code,{children:`var(`}),` и заканчивается на `,(0,c.jsx)(t.code,{children:`)`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getFirstSelector($selector: &): String`}),` — Извлекает имя первого простого селектора из текущего контекста вложенности.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`работа-с-картами-sass-maps`,children:`Работа с картами (Sass Maps)`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getMapItem($map, $index, $default: null): Any`}),` — Рекурсивно извлекает значение из древовидной структуры карт по списку ключей или по одному ключу. Возвращает `,(0,c.jsx)(t.code,{children:`$default`}),`, если значение не найдено.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getMapByIndex($map, $index, $default: null): Any`}),` — Напрямую извлекает значение из карты по ключу, возвращая `,(0,c.jsx)(t.code,{children:`$default`}),`, если ключ отсутствует.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setMapItem($map, $index, $value): Map`}),` — Добавляет или обновляет пару ключ-значение в карте и возвращает обновленный объект.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`обработка-строк`,children:`Обработка строк`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`strToList($value, $separator: '.'): List`}),` — Разбивает исходную строку на список подстрок с использованием указанного разделителя.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`strReplace($value, $pattern, $replacement): String`}),` — Рекурсивно заменяет все вхождения подстроки поиска на указанную строку замены.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};