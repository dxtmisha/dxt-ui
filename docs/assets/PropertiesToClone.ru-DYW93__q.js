import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/Classes/PropertiesToClone - Преобразование наследования параметров`}),`
`,(0,c.jsx)(t.h1,{id:`класс-propertiestoclone`,children:`Класс PropertiesToClone`}),`
`,(0,c.jsxs)(t.p,{children:[`Класс `,(0,c.jsx)(t.code,{children:`PropertiesToClone`}),` дублирует параметры и структуры конфигурации из родительских элементов в соответствующие дочерние свойства. Он наследует класс `,(0,c.jsx)(t.code,{children:`PropertiesToAbstract`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Каскадная конфигурация`}),` — Клонирует настройки, помеченные флагом `,(0,c.jsx)(t.code,{children:`settingClone`}),`, вниз по дереву свойств.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Глубокий обход`}),` — Рекурсивно сканирует и наследует атрибуты для похожих свойств у потомков.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Игнорирование типов`}),` — Автоматически игнорирует типы переменных и свойств при клонировании во избежание перезаписи значений.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Кэширование результатов`}),` — Сохраняет состояние обработанных свойств в файл кэша `,(0,c.jsx)(t.code,{children:`007-01-clone`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { PropertiesToClone, PropertiesItems } from '@dxtmisha/scripts'

const transformer = new PropertiesToClone(items)
transformer.to()
`})}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`операции-клонирования`,children:`Операции клонирования`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`init(): void`}),` — Переопределяет абстрактный шаг жизненного цикла для обхода всех свойств и применения клонирования.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`findItem(parent: PropertyItem, name: string): PropertyItem[]`}),` — Рекурсивно ищет похожие записи свойств на уровнях потомков родительского элемента.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`update(original: PropertyItem, properties: PropertyItem[]): void`}),` — Выполняет внедрение атрибутов, объединяя свойства оригинального элемента без перезаписи существующих данных.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};