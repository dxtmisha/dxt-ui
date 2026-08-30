import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/Classes/ComponentCreator - Автоматическое создание компонентов`}),`
`,(0,c.jsx)(t.h1,{id:`класс-componentcreator`,children:`Класс ComponentCreator`}),`
`,(0,c.jsxs)(t.p,{children:[`Класс `,(0,c.jsx)(t.code,{children:`ComponentCreator`}),` — это утилита автоматизации для обнаружения пустых папок внутри директории компонентов (`,(0,c.jsx)(t.code,{children:`src/components/`}),`) и создания их начальной структуры (скаффолдинга). Он сканирует настроенные пути компонентов и инициирует создание полного набора файлов шаблонов через `,(0,c.jsx)(t.code,{children:`ComponentItem`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-возможности`,children:`Ключевые возможности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Автоматическое обнаружение`}),`: Рекурсивно сканирует директорию `,(0,c.jsx)(t.code,{children:`src/components/`}),` с помощью `,(0,c.jsx)(t.code,{children:`PropertiesFile.readDirOnlyRecursive`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Фильтрация пустых папок`}),`: Выбирает только те директории, в которых полностью отсутствуют файлы.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Пакетная генерация`}),`: Инициирует `,(0,c.jsx)(t.code,{children:`ComponentItem`}),` для каждой найденной пустой папки, разворачивая полноценный набор файлов компонента.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Согласованность архитектуры`}),`: Гарантирует единообразие структуры всех новых компонентов в дизайн-системе.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(t.p,{children:[`Создайте новый экземпляр `,(0,c.jsx)(t.code,{children:`ComponentCreator`}),`. Он автоматически использует стандартную директорию компонентов `,(0,c.jsx)(t.code,{children:`src/components/`}),`:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { ComponentCreator } from '@dxtmisha/scripts'

const creator = new ComponentCreator()
creator.make()
`})}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`make(): void`}),` — основной метод оркестрации:`,`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Вызывает `,(0,c.jsx)(t.code,{children:`getDirs()`}),` для получения списка пустых директорий.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Для каждого найденного пути создает экземпляр `,(0,c.jsx)(t.code,{children:`ComponentItem(path)`}),` и вызывает метод `,(0,c.jsx)(t.code,{children:`.make()`}),`.`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`protected getDirs(): string[]`}),` — сканирует `,(0,c.jsx)(t.code,{children:`UI_DIRS_COMPONENTS`}),` (`,(0,c.jsx)(t.code,{children:`src/components/`}),`) через `,(0,c.jsx)(t.code,{children:`PropertiesFile.readDirOnlyRecursive`}),` и возвращает массив путей к папкам, для которых `,(0,c.jsx)(t.code,{children:`PropertiesFile.readDir(getComponentPaths(path)).length === 0`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`пример-использования`,children:`Пример использования`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { ComponentCreator } from '@dxtmisha/scripts'

// Сканирование и создание шаблонов во всех пустых папках компонентов
new ComponentCreator().make()
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};