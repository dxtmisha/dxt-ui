import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/scripts/Classes/PropertiesToDrag - Преобразование переноса свойств`}),`
`,(0,c.jsx)(n.h1,{id:`класс-propertiestodrag`,children:`Класс PropertiesToDrag`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс `,(0,c.jsx)(n.code,{children:`PropertiesToDrag`}),` управляет переносом и перемещением свойств из одной ветки дерева токенов дизайна в другую на основе директивы `,(0,c.jsx)(n.code,{children:`drag`}),`. Он наследует класс `,(0,c.jsx)(n.code,{children:`PropertiesToAbstract`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Правила перемещения`}),` — Переносит элементы свойств в соответствии с путями, определенными в директивах `,(0,c.jsx)(n.code,{children:`drag`}),` (используя относительные сегменты путей `,(0,c.jsx)(n.code,{children:`.`}),` или `,(0,c.jsx)(n.code,{children:`..`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Синтез целей переноса`}),` — Автоматически создает целевые директории и структуры, используя определения `,(0,c.jsx)(n.code,{children:`dragSetting`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Атомарный перенос значений`}),` — Объединяет значения с целевыми элементами, безопасно удаляя их из исходных позиций.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Кэширование результатов`}),` — Сохраняет перемещенное дерево свойств в файл кэша `,(0,c.jsx)(n.code,{children:`007-03-drag`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PropertiesToDrag, PropertiesItems } from '@dxtmisha/scripts'

const transformer = new PropertiesToDrag(items)
transformer.to()
`})}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(n.h3,{id:`операции-переноса`,children:`Операции переноса`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`init(): void`}),` — Переопределяет абстрактный шаг жизненного цикла для запуска чтения и преобразования веток свойств.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getDragSetting(property: PropertyItemsItem): Record<string, PropertyItem> | undefined`}),` — Оценивает конфигурацию `,(0,c.jsx)(n.code,{children:`dragSetting`}),` для получения свойств шаблона, представляющих целевые местоположения.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`read(properties?: PropertyItemsItem): void`}),` — Рекурсивно обходит дерево свойств для поиска и обработки узлов, предназначенных для переноса (`,(0,c.jsx)(n.code,{children:`drag`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`drag(parents: PropertyItemsParent[], item: PropertyItem, setting: Record<string, PropertyItem>): PropertyItem | undefined`}),` — Выполняет поиск пути (`,(0,c.jsx)(n.code,{children:`.`}),` для корня, `,(0,c.jsx)(n.code,{children:`..`}),` для родителя) для определения точного целевого узла.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`toGo(item: PropertyItem, itemDrag: PropertyItem): boolean`}),` — Копирует свойства и значения из исходного элемента в целевой элемент.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};