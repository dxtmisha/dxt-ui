import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-CoCJbYxC.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/scripts/Classes/Styles - Оркестратор стилей`}),`
`,(0,c.jsx)(n.h1,{id:`класс-styles`,children:`Класс Styles`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс `,(0,c.jsx)(n.code,{children:`Styles`}),` является центральным оркестратором для создания всех системных файлов, связанных со стилями, внутри дизайн-системы. Он управляет инициализацией корневых переменных, базовых классов, SCSS-свойств и специфичных для дизайна настроек стилей.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-возможности`,children:`Ключевые возможности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Системная генерация`}),` — Координирует создание файлов `,(0,c.jsx)(n.code,{children:`vars`}),`, `,(0,c.jsx)(n.code,{children:`classes`}),`, `,(0,c.jsx)(n.code,{children:`properties`}),` и `,(0,c.jsx)(n.code,{children:`list`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Инициализация корневых переменных`}),` — Использует `,(0,c.jsx)(n.code,{children:`StylesRoot`}),` для создания глобальных CSS-переменных.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Управление базовыми классами`}),` — Использует `,(0,c.jsx)(n.code,{children:`StylesClasses`}),` для генерации стандартных утилитарных классов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Настройка с учетом дизайна`}),` — Автоматически создает файлы `,(0,c.jsx)(n.code,{children:`main`}),`, `,(0,c.jsx)(n.code,{children:`basic`}),` и `,(0,c.jsx)(n.code,{children:`style`}),`, адаптированные для конкретных дизайнов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Интеграция с SCSS`}),` — Преобразует данные о свойствах в структуры, совместимые с SCSS, используя `,(0,c.jsx)(n.code,{children:`PropertiesScss`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Автоматическая чистка`}),` — Отфильтровывает лишние данные, чтобы файлы списков оставались чистыми.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(n.p,{children:[`Инициализируйте оркестратор `,(0,c.jsx)(n.code,{children:`Styles`}),`. Он внутренне управляет экземпляром `,(0,c.jsx)(n.code,{children:`Properties`}),` для получения данных дизайна.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { Styles } from '@dxtmisha/scripts'

const orchestrator = new Styles()
orchestrator.make()
`})}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(n.h3,{id:`управление`,children:`Управление`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`make(): this`}),` — Основная точка входа. Запускает полный цикл генерации для всех дизайнов.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`внутренняя-инициализация`,children:`Внутренняя инициализация`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`initRoot(items: PropertiesItems): this`}),` — Генерирует глобальные переменные и записывает их в файл `,(0,c.jsx)(n.code,{children:`vars`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`initClasses(items: PropertiesItems): this`}),` — Генерирует базовые классы и отдельные файлы классов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`initProperties(items: PropertiesItems): this`}),` — Генерирует структуры свойств SCSS.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`initList(items: PropertiesItems): this`}),` — Генерирует очищенный список свойств для ссылок.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`initBasic(design: string): this`}),` — Генерирует базовые файлы подключения и стилевые привязки для конкретного дизайна.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};