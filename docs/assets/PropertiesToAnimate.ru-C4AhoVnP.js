import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/scripts/Classes/PropertiesToAnimate - Преобразование анимации`}),`
`,(0,c.jsx)(n.h1,{id:`класс-propertiestoanimate`,children:`Класс PropertiesToAnimate`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс `,(0,c.jsx)(n.code,{children:`PropertiesToAnimate`}),` представляет собой конкретный обработчик для трансформации конфигураций анимации. Он наследует класс `,(0,c.jsx)(n.code,{children:`PropertiesToAbstract`}),` и преобразует кадры (frames) и ключевые кадры анимации в стандартизированные, кэшируемые структуры.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Идентификация кадров`}),` — Автоматически находит свойства типа `,(0,c.jsx)(n.code,{children:`PropertyType.animate`}),` и сопоставляет их ключевые кадры.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Иерархическое именование`}),` — Комбинирует сегменты родительских путей для генерации уникальных описательных имен дочерних элементов анимации.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Кэширование результатов`}),` — Сохраняет обработанные свойства в файл кэша `,(0,c.jsx)(n.code,{children:`044-animate`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(n.p,{children:[`Создайте экземпляр `,(0,c.jsx)(n.code,{children:`PropertiesToAnimate`}),`, передав коллекцию `,(0,c.jsx)(n.code,{children:`PropertiesItems`}),`, а затем вызовите метод запуска:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PropertiesToAnimate, PropertiesItems } from '@dxtmisha/scripts'

const transformer = new PropertiesToAnimate(items)
transformer.to() // Запускает init() и сохраняет кэш
`})}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(n.h3,{id:`жизненный-цикл-и-вспомогательные-методы`,children:`Жизненный цикл и вспомогательные методы`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`init(): void`}),` — Переопределяет абстрактный шаг жизненного цикла для разрешения групп анимационных кадров и переопределения свойств кадров.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getName(name: string, item: PropertyItem, parents: PropertyItemsItem['parents']): string`}),` — Генерирует уникальное имя через дефис на основе предков пути, если у элемента не установлен флаг `,(0,c.jsx)(n.code,{children:`fullName`}),`.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};