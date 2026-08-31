import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/Classes/DesignWiki - Генератор вики-реестра`}),`
`,(0,c.jsx)(t.h1,{id:`класс-designwiki`,children:`Класс DesignWiki`}),`
`,(0,c.jsxs)(t.p,{children:[`Класс `,(0,c.jsx)(t.code,{children:`DesignWiki`}),` обеспечивает базовую инфраструктуру для системы документации проекта. Он автоматизирует создание и инициализацию центрального конфигурационного файла вики, гарантируя, что движок документации (Storybook) имеет стабильный и типизированный реестр для хранения аргументов и метаданных компонентов.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Автоматическая инициализация`}),` — обнаруживает отсутствие конфигурационных файлов вики и создает их по стандартному шаблону.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Типизированный реестр`}),` — генерирует конфигурации с использованием типа `,(0,c.jsx)(t.code,{children:`StorybookArgsToList`}),` для полной интеграции с фреймворком документации.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Проектное именование (Aliasing)`}),` — использует имя дизайн-системы (из `,(0,c.jsx)(t.code,{children:`PropertiesConfig`}),`) для создания уникальных переменных реестра, соответствующих проекту.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Безопасное выполнение`}),` — проверяет существование файла перед записью, предотвращая случайную перезапись существующих конфигураций документации.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsx)(t.p,{children:`Класс не требует параметров для инициализации. Он использует глобальные конфигурации из окружения.`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { DesignWiki } from '@dxtmisha/scripts'

const wikiGenerator = new DesignWiki()
wikiGenerator.make()
`})}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`управление`,children:`Управление`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`make(): void`}),` — запускает процесс инициализации вики.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`операции`,children:`Операции`}),`
`,(0,c.jsx)(t.h3,{id:`рабочий-процесс-инициализации-вики`,children:`Рабочий процесс инициализации вики`}),`
`,(0,c.jsxs)(t.p,{children:[`При выполнении `,(0,c.jsx)(t.code,{children:`make()`}),` класс следует внутренней логике:`]}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Разрешение путей`}),`: использует настроенные пути к директориям (`,(0,c.jsx)(t.code,{children:`UI_DIRS_WIKI`}),`) и имена файлов (`,(0,c.jsx)(t.code,{children:`UI_FILE_NAME_WIKI`}),`) для определения целевого файла конфигурации.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Проверка существования`}),`: опрашивает файловую систему через `,(0,c.jsx)(t.code,{children:`PropertiesFile.is()`}),`, чтобы определить, существует ли уже конфигурационный файл `,(0,c.jsx)(t.code,{children:`.ts`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Генерация реестра`}),`: если файл отсутствует, получает текущее имя дизайн-системы и конструирует шаблон TypeScript:`,`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`импортирует необходимый тип `,(0,c.jsx)(t.code,{children:`StorybookArgsToList`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`экспортирует константу с именем `,(0,c.jsx)(t.code,{children:`wiki[DesignName]`}),`.`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Сохранение`}),`: записывает сгенерированный шаблон в файловую систему, гарантируя, что движок документации сможет немедленно начать его импорт.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`интеграция-со-storybook`,children:`Интеграция со Storybook`}),`
`,(0,c.jsxs)(t.p,{children:[`Централизуя создание этого реестра, `,(0,c.jsx)(t.code,{children:`DesignWiki`}),` гарантирует, что у всех разработчиков, работающих над компонентами, есть единое место для документирования пропсов и состояний. Этот реестр выступает в качестве «источника истины» для интерактивной документации, позволяя Storybook динамически отрисовывать элементы управления компонентами на основе сохраненных здесь метаданных.`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};