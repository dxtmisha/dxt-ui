import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/Classes/PropertiesToSub - Разрешение вложенных выражений интерполяции значений`}),`
`,(0,c.jsx)(t.h1,{id:`класс-propertiestosub`,children:`Класс PropertiesToSub`}),`
`,(0,c.jsxs)(t.p,{children:[`Класс `,(0,c.jsx)(t.code,{children:`PropertiesToSub`}),` рекурсивно разрешает вложенные выражения интерполяции в фигурных скобках (такие как `,(0,c.jsx)(t.code,{children:`calc({ref.width} * 2)`}),`) внутри значений токенов. Он наследует класс `,(0,c.jsx)(t.code,{children:`PropertiesToAbstract`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Разрешение вложенных значений`}),` — Рекурсивно разрешает вложенные фигурные скобки, содержащие ссылки на переменные, внутри более крупных строковых значений.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Защита от циклов`}),` — Ограничивает операции поиска до 24 итераций во избежание бесконечных циклов в циклических определениях.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Очистка фигурных скобок`}),` — Автоматически удаляет внешние фигурные скобки, если для токена установлено значение `,(0,c.jsx)(t.code,{children:`fullValue`}),` равное true.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Кэширование результатов`}),` — Сохраняет разрешенные подзначения в файл кэша `,(0,c.jsx)(t.code,{children:`006-sub`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { PropertiesToSub, PropertiesItems } from '@dxtmisha/scripts'

const transformer = new PropertiesToSub(items)
transformer.to()
`})}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`операции-разрешения`,children:`Операции разрешения`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`init(): void`}),` — Переопределяет абстрактный шаг жизненного цикла для поиска и разрешения всех свойств с подзначениями.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`is(value: PropertyItem['value']): boolean`}),` — Возвращает true, если значение токена содержит вложенный шаблон фигурных скобок.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getValue(design: string, component: string, value: string): string`}),` — Итеративно разрешает маркеры интерполяции фигурных скобок, используя глобальный реестр элементов свойств.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`read({ design, component, item }: PropertyItemsItem): void`}),` — Разрешает подзначения для одного элемента свойства и удаляет фигурные скобки, если установлен флаг `,(0,c.jsx)(t.code,{children:`fullValue`}),`.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};