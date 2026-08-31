import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/Classes/Styles - Оркестратор стилей`}),`
`,(0,c.jsx)(t.h1,{id:`класс-styles`,children:`Класс Styles`}),`
`,(0,c.jsxs)(t.p,{children:[`Класс `,(0,c.jsx)(t.code,{children:`Styles`}),` является центральным оркестратором для создания всех системных файлов, связанных со стилями, внутри дизайн-системы. Он управляет инициализацией корневых переменных, базовых классов, SCSS-свойств и специфичных для дизайна настроек стилей.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-возможности`,children:`Ключевые возможности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Системная генерация`}),` — Координирует создание файлов `,(0,c.jsx)(t.code,{children:`vars`}),`, `,(0,c.jsx)(t.code,{children:`classes`}),`, `,(0,c.jsx)(t.code,{children:`properties`}),` и `,(0,c.jsx)(t.code,{children:`list`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Инициализация корневых переменных`}),` — Использует `,(0,c.jsx)(t.code,{children:`StylesRoot`}),` для создания глобальных CSS-переменных.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Управление базовыми классами`}),` — Использует `,(0,c.jsx)(t.code,{children:`StylesClasses`}),` для генерации стандартных утилитарных классов.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Настройка с учетом дизайна`}),` — Автоматически создает файлы `,(0,c.jsx)(t.code,{children:`main`}),`, `,(0,c.jsx)(t.code,{children:`basic`}),` и `,(0,c.jsx)(t.code,{children:`style`}),`, адаптированные для конкретных дизайнов.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Интеграция с SCSS`}),` — Преобразует данные о свойствах в структуры, совместимые с SCSS, используя `,(0,c.jsx)(t.code,{children:`PropertiesScss`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Автоматическая чистка`}),` — Отфильтровывает лишние данные, чтобы файлы списков оставались чистыми.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(t.p,{children:[`Инициализируйте оркестратор `,(0,c.jsx)(t.code,{children:`Styles`}),`. Он внутренне управляет экземпляром `,(0,c.jsx)(t.code,{children:`Properties`}),` для получения данных дизайна.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { Styles } from '@dxtmisha/scripts'

const orchestrator = new Styles()
orchestrator.make()
`})}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`управление`,children:`Управление`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`make(): this`}),` — Основная точка входа. Запускает полный цикл генерации для всех дизайнов.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`внутренняя-инициализация`,children:`Внутренняя инициализация`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`initRoot(items: PropertiesItems): this`}),` — Генерирует глобальные переменные и записывает их в файл `,(0,c.jsx)(t.code,{children:`vars`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`initClasses(items: PropertiesItems): this`}),` — Генерирует базовые классы и отдельные файлы классов.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`initProperties(items: PropertiesItems): this`}),` — Генерирует структуры свойств SCSS.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`initList(items: PropertiesItems): this`}),` — Генерирует очищенный список свойств для ссылок.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`initBasic(design: string): this`}),` — Генерирует базовые файлы подключения и стилевые привязки для конкретного дизайна.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};