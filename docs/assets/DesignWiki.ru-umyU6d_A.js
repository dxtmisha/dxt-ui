import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-CoCJbYxC.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/scripts/Classes/DesignWiki - Генератор вики-реестра`}),`
`,(0,c.jsx)(n.h1,{id:`класс-designwiki`,children:`Класс DesignWiki`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс `,(0,c.jsx)(n.code,{children:`DesignWiki`}),` обеспечивает базовую инфраструктуру для системы документации проекта. Он автоматизирует создание и инициализацию центрального конфигурационного файла вики, гарантируя, что движок документации (Storybook) имеет стабильный и типизированный реестр для хранения аргументов и метаданных компонентов.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Автоматическая инициализация`}),` — обнаруживает отсутствие конфигурационных файлов вики и создает их по стандартному шаблону.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Типизированный реестр`}),` — генерирует конфигурации с использованием типа `,(0,c.jsx)(n.code,{children:`StorybookArgsToList`}),` для полной интеграции с фреймворком документации.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Проектное именование (Aliasing)`}),` — использует имя дизайн-системы (из `,(0,c.jsx)(n.code,{children:`PropertiesConfig`}),`) для создания уникальных переменных реестра, соответствующих проекту.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Безопасное выполнение`}),` — проверяет существование файла перед записью, предотвращая случайную перезапись существующих конфигураций документации.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsx)(n.p,{children:`Класс не требует параметров для инициализации. Он использует глобальные конфигурации из окружения.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { DesignWiki } from '@dxtmisha/scripts'

const wikiGenerator = new DesignWiki()
wikiGenerator.make()
`})}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(n.h3,{id:`управление`,children:`Управление`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`make(): void`}),` — запускает процесс инициализации вики.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`операции`,children:`Операции`}),`
`,(0,c.jsx)(n.h3,{id:`рабочий-процесс-инициализации-вики`,children:`Рабочий процесс инициализации вики`}),`
`,(0,c.jsxs)(n.p,{children:[`При выполнении `,(0,c.jsx)(n.code,{children:`make()`}),` класс следует внутренней логике:`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Разрешение путей`}),`: использует настроенные пути к директориям (`,(0,c.jsx)(n.code,{children:`UI_DIRS_WIKI`}),`) и имена файлов (`,(0,c.jsx)(n.code,{children:`UI_FILE_NAME_WIKI`}),`) для определения целевого файла конфигурации.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Проверка существования`}),`: опрашивает файловую систему через `,(0,c.jsx)(n.code,{children:`PropertiesFile.is()`}),`, чтобы определить, существует ли уже конфигурационный файл `,(0,c.jsx)(n.code,{children:`.ts`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Генерация реестра`}),`: если файл отсутствует, получает текущее имя дизайн-системы и конструирует шаблон TypeScript:`,`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[`импортирует необходимый тип `,(0,c.jsx)(n.code,{children:`StorybookArgsToList`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[`экспортирует константу с именем `,(0,c.jsx)(n.code,{children:`wiki[DesignName]`}),`.`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Сохранение`}),`: записывает сгенерированный шаблон в файловую систему, гарантируя, что движок документации сможет немедленно начать его импорт.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`интеграция-со-storybook`,children:`Интеграция со Storybook`}),`
`,(0,c.jsxs)(n.p,{children:[`Централизуя создание этого реестра, `,(0,c.jsx)(n.code,{children:`DesignWiki`}),` гарантирует, что у всех разработчиков, работающих над компонентами, есть единое место для документирования пропсов и состояний. Этот реестр выступает в качестве «источника истины» для интерактивной документации, позволяя Storybook динамически отрисовывать элементы управления компонентами на основе сохраненных здесь метаданных.`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};