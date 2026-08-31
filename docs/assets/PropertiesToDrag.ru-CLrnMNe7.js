import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/Classes/PropertiesToDrag - Преобразование переноса свойств`}),`
`,(0,c.jsx)(t.h1,{id:`класс-propertiestodrag`,children:`Класс PropertiesToDrag`}),`
`,(0,c.jsxs)(t.p,{children:[`Класс `,(0,c.jsx)(t.code,{children:`PropertiesToDrag`}),` управляет переносом и перемещением свойств из одной ветки дерева токенов дизайна в другую на основе директивы `,(0,c.jsx)(t.code,{children:`drag`}),`. Он наследует класс `,(0,c.jsx)(t.code,{children:`PropertiesToAbstract`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Правила перемещения`}),` — Переносит элементы свойств в соответствии с путями, определенными в директивах `,(0,c.jsx)(t.code,{children:`drag`}),` (используя относительные сегменты путей `,(0,c.jsx)(t.code,{children:`.`}),` или `,(0,c.jsx)(t.code,{children:`..`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Синтез целей переноса`}),` — Автоматически создает целевые директории и структуры, используя определения `,(0,c.jsx)(t.code,{children:`dragSetting`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Атомарный перенос значений`}),` — Объединяет значения с целевыми элементами, безопасно удаляя их из исходных позиций.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Кэширование результатов`}),` — Сохраняет перемещенное дерево свойств в файл кэша `,(0,c.jsx)(t.code,{children:`007-03-drag`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { PropertiesToDrag, PropertiesItems } from '@dxtmisha/scripts'

const transformer = new PropertiesToDrag(items)
transformer.to()
`})}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`операции-переноса`,children:`Операции переноса`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`init(): void`}),` — Переопределяет абстрактный шаг жизненного цикла для запуска чтения и преобразования веток свойств.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getDragSetting(property: PropertyItemsItem): Record<string, PropertyItem> | undefined`}),` — Оценивает конфигурацию `,(0,c.jsx)(t.code,{children:`dragSetting`}),` для получения свойств шаблона, представляющих целевые местоположения.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`read(properties?: PropertyItemsItem): void`}),` — Рекурсивно обходит дерево свойств для поиска и обработки узлов, предназначенных для переноса (`,(0,c.jsx)(t.code,{children:`drag`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`drag(parents: PropertyItemsParent[], item: PropertyItem, setting: Record<string, PropertyItem>): PropertyItem | undefined`}),` — Выполняет поиск пути (`,(0,c.jsx)(t.code,{children:`.`}),` для корня, `,(0,c.jsx)(t.code,{children:`..`}),` для родителя) для определения точного целевого узла.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`toGo(item: PropertyItem, itemDrag: PropertyItem): boolean`}),` — Копирует свойства и значения из исходного элемента в целевой элемент.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};