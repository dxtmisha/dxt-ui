import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/Classes/PropertiesToAnimate - Преобразование анимации`}),`
`,(0,c.jsx)(t.h1,{id:`класс-propertiestoanimate`,children:`Класс PropertiesToAnimate`}),`
`,(0,c.jsxs)(t.p,{children:[`Класс `,(0,c.jsx)(t.code,{children:`PropertiesToAnimate`}),` представляет собой конкретный обработчик для трансформации конфигураций анимации. Он наследует класс `,(0,c.jsx)(t.code,{children:`PropertiesToAbstract`}),` и преобразует кадры (frames) и ключевые кадры анимации в стандартизированные, кэшируемые структуры.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Идентификация кадров`}),` — Автоматически находит свойства типа `,(0,c.jsx)(t.code,{children:`PropertyType.animate`}),` и сопоставляет их ключевые кадры.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Иерархическое именование`}),` — Комбинирует сегменты родительских путей для генерации уникальных описательных имен дочерних элементов анимации.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Кэширование результатов`}),` — Сохраняет обработанные свойства в файл кэша `,(0,c.jsx)(t.code,{children:`044-animate`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(t.p,{children:[`Создайте экземпляр `,(0,c.jsx)(t.code,{children:`PropertiesToAnimate`}),`, передав коллекцию `,(0,c.jsx)(t.code,{children:`PropertiesItems`}),`, а затем вызовите метод запуска:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { PropertiesToAnimate, PropertiesItems } from '@dxtmisha/scripts'

const transformer = new PropertiesToAnimate(items)
transformer.to() // Запускает init() и сохраняет кэш
`})}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`жизненный-цикл-и-вспомогательные-методы`,children:`Жизненный цикл и вспомогательные методы`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`init(): void`}),` — Переопределяет абстрактный шаг жизненного цикла для разрешения групп анимационных кадров и переопределения свойств кадров.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getName(name: string, item: PropertyItem, parents: PropertyItemsItem['parents']): string`}),` — Генерирует уникальное имя через дефис на основе предков пути, если у элемента не установлен флаг `,(0,c.jsx)(t.code,{children:`fullName`}),`.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};